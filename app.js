import { UI, LANGUAGES } from "./i18n.js";
import { COMPANIES, JOB_PORTALS, getCompany, getJobPortal } from "./data-companies.js";
import {
  ROLES,
  TRACKS,
  getRole,
  getRolesForCompany,
  getTrack
} from "./data-roles.js";
import { SOURCES, SOURCE_GROUPS } from "./data-sources.js";
import {
  RESOURCES,
  RESOURCE_CATEGORIES,
  getResource
} from "./data-resources.js";
import {
  PROMPTS,
  PROMPT_CATEGORIES,
  getPrompt
} from "./data-prompts.js";

const STORAGE = {
  lang: "ht.lang.v1",
  saved: "ht.saved.v1",
  history: "ht.history.v1"
};

const TYPE_LABELS = {
  en: { read: "Field note", template: "Template", dataset: "Dataset" },
  zh: { read: "深度笔记", template: "模板", dataset: "数据集" },
  fr: { read: "Note de terrain", template: "Modèle", dataset: "Jeu de données" }
};

const DIFFICULTY_LABELS = {
  en: { core: "Core", stretch: "Stretch" },
  zh: { core: "核心", stretch: "挑战" },
  fr: { core: "Cœur", stretch: "Stretch" }
};

const app = document.getElementById("app");
const modalRoot = document.getElementById("modal-root");
const toastRoot = document.getElementById("toast-root");
const confettiRoot = document.getElementById("confetti-root");

function safeParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function routeFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean);
  return {
    name: parts[0] || "home",
    id: parts[1] || null
  };
}

const state = {
  lang: localStorage.getItem(STORAGE.lang) || "en",
  route: routeFromHash(),
  saved: safeParse(localStorage.getItem(STORAGE.saved), { roles: [], resources: [] }),
  history: safeParse(localStorage.getItem(STORAGE.history), []),
  roleFilters: {
    q: "",
    company: "all",
    region: "all",
    track: "all",
    level: "all",
    sort: "default",
    savedOnly: false
  },
  roleView: "grid",
  intelCategory: "all",
  simSetup: {
    mode: "mixed",
    length: 4,
    difficulty: "all",
    company: "all"
  },
  session: null,
  lastResult: null,
  timerId: null,
  modalOpen: false,
  pendingFocus: null,
  installPrompt: null
};

if (!["en", "zh", "fr"].includes(state.lang)) state.lang = "en";
if (!Array.isArray(state.saved.roles)) state.saved.roles = [];
if (!Array.isArray(state.saved.resources)) state.saved.resources = [];
if (!Array.isArray(state.history)) state.history = [];

function t(key, vars = {}) {
  const source = UI[state.lang] || UI.en;
  let value = key.split(".").reduce((acc, part) => acc?.[part], source);
  if (value === undefined) {
    value = key.split(".").reduce((acc, part) => acc?.[part], UI.en);
  }
  if (typeof value !== "string") return key;
  return Object.entries(vars).reduce(
    (text, [name, replacement]) => text.replaceAll(`{${name}}`, String(replacement)),
    value
  );
}

function tr(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[state.lang] || value.en || "";
}

function localeTag() {
  return state.lang === "zh" ? "zh-CN" : state.lang === "fr" ? "fr-FR" : "en-US";
}

function formatDate(value, options = { month: "short", day: "numeric", year: "numeric" }) {
  const date = value instanceof Date ? value : new Date(value);
  return new Intl.DateTimeFormat(localeTag(), options).format(date);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function icon(name, className = "") {
  const icons = {
    arrow: '<path d="M4 10h11M11.5 5.5 16 10l-4.5 4.5"/>',
    arrowUpRight: '<path d="M6 14 14 6M7 6h7v7"/>',
    bookmark: '<path d="M5 3.5h10v13l-5-3.2-5 3.2z"/>',
    close: '<path d="m5 5 10 10M15 5 5 15"/>',
    search: '<circle cx="8.7" cy="8.7" r="5.2"/><path d="m12.6 12.6 3.4 3.4"/>',
    grid: '<rect x="3.5" y="3.5" width="5" height="5" rx=".6"/><rect x="11.5" y="3.5" width="5" height="5" rx=".6"/><rect x="3.5" y="11.5" width="5" height="5" rx=".6"/><rect x="11.5" y="11.5" width="5" height="5" rx=".6"/>',
    list: '<path d="M7 5h9M7 10h9M7 15h9"/><circle cx="4" cy="5" r=".8" fill="currentColor" stroke="none"/><circle cx="4" cy="10" r=".8" fill="currentColor" stroke="none"/><circle cx="4" cy="15" r=".8" fill="currentColor" stroke="none"/>',
    download: '<path d="M10 3.5v9M6.5 9.5 10 13l3.5-3.5M4 15.5h12"/>',
    external: '<path d="M8 4.5H4.5v11h11V12M11 4.5h5v5M9.5 10.5l5.5-5.5"/>',
    play: '<path d="m7 4.7 8 5.3-8 5.3z"/>',
    pause: '<path d="M7 5v10M13 5v10"/>',
    skip: '<path d="m5 5 7 5-7 5zM15 5v10"/>',
    check: '<path d="m4.5 10.5 3.5 3.5 7.5-8"/>',
    info: '<circle cx="10" cy="10" r="7.2"/><path d="M10 9v4.5M10 6.3v.2"/>',
    spark: '<path d="m10 2.8 1.7 5.1 5.2 1.7-5.2 1.7L10 16.8l-1.7-5.5-5.2-1.7 5.2-1.7z"/>',
    radar: '<circle cx="10" cy="10" r="7"/><circle cx="10" cy="10" r="3"/><path d="M10 10 15 5M10 3v1.2M17 10h-1.2M10 17v-1.2M3 10h1.2"/>',
    layers: '<path d="m10 3 7 3.8-7 3.8-7-3.8zM3 10.2l7 3.8 7-3.8M3 13.7l7 3.8 7-3.8"/>',
    clock: '<circle cx="10" cy="10" r="7"/><path d="M10 6v4.4l3 1.8"/>',
    chevronDown: '<path d="m5 7.5 5 5 5-5"/>',
    refresh: '<path d="M16 7a6 6 0 1 0 .5 5.7M16 3.5V7h-3.5"/>',
    copy: '<rect x="6.5" y="6.5" width="9" height="10" rx="1"/><path d="M13.5 6.5v-2a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2"/>',
    trash: '<path d="M4.5 6h11M8 6V4h4v2M6 6l.7 10h6.6L14 6M8.5 9v4M11.5 9v4"/>',
    shield: '<path d="M10 3 16 5.5v4.2c0 3.4-2.4 5.8-6 7.3-3.6-1.5-6-3.9-6-7.3V5.5z"/><path d="m7.3 10 1.7 1.7 3.7-4"/>',
    timer: '<circle cx="10" cy="11" r="6"/><path d="M10 7.8V11l2 1.4M8 2.8h4M10 2.8V5"/>'
  };
  return `<svg class="${className}" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.info}</svg>`;
}

function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : state.lang === "fr" ? "fr" : "en";
  document.documentElement.dataset.lang = state.lang;
  document.getElementById("current-language").textContent =
    LANGUAGES.find((language) => language.code === state.lang)?.short || "EN";
  document.querySelectorAll("button[data-lang]").forEach((button) => {
    const selected = button.dataset.lang === state.lang;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-selected", String(selected));
  });
}

function updateHeader() {
  const active = state.route.name === "company" ? "roles" : state.route.name;
  document.querySelectorAll("[data-route-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.routeLink === active);
  });
  const count = state.saved.roles.length + state.saved.resources.length;
  const savedChip = document.getElementById("saved-chip");
  const savedCount = document.getElementById("saved-count");
  if (savedCount) savedCount.textContent = String(count);
  if (savedChip) {
    savedChip.classList.toggle("has-saves", count > 0);
    savedChip.setAttribute("aria-label", `${t("a11y.saved")} (${count})`);
  }
}

function isStandaloneMode() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function updateInstallUI() {
  const installed = isStandaloneMode();
  document.body.classList.toggle("is-app-installed", installed);
  document.querySelectorAll("[data-install-label]").forEach((label) => {
    label.textContent = installed ? t("install.installed") : t("common.installApp");
  });
  document.querySelectorAll("[data-install-app]").forEach((button) => {
    button.classList.toggle("install-ready", Boolean(state.installPrompt) && !installed);
    button.setAttribute(
      "aria-label",
      installed ? t("install.installed") : t("install.aria")
    );
  });
}

function updateDocumentTitle() {
  const brand = "High Table Recruitment Institute";
  const titles = {
    home: brand,
    roles: `${t("nav.roles")} — ${brand}`,
    company: `${getCompany(state.route.id)?.name || t("nav.roles")} — ${brand}`,
    intelligence: `${t("nav.intelligence")} — ${brand}`,
    simulate: `${t("nav.simulate")} — ${brand}`
  };
  document.title = titles[state.route.name] || brand;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = t("home.subtitle");
}

function closeMobileNav() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("mobile-nav");
  if (!toggle || !nav) return;
  toggle.setAttribute("aria-expanded", "false");
  nav.hidden = true;
}

function closeLanguageMenu() {
  const switcher = document.getElementById("language-switcher");
  if (!switcher) return;
  switcher.classList.remove("is-open");
  switcher.querySelector(".language-trigger")?.setAttribute("aria-expanded", "false");
}

function navigate(path) {
  closeMobileNav();
  if (window.location.hash === `#${path}`) {
    state.route = routeFromHash();
    render();
  } else {
    window.location.hash = `#${path}`;
  }
}

function setLanguage(lang) {
  if (!["en", "zh", "fr"].includes(lang)) return;
  const scrollY = window.scrollY;
  state.lang = lang;
  localStorage.setItem(STORAGE.lang, lang);
  closeLanguageMenu();
  render(true, scrollY);
}

function saveState() {
  localStorage.setItem(STORAGE.saved, JSON.stringify(state.saved));
  updateHeader();
}

function toggleSaved(kind, id) {
  const collection = kind === "role" ? state.saved.roles : state.saved.resources;
  const index = collection.indexOf(id);
  if (index >= 0) {
    collection.splice(index, 1);
    toast(t("common.removedToast"));
  } else {
    collection.push(id);
    toast(t("common.savedToast"));
  }
  saveState();
  updateInstallUI();
  syncSavedButtons();
  refreshSavedChrome();
}

function syncSavedButtons() {
  document.querySelectorAll("[data-save-role]").forEach((button) => {
    const saved = state.saved.roles.includes(button.dataset.saveRole);
    button.classList.toggle("is-saved", saved);
    button.setAttribute("aria-pressed", String(saved));
    button.setAttribute("title", saved ? t("common.removeSaved") : t("common.save"));
    const label = button.querySelector("[data-save-label]");
    if (label) label.textContent = saved ? t("common.savedRole") : t("common.saveRole");
  });
  document.querySelectorAll("[data-save-resource]").forEach((button) => {
    const saved = state.saved.resources.includes(button.dataset.saveResource);
    button.classList.toggle("is-saved", saved);
    button.setAttribute("aria-pressed", String(saved));
    button.setAttribute("title", saved ? t("common.removeSaved") : t("common.save"));
  });
}

function toast(message) {
  if (!toastRoot) return;
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  toastRoot.appendChild(node);
  window.setTimeout(() => {
    node.classList.add("is-leaving");
    window.setTimeout(() => node.remove(), 240);
  }, 2400);
}

function celebrate() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["#c8f56a", "#79e7ee", "#ffc95c", "#ff7d61", "#f3f5ef"];
  for (let i = 0; i < 42; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.setProperty("--c", colors[i % colors.length]);
    piece.style.setProperty("--x", `${Math.round(Math.random() * 260 - 130)}px`);
    piece.style.setProperty("--r", `${Math.round(Math.random() * 720 - 360)}deg`);
    piece.style.setProperty("--d", `${1.8 + Math.random() * 1.8}s`);
    piece.style.left = `${35 + Math.random() * 30}%`;
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    confettiRoot.appendChild(piece);
    window.setTimeout(() => piece.remove(), 4200);
  }
}

function formatMoney(role, range) {
  const [min, max] = range;
  if (role.currency === "CNY") {
    return `¥${min.toFixed(1)}–${max.toFixed(1)}M`;
  }
  if (role.currency === "HKD") {
    return `HK$${new Intl.NumberFormat("en-US").format(Math.round(min))}–${new Intl.NumberFormat(
      "en-US"
    ).format(Math.round(max))}K`;
  }
  return `$${Math.round(min)}–${Math.round(max)}K`;
}

function payScore(role) {
  if (role.currency === "USD") return role.total[1];
  if (role.currency === "HKD") return role.total[1] * 0.128;
  return role.total[1] * 140;
}

function trackLabel(roleOrId) {
  const id = typeof roleOrId === "string" ? roleOrId : roleOrId.track;
  return tr(getTrack(id)?.label);
}

function trackColor(roleOrId) {
  const id = typeof roleOrId === "string" ? roleOrId : roleOrId.track;
  return getTrack(id)?.color || "#c8f56a";
}

function roleRegion(role) {
  if (role.region) return role.region;
  if (role.currency === "CNY") return "CN";
  return "US";
}

function regionLabel(region) {
  return t(
    region === "CN" ? "common.regionCn" : region === "HK" ? "common.regionHk" : "common.regionUs"
  );
}

