# 高桌招聘研究院 / High Table Recruitment Institute

一个可直接部署到 GitHub Pages 的静态职业情报网站。默认英语，支持中文与法语切换。

## 已实现

- **岗位图谱**：24 家公司、55 份岗位画像，覆盖美国、中国大陆与香港的科技、互联网、硬件和金融企业。
- **官方申请入口**：每个岗位卡片与详情页都可跳转到所属公司的官方招聘门户。
- **筛选与比较**：公司、方向、职级、搜索、薪资/稠密度排序、收藏、卡片与表格视图。
- **公司详情**：代表性组织面、薪酬结构、招聘环、公开信号与面试重点。
- **情报库**：薪酬解码、简历模板、STAR、系统设计、AI 实验室信号、中国市场路径等 8 份资料。
- **模拟面试**：25 道公开题型、公司视角、难度、题量、限时作答、逐题复盘与本地评分。
- **三语与本地化**：English / 中文 / Français，所有主要页面、数据、资料与模拟题均可切换。
- **品牌视觉**：用户提供的电影感背景用于首页首屏，完整 logo 用于首页和应用图标，单字标用于页眉与浏览器图标。
- **可安装 PWA**：支持添加到桌面/主屏幕，提供独立应用窗口、快捷入口和离线界面缓存。
- **数据导出**：岗位 CSV、Markdown 起步资料包、模拟面试逐字记录。
- **隐私**：收藏、历史与模拟作答仅保存在浏览器 `localStorage`，不上传服务器。

本次新增的企业包括：

- **中国大陆**：Huawei、Xiaomi、Baidu、JD.com、Meituan、NetEase、DJI、SenseTime。
- **香港**：HKEX、Cathay Pacific、MTR、Hang Seng Bank。

岗位申请按钮会打开企业官方招聘门户；实际在招岗位、职级和要求可能变化，请在官网再次确认。

## 本地预览

站点没有构建依赖。在仓库根目录运行：

```bash
python -m http.server 8088
```

然后打开 `http://localhost:8088/`。

> 请通过 HTTP 服务打开，不要直接双击 `index.html`。部分浏览器会限制 ES Modules 的 `file://` 加载。

## 发布到 GitHub Pages

1. 新建一个 GitHub 仓库，并把本目录中的全部文件放到仓库根目录。
2. 推送到 `main` 分支。
3. 进入仓库 **Settings → Pages**。
4. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
5. 等待 `Deploy High Table to GitHub Pages` 工作流完成。

站点使用 Hash 路由（例如 `#/roles`），因此无需额外配置 SPA fallback。所有资源使用相对路径，可部署在 `username.github.io/repository-name/` 子路径下。

如果 GitHub CLI 已安装并登录，也可以直接：

```bash
git init
git add .
git commit -m "Build High Table Recruitment Institute"
gh repo create high-table-institute --public --source=. --remote=origin --push
```

随后在仓库 Pages 设置中选择 GitHub Actions。

## 文件结构

```text
index.html                 # 页面壳、SEO、导航与页脚
styles.css                # 完整响应式视觉系统
app.js                    # 路由、筛选、弹层、模拟面试与导出
sw.js                     # PWA 离线缓存
i18n.js                   # 界面三语文案
data-companies.js         # 24 家公司画像与官方招聘门户
data-roles.js             # 55 份岗位画像
data-resources.js         # 8 份情报资料与模板
data-prompts.js           # 25 道模拟题
data-sources.js           # 公开来源登记
assets/                   # 品牌背景、Logo 与 PWA 图标
.github/workflows/pages.yml
```

展示字体使用 **Syne**、**Bodoni Moda** 与经过字符子集化的 **Noto Serif SC**，均采用 SIL Open Font License，授权文本保存于 `assets/fonts/`。

## 安装到桌面 / 主屏幕

- Chrome / Edge 桌面端：点击页眉的 **Install app**，或打开浏览器菜单选择“安装 High Table”。
- Android Chrome：点击页眉安装按钮，或在浏览器菜单中选择“安装应用 / 添加到主屏幕”。
- iPhone / iPad：使用 Safari 打开站点，点击“分享”，选择“添加到主屏幕”。

PWA 安装在正式环境中需要 HTTPS；`localhost` 可直接用于本地测试。Service Worker 会缓存站点界面，已访问内容可离线打开。

## 数据口径

- 薪酬是方向性年度总包基准：美国岗位为美元千元，中国大陆岗位为人民币百万元。
- 薪酬会因地点、职级、团队、绩效与股权估值变化，不构成 offer 或保证。
- 时间稠密度是 1–5 分编辑指数，综合专注负荷、周强度、on-call、会议面与变化压力，不是雇主官方指标。
- 学历、专业与经验描述常见路径，而不是统一门槛。
- 模拟题改编自广泛讨论的公开题型、官方招聘指南与公开技术资料，不声称是任何公司的当前保密真题。

网站内“研究方法”“公开来源”“免责声明”三个面板提供更完整的说明。

## 更新内容

公司数据在 `data-companies.js`，岗位数据在 `data-roles.js`。每个可翻译字段使用：

```js
{
  en: "English",
  zh: "中文",
  fr: "Français"
}
```

新增岗位时，确保 `companyId` 指向已有公司，并在 `sourceIds` 中引用 `data-sources.js` 里存在的来源键。工作流会自动打包所有 `data-*.js` 文件。

## 声明

本项目为独立编辑与研究工具，不隶属于任何雇主，不发布保密面试材料，也不构成法律、移民、薪酬或职业建议。
