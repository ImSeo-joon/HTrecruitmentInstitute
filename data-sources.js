import { JP_SOURCES } from "./data-japan.js";

const tr = (en, zh, fr, ja) => ({ en, zh, fr, ja: ja || en });
const careersNote = tr(
  "Official careers portal for current openings, teams and application instructions. Live listings can change.",
  "官方招聘门户，用于查看当前岗位、团队与申请说明。实时岗位会变化。",
  "Portail carrières officiel pour les postes, équipes et procédures de candidature. Les annonces évoluent."
);

/**
 * Public references used to frame the atlas. Compensation pages are directional
 * cross-checks, not redistributed datasets. Company career pages are the primary
 * references for hiring process and role expectations.
 */
export const SOURCES = {
  levels: {
    title: tr("Levels.fyi", "Levels.fyi 薪酬数据", "Levels.fyi"),
    url: "https://www.levels.fyi/",
    kind: "comp",
    note: tr(
      "Crowdsourced compensation benchmarks used as a directional cross-check. Individual offers vary by location, level and equity value.",
      "众包薪酬基准，仅用于方向性交叉验证。实际 offer 会因地点、职级与股权估值变化。",
      "Repères de rémunération participatifs utilisés comme contrôle directionnel. Les offres varient selon la ville, le niveau et la valorisation des actions."
    )
  },
  googleCareers: {
    title: tr("Google — How we hire", "Google — 招聘流程", "Google — Notre processus de recrutement"),
    url: "https://www.google.com/about/careers/applications/how-we-hire/",
    kind: "official",
    note: tr(
      "Official description of Google's hiring process and candidate preparation.",
      "Google 官方招聘流程与候选人准备说明。",
      "Présentation officielle du processus de recrutement et de la préparation des candidats chez Google."
    )
  },
  metaCareers: {
    title: tr("Meta — Careers", "Meta — 招聘", "Meta — Carrières"),
    url: "https://www.metacareers.com/",
    kind: "official",
    note: tr(
      "Official role listings, team descriptions and candidate pathways. Interview format varies by role and location.",
      "官方岗位、团队介绍与候选人路径。面试形式会随岗位与地点变化。",
      "Offres officielles, descriptions d'équipes et parcours candidats. Le format varie selon le poste et le lieu."
    )
  },
  amazonLP: {
    title: tr("Amazon — Leadership Principles", "Amazon — 领导力准则", "Amazon — Principes de leadership"),
    url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles",
    kind: "official",
    note: tr(
      "Amazon's own statement of the leadership principles used in hiring and performance conversations.",
      "Amazon 官方说明其招聘与绩效沟通中使用的领导力准则。",
      "Présentation officielle des principes de leadership utilisés dans le recrutement et l'évaluation."
    )
  },
  microsoftCareers: {
    title: tr("Microsoft — Interview tips", "Microsoft — 面试建议", "Microsoft — Conseils d'entretien"),
    url: "https://careers.microsoft.com/v2/global/en/hiring-tips",
    kind: "official",
    note: tr(
      "Official hiring tips covering preparation, growth mindset and collaboration.",
      "Microsoft 官方招聘建议，涵盖准备方式、成长型思维与协作。",
      "Conseils officiels sur la préparation, l'état d'esprit de croissance et la collaboration."
    )
  },
  appleCareers: {
    title: tr("Apple — Careers", "Apple — 招聘", "Apple — Carrières"),
    url: "https://www.apple.com/careers/us/",
    kind: "official",
    note: tr(
      "Company role families, team descriptions and application pathways.",
      "公司岗位族、团队介绍与申请路径。",
      "Familles de métiers, descriptions d'équipes et parcours de candidature."
    )
  },
  netflixCulture: {
    title: tr("Netflix — Culture", "Netflix — 企业文化", "Netflix — Culture"),
    url: "https://jobs.netflix.com/culture",
    kind: "official",
    note: tr(
      "Netflix's public culture memo, including judgment, candor, freedom and responsibility.",
      "Netflix 公开文化手册，涵盖判断力、坦诚、自由与责任。",
      "Mémo culturel public de Netflix : jugement, franchise, liberté et responsabilité."
    )
  },
  nvidiaCareers: {
    title: tr("NVIDIA — Careers", "NVIDIA — 招聘", "NVIDIA — Carrières"),
    url: "https://www.nvidia.com/en-us/about-nvidia/careers/",
    kind: "official",
    note: tr(
      "Company overview, role families and engineering context.",
      "公司概览、岗位族与工程背景。",
      "Présentation de l'entreprise, familles de métiers et contexte d'ingénierie."
    )
  },
  openaiCareers: {
    title: tr("OpenAI — Careers", "OpenAI — 招聘", "OpenAI — Carrières"),
    url: "https://openai.com/careers/",
    kind: "official",
    note: tr(
      "Open roles, team descriptions and stated expectations.",
      "在招岗位、团队介绍与公开的能力期待。",
      "Postes ouverts, descriptions d'équipes et attentes publiées."
    )
  },
  anthropicCareers: {
    title: tr("Anthropic — Careers", "Anthropic — 招聘", "Anthropic — Carrières"),
    url: "https://www.anthropic.com/careers",
    kind: "official",
    note: tr(
      "Role descriptions and public hiring context.",
      "岗位说明与公开招聘背景。",
      "Descriptions de postes et contexte public de recrutement."
    )
  },
  bytedanceCareers: {
    title: tr("ByteDance — Careers", "字节跳动 — 招聘", "ByteDance — Carrières"),
    url: "https://jobs.bytedance.com/en/",
    kind: "official",
    note: tr(
      "Global job families and role descriptions.",
      "全球岗位族与岗位说明。",
      "Familles de métiers et descriptions de postes mondiales."
    )
  },
  tencentCareers: {
    title: tr("Tencent — Careers", "腾讯 — 招聘", "Tencent — Carrières"),
    url: "https://join.tencent.com/",
    kind: "official",
    note: tr(
      "Tencent recruitment site; some content is Chinese-first.",
      "腾讯招聘站点；部分内容以中文为主。",
      "Site de recrutement de Tencent ; certains contenus sont principalement en chinois."
    )
  },
  alibabaCareers: {
    title: tr("Alibaba — Talent", "阿里巴巴 — 招聘", "Alibaba — Talents"),
    url: "https://talent.alibaba.com/",
    kind: "official",
    note: tr(
      "Alibaba Group talent site and role families.",
      "阿里巴巴集团招聘站点与岗位族。",
      "Site talents du groupe Alibaba et familles de métiers."
    )
  },
  leetcode: {
    title: tr("LeetCode — Company tags", "LeetCode — 公司题库标签", "LeetCode — Étiquettes par entreprise"),
    url: "https://leetcode.com/company/",
    kind: "prep",
    note: tr(
      "Community-reported question patterns. Not an official company question bank.",
      "社区汇总的题型线索，并非公司官方题库。",
      "Tendances de questions signalées par la communauté. Pas une banque officielle."
    )
  },
  interviewingIo: {
    title: tr("interviewing.io — Public question bank", "interviewing.io — 公开题库", "interviewing.io — Banque publique"),
    url: "https://interviewing.io/questions",
    kind: "prep",
    note: tr(
      "Publicly shared interview questions and mock-interview transcripts.",
      "公开分享的面试题与模拟面试记录。",
      "Questions d'entretien et transcriptions d'entretiens blancs partagées publiquement."
    )
  },
  techInterviewHandbook: {
    title: tr("Tech Interview Handbook", "Tech Interview Handbook 技术面试手册", "Tech Interview Handbook"),
    url: "https://www.techinterviewhandbook.org/",
    kind: "prep",
    note: tr(
      "Open preparation guide for coding, behavioral and system interviews.",
      "面向编码、行为与系统面试的开放准备指南。",
      "Guide ouvert pour les entretiens de code, comportementaux et système."
    )
  },
  systemDesignPrimer: {
    title: tr("System Design Primer", "System Design Primer 系统设计入门", "System Design Primer"),
    url: "https://github.com/donnemartin/system-design-primer",
    kind: "prep",
    note: tr(
      "Open-source system design learning resource.",
      "开源系统设计学习资源。",
      "Ressource open source pour apprendre la conception de systèmes."
    )
  },
  glassdoor: {
    title: tr("Glassdoor — Employee reviews", "Glassdoor — 员工评价", "Glassdoor — Avis des employés"),
    url: "https://www.glassdoor.com/",
    kind: "reviews",
    note: tr(
      "Self-reported employee reviews. Treated as a weak signal because teams, locations and periods differ.",
      "员工自述评价。因团队、地点与时期差异较大，仅作为弱信号。",
      "Avis auto-déclarés. Signal faible en raison des différences d'équipe, de lieu et de période."
    )
  },
  blind: {
    title: tr("Blind — Anonymous workplace discussions", "Blind — 匿名职场讨论", "Blind — Discussions anonymes"),
    url: "https://www.teamblind.com/",
    kind: "reviews",
    note: tr(
      "Anonymous employee discussion. Useful as anecdote, never as a sole factual basis.",
      "匿名员工讨论。适合作为轶事，不应作为唯一事实依据。",
      "Discussions anonymes. Utiles comme anecdote, jamais comme source factuelle unique."
    )
  },
  cudaGuide: {
    title: tr("NVIDIA — CUDA C++ Best Practices Guide", "NVIDIA — CUDA C++ 最佳实践指南", "NVIDIA — Guide des bonnes pratiques CUDA C++"),
    url: "https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/",
    kind: "technical",
    note: tr(
      "Primary technical reference for CUDA performance and memory-coalescing concepts.",
      "CUDA 性能与内存合并等概念的一手技术参考。",
      "Référence technique pour les concepts de performance CUDA et de coalescence mémoire."
    )
  },
  amazonScience: {
    title: tr("Amazon Science", "Amazon Science", "Amazon Science"),
    url: "https://www.amazon.science/",
    kind: "technical",
    note: tr(
      "Published applied-science research and team context.",
      "公开的应用科学研究与团队背景。",
      "Recherche appliquée publiée et contexte des équipes."
    )
  },
  anthropicConstitution: {
    title: tr("Anthropic — Constitution", "Anthropic — 宪法", "Anthropic — Constitution"),
    url: "https://www.anthropic.com/constitution",
    kind: "technical",
    note: tr(
      "Public description of Anthropic's approach to model behavior and safety.",
      "Anthropic 对模型行为与安全方法的公开说明。",
      "Présentation publique de l'approche d'Anthropic en matière de comportement et de sûreté des modèles."
    )
  },
  huaweiCareers: {
    title: tr("Huawei — Careers", "华为 — 招聘", "Huawei — Carrières"),
    url: "https://career.huawei.com/reccampportal/portal5/index.html",
    kind: "official",
    note: careersNote
  },
  xiaomiCareers: {
    title: tr("Xiaomi — Careers", "小米 — 招聘", "Xiaomi — Carrières"),
    url: "https://hr.xiaomi.com/",
    kind: "official",
    note: careersNote
  },
  baiduCareers: {
    title: tr("Baidu — Careers", "百度 — 招聘", "Baidu — Carrières"),
    url: "https://talent.baidu.com/jobs/social-list",
    kind: "official",
    note: careersNote
  },
  jdCareers: {
    title: tr("JD.com — Careers", "京东 — 招聘", "JD.com — Carrières"),
    url: "https://zhaopin.jd.com/",
    kind: "official",
    note: careersNote
  },
  meituanCareers: {
    title: tr("Meituan — Careers", "美团 — 招聘", "Meituan — Carrières"),
    url: "https://zhaopin.meituan.com/web/position",
    kind: "official",
    note: careersNote
  },
  neteaseCareers: {
    title: tr("NetEase — Careers", "网易 — 招聘", "NetEase — Carrières"),
    url: "https://hr.163.com/",
    kind: "official",
    note: careersNote
  },
  djiCareers: {
    title: tr("DJI — Careers", "大疆 — 招聘", "DJI — Carrières"),
    url: "https://careers.dji.com/zh-CN/",
    kind: "official",
    note: careersNote
  },
  sensetimeCareers: {
    title: tr("SenseTime — Careers", "商汤科技 — 招聘", "SenseTime — Carrières"),
    url: "https://hr.sensetime.com/",
    kind: "official",
    note: careersNote
  },
  hkexCareers: {
    title: tr("HKEX — Careers", "香港交易所 — 招聘", "HKEX — Carrières"),
    url: "https://www.hkexgroup.com/About-HKEX/Careers-at-HKEX?sc_lang=en",
    kind: "official",
    note: careersNote
  },
  cathayCareers: {
    title: tr("Cathay Pacific — Careers", "国泰航空 — 招聘", "Cathay Pacific — Carrières"),
    url: "https://careers.cathaypacific.com/en",
    kind: "official",
    note: careersNote
  },
  mtrCareers: {
    title: tr("MTR — Careers", "港铁 — 招聘", "MTR — Carrières"),
    url: "https://www.mtr.com.hk/en/corporate/careers/career.html",
    kind: "official",
    note: careersNote
  },
  hangsengCareers: {
    title: tr("Hang Seng Bank — Careers", "恒生银行 — 招聘", "Hang Seng Bank — Carrières"),
    url: "https://www.hangseng.com/en-hk/about/careers/",
    kind: "official",
    note: careersNote
  }
};

export const SOURCE_GROUPS = [
  { id: "official", label: tr("Employer sources", "企业官方来源", "Sources employeurs") },
  { id: "comp", label: tr("Compensation", "薪酬数据", "Rémunération") },
  { id: "prep", label: tr("Interview prep", "面试准备", "Préparation") },
  { id: "technical", label: tr("Technical references", "技术参考", "Références techniques") },
  { id: "reviews", label: tr("Employee signal", "员工信号", "Signal employés") }
];

Object.assign(SOURCES, JP_SOURCES);