function compensationNote(role) {
  if (role.currency === "CNY") return t("common.cnyNote");
  if (role.currency === "HKD") return t("common.hkdNote");
  return t("common.usdNote");
}

function salaryBasisLabel(role) {
  if (role.currency === "CNY") return t("roles.cnyLabel");
  if (role.currency === "HKD") return t("roles.hkdLabel");
  return t("roles.usdLabel");
}

function applicationUrlForRole(role) {
  return getJobPortal(role.companyId);
}

function companySigil(company, className = "company-sigil") {
  return `<span class="${className}" style="--company-color:${company.color};--node-color:${company.color}">${escapeHtml(company.mark)}</span>`;
}

function densityBars(score, color = "#c8f56a") {
  return `<span class="density-meter" style="--meter-color:${color}" aria-label="${t("common.density")} ${score}/5">${Array.from(
    { length: 5 },
    (_, index) => `<span class="${index < score ? "on" : ""}"></span>`
  ).join("")}</span>`;
}

function render() {
  stopTimer();
  if (state.modalOpen) closeModal(false);
  document.body.dataset.route = state.route.name;
  applyStaticI18n();
  updateHeader();
  updateInstallUI();
  updateDocumentTitle();
  closeMobileNav();

  switch (state.route.name) {
    case "roles":
      renderRolesPage();
      break;
    case "company":
      renderCompanyPage(state.route.id);
      break;
    case "intelligence":
      renderIntelligencePage();
      break;
    case "simulate":
      if (state.session) renderSession();
      else if (state.lastResult) renderResults();
      else renderSimulationPage();
      break;
    default:
      renderHomePage();
  }

  syncSavedButtons();
  window.scrollTo({ top: 0, behavior: "auto" });
  if (state.session && state.route.name === "simulate" && !state.session.paused) {
    startTimer();
  }
}

function renderHomePage() {
  const orbitCompanies = COMPANIES.slice(0, 8);
  const payArchetypes = [
    { label: t("home.payAi"), mix: { base: 50, bonus: 0, equity: 50 } },
    { label: t("home.payBigTech"), mix: { base: 60, bonus: 12, equity: 28 } },
    { label: t("home.payChina"), mix: { base: 70, bonus: 15, equity: 15 } }
  ];
  const densityRoles = [
    getRole("openai-research-engineer"),
    getRole("bytedance-algorithm"),
    getRole("netflix-senior-swe"),
    getRole("google-senior-swe"),
    getRole("microsoft-cloud-architect")
  ].filter(Boolean);

  const tickerGroup = () => `
    <div class="ticker-group">
      ${COMPANIES.map(
        (company) => `
          <span class="ticker-company" style="--c:${company.color}">
            <span class="ticker-dot"></span>${escapeHtml(company.name)}
          </span>`
      ).join("")}
    </div>`;

  const orbitNodes = orbitCompanies
    .map(
      (company, index) => `
        <div class="orbit-node node-${index + 1}" style="--node-color:${company.color}">
          <span class="node-mark">${escapeHtml(company.mark)}</span>
          <span class="node-name">${escapeHtml(company.name)}</span>
        </div>`
    )
    .join("");

  app.innerHTML = `
    <section class="home-hero hero-cinematic container">
      <div class="hero-copy">
        <div class="hero-kicker">
          <span class="dot"></span>
          <span>${t("home.kicker")}</span>
          <span class="mono">/ 01</span>
        </div>
        <h1 class="hero-title">
          <span class="hero-title-line">${escapeHtml(t("home.hero.line1"))}</span>
          <span class="hero-title-line outline">${escapeHtml(t("home.hero.line2"))}</span>
          <span class="hero-title-line accent">${escapeHtml(t("home.hero.line3"))}</span>
        </h1>
        <p class="hero-sub">${t("home.subtitle")}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#/roles">
            ${t("home.ctaRoles")} ${icon("arrow")}
          </a>
          <a class="btn btn-ghost" href="#/simulate">
            ${icon("play")} ${t("home.ctaSimulate")}
          </a>
          <button class="btn btn-ghost" type="button" data-install-app>
            ${icon("download")} ${t("home.addToDesktop")}
          </button>
        </div>
        <div class="hero-meta">
          <div class="hero-meta-item"><strong>${ROLES.length}</strong><span>${t("home.statRoles")}</span></div>
          <div class="hero-meta-item"><strong>${COMPANIES.length}</strong><span>${t("home.statCompanies")}</span></div>
          <div class="hero-meta-item"><strong>${PROMPTS.length}</strong><span>${t("home.statPrompts")}</span></div>
          <div class="hero-meta-item"><strong>03</strong><span>${t("home.statLanguages")}</span></div>
        </div>
      </div>
      <div class="hero-visual">
        <span class="visual-coordinate top">GLOBAL / 37.7749° N</span>
        <span class="visual-coordinate left">PUBLIC SIGNAL / 2026.10</span>
        <div class="signal-orbit" aria-label="${t("home.orbitLabel")}">
          <span class="orbit-ring ring-1"></span>
          <span class="orbit-ring ring-2"></span>
          <span class="orbit-ring ring-3"></span>
          <span class="orbit-ring ring-4"></span>
          <span class="orbit-axis"></span>
          <span class="orbit-axis axis-b"></span>
          <span class="orbit-axis axis-c"></span>
          <div class="orbit-core">
            <img class="orbit-logo" src="./assets/high-table-logo.jpg" alt="High Table Recruitment Institute">
            <span class="orbit-core-label">${t("home.orbitLabel")}</span>
          </div>
          ${orbitNodes}
          <div class="orbit-readout">
            <div class="readout-label">
              <span>${t("home.readoutLabel")}</span><span>+12.4</span>
            </div>
            <div class="mini-bars">
              ${[42, 52, 67, 48, 74, 61, 87, 72, 95, 76, 89, 98]
                .map((height) => `<span style="--h:${height}%"></span>`)
                .join("")}
            </div>
            <div class="readout-foot">${t("home.readoutFoot", { companies: COMPANIES.length })}</div>
          </div>
        </div>
      </div>
    </section>

    <div class="company-ticker-wrap" aria-label="${t("home.tickerLabel")}">
      <div class="company-ticker">
        ${tickerGroup()}
        ${tickerGroup()}
      </div>
    </div>

    <section class="section container">
      <div class="section-head">
        <div>
          <div class="section-kicker">${t("home.instrumentsKicker")}</div>
          <h2>${t("home.instrumentsTitle")}</h2>
        </div>
        <p>${t("home.instrumentsDesc")}</p>
      </div>
      <div class="instrument-grid">
        <a class="instrument-card" href="#/roles" style="--instrument-color:#c8f56a">
          <div class="instrument-top">
            <span class="instrument-index">01 / ATLAS</span>
            <span class="instrument-icon">${icon("radar")}</span>
          </div>
          <h3>${t("home.instrumentRolesTitle")}</h3>
          <p>${t("home.instrumentRolesDesc")}</p>
          <div class="instrument-list">
            <span class="tag tag-acid">${t("home.tagCompare")}</span>
            <span class="tag">${t("home.tagCalibrate")}</span>
            <span class="tag">${ROLES.length} ${t("common.roles")}</span>
          </div>
          <div class="instrument-footer">
            <span class="mono">${t("home.instrumentRolesMeta")}</span>
            <span class="text-link">${t("home.instrumentRolesCta")} ${icon("arrow")}</span>
          </div>
        </a>
        <a class="instrument-card" href="#/intelligence" style="--instrument-color:#79e7ee">
          <div class="instrument-top">
            <span class="instrument-index">02 / NOTES</span>
            <span class="instrument-icon">${icon("layers")}</span>
          </div>
          <h3>${t("home.instrumentIntelTitle")}</h3>
          <p>${t("home.instrumentIntelDesc")}</p>
          <div class="instrument-list">
            <span class="tag tag-cyan">${t("home.tagDecode")}</span>
            <span class="tag">${RESOURCES.length} ${t("intel.library").toLowerCase()}</span>
          </div>
          <div class="instrument-footer">
            <span class="mono">${t("home.instrumentIntelMeta")}</span>
            <span class="text-link">${t("home.instrumentIntelCta")} ${icon("arrow")}</span>
          </div>
        </a>
        <a class="instrument-card" href="#/simulate" style="--instrument-color:#ffc95c">
          <div class="instrument-top">
            <span class="instrument-index">03 / ROOM</span>
            <span class="instrument-icon">${icon("timer")}</span>
          </div>
          <h3>${t("home.instrumentSimTitle")}</h3>
          <p>${t("home.instrumentSimDesc")}</p>
          <div class="instrument-list">
            <span class="tag tag-coral">${t("home.tagSimulate")}</span>
            <span class="tag">${PROMPTS.length} ${t("common.prompts")}</span>
          </div>
          <div class="instrument-footer">
            <span class="mono">${t("home.instrumentSimMeta")}</span>
            <span class="text-link">${t("home.instrumentSimCta")} ${icon("arrow")}</span>
          </div>
        </a>
      </div>
    </section>

    <section class="section container">
      <div class="section-head">
        <div>
          <div class="section-kicker">${t("home.marketKicker")}</div>
          <h2>${t("home.marketTitle")}</h2>
        </div>
        <p>${t("home.marketDesc")}</p>
      </div>
      <div class="market-grid">
        <div class="pulse-card large">
          <div class="pulse-card-head">
            <h3>${t("home.payTitle")}</h3>
            <span class="tag">${t("home.payTag")}</span>
          </div>
          <p class="pulse-copy">${t("home.payDesc")}</p>
          <div class="pay-composition">
            ${payArchetypes
              .map(
                (item) => `
                  <div class="pay-row">
                    <span class="pay-row-label">${item.label}</span>
                    <span class="pay-bar" aria-label="${item.label}: ${item.mix.base}% base, ${item.mix.bonus}% bonus, ${item.mix.equity}% equity">
                      <span class="base" style="--w:${item.mix.base}%"></span>
                      <span class="bonus" style="--w:${item.mix.bonus}%"></span>
                      <span class="equity" style="--w:${item.mix.equity}%"></span>
                    </span>
                    <span class="pay-row-value">${item.mix.base}/${item.mix.bonus}/${item.mix.equity}</span>
                  </div>`
              )
              .join("")}
          </div>
          <div class="pay-legend">
            <span><i class="legend-dot base"></i>${t("home.payBase")}</span>
            <span><i class="legend-dot bonus"></i>${t("home.payBonus")}</span>
            <span><i class="legend-dot equity"></i>${t("home.payEquity")}</span>
          </div>
          <div class="market-footnote">${icon("info")} ${t("home.payFootnote")}</div>
        </div>
        <div class="pulse-card">
          <div class="pulse-card-head">
            <h3>${t("home.densityTitle")}</h3>
            <span class="tag tag-cyan">${t("home.densityTag")}</span>
          </div>
          <p class="pulse-copy">${t("home.densityDesc")}</p>
          <div class="density-board">
            ${densityRoles
              .map(
                (role) => `
                  <div class="density-row">
                    <span class="density-role">${escapeHtml(tr(role.title))}</span>
                    ${densityBars(role.density, role.companyId ? getCompany(role.companyId).color : "#c8f56a")}
                    <span class="density-score">${role.density}/5</span>
                  </div>`
              )
              .join("")}
          </div>
          <div class="market-footnote">${icon("info")} ${t("home.densityFootnote")}</div>
        </div>
      </div>
    </section>

    <section class="section container">
      <div class="section-head">
        <div>
          <div class="section-kicker">${t("home.showcaseKicker")}</div>
          <h2>${t("home.showcaseTitle")}</h2>
        </div>
        <p>${t("home.showcaseDesc")}</p>
      </div>
      <div class="company-showcase">
        ${COMPANIES.map(
          (company) => `
            <a class="company-tile" href="#/company/${company.id}" style="--company-color:${company.color}">
              <div class="company-tile-top">
                ${companySigil(company)}
                <span class="company-tile-arrow">${icon("arrowUpRight")}</span>
              </div>
              <h3>${escapeHtml(company.name)}</h3>
              <span class="company-hq">${escapeHtml(company.hq)}</span>
              <div class="company-tile-foot">
                <span>${getRolesForCompany(company.id).length} ${t("common.roles")}</span>
                <span>${company.hubs.length} hubs</span>
              </div>
            </a>`
        ).join("")}
      </div>
      <div class="showcase-action">
        <a class="btn btn-ghost btn-small" href="#/roles">${t("home.showcaseCta")} ${icon("arrow")}</a>
      </div>
    </section>

    <section class="manifesto">
      <div class="container">
        <blockquote>${t("home.manifestoQuote")}</blockquote>
        <div class="manifesto-credit">${t("home.manifestoCredit")}</div>
      </div>
    </section>
  `;
}

