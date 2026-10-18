const CACHE_NAME = "high-table-shell-v11";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./i18n.js",
  "./data-sources.js",
  "./data-companies.js",
  "./data-roles.js",
  "./data-resources.js",
  "./data-prompts.js",
  "./site.webmanifest",
  "./assets/high-table-background.jpg",
  "./assets/high-table-logo.jpg",
  "./assets/high-table-mark.png",
  "./assets/apple-touch-icon.png",
  "./assets/icons/favicon-rounded.ico",
  "./assets/icons/favicon-rounded-32.png",
  "./assets/icons/favicon-rounded-64.png",
  "./assets/icons/icon-rounded-192.png",
  "./assets/icons/icon-rounded-256.png",
  "./assets/icons/icon-rounded-384.png",
  "./assets/icons/icon-rounded-512.png",
  "./assets/icons/icon-maskable-512.png",
  "./assets/fonts/syne-700.woff2",
  "./assets/fonts/syne-800.woff2",
  "./assets/fonts/bodoni-moda-600-italic.woff2",
  "./assets/fonts/noto-serif-sc-display-900.woff2"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          return (
            (await caches.match(request)) ||
            (await caches.match("./index.html")) ||
            Response.error()
          );
        })
    );
    return;
  }

  if (
    request.destination === "script" ||
    request.destination === "style" ||
    url.pathname.endsWith(".webmanifest")
  ) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached || Response.error());

      return cached || network;
    })
  );
});