function normalizeText(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getFilteredRoles() {
  const query = normalizeText(state.roleFilters.q.trim());
  let roles = [...ROLES];

  if (query) {
    roles = roles.filter((role) => {
      const company = getCompany(role.companyId);
      const searchable = [
        tr(role.title),
        tr(role.summary),
        tr(role.education),
        tr(role.majors),
        role.location,
        role.level,
        company?.name || "",
        trackLabel(role),
        regionLabel(roleRegion(role)),
        ...role.skills
      ].join(" ");
      return normalizeText(searchable).includes(query);
    });
  }

  if (state.roleFilters.company !== "all") {
    roles = roles.filter((role) => role.companyId === state.roleFilters.company);
  }
  if (state.roleFilters.region !== "all") {
    roles = roles.filter((role) => roleRegion(role) === state.roleFilters.region);
  }
  if (state.roleFilters.track !== "all") {
    roles = roles.filter((role) => role.track === state.roleFilters.track);
  }
  if (state.roleFilters.level !== "all") {
    roles = roles.filter((role) => role.level === state.roleFilters.level);
  }
  if (state.roleFilters.savedOnly) {
    roles = roles.filter((role) => state.saved.roles.includes(role.id));
  }

  switch (state.roleFilters.sort) {
    case "pay":
      roles.sort((a, b) => payScore(b) - payScore(a));
      break;
    case "density":
      roles.sort((a, b) => b.density - a.density || payScore(b) - payScore(a));
      break;
    case "company":
      roles.sort((a, b) => {
        const companyA = getCompany(a.companyId)?.name || "";
        const companyB = getCompany(b.companyId)?.name || "";
        return companyA.localeCompare(companyB) || tr(a.title).localeCompare(tr(b.title));
      });
      break;
    default:
      break;
  }
  return roles;
}

function roleCard(role) {
  const company = getCompany(role.companyId);
  const saved = state.saved.roles.includes(role.id);
  return `
    <article class="role-card" data-role-id="${role.id}" tabindex="0" role="button"
      aria-label="${escapeHtml(tr(role.title))} — ${escapeHtml(company.name)}"
      style="--company-color:${company.color}">
      <div class="role-card-top">
        <div class="role-company">
          ${companySigil(company)}
          <div>
            <span class="role-company-name">${escapeHtml(company.name)}</span>
            <span class="role-company-loc">${escapeHtml(role.location)}</span>
          </div>
        </div>
        <button class="save-icon-btn ${saved ? "is-saved" : ""}" type="button"
          data-save-role="${role.id}" aria-pressed="${saved}" title="${saved ? t("common.removeSaved") : t("common.save")}">
          ${icon("bookmark")}
        </button>
      </div>
      <h3>${escapeHtml(tr(role.title))}</h3>
      <p class="role-summary">${escapeHtml(tr(role.summary))}</p>
      <div class="role-pay">
        <div>
          <span class="role-pay-label">${t("common.totalComp")}</span>
          <span class="role-pay-value">${formatMoney(role, role.total)}</span>
        </div>
        <span class="role-level">${escapeHtml(role.level)}</span>
      </div>
      <div class="role-facts">
        <div>
          <span class="role-fact-label">${t("common.density")}</span>
          <span class="density-inline">
            ${densityBars(role.density, company.color)}
            <span class="role-fact-value">${role.density}/5</span>
          </span>
        </div>
        <div>
          <span class="role-fact-label">${t("common.track")}</span>
          <span class="role-fact-value">${escapeHtml(trackLabel(role))}</span>
        </div>
        <div>
          <span class="role-fact-label">${t("common.majors")}</span>
          <span class="role-fact-value">${escapeHtml(tr(role.majors))}</span>
        </div>
        <div>
          <span class="role-fact-label">${t("common.experience")}</span>
          <span class="role-fact-value">${escapeHtml(tr(role.experience))}</span>
        </div>
      </div>
      <div class="role-card-foot">
        <div class="role-tags">
          ${role.skills
            .slice(0, 2)
            .map((skill) => `<span class="tag">${escapeHtml(skill)}</span>`)
            .join("")}
        </div>
        <div class="role-card-actions">
          <a class="role-apply-link" href="${applicationUrlForRole(role)}" target="_blank"
            rel="noopener noreferrer" title="${t("apply.noteShort")}"
            aria-label="${t("apply.applyShort")} — ${escapeHtml(tr(role.title))}">
            ${t("apply.applyShort")} ${icon("external")}
          </a>
          <span class="role-open">${t("common.viewBrief")} ${icon("arrow")}</span>
        </div>
      </div>
    </article>`;
}

function roleTable(roles) {
  if (!roles.length) return roleEmptyState();
  return `
    <div class="atlas-table-wrap">
      <table class="atlas-table">
        <thead>
          <tr>
            <th>${t("roles.tableCompany")}</th>
            <th>${t("roles.tableRole")}</th>
            <th>${t("roles.tableLevel")}</th>
            <th>${t("roles.tableLocation")}</th>
            <th>${t("roles.tablePay")}</th>
            <th>${t("roles.tableDensity")}</th>
          </tr>
        </thead>
        <tbody>
          ${roles
            .map((role) => {
              const company = getCompany(role.companyId);
              return `
                <tr data-role-id="${role.id}" tabindex="0">
                  <td>
                    <span class="table-company" style="--company-color:${company.color}">
                      ${companySigil(company)}
                      <span>${escapeHtml(company.name)}</span>
                    </span>
                  </td>
                  <td><span class="table-role">${escapeHtml(tr(role.title))}</span></td>
                  <td class="table-mono">${escapeHtml(role.level)}</td>
                  <td>${escapeHtml(role.location)}</td>
                  <td class="table-mono">${formatMoney(role, role.total)}</td>
                  <td>${densityBars(role.density, company.color)}</td>
                </tr>`;
            })
            .join("")}
        </tbody>
      </table>
    </div>`;
}

function resourceTypeLabel(type) {
  return TYPE_LABELS[state.lang]?.[type] || TYPE_LABELS.en[type] || type;
}

function getFilteredResources() {
  if (state.intelCategory === "all") return RESOURCES;
  return RESOURCES.filter((resource) => resource.category === state.intelCategory);
}

function resourceCard(resource) {
  const saved = state.saved.resources.includes(resource.id);
  return `
    <article class="resource-card" data-open-resource="${resource.id}" tabindex="0" role="button"
      aria-label="${escapeHtml(tr(resource.title))}">
      <div class="resource-card-top">
        <span class="resource-type ${resource.type}">${resourceTypeLabel(resource.type)}</span>
        <button class="save-icon-btn ${saved ? "is-saved" : ""}" type="button"
          data-save-resource="${resource.id}" aria-pressed="${saved}"
          title="${saved ? t("common.removeSaved") : t("common.save")}">
          ${icon("bookmark")}
        </button>
      </div>
      <h3>${escapeHtml(tr(resource.title))}</h3>
      <p>${escapeHtml(tr(resource.summary))}</p>
      <div class="resource-meta">
        <span>${t("common.readTime", { n: resource.readTime })}</span>
        <span>${t("common.updated", { d: resource.updated })}</span>
      </div>
    </article>`;
}

function featuredResourceMarkup() {
  const featured = RESOURCES.find((resource) => resource.featured) || RESOURCES[0];
  if (!featured || state.intelCategory !== "all") return "";
  return `
    <article class="featured-note" data-open-resource="${featured.id}" tabindex="0" role="button"
      aria-label="${escapeHtml(tr(featured.title))}">
      <div class="featured-note-content">
        <span class="tag tag-acid">${t("intel.featuredTag")}</span>
        <h2>${t("intel.featuredTitle")}</h2>
        <p>${t("intel.featuredDesc")}</p>
        <span class="text-link">${t("intel.featuredCta")} ${icon("arrow")}</span>
      </div>
      <div class="featured-art" aria-hidden="true">
        <svg viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="118" stroke="currentColor" stroke-opacity=".12"/>
          <circle cx="160" cy="160" r="86" stroke="currentColor" stroke-opacity=".18" stroke-dasharray="3 6"/>
          <circle cx="160" cy="160" r="42" stroke="currentColor" stroke-opacity=".5"/>
          <path d="M160 18v284M18 160h284" stroke="currentColor" stroke-opacity=".1"/>
          <path d="M160 160 242 78M160 160 83 231" stroke="currentColor" stroke-opacity=".5"/>
          <rect x="140" y="90" width="12" height="70" rx="3" fill="currentColor" opacity=".25"/>
          <rect x="160" y="126" width="12" height="34" rx="3" fill="currentColor" opacity=".55"/>
          <rect x="180" y="74" width="12" height="86" rx="3" fill="currentColor" opacity=".35"/>
          <rect x="200" y="104" width="12" height="56" rx="3" fill="currentColor" opacity=".18"/>
          <circle cx="160" cy="160" r="5" fill="currentColor"/>
          <path d="M116 43h88M116 277h88" stroke="currentColor" stroke-opacity=".3"/>
        </svg>
      </div>
    </article>`;
}

function savedResourceItems() {
  const resources = state.saved.resources
    .map((id) => getResource(id))
    .filter(Boolean)
    .slice(0, 5);
  if (!resources.length) return `<p class="muted" style="font-size:9px;line-height:1.7;margin:0">${t("intel.savedEmpty")}</p>`;
  return `
    <div class="saved-list">
      ${resources
        .map(
          (resource) => `
            <div class="saved-list-item">
              <span>${escapeHtml(tr(resource.title))}</span>
              <button type="button" data-save-resource="${resource.id}" aria-label="${t("common.removeSaved")}">
                ${icon("close")}
              </button>
            </div>`
        )
        .join("")}
    </div>`;
}

function intelSidebarMarkup() {
  return `
    <div class="sidebar-card">
      <div class="sidebar-label">${t("intel.savedResources")}</div>
      <div id="intel-saved-list">${savedResourceItems()}</div>
    </div>
    <div class="sidebar-card">
      <div class="sidebar-label">DOWNLOAD / 01</div>
      <h3>${t("intel.starterPack")}</h3>
      <p>${t("intel.starterPackDesc")}</p>
      <button class="btn btn-primary btn-small" type="button" data-download="starter-pack">
        ${icon("download")} ${t("intel.starterPackCta")}
      </button>
    </div>
    <div class="sidebar-card">
      <div class="sidebar-label">${t("intel.sourcesTitle")}</div>
      <p>${t("intel.sourcesDesc")}</p>
      <div class="sources-mini">
        ${["levels", "amazonLP", "anthropicCareers", "systemDesignPrimer"]
          .map((id) => {
            const source = SOURCES[id];
            return `<a href="${source.url}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(tr(source.title))}</span>${icon("external")}</a>`;
          })
          .join("")}
      </div>
      <button class="text-link" type="button" data-open-modal="sources" style="margin-top:17px;padding:0">
        ${t("intel.viewAllSources")} ${icon("arrow")}
      </button>
    </div>`;
}

function renderIntelligencePage() {
  const resources = getFilteredResources();
  app.innerHTML = `
    <div class="page">
      <div class="container">
        <div class="page-head">
          <div>
            <div class="eyebrow"><span class="eyebrow-index">02</span>${t("intel.eyebrow")}</div>
            <h1>${t("intel.titleA")}<br><em>${t("intel.titleB")}</em></h1>
          </div>
          <div class="page-head-side">
            <p>${t("intel.side")}</p>
            <div class="page-head-note">${icon("shield")} ${t("intel.note")}</div>
          </div>
        </div>

        <div class="intel-layout">
          <div>
            <div id="intel-featured">${featuredResourceMarkup()}</div>
            <div class="library-toolbar">
              <div class="category-tabs">
                ${RESOURCE_CATEGORIES.map(
                  (category) => `
                    <button class="category-tab ${state.intelCategory === category.id ? "is-active" : ""}"
                      type="button" data-intel-category="${category.id}">
                      ${escapeHtml(tr(category.label))}
                    </button>`
                ).join("")}
              </div>
              <span class="library-count" id="library-count">${t("intel.libraryCount", { n: resources.length })}</span>
            </div>
            <div class="resource-grid" id="resource-grid">
              ${resources.length ? resources.map(resourceCard).join("") : `<div class="empty-state"><div><h3>${t("intel.emptyCategory")}</h3></div></div>`}
            </div>
          </div>
          <aside class="intel-sidebar" id="intel-sidebar">
            ${intelSidebarMarkup()}
          </aside>
        </div>
      </div>
    </div>`;
}

function refreshIntelligenceResults() {
  const resources = getFilteredResources();
  const grid = document.getElementById("resource-grid");
  const featured = document.getElementById("intel-featured");
  const count = document.getElementById("library-count");
  if (grid) {
    grid.innerHTML = resources.length
      ? resources.map(resourceCard).join("")
      : `<div class="empty-state"><div><h3>${t("intel.emptyCategory")}</h3></div></div>`;
  }
  if (featured) featured.innerHTML = featuredResourceMarkup();
  if (count) count.textContent = t("intel.libraryCount", { n: resources.length });
  document.querySelectorAll("[data-intel-category]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.intelCategory === state.intelCategory);
  });
  syncSavedButtons();
}

function durationForLength(length) {
  return length === 4 ? 18 : length === 6 ? 28 : 36;
}

function formatSeconds(totalSeconds) {
  const seconds = Math.max(0, Math.ceil(totalSeconds));
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function renderSimulationPage() {
  const setup = state.simSetup;
  const duration = durationForLength(setup.length);
  const recent = state.history.slice(0, 5);

  app.innerHTML = `
    <div class="page simulation-page">
      <div class="container simulation-shell">
        <div class="simulation-intro">
          <div class="sim-intro-copy">
            <div class="eyebrow"><span class="eyebrow-index">03</span>${t("sim.eyebrow")}</div>
            <h1>${t("sim.titleA")}<br><em>${t("sim.titleB")}</em></h1>
            <p>${t("sim.side")}</p>
            <div class="sim-principles">
              <div class="sim-principle"><strong>${t("sim.principle1")}</strong><span>${t("sim.principle1Label")}</span></div>
              <div class="sim-principle"><strong>${t("sim.principle2")}</strong><span>${t("sim.principle2Label")}</span></div>
              <div class="sim-principle"><strong>${t("sim.principle3")}</strong><span>${t("sim.principle3Label")}</span></div>
            </div>
          </div>

          <div class="setup-panel">
            <div class="setup-panel-head">
              <h2>${t("sim.setupTitle")}</h2>
              <span class="mono">${t("sim.setupMeta")}</span>
            </div>
            <div class="setup-field">
              <span class="setup-label">${t("sim.mode")}</span>
              <div class="segmented four">
                ${[
                  ["mixed", t("sim.modeMixed")],
                  ["behavioral", t("sim.modeBehavioral")],
                  ["technical", t("sim.modeTechnical")],
                  ["system", t("sim.modeSystem")]
                ]
                  .map(
                    ([value, label]) => `
                      <button class="${setup.mode === value ? "is-active" : ""}" type="button"
                        data-sim-mode="${value}">${label}</button>`
                  )
                  .join("")}
              </div>
            </div>
            <div class="setup-field">
              <span class="setup-label">${t("sim.length")}</span>
              <div class="segmented three">
                ${[4, 6, 8]
                  .map(
                    (value) => `
                      <button class="${setup.length === value ? "is-active" : ""}" type="button"
                        data-sim-length="${value}">${t(`sim.length${value}`)}</button>`
                  )
                  .join("")}
              </div>
            </div>
            <div class="setup-grid">
              <div class="setup-field">
                <label class="setup-label" for="sim-difficulty">${t("sim.difficulty")}</label>
                <select id="sim-difficulty" class="select-input" data-sim-difficulty>
                  <option value="all" ${setup.difficulty === "all" ? "selected" : ""}>${t("sim.diffAll")}</option>
                  <option value="core" ${setup.difficulty === "core" ? "selected" : ""}>${t("sim.diffCore")}</option>
                  <option value="stretch" ${setup.difficulty === "stretch" ? "selected" : ""}>${t("sim.diffStretch")}</option>
                </select>
              </div>
              <div class="setup-field">
                <label class="setup-label" for="sim-company">${t("sim.companyFocus")}</label>
                <select id="sim-company" class="select-input" data-sim-company>
                  <option value="all" ${setup.company === "all" ? "selected" : ""}>${t("sim.allCompanies")}</option>
                  ${COMPANIES.map(
                    (company) =>
                      `<option value="${company.id}" ${setup.company === company.id ? "selected" : ""}>${escapeHtml(company.name)}</option>`
                  ).join("")}
                </select>
              </div>
            </div>
            <div class="setup-field" style="margin-top:18px;display:flex;justify-content:space-between;align-items:center;gap:16px">
              <span class="setup-label" style="margin:0">${t("sim.duration")}</span>
              <span class="mono" style="color:var(--acid);font-size:12px">${t("sim.durationValue", { n: duration })}</span>
            </div>
            <button class="btn btn-primary" type="button" data-start-sim>
              ${icon("play")} ${t("sim.start")}
            </button>
            <div class="setup-note">${icon("shield")} <span>${t("sim.privacyNote")}</span></div>
          </div>
        </div>

        <div class="sim-bottom">
          <div class="sim-info-card">
            <div class="sidebar-label">RUBRIC / 05</div>
            <h3>${t("sim.rubricTitle")}</h3>
            <p>${t("sim.rubricDesc")}</p>
            <div class="rubric-preview">
              <span>${t("sim.rubric1")}</span>
              <span>${t("sim.rubric2")}</span>
              <span>${t("sim.rubric3")}</span>
              <span>${t("sim.rubric4")}</span>
            </div>
          </div>
          <div class="sim-info-card">
            <div class="sidebar-label">HISTORY / 05</div>
            <h3>${t("sim.historyTitle")}</h3>
            <p>${t("sim.historyDesc")}</p>
            ${
              recent.length
                ? `<div class="history-list">
                    ${recent
                      .map(
                        (item) => `
                          <div class="history-item">
                            <div>
                              <strong>${escapeHtml(item.modeLabel || item.mode || t("sim.modeMixed"))}</strong>
                              <span>${t("sim.historyMeta", { count: item.promptCount, date: formatDate(item.date) })}</span>
                            </div>
                            <span class="history-score">${t("sim.historyScore", { score: item.score })}</span>
                          </div>`
                      )
                      .join("")}
                  </div>`
                : `<div class="history-list"><p class="muted" style="font-size:10px;margin:0">${t("sim.historyEmpty")}</p></div>`
            }
          </div>
        </div>
      </div>
    </div>`;
}

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function promptPool(mode, difficulty, company) {
  let pool = PROMPTS.filter((prompt) => mode === "mixed" || prompt.category === mode);
  if (difficulty !== "all") pool = pool.filter((prompt) => prompt.difficulty === difficulty);
  if (company !== "all") pool = pool.filter((prompt) => prompt.companies.includes(company));
  return pool;
}

function choosePromptIds() {
  const { mode, length, difficulty, company } = state.simSetup;
  let primary = promptPool(mode, difficulty, company);
  if (!primary.length) primary = promptPool(mode, "all", company);
  if (!primary.length) primary = promptPool(mode, "all", "all");
  const selected = shuffled(primary).slice(0, length);
  if (selected.length < length) {
    const selectedIds = new Set(selected.map((prompt) => prompt.id));
    const fallback = shuffled(
      PROMPTS.filter(
        (prompt) =>
          !selectedIds.has(prompt.id) &&
          (mode === "mixed" || prompt.category === mode)
      )
    );
    selected.push(...fallback.slice(0, length - selected.length));
  }
  return selected.map((prompt) => prompt.id);
}

function startSession(promptIds = null) {
  const promptList = promptIds || choosePromptIds();
  const duration = durationForLength(state.simSetup.length);
  const modeLabels = {
    mixed: t("sim.modeMixed"),
    behavioral: t("sim.modeBehavioral"),
    technical: t("sim.modeTechnical"),
    system: t("sim.modeSystem")
  };
  state.lastResult = null;
  state.session = {
    id: `session-${Date.now()}`,
    promptIds: promptList,
    answers: {},
    current: 0,
    startedAt: Date.now(),
    totalSeconds: duration * 60,
    deadline: Date.now() + duration * 60 * 1000,
    paused: false,
    pausedRemaining: null,
    mode: state.simSetup.mode,
    modeLabel: modeLabels[state.simSetup.mode],
    company: state.simSetup.company,
    difficulty: state.simSetup.difficulty
  };
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function remainingSeconds() {
  if (!state.session) return 0;
  if (state.session.paused) return state.session.pausedRemaining || 0;
  return Math.max(0, Math.ceil((state.session.deadline - Date.now()) / 1000));
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startTimer() {
  stopTimer();
  if (!state.session || state.session.paused) return;
  tickTimer();
  state.timerId = window.setInterval(tickTimer, 1000);
}

function tickTimer() {
  if (!state.session || state.session.paused) return;
  const seconds = remainingSeconds();
  const timer = document.getElementById("timer-value");
  const bar = document.getElementById("timer-progress-bar");
  if (timer) {
    timer.textContent = formatSeconds(seconds);
    timer.classList.toggle("is-low", seconds <= 120);
  }
  if (bar) {
    bar.style.width = `${(seconds / state.session.totalSeconds) * 100}%`;
  }
  if (seconds <= 0) {
    toast(t("sim.autoFinish"));
    finishSession(true);
  }
}

function saveCurrentAnswer() {
  if (!state.session) return;
  const input = document.getElementById("answer-input");
  if (!input) return;
  const promptId = state.session.promptIds[state.session.current];
  state.session.answers[promptId] = input.value;
}

function renderSession() {
  if (!state.session) {
    renderSimulationPage();
    return;
  }
  const session = state.session;
  const prompt = getPrompt(session.promptIds[session.current]);
  if (!prompt) {
    state.session = null;
    renderSimulationPage();
    return;
  }
  const answer = session.answers[prompt.id] || "";
  const current = session.current + 1;
  const total = session.promptIds.length;
  const seconds = remainingSeconds();
  const category = PROMPT_CATEGORIES.find((item) => item.id === prompt.category);
  const companyNames = prompt.companies
    .map((id) => getCompany(id)?.name)
    .filter(Boolean)
    .slice(0, 3)
    .join(" · ");
  const units =
    state.lang === "zh"
      ? answer.replace(/\s/g, "").length
      : answer.trim()
        ? answer.trim().split(/\s+/).length
        : 0;
  const last = current === total;

  app.innerHTML = `
    <div class="page simulation-page">
      <div class="container session-shell">
        <div class="session-topbar">
          <div class="session-identity">
            <span class="live-dot"></span>
            <span>${session.paused ? t("sim.paused") : t("sim.live")}</span>
          </div>
          <div class="session-controls">
            <button class="icon-btn" type="button" data-pause-session
              title="${session.paused ? t("sim.resume") : t("sim.pause")}"
              aria-label="${session.paused ? t("sim.resume") : t("sim.pause")}">
              ${icon(session.paused ? "play" : "pause")}
            </button>
            <button class="icon-btn" type="button" data-exit-session title="${t("sim.exit")}" aria-label="${t("sim.exit")}">
              ${icon("close")}
            </button>
          </div>
        </div>

        <div class="timer-strip">
          <div class="timer-progress-wrap">
            <span class="timer-progress"><span id="timer-progress-bar" style="--progress:${(seconds / session.totalSeconds) * 100}%"></span></span>
            <span class="timer-progress-label">${t("sim.timeLeft")}</span>
          </div>
          <span class="timer ${seconds <= 120 ? "is-low" : ""}" id="timer-value">${formatSeconds(seconds)}</span>
          <span class="timer-progress-label" style="text-align:right">${current} / ${total}</span>
        </div>

        <div class="session-stage">
          <section class="question-panel">
            <div class="question-number">${t("sim.questionOf", { current, total })}</div>
            <div class="question-tags">
              <span class="tag tag-acid">${escapeHtml(tr(category?.label))}</span>
              <span class="tag">${escapeHtml(DIFFICULTY_LABELS[state.lang]?.[prompt.difficulty] || prompt.difficulty)}</span>
              <span class="tag tag-cyan">${escapeHtml(companyNames)}</span>
            </div>
            <h2>${escapeHtml(tr(prompt.prompt))}</h2>
            <p class="question-context">${escapeHtml(tr(prompt.context))}</p>
            <div class="question-probe">
              <button class="probe-toggle" type="button" data-toggle-probe>
                ${icon("spark")} ${t("sim.hint")}
              </button>
              <div class="probe-copy" id="probe-copy" hidden>${escapeHtml(tr(prompt.probe))}</div>
            </div>
          </section>
          <section class="answer-panel">
            <div class="answer-label">
              <span>${t("sim.answerLabel")}</span>
              <span class="word-count" id="word-count">${t(state.lang === "zh" ? "sim.chars" : "sim.words", { n: units })}</span>
            </div>
            <textarea id="answer-input" class="answer-input" spellcheck="true"
              placeholder="${t("sim.placeholder")}">${escapeHtml(answer)}</textarea>
            <div class="answer-actions">
              <div class="answer-actions-left">
                <button class="btn btn-ghost btn-small" type="button" data-skip-question>${icon("skip")} ${t("sim.skipQuestion")}</button>
              </div>
              <span class="answer-hint"><kbd>⌘</kbd> / <kbd>Ctrl</kbd> + <kbd>Enter</kbd></span>
              <button class="btn btn-primary btn-small" type="button" data-next-question>
                ${last ? t("sim.finishDrill") : t("sim.nextQuestion")} ${icon("arrow")}
              </button>
            </div>
          </section>
        </div>
        <div class="session-side-note">
          <span>${t("sim.sessionNote")}</span>
          <span>${escapeHtml(session.modeLabel)} · ${total} ${t("common.questions")}</span>
        </div>
      </div>
    </div>`;
}

function togglePauseSession() {
  if (!state.session) return;
  if (state.session.paused) {
    state.session.deadline = Date.now() + (state.session.pausedRemaining || 0) * 1000;
    state.session.paused = false;
    state.session.pausedRemaining = null;
    toast(t("sim.resumedToast"));
  } else {
    saveCurrentAnswer();
    state.session.pausedRemaining = remainingSeconds();
    state.session.paused = true;
    toast(t("sim.pausedToast"));
  }
  render();
}

function exitSession() {
  if (!state.session) return;
  if (!window.confirm(t("sim.quitConfirm"))) return;
  stopTimer();
  state.session = null;
  render();
}

function advanceQuestion(skip = false) {
  if (!state.session) return;
  if (!skip) saveCurrentAnswer();
  else {
    const promptId = state.session.promptIds[state.session.current];
    if (!state.session.answers[promptId]) state.session.answers[promptId] = "";
  }
  if (state.session.current >= state.session.promptIds.length - 1) {
    finishSession(false);
    return;
  }
  state.session.current += 1;
  render();
  window.setTimeout(() => document.getElementById("answer-input")?.focus(), 120);
}

const SCORING_LEXICON = {
  en: {
    structure: ["because", "so that", "result", "trade-off", "constraint", "first", "then", "finally", "however", "alternative", "decision", "impact", "learned"],
    ownership: [" i ", "i've", "i’ve", "my ", "led ", "built", "designed", "decided", "shipped", "debugged", "owned", "proposed"],
    evidence: ["measured", "experiment", "test", "benchmark", "users", "latency", "revenue", "retention", "qps", "reduced", "increased", "improved", "shipped"],
    tradeoff: ["because", "trade-off", "alternative", "instead", "risk", "constraint", "however", "cost", "downside"],
    result: ["result", "reduced", "increased", "improved", "changed", "shipped", "adopted", "impact", "outcome"],
    reflection: ["learned", "lesson", "would do", "next time", "reflect", "changed my"],
    approach: ["design", "algorithm", "approach", "architecture", "data structure", "system"],
    validation: ["test", "benchmark", "measure", "experiment", "complexity", "profile", "validate", "monitor"],
    requirements: ["requirement", "latency", "scale", "user", "sla", "constraint", "qps"],
    architecture: ["service", "database", "cache", "queue", "component", "index", "partition"],
    failure: ["fail", "outage", "fallback", "degrade", "replica", "rollback", "backpressure", "timeout"]
  },
  zh: {
    structure: ["因为", "所以", "结果", "权衡", "约束", "首先", "然后", "最后", "但是", "替代", "决定", "影响", "复盘", "学到"],
    ownership: ["我", "本人", "主导", "决定", "设计", "构建", "排查", "推动", "提出", "负责"],
    evidence: ["测量", "实验", "测试", "基准", "用户", "延迟", "收入", "留存", "降低", "提升", "上线"],
    tradeoff: ["因为", "权衡", "替代", "风险", "约束", "但是", "成本", "代价"],
    result: ["结果", "提升", "下降", "降低", "改善", "上线", "采用", "影响"],
    reflection: ["复盘", "学到", "下次", "如果重来", "教训", "改变"],
    approach: ["设计", "算法", "方案", "架构", "数据结构", "系统"],
    validation: ["测试", "验证", "实验", "复杂度", "基准", "剖析", "监控"],
    requirements: ["需求", "延迟", "规模", "用户", "SLA", "约束", "QPS"],
    architecture: ["服务", "数据库", "缓存", "队列", "组件", "索引", "分区"],
    failure: ["故障", "失败", "降级", "回滚", "副本", "背压", "超时", "容灾"]
  },
  fr: {
    structure: ["parce", "donc", "résultat", "compromis", "contrainte", "d'abord", "ensuite", "enfin", "cependant", "alternative", "décision", "impact", "appris"],
    ownership: ["j'ai", "j’ai", "mon ", "ma ", "piloté", "conçu", "décidé", "construit", "débogué", "proposé", "livré"],
    evidence: ["mesuré", "expérience", "test", "benchmark", "utilisateurs", "latence", "revenu", "rétention", "qps", "réduit", "augmenté", "amélioré"],
    tradeoff: ["parce", "compromis", "alternative", "risque", "contrainte", "cependant", "coût", "contrepartie"],
    result: ["résultat", "réduit", "augmenté", "amélioré", "livré", "adopté", "impact"],
    reflection: ["appris", "leçon", "la prochaine fois", "j'aurais", "réflexion"],
    approach: ["conception", "algorithme", "approche", "architecture", "structure de données", "système"],
    validation: ["test", "benchmark", "mesure", "expérience", "complexité", "profil", "valider", "monitorer"],
    requirements: ["exigence", "latence", "échelle", "utilisateur", "sla", "contrainte", "qps"],
    architecture: ["service", "base de données", "cache", "file", "composant", "index", "partition"],
    failure: ["panne", "échec", "fallback", "dégrad", "réplique", "rollback", "backpressure", "timeout"]
  }
};

function countUniqueMarkers(text, markers) {
  const normalized = normalizeText(text);
  return [...new Set(markers)].filter((marker) =>
    normalized.includes(normalizeText(marker))
  ).length;
}

function hasAny(text, markers) {
  const normalized = normalizeText(text);
  return markers.some((marker) => normalized.includes(normalizeText(marker)));
}

function analyzeAnswer(rawAnswer, prompt) {
  const answer = String(rawAnswer || "").trim();
  const emptySignals = { structure: 0, evidence: 0, ownership: 0, specificity: 0, tradeoff: 0 };
  if (!answer) {
    return {
      score: 0,
      signals: emptySignals,
      feedback: ["sim.feedbackEmpty"],
      units: 0
    };
  }

  const lexicon = SCORING_LEXICON[state.lang] || SCORING_LEXICON.en;
  const plainLength = answer.replace(/\s+/g, "").length;
  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
  const units = state.lang === "zh" ? plainLength / 1.8 : wordCount;
  const numbers = answer.match(/\d+(?:[.,]\d+)?\s?(?:%|ms|s|k|m|b|x|万|亿|人|天|周|个月|users|pts|qps)?/gi) || [];
  const technicalTokens = answer.match(/[A-Z][A-Za-z0-9+.-]{1,}|\b[A-Za-z]+\+\+|\b\d+(?:ms|s|k|m|x)\b/g) || [];

  const structureMarkers = countUniqueMarkers(answer, lexicon.structure);
  const ownershipMarkers = countUniqueMarkers(answer, lexicon.ownership);
  const evidenceMarkers = countUniqueMarkers(answer, lexicon.evidence);
  const tradeoffMarkers = countUniqueMarkers(answer, lexicon.tradeoff);

  const lengthScore =
    units < 20
      ? 28
      : units < 45
        ? 58
        : units <= 240
          ? 88
          : Math.max(50, 92 - (units - 240) / 8);

  const structure = clamp(
    22 + structureMarkers * 11 + Math.min(16, units / 10) + (prompt.category === "behavioral" ? 5 : 0),
    0,
    96
  );
  const evidence = clamp(
    18 + Math.min(6, numbers.length) * 11 + evidenceMarkers * 8 + (numbers.length > 0 ? 7 : 0),
    0,
    96
  );
  const ownership = clamp(
    20 + Math.min(6, ownershipMarkers) * 12 + (units >= 45 ? 8 : 0),
    0,
    95
  );
  const specificity = clamp(
    24 + Math.min(6, numbers.length) * 7 + Math.min(5, technicalTokens.length) * 3 + lengthScore * 0.19,
    0,
    96
  );
  const tradeoff = clamp(
    18 + Math.min(4, tradeoffMarkers) * 16 + (hasAny(answer, ["alternative", "instead", "而不是", "替代", "plutôt", "alternative"]) ? 10 : 0),
    0,
    95
  );

  let coverageHits = 0;
  let coverageTotal = 3;
  if (prompt.category === "behavioral") {
    coverageHits += hasAny(answer, lexicon.result) ? 1 : 0;
    coverageHits += hasAny(answer, lexicon.reflection) ? 1 : 0;
    coverageHits += tradeoffMarkers > 0 ? 1 : 0;
  } else if (prompt.category === "technical") {
    coverageHits += hasAny(answer, lexicon.approach) ? 1 : 0;
    coverageHits += hasAny(answer, lexicon.validation) ? 1 : 0;
    coverageHits += tradeoffMarkers > 0 ? 1 : 0;
  } else {
    coverageHits += hasAny(answer, lexicon.requirements) ? 1 : 0;
    coverageHits += hasAny(answer, lexicon.architecture) ? 1 : 0;
    coverageHits += hasAny(answer, lexicon.failure) ? 1 : 0;
  }
  const coverage = 38 + (coverageHits / coverageTotal) * 60;

  const score = Math.round(
    structure * 0.2 +
      evidence * 0.19 +
      ownership * 0.16 +
      specificity * 0.16 +
      tradeoff * 0.14 +
      coverage * 0.15
  );

  const feedback = [];
  if (units < 28) feedback.push("sim.feedbackTooShort");
  if (units > 285) feedback.push("sim.feedbackTooLong");
  if (evidence < 55) feedback.push("sim.feedbackNoEvidence");
  if (tradeoff < 52) feedback.push("sim.feedbackNoTradeoff");
  if (ownership < 55) feedback.push("sim.feedbackNoOwnership");
  if (!feedback.length) feedback.push("sim.feedbackGood");

  return {
    score: clamp(score, 0, 100),
    signals: {
      structure: Math.round(structure),
      evidence: Math.round(evidence),
      ownership: Math.round(ownership),
      specificity: Math.round(specificity),
      tradeoff: Math.round(tradeoff)
    },
    feedback,
    units: Math.round(units)
  };
}

function resultBand(score) {
  if (score >= 78) return t("sim.bandStrong");
  if (score >= 62) return t("sim.bandSolid");
  if (score >= 45) return t("sim.bandDeveloping");
  return t("sim.bandThin");
}

function finishSession(auto = false) {
  if (!state.session) return;
  saveCurrentAnswer();
  const session = state.session;
  const remaining = remainingSeconds();
  const elapsed = Math.max(1, session.totalSeconds - remaining);
  const entries = session.promptIds.map((promptId) => {
    const prompt = getPrompt(promptId);
    const answer = session.answers[promptId] || "";
    return {
      promptId,
      answer,
      ...analyzeAnswer(answer, prompt)
    };
  });
  const answered = entries.filter((entry) => entry.answer.trim()).length;
  const completion = answered / Math.max(1, entries.length);
  const average = entries.reduce((sum, entry) => sum + entry.score, 0) / Math.max(1, entries.length);
  const score = Math.round(average * 0.72 + completion * 28);
  const signalKeys = ["structure", "evidence", "ownership", "specificity", "tradeoff"];
  const signals = Object.fromEntries(
    signalKeys.map((key) => [
      key,
      Math.round(
        entries.reduce((sum, entry) => sum + (entry.signals?.[key] || 0), 0) /
          Math.max(1, entries.length)
      )
    ])
  );

  const historyItem = {
    id: session.id,
    date: new Date().toISOString(),
    score,
    promptCount: entries.length,
    answered,
    mode: session.mode,
    modeLabel: session.modeLabel,
    company: session.company,
    duration: Math.round(elapsed / 60)
  };
  state.history.unshift(historyItem);
  state.history = state.history.slice(0, 5);
  localStorage.setItem(STORAGE.history, JSON.stringify(state.history));

  state.lastResult = {
    ...historyItem,
    entries,
    signals,
    signalKeys,
    elapsed,
    promptIds: [...session.promptIds],
    modeLabel: session.modeLabel,
    totalSeconds: session.totalSeconds
  };
  state.session = null;
  stopTimer();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (score >= 70) window.setTimeout(celebrate, 250);
}

function renderResults() {
  const result = state.lastResult;
  if (!result) {
    renderSimulationPage();
    return;
  }
  const signalKeys = result.signalKeys || ["structure", "evidence", "ownership", "specificity", "tradeoff"];
  const score = result.score || 0;

  app.innerHTML = `
    <div class="page simulation-page">
      <div class="container session-shell">
        <div class="results-head">
          <div>
            <div class="eyebrow"><span class="eyebrow-index">RESULT</span>${t("sim.resultsKicker", { date: formatDate(result.date) })}</div>
            <h1>${t("sim.resultsTitleA")}<br><em>${t("sim.resultsTitleB")}</em></h1>
            <p class="muted" style="max-width:650px;margin:20px 0 0;font-size:12px;line-height:1.7">${t("sim.resultsSub")}</p>
          </div>
          <div class="results-actions">
            <button class="btn btn-ghost btn-small" type="button" data-export-session>${icon("download")} ${t("common.exportTranscript")}</button>
            <button class="btn btn-ghost btn-small" type="button" data-retry-result>${icon("refresh")} ${t("sim.restart")}</button>
            <button class="btn btn-primary btn-small" type="button" data-new-drill>${icon("play")} ${t("sim.newDrill")}</button>
          </div>
        </div>

        <div class="result-grid">
          <div class="score-card">
            <div class="score-ring" style="--score:${score}%">
              <span class="score-value">${score}<small>${t("sim.scoreOutOf")}</small></span>
            </div>
            <h2>${resultBand(score)}</h2>
            <p>${t("sim.resultNote")}</p>
          </div>
          <div class="signal-card">
            <h2>${t("sim.breakdown")}</h2>
            <div class="score-bars">
              ${signalKeys
                .map(
                  (key, index) => `
                    <div class="score-bar">
                      <div class="score-bar-head">
                        <span>${t(`sim.${key}`)}</span>
                        <span>${result.signals[key] || 0}/100</span>
                      </div>
                      <div class="score-bar-track">
                        <span style="--w:${result.signals[key] || 0}%;--c:${["#c8f56a", "#79e7ee", "#a99cff", "#ffc95c", "#ff7d61"][index]}"></span>
                      </div>
                    </div>`
                )
                .join("")}
            </div>
            <div class="result-note">
              ${t("sim.answered", { answered: result.answered, total: result.promptCount })} · ${t("sim.timeUsed", { n: Math.max(1, Math.round(result.elapsed / 60)) })}
            </div>
          </div>
        </div>

        <div class="review-section-head">
          <h2>${t("sim.reviewTitle")}</h2>
          <span>${t("sim.reviewMeta")}</span>
        </div>
        <div class="review-list">
          ${result.entries
            .map((entry, index) => {
              const prompt = getPrompt(entry.promptId);
              return `
                <details class="review-item">
                  <summary>
                    <span class="review-number">${String(index + 1).padStart(2, "0")}</span>
                    <span class="review-question">${escapeHtml(tr(prompt.prompt))}</span>
                    <span class="review-score">${entry.score}/100</span>
                  </summary>
                  <div class="review-body">
                    ${
                      entry.answer.trim()
                        ? `<div class="review-answer">${escapeHtml(entry.answer)}</div>`
                        : `<p class="muted" style="font-size:10px">${t("sim.noAnswer")}</p>`
                    }
                    <div class="review-feedback-list">
                      ${entry.feedback.map((key) => `<span class="tag">${escapeHtml(t(key))}</span>`).join("")}
                    </div>
                    <div class="review-model">
                      <strong>${t("sim.model")}</strong>
                      ${escapeHtml(tr(prompt.framework))}
                    </div>
                  </div>
                </details>`;
            })
            .join("")}
        </div>
      </div>
    </div>`;
}

function retryResult() {
  if (!state.lastResult) return;
  const promptIds = [...state.lastResult.promptIds];
  state.simSetup.length = promptIds.length;
  startSession(promptIds);
}

function openModal(content, wide = false) {
  state.pendingFocus = document.activeElement;
  state.modalOpen = true;
  document.body.classList.add("modal-open");
  modalRoot.innerHTML = `
    <div class="modal-backdrop" data-modal-backdrop>
      <aside class="modal-panel ${wide ? "wide" : ""}" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-close-modal aria-label="${t("common.close")}">
          ${icon("close")}
        </button>
        <div class="modal-content">${content}</div>
      </aside>
    </div>`;
  window.setTimeout(() => {
    modalRoot.querySelector(".modal-close")?.focus();
  }, 20);
}

function closeModal(restoreFocus = true) {
  state.modalOpen = false;
  document.body.classList.remove("modal-open");
  modalRoot.innerHTML = "";
  if (restoreFocus && state.pendingFocus instanceof HTMLElement) {
    state.pendingFocus.focus();
  }
  state.pendingFocus = null;
}

function openRoleModal(roleId) {
  const role = getRole(roleId);
  if (!role) return;
  const company = getCompany(role.companyId);
  const saved = state.saved.roles.includes(role.id);
  const rhythm = [
    ["focus", role.rhythm.focus],
    ["hours", role.rhythm.hours],
    ["oncall", role.rhythm.oncall],
    ["meetings", role.rhythm.meetings]
  ];

  openModal(
    `
      <div class="modal-kicker">${t("detail.kicker", { company: company.name })}</div>
      <div class="modal-company-row" style="--company-color:${company.color}">
        ${companySigil(company)}
        <span>${escapeHtml(company.name)} · ${escapeHtml(company.hq)}</span>
      </div>
      <h2>${escapeHtml(tr(role.title))}</h2>
      <div class="modal-meta-row">
        <span class="tag tag-acid">${escapeHtml(role.level)}</span>
        <span class="tag">${escapeHtml(trackLabel(role))}</span>
        <span class="tag">${escapeHtml(role.location)}</span>
        <span class="tag tag-cyan">${t("common.density")} ${role.density}/5</span>
      </div>
      <a class="btn btn-primary btn-small modal-top-apply" href="${applicationUrlForRole(role)}"
        target="_blank" rel="noopener noreferrer">
        ${icon("external")} ${t("apply.applyNow")}
      </a>
      <p>${escapeHtml(tr(role.summary))}</p>
      <div class="comp-hero">
        <div class="comp-box">
          <span class="comp-box-label">${t("detail.total")}</span>
          <span class="comp-box-value acid">${formatMoney(role, role.total)}</span>
        </div>
        <div class="comp-box">
          <span class="comp-box-label">${t("detail.base")}</span>
          <span class="comp-box-value">${formatMoney(role, role.base)}</span>
        </div>
      </div>
      <p class="comp-note" style="margin-top:-19px">${compensationNote(role)} ${t("detail.compensationNote")}</p>

      <h3><span class="modal-section-num">01</span>${t("detail.workTitle")}</h3>
      <p class="muted" style="font-size:10px;margin-top:-5px">${t("detail.workDesc")}</p>
      <div class="rhythm-grid">
        ${rhythm
          .map(
            ([key, value]) => `
              <div class="rhythm-item">
                <span class="rhythm-item-label">${t(`detail.${key}`)}</span>
                <span class="rhythm-item-value">${value}/5</span>
                ${densityBars(value, company.color)}
              </div>`
          )
          .join("")}
      </div>

      <div class="role-info-grid">
        <div class="role-info-cell"><span>${t("detail.education")}</span><strong>${escapeHtml(tr(role.education))}</strong></div>
        <div class="role-info-cell"><span>${t("detail.majors")}</span><strong>${escapeHtml(tr(role.majors))}</strong></div>
        <div class="role-info-cell"><span>${t("detail.experience")}</span><strong>${escapeHtml(tr(role.experience))}</strong></div>
        <div class="role-info-cell"><span>${t("detail.profileBasis")}</span><strong>${salaryBasisLabel(role)}</strong></div>
      </div>

      <h3><span class="modal-section-num">02</span>${t("detail.skills")}</h3>
      <div class="modal-meta-row">
        ${role.skills.map((skill) => `<span class="tag">${escapeHtml(skill)}</span>`).join("")}
      </div>

      <h3><span class="modal-section-num">03</span>${t("detail.path")}</h3>
      <p>${escapeHtml(tr(role.path))}</p>

      <h3><span class="modal-section-num">04</span>${t("detail.screening")}</h3>
      <div class="callout">${escapeHtml(tr(role.screening))}</div>

      <h3><span class="modal-section-num">05</span>${t("detail.loop")}</h3>
      <div class="loop-list">
        ${company.loop
          .map(
            (step, index) => `
              <div class="loop-item">
                <span class="loop-item-index">0${index + 1}</span>
                <strong>${escapeHtml(tr(step.name))}</strong>
                <span>${escapeHtml(tr(step.detail))}</span>
              </div>`
          )
          .join("")}
      </div>

      <h3><span class="modal-section-num">06</span>${t("detail.sources")}</h3>
      ${sourceLinkList(role.sourceIds)}

      <div class="callout" style="border-left-color:var(--coral);background:rgba(255,125,97,.045)">
        ${t("detail.disclaimer")}
      </div>

      <div class="modal-actions">
        <a class="btn btn-primary btn-small" href="${applicationUrlForRole(role)}" target="_blank" rel="noopener noreferrer">
          ${icon("external")} ${t("apply.applyNow")}
        </a>
        <button class="btn btn-ghost btn-small" type="button" data-save-role="${role.id}" aria-pressed="${saved}">
          ${icon("bookmark")} <span data-save-label>${saved ? t("common.savedRole") : t("detail.saveRole")}</span>
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-sim-from-role="${role.track}" data-sim-company-id="${company.id}">
          ${icon("play")} ${t("home.ctaSimulate")}
        </button>
      </div>
      <p class="comp-note" style="margin-top:14px">${t("apply.note", { company: company.name })}</p>
    `,
    true
  );
  syncSavedButtons();
}

function openResourceModal(resourceId) {
  const resource = getResource(resourceId);
  if (!resource) return;
  const saved = state.saved.resources.includes(resource.id);
  const body = resource.body[state.lang] || resource.body.en;
  openModal(
    `
      <div class="modal-kicker">${t("intel.resourceKicker", {
        type: resourceTypeLabel(resource.type),
        minutes: resource.readTime
      })}</div>
      <h2>${escapeHtml(tr(resource.title))}</h2>
      <p class="muted">${escapeHtml(tr(resource.summary))}</p>
      <div class="modal-meta-row">
        <span class="tag tag-acid">${escapeHtml(tr(
          RESOURCE_CATEGORIES.find((category) => category.id === resource.category)?.label
        ))}</span>
        <span class="tag">${t("common.updated", { d: resource.updated })}</span>
        <span class="tag">${t("common.readTime", { n: resource.readTime })}</span>
      </div>
      <div class="read-modal-body">${body}</div>
      ${
        resource.template
          ? `<div class="callout"><strong>${t("common.copy")}</strong><br>${escapeHtml(tr(resource.template))}</div>
             <button class="btn btn-ghost btn-small" type="button" data-copy-template="${resource.id}">
               ${icon("copy")} ${t("common.copy")}
             </button>`
          : ""
      }
      <h3>${t("intel.resourceSources")}</h3>
      ${sourceLinkList(resource.sourceIds)}
      <div class="modal-actions">
        <button class="btn btn-primary btn-small" type="button" data-save-resource="${resource.id}" aria-pressed="${saved}">
          ${icon("bookmark")} ${saved ? t("common.saved") : t("common.save")}
        </button>
      </div>
    `,
    true
  );
  syncSavedButtons();
}

function openInstallModal() {
  const installed = isStandaloneMode();
  const available = Boolean(state.installPrompt) && !installed;
  openModal(
    `
      <div class="modal-kicker">${t("install.kicker")}</div>
      <div class="install-brand-lockup">
        <img src="./assets/high-table-logo.jpg" alt="High Table Recruitment Institute">
        <div>
          <strong>High Table</strong>
          <span>Recruitment Institute</span>
        </div>
      </div>
      <h2>${t("install.title")}</h2>
      <p>${t("install.intro")}</p>
      ${
        installed
          ? `<div class="callout">${t("install.installed")}</div>`
          : available
            ? `<div class="callout"><strong>${t("install.automatic")}</strong></div>
               <button class="btn btn-primary" type="button" data-install-now>
                 ${icon("download")} ${t("install.installNow")}
               </button>`
            : ""
      }
      <h3>${t("install.manualTitle")}</h3>
      <div class="install-steps">
        <section>
          <span class="mono">01 / IOS</span>
          <strong>${t("install.iosTitle")}</strong>
          <p>${t("install.ios")}</p>
        </section>
        <section>
          <span class="mono">02 / ANDROID</span>
          <strong>${t("install.androidTitle")}</strong>
          <p>${t("install.android")}</p>
        </section>
        <section>
          <span class="mono">03 / DESKTOP</span>
          <strong>${t("install.desktopTitle")}</strong>
          <p>${t("install.desktop")}</p>
        </section>
      </div>
      ${!available && !installed ? `<p class="muted" style="margin-top:20px">${t("install.unsupported")}</p>` : ""}
      <div class="callout" style="border-left-color:var(--cyan);background:rgba(121,231,238,.04)">
        ${t("install.note")}
      </div>
    `,
    true
  );
}

async function triggerInstallPrompt() {
  if (isStandaloneMode()) {
    toast(t("install.installed"));
    return;
  }
  if (!state.installPrompt) {
    openInstallModal();
    return;
  }

  const prompt = state.installPrompt;
  state.installPrompt = null;
  prompt.prompt();
  const choice = await prompt.userChoice.catch(() => ({ outcome: "dismissed" }));
  updateInstallUI();
  if (choice.outcome === "accepted") {
    toast(t("install.accepted"));
  } else {
    toast(t("install.dismissed"));
  }
  if (state.modalOpen) closeModal();
}

function openInfoModal(type) {
  if (type === "methodology") {
    openModal(
      `
        <div class="modal-kicker">${t("info.methodologyKicker")}</div>
        <h2>${t("info.methodologyTitle")}</h2>
        <div class="read-modal-body">${t("info.methodologyBody")}</div>
      `,
      true
    );
    return;
  }

  if (type === "disclaimer") {
    openModal(
      `
        <div class="modal-kicker">${t("info.disclaimerKicker")}</div>
        <h2>${t("info.disclaimerTitle")}</h2>
        <div class="read-modal-body">${t("info.disclaimerBody")}</div>
      `,
      true
    );
    return;
  }

  if (type === "sources") {
    const groups = SOURCE_GROUPS.map((group) => {
      const sources = Object.entries(SOURCES).filter(([, source]) => source.kind === group.id);
      if (!sources.length) return "";
      return `
        <h3>${escapeHtml(tr(group.label))}</h3>
        <div class="source-links">
          ${sources
            .map(
              ([, source]) => `
                <a class="source-link" href="${source.url}" target="_blank" rel="noopener noreferrer">
                  <span>
                    <strong>${escapeHtml(tr(source.title))}</strong>
                    <em>${escapeHtml(tr(source.note))}</em>
                  </span>
                  ${icon("external")}
                </a>`
            )
            .join("")}
        </div>`;
    }).join("");
    openModal(
      `
        <div class="modal-kicker">${t("info.sourcesKicker")}</div>
        <h2>${t("info.sourcesTitle")}</h2>
        <p class="muted">${t("info.sourcesIntro")}</p>
        ${groups}
      `,
      true
    );
    return;
  }

  if (type === "saved") {
    const roles = state.saved.roles.map((id) => getRole(id)).filter(Boolean);
    const resources = state.saved.resources.map((id) => getResource(id)).filter(Boolean);
    openModal(
      `
        <div class="modal-kicker">${t("info.savedKicker")}</div>
        <h2>${t("info.savedTitle")}</h2>
        ${
          !roles.length && !resources.length
            ? `<div class="callout">${t("info.savedEmpty")}</div>`
            : `
              ${
                roles.length
                  ? `<h3>${t("info.savedRoles")}</h3><div class="source-links">${roles
                      .map((role) => {
                        const company = getCompany(role.companyId);
                        return `<button class="source-link" type="button" data-saved-role-open="${role.id}" style="text-align:left">
                          <span><strong>${escapeHtml(tr(role.title))}</strong><em>${escapeHtml(company.name)} · ${escapeHtml(role.level)} · ${formatMoney(role, role.total)}</em></span>
                          ${icon("arrowUpRight")}
                        </button>`;
                      })
                      .join("")}</div>`
                  : ""
              }
              ${
                resources.length
                  ? `<h3>${t("info.savedNotes")}</h3><div class="source-links">${resources
                      .map(
                        (resource) => `<button class="source-link" type="button" data-saved-resource-open="${resource.id}" style="text-align:left">
                          <span><strong>${escapeHtml(tr(resource.title))}</strong><em>${resourceTypeLabel(resource.type)} · ${t("common.readTime", { n: resource.readTime })}</em></span>
                          ${icon("arrowUpRight")}
                        </button>`
                      )
                      .join("")}</div>`
                  : ""
              }
              <div class="modal-actions">
                <button class="btn btn-ghost btn-small" type="button" data-clear-saved>${icon("trash")} ${t("info.clearSaved")}</button>
              </div>
            `
        }
      `,
      true
    );
  }
}

function downloadFile(filename, content, mime = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1200);
  toast(t("common.downloadStarted"));
}

function csvEscape(value) {
  const text = String(value ?? "").replaceAll('"', '""');
  return `"${text}"`;
}

function downloadRolesCsv() {
  const roles = getFilteredRoles();
  const headings = [
    t("common.company"),
    t("common.roleBrief"),
    t("common.region"),
    t("common.track"),
    t("common.level"),
    t("common.location"),
    `${t("common.baseComp")} min`,
    `${t("common.baseComp")} max`,
    `${t("common.totalComp")} min`,
    `${t("common.totalComp")} max`,
    "Currency",
    "Unit",
    t("common.density"),
    t("common.education"),
    t("common.majors"),
    t("common.experience"),
    "Skills",
    t("apply.companyPortal"),
    t("common.sources")
  ];
  const rows = roles.map((role) => {
    const company = getCompany(role.companyId);
    return [
      company.name,
      tr(role.title),
      regionLabel(roleRegion(role)),
      trackLabel(role),
      role.level,
      role.location,
      role.base[0],
      role.base[1],
      role.total[0],
      role.total[1],
      role.currency,
      role.unit,
      role.density,
      tr(role.education),
      tr(role.majors),
      tr(role.experience),
      role.skills.join(" | "),
      applicationUrlForRole(role),
      role.sourceIds.map((id) => SOURCES[id]?.url).filter(Boolean).join(" | ")
    ];
  });
  const csv = [headings, ...rows].map((row) => row.map(csvEscape).join(",")).join("\r\n");
  downloadFile(`high-table-role-atlas-${state.lang}.csv`, `\uFEFF${csv}`, "text/csv;charset=utf-8");
}

function markdownList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function downloadStarterPack() {
  const date = formatDate(new Date());
  const roleLines = ROLES.map((role) => {
    const company = getCompany(role.companyId);
    return `- **${company.name} — ${tr(role.title)}** · ${role.level} · ${formatMoney(role, role.total)} · ${t("common.density")} ${role.density}/5 · [${t("apply.applyShort")}](${applicationUrlForRole(role)})`;
  });
  const resourceLines = RESOURCES.map(
    (resource) => `- **${tr(resource.title)}** — ${tr(resource.summary)}`
  );
  const promptLines = PROMPTS.map(
    (prompt) => `- **${tr(prompt.title)}** — ${tr(prompt.prompt)}`
  );
  const sourceLines = Object.values(SOURCES).map(
    (source) => `- [${tr(source.title)}](${source.url}) — ${tr(source.note)}`
  );
  const content = `# High Table Recruitment Institute — ${date}

## Role atlas

${markdownList(roleLines)}

## Field notes

${markdownList(resourceLines)}

## Rehearsal prompts

${markdownList(promptLines)}

## Offer checklist

- Separate base, target bonus, annualized equity and one-time cash.
- Identify the level's real scope, decision rights and promotion clock.
- Ask for actual bonus multipliers, refresh history and vesting conditions.
- Convert currencies and separate public-market from private-company equity.
- Ask about on-call, time-zone overlap, launch cadence and manager style.

## Public sources

${markdownList(sourceLines)}

---

Independent editorial material. Compensation is a directional benchmark, not an offer. Interview prompts are public-pattern rehearsal material, not confidential company questions.
`;
  downloadFile(`high-table-starter-pack-${state.lang}.md`, content, "text/markdown;charset=utf-8");
}

function downloadTranscript() {
  if (!state.lastResult) return;
  const result = state.lastResult;
  const lines = [
    `# High Table — ${t("sim.resultsKicker", { date: formatDate(result.date) })}`,
    "",
    `**${t("sim.score")}:** ${result.score}/100 — ${resultBand(result.score)}`,
    `**${t("sim.breakdown")}:** ${result.signalKeys
      .map((key) => `${t(`sim.${key}`)} ${result.signals[key]}/100`)
      .join(" · ")}`,
    `**${t("sim.answered", { answered: result.answered, total: result.promptCount })}**`,
    "",
    `## ${t("sim.reviewTitle")}`,
    ""
  ];
  result.entries.forEach((entry, index) => {
    const prompt = getPrompt(entry.promptId);
    lines.push(
      `### ${index + 1}. ${tr(prompt.prompt)}`,
      "",
      `**${t("sim.score")}:** ${entry.score}/100`,
      "",
      entry.answer.trim() || t("sim.noAnswer"),
      "",
      `**${t("sim.model")}:** ${tr(prompt.framework)}`,
      ""
    );
  });
  lines.push(
    "---",
    "",
    t("sim.resultNote")
  );
  downloadFile(
    t("sim.transcriptName", { date: new Date().toISOString().slice(0, 10) }),
    lines.join("\n"),
    "text/markdown;charset=utf-8"
  );
}

async function copyTemplate(resourceId) {
  const resource = getResource(resourceId);
  if (!resource?.template) return;
  const text = tr(resource.template);
  try {
    await navigator.clipboard.writeText(text);
    toast(t("common.copied"));
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    toast(t("common.copied"));
  }
}

function refreshSavedChrome() {
  const savedList = document.getElementById("intel-saved-list");
  if (savedList) savedList.innerHTML = savedResourceItems();
  if (state.route.name === "roles" && state.roleFilters.savedOnly) refreshRoleResults();
  if (state.modalOpen && modalRoot.querySelector('[data-clear-saved]')) openInfoModal("saved");
}

document.addEventListener("click", (event) => {
  const target = event.target;
  const languageSwitcher = document.getElementById("language-switcher");
  if (languageSwitcher && !target.closest("#language-switcher")) closeLanguageMenu();

  const backdrop = target.closest("[data-modal-backdrop]");
  if (backdrop && target === backdrop) {
    closeModal();
    return;
  }
  if (target.closest("[data-close-modal]")) {
    closeModal();
    return;
  }

  const languageButton = target.closest("button[data-lang]");
  if (languageButton) {
    setLanguage(languageButton.dataset.lang);
    return;
  }

  if (target.closest(".language-trigger")) {
    const switcher = document.getElementById("language-switcher");
    const trigger = switcher?.querySelector(".language-trigger");
    const isOpen = switcher?.classList.toggle("is-open");
    trigger?.setAttribute("aria-expanded", String(Boolean(isOpen)));
    return;
  }

  if (target.closest("#menu-toggle")) {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("mobile-nav");
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.hidden = isOpen;
    return;
  }

  if (target.closest("#saved-chip")) {
    openInfoModal("saved");
    return;
  }

  if (target.closest("[data-route-link]")) closeMobileNav();

  if (target.closest("[data-install-app]")) {
    event.preventDefault();
    closeMobileNav();
    openInstallModal();
    return;
  }

  if (target.closest("[data-install-now]")) {
    event.preventDefault();
    triggerInstallPrompt();
    return;
  }

  const saveRole = target.closest("[data-save-role]");
  if (saveRole) {
    event.preventDefault();
    event.stopPropagation();
    toggleSaved("role", saveRole.dataset.saveRole);
    return;
  }

  const saveResource = target.closest("[data-save-resource]");
  if (saveResource) {
    event.preventDefault();
    event.stopPropagation();
    toggleSaved("resource", saveResource.dataset.saveResource);
    return;
  }

  const modalButton = target.closest("[data-open-modal]");
  if (modalButton) {
    openInfoModal(modalButton.dataset.openModal);
    return;
  }

  const savedRoleOpen = target.closest("[data-saved-role-open]");
  if (savedRoleOpen) {
    openRoleModal(savedRoleOpen.dataset.savedRoleOpen);
    return;
  }

  const savedResourceOpen = target.closest("[data-saved-resource-open]");
  if (savedResourceOpen) {
    openResourceModal(savedResourceOpen.dataset.savedResourceOpen);
    return;
  }

  const roleNode = target.closest("[data-role-id]");
  if (roleNode && !target.closest("button, a")) {
    openRoleModal(roleNode.dataset.roleId);
    return;
  }

  const resourceNode = target.closest("[data-open-resource]");
  if (resourceNode && !target.closest("button, a")) {
    openResourceModal(resourceNode.dataset.openResource);
    return;
  }

  const categoryButton = target.closest("[data-intel-category]");
  if (categoryButton) {
    state.intelCategory = categoryButton.dataset.intelCategory;
    refreshIntelligenceResults();
    return;
  }

  const viewButton = target.closest("[data-view]");
  if (viewButton) {
    state.roleView = viewButton.dataset.view;
    refreshRoleResults();
    return;
  }

  if (target.closest("[data-toggle-saved-filter]")) {
    state.roleFilters.savedOnly = !state.roleFilters.savedOnly;
    refreshRoleResults();
    return;
  }

  if (target.closest("[data-clear-filters]")) {
    clearRoleFilters();
    return;
  }

  const downloadButton = target.closest("[data-download]");
  if (downloadButton) {
    if (downloadButton.dataset.download === "roles") downloadRolesCsv();
    if (downloadButton.dataset.download === "starter-pack") downloadStarterPack();
    return;
  }

  const simMode = target.closest("[data-sim-mode]");
  if (simMode) {
    state.simSetup.mode = simMode.dataset.simMode;
    render();
    return;
  }

  const simLength = target.closest("[data-sim-length]");
  if (simLength) {
    state.simSetup.length = Number(simLength.dataset.simLength);
    render();
    return;
  }

  if (target.closest("[data-start-sim]")) {
    startSession();
    return;
  }

  if (target.closest("[data-pause-session]")) {
    togglePauseSession();
    return;
  }

  if (target.closest("[data-exit-session]")) {
    exitSession();
    return;
  }

  if (target.closest("[data-toggle-probe]")) {
    const probe = document.getElementById("probe-copy");
    if (probe) probe.hidden = !probe.hidden;
    return;
  }

  if (target.closest("[data-next-question]")) {
    advanceQuestion(false);
    return;
  }

  if (target.closest("[data-skip-question]")) {
    advanceQuestion(true);
    return;
  }

  if (target.closest("[data-retry-result]")) {
    retryResult();
    return;
  }

  if (target.closest("[data-new-drill]")) {
    state.lastResult = null;
    state.session = null;
    render();
    return;
  }

  if (target.closest("[data-export-session]")) {
    downloadTranscript();
    return;
  }

  const copyButton = target.closest("[data-copy-template]");
  if (copyButton) {
    copyTemplate(copyButton.dataset.copyTemplate);
    return;
  }

  const simFromRole = target.closest("[data-sim-from-role]");
  if (simFromRole) {
    const track = simFromRole.dataset.simFromRole;
    state.simSetup.mode = track === "product" || track === "ops" ? "system" : "technical";
    state.simSetup.company = simFromRole.dataset.simCompanyId || "all";
    state.simSetup.length = 4;
    state.lastResult = null;
    closeModal();
    navigate("/simulate");
    return;
  }

  if (target.closest("[data-clear-saved]")) {
    if (!window.confirm(t("info.clearConfirm"))) return;
    state.saved = { roles: [], resources: [] };
    saveState();
    syncSavedButtons();
    refreshSavedChrome();
    closeModal();
    toast(t("common.removedToast"));
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  const roleFilter = target.closest("[data-role-filter]");
  if (roleFilter) {
    state.roleFilters[roleFilter.dataset.roleFilter] = roleFilter.value;
    refreshRoleResults();
    return;
  }
  if (target.matches("[data-sim-difficulty]")) {
    state.simSetup.difficulty = target.value;
    return;
  }
  if (target.matches("[data-sim-company]")) {
    state.simSetup.company = target.value;
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.id === "role-search") {
    state.roleFilters.q = target.value;
    refreshRoleResults();
    return;
  }
  if (target.id === "answer-input" && state.session) {
    const promptId = state.session.promptIds[state.session.current];
    state.session.answers[promptId] = target.value;
    const count = document.getElementById("word-count");
    if (count) {
      const units =
        state.lang === "zh"
          ? target.value.replace(/\s/g, "").length
          : target.value.trim()
            ? target.value.trim().split(/\s+/).length
            : 0;
      count.textContent = t(state.lang === "zh" ? "sim.chars" : "sim.words", { n: units });
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (state.modalOpen) {
      closeModal();
      return;
    }
    closeLanguageMenu();
    closeMobileNav();
  }

  if (
    (event.metaKey || event.ctrlKey) &&
    event.key === "Enter" &&
    state.session &&
    state.route.name === "simulate"
  ) {
    event.preventDefault();
    advanceQuestion(false);
    return;
  }

  if (event.key === "Enter" && !event.target.closest("button, a, input, textarea, select")) {
    const roleNode = event.target.closest("[data-role-id]");
    if (roleNode) {
      event.preventDefault();
      openRoleModal(roleNode.dataset.roleId);
      return;
    }
    const resourceNode = event.target.closest("[data-open-resource]");
    if (resourceNode) {
      event.preventDefault();
      openResourceModal(resourceNode.dataset.openResource);
    }
  }
});

window.addEventListener("hashchange", () => {
  state.route = routeFromHash();
  if (state.route.name !== "simulate") stopTimer();
  render();
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  state.installPrompt = event;
  updateInstallUI();
});

window.addEventListener("appinstalled", () => {
  state.installPrompt = null;
  updateInstallUI();
  toast(t("install.installed"));
});

window.matchMedia("(display-mode: standalone)").addEventListener?.("change", () => {
  updateInstallUI();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Service worker registration failed:", error);
    });
  });
}

applyStaticI18n();
updateHeader();
render();

function roleEmptyState() {
  return `
    <div class="empty-state">
      <div>
        ${icon("search")}
        <h3>${t("roles.emptyTitle")}</h3>
        <p>${t("roles.emptyBody")}</p>
        <button class="btn btn-ghost btn-small" type="button" data-clear-filters>${t("roles.clearFilters")}</button>
      </div>
    </div>`;
}

function roleResultsMarkup(roles = getFilteredRoles()) {
  if (!roles.length) return roleEmptyState();
  return state.roleView === "table" ? roleTable(roles) : roles.map(roleCard).join("");
}

function renderRolesPage() {
  const levels = [...new Set(ROLES.map((role) => role.level))].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })
  );
  const currentRoles = getFilteredRoles();
  const selectedCompany =
    state.roleFilters.company === "all"
      ? ""
      : getCompany(state.roleFilters.company)?.name || "";

  app.innerHTML = `
    <div class="page">
      <div class="container">
        <div class="page-head">
          <div>
            <div class="eyebrow"><span class="eyebrow-index">01</span>${t("roles.eyebrow")}</div>
            <h1>${t("roles.titleA")}<br><em>${t("roles.titleB")}</em></h1>
          </div>
          <div class="page-head-side">
            <p>${t("roles.side")}</p>
            <div class="page-head-note">${icon("info")} ${t("roles.note")}</div>
            <button class="btn btn-ghost btn-small" type="button" data-download="roles" style="margin-top:18px">
              ${icon("download")} ${t("roles.downloadData")}
            </button>
          </div>
        </div>

        <div class="atlas-stats">
          <div class="atlas-stat">
            <span class="atlas-stat-value acid">${ROLES.length}</span>
            <span class="atlas-stat-label">${t("roles.statBriefs")}</span>
          </div>
          <div class="atlas-stat">
            <span class="atlas-stat-value">${COMPANIES.length}</span>
            <span class="atlas-stat-label">${t("roles.statCompanies")}</span>
          </div>
          <div class="atlas-stat">
            <span class="atlas-stat-value">${ROLES.filter((role) => roleRegion(role) === "CN").length}</span>
            <span class="atlas-stat-label">${t("roles.statMainland")}</span>
          </div>
          <div class="atlas-stat">
            <span class="atlas-stat-value">${ROLES.filter((role) => roleRegion(role) === "HK").length}</span>
            <span class="atlas-stat-label">${t("roles.statHongKong")}</span>
          </div>
        </div>

        <div class="filter-shell">
          <div class="filters">
            <div class="field search-field">
              <span class="field-icon">${icon("search")}</span>
              <input id="role-search" class="text-input" type="search" autocomplete="off"
                value="${escapeHtml(state.roleFilters.q)}"
                placeholder="${t("roles.searchPlaceholder")}"
                aria-label="${t("roles.searchPlaceholder")}">
            </div>
            <div class="field">
              <select id="role-company" class="select-input" data-role-filter="company" aria-label="${t("common.company")}">
                <option value="all">${t("common.allCompanies")}</option>
                ${COMPANIES.map(
                  (company) =>
                    `<option value="${company.id}" ${selectedCompany === company.name ? "selected" : ""}>${escapeHtml(company.name)}</option>`
                ).join("")}
              </select>
            </div>
            <div class="field">
              <select id="role-region" class="select-input" data-role-filter="region" aria-label="${t("common.region")}">
                <option value="all">${t("common.allRegions")}</option>
                <option value="CN" ${state.roleFilters.region === "CN" ? "selected" : ""}>${t("common.regionCn")}</option>
                <option value="HK" ${state.roleFilters.region === "HK" ? "selected" : ""}>${t("common.regionHk")}</option>
                <option value="US" ${state.roleFilters.region === "US" ? "selected" : ""}>${t("common.regionUs")}</option>
              </select>
            </div>
            <div class="field">
              <select id="role-track" class="select-input" data-role-filter="track" aria-label="${t("common.track")}">
                <option value="all">${t("common.allTracks")}</option>
                ${TRACKS.map(
                  (track) =>
                    `<option value="${track.id}" ${state.roleFilters.track === track.id ? "selected" : ""}>${escapeHtml(tr(track.label))}</option>`
                ).join("")}
              </select>
            </div>
            <div class="field">
              <select id="role-level" class="select-input" data-role-filter="level" aria-label="${t("common.level")}">
                <option value="all">${t("common.allLevels")}</option>
                ${levels.map(
                  (level) =>
                    `<option value="${escapeHtml(level)}" ${state.roleFilters.level === level ? "selected" : ""}>${escapeHtml(level)}</option>`
                ).join("")}
              </select>
            </div>
            <div class="filter-tools">
              <button class="filter-toggle ${state.roleFilters.savedOnly ? "is-active" : ""}" type="button"
                data-toggle-saved-filter aria-pressed="${state.roleFilters.savedOnly}" title="${t("roles.savedOnly")}">
                ${icon("bookmark")}
              </button>
              <button class="filter-toggle ${state.roleView === "grid" ? "is-active" : ""}" type="button"
                data-view="grid" title="${t("roles.gridView")}" aria-label="${t("roles.gridView")}">
                ${icon("grid")}
              </button>
              <button class="filter-toggle ${state.roleView === "table" ? "is-active" : ""}" type="button"
                data-view="table" title="${t("roles.tableView")}" aria-label="${t("roles.tableView")}">
                ${icon("list")}
              </button>
            </div>
          </div>
        </div>

        <div class="filter-status">
          <span class="filter-status-count" id="role-result-count">
            ${t("roles.showing", { shown: currentRoles.length, total: ROLES.length })}
          </span>
          <div style="display:flex;align-items:center;gap:18px">
            <label class="mono" style="color:var(--muted);font-size:8px">
              ${t("roles.sort")}
              <select id="role-sort" class="select-input" data-role-filter="sort"
                style="display:inline-block;width:auto;height:30px;margin-left:6px;padding:0 30px 0 8px;background-position:calc(100% - 12px) 12px,calc(100% - 8px) 12px">
                <option value="default" ${state.roleFilters.sort === "default" ? "selected" : ""}>${t("roles.sortDefault")}</option>
                <option value="pay" ${state.roleFilters.sort === "pay" ? "selected" : ""}>${t("roles.sortPay")}</option>
                <option value="density" ${state.roleFilters.sort === "density" ? "selected" : ""}>${t("roles.sortDensity")}</option>
                <option value="company" ${state.roleFilters.sort === "company" ? "selected" : ""}>${t("roles.sortCompany")}</option>
              </select>
            </label>
            <button class="clear-filters" type="button" data-clear-filters>${t("roles.clearFilters")}</button>
          </div>
        </div>

        <div class="role-grid ${state.roleView === "table" ? "atlas-table-host" : ""}" id="role-results">
          ${roleResultsMarkup(currentRoles)}
        </div>
      </div>
    </div>`;
}

function refreshRoleResults() {
  const roles = getFilteredRoles();
  const results = document.getElementById("role-results");
  const count = document.getElementById("role-result-count");
  if (results) {
    results.className = `role-grid ${state.roleView === "table" ? "atlas-table-host" : ""}`;
    results.innerHTML = roleResultsMarkup(roles);
  }
  if (count) {
    count.innerHTML = t("roles.showing", { shown: roles.length, total: ROLES.length });
  }
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.roleView);
  });
  document.querySelector("[data-toggle-saved-filter]")?.classList.toggle(
    "is-active",
    state.roleFilters.savedOnly
  );
  syncSavedButtons();
}

function clearRoleFilters() {
  state.roleFilters = {
    q: "",
    company: "all",
    region: "all",
    track: "all",
    level: "all",
    sort: "default",
    savedOnly: false
  };
  render();
}

function sourceLink(sourceId) {
  const source = SOURCES[sourceId];
  if (!source) return "";
  return `
    <a class="source-link" href="${source.url}" target="_blank" rel="noopener noreferrer"
      title="${t("common.external")}">
      <span>
        <strong>${escapeHtml(tr(source.title))}</strong>
        <em>${escapeHtml(tr(source.note))}</em>
      </span>
      ${icon("external")}
    </a>`;
}

function sourceLinkList(sourceIds, limit = null) {
  const ids = limit ? sourceIds.slice(0, limit) : sourceIds;
  return `<div class="source-links">${ids.map(sourceLink).join("")}</div>`;
}

function renderCompanyPage(companyId) {
  const company = getCompany(companyId);
  if (!company) {
    navigate("/roles");
    return;
  }
  const roles = getRolesForCompany(company.id);
  const total = company.payMix.base + company.payMix.bonus + company.payMix.equity;

  app.innerHTML = `
    <div class="page">
      <div class="container">
        <a class="text-link" href="#/roles" style="margin-bottom:30px">${icon("arrow", "flip")} ${t("company.back")}</a>
        <div class="company-head">
          <div>
            <div class="eyebrow"><span class="eyebrow-index">ATLAS</span>${escapeHtml(company.legal)}</div>
            <div class="company-title-row" style="--company-color:${company.color}">
              ${companySigil(company)}
              <h1>${escapeHtml(company.name)}</h1>
            </div>
            <p class="company-description">${escapeHtml(tr(company.summary))}</p>
          </div>
          <div class="company-head-meta">
            <dl>
              <div><dt>${t("company.hq")}</dt><dd>${escapeHtml(company.hq)}</dd></div>
              <div><dt>${t("company.hubs")}</dt><dd>${escapeHtml(company.hubs.join(" · "))}</dd></div>
              <div><dt>${t("company.tracks")}</dt><dd>${company.tracks.map((id) => escapeHtml(trackLabel(id))).join(" · ")}</dd></div>
              <div><dt>${t("company.basis")}</dt><dd>${t("company.basisValue")}</dd></div>
              <div><dt>${t("common.roleBrief")}</dt><dd>${t("company.activeBriefs", { n: roles.length })}</dd></div>
            </dl>
            <a class="btn btn-ghost btn-small" href="${getJobPortal(company.id)}" target="_blank"
              rel="noopener noreferrer" style="margin-top:16px">
              ${icon("external")} ${t("apply.companyPortal")}
            </a>
          </div>
        </div>

        <div class="company-body">
          <div>
            <section class="company-section">
              <h2>${t("company.orgTitle")}</h2>
              <p class="muted" style="max-width:620px;margin-top:-14px;font-size:11px">${t("company.orgDesc")}</p>
              <div class="org-grid">
                ${company.orgs
                  .map(
                    (org, index) => `
                      <article class="org-item" style="--company-color:${company.color}">
                        <span class="org-item-index">0${index + 1} / ${escapeHtml(company.name.toUpperCase())}</span>
                        <strong>${escapeHtml(tr(org.name))}</strong>
                        <span>${escapeHtml(tr(org.focus))}</span>
                      </article>`
                  )
                  .join("")}
              </div>
            </section>

            <section class="company-section">
              <h2>${t("company.openRoles", { company: company.name })}</h2>
              <div class="role-grid">
                ${roles.map(roleCard).join("")}
              </div>
            </section>

            <section class="company-section">
              <h2>${t("company.loopTitle")}</h2>
              <p class="muted" style="max-width:650px;margin-top:-14px;font-size:11px">${t("company.loopDesc")}</p>
              <div class="loop-list">
                ${company.loop
                  .map(
                    (step, index) => `
                      <div class="loop-item">
                        <span class="loop-item-index">0${index + 1}</span>
                        <strong>${escapeHtml(tr(step.name))}</strong>
                        <span>${escapeHtml(tr(step.detail))}</span>
                      </div>`
                  )
                  .join("")}
              </div>
            </section>
          </div>

          <aside>
            <section class="company-aside-card">
              <h3>${t("company.payTitle")}</h3>
              <div class="pay-stack" aria-label="${t("company.payTitle")}">
                <span style="--w:${(company.payMix.base / total) * 100}%;--c:var(--acid)"></span>
                <span style="--w:${(company.payMix.bonus / total) * 100}%;--c:var(--cyan)"></span>
                <span style="--w:${(company.payMix.equity / total) * 100}%;--c:var(--violet)"></span>
              </div>
              <div class="pay-stack-labels">
                <span>${t("home.payBase")} ${company.payMix.base}%</span>
                <span>${t("home.payBonus")} ${company.payMix.bonus}%</span>
                <span>${t("home.payEquity")} ${company.payMix.equity}%</span>
              </div>
              <p class="muted" style="font-size:10px;line-height:1.7;margin:17px 0 0">${escapeHtml(tr(company.payModel))}</p>
            </section>

            <section class="company-aside-card">
              <h3>${t("company.signalTitle")}</h3>
              <ul class="signal-list">
                ${company.signals.map((signal) => `<li>${escapeHtml(tr(signal))}</li>`).join("")}
              </ul>
            </section>

            <section class="company-aside-card">
              <h3>${t("company.sourceTitle")}</h3>
              <p class="muted" style="font-size:10px;line-height:1.7;margin-bottom:14px">${t("company.sourceDesc")}</p>
              ${sourceLinkList(company.sources)}
            </section>
          </aside>
        </div>
      </div>
    </div>`;
}
