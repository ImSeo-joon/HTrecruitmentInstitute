import { JP_COMPANIES, JP_PORTALS } from "./data-japan.js";

const tr = (en, zh, fr, ja) => ({ en, zh, fr, ja: ja || en });

export const COMPANIES = [
  {
    id: "google",
    name: "Google",
    legal: "Alphabet",
    mark: "G",
    color: "#7ea7ff",
    hq: "Mountain View",
    hubs: ["Mountain View", "New York", "London", "Zurich", "Bengaluru"],
    tracks: ["engineering", "ai", "product"],
    summary: tr(
      "A scale company with unusually broad surface area: search, ads, cloud, YouTube, devices, platforms and frontier research. The hiring signal is less about knowing one stack than reasoning clearly across ambiguity and collaborating in a high-consensus environment.",
      "Google 的业务面极广：搜索、广告、云、YouTube、设备、平台与前沿研究。招聘信号与其说是精通某个技术栈，不如说是在高不确定性下清晰推理，并能在强调共识的环境中协作。",
      "Une entreprise à très large surface : recherche, publicité, cloud, YouTube, appareils, plateformes et recherche de pointe. Le signal de recrutement porte moins sur une stack précise que sur la clarté du raisonnement et la collaboration dans un environnement de consensus."
    ),
    orgs: [
      {
        name: tr("Search & Knowledge", "搜索与知识", "Recherche et connaissances"),
        focus: tr("Ranking, indexing, quality, knowledge systems", "排序、索引、质量与知识系统", "Classement, indexation, qualité, systèmes de connaissances")
      },
      {
        name: tr("Google Cloud", "Google Cloud", "Google Cloud"),
        focus: tr("Infrastructure, data platforms, enterprise AI", "基础设施、数据平台与企业 AI", "Infrastructure, plateformes de données, IA d'entreprise")
      },
      {
        name: tr("YouTube", "YouTube", "YouTube"),
        focus: tr("Recommendation, creator systems, streaming", "推荐、创作者系统与流媒体", "Recommandation, systèmes créateurs, streaming")
      },
      {
        name: tr("Google DeepMind", "Google DeepMind", "Google DeepMind"),
        focus: tr("Frontier models, science, robotics, research", "前沿模型、科学、机器人与研究", "Modèles de frontière, science, robotique, recherche")
      }
    ],
    payModel: tr(
      "Level-led salary band + target annual bonus + restricted stock units. Equity refreshes are a material part of senior compensation and are usually granted annually.",
      "职级决定薪资带宽，叠加目标年度奖金与限制性股票。对高级别岗位而言，年度股权刷新是总包的重要组成部分。",
      "Bande salariale liée au niveau + bonus annuel cible + actions attribuées. Les attributions annuelles constituent une part importante de la rémunération senior."
    ),
    loop: [
      {
        name: tr("Recruiter screen", "招聘官初筛", "Échange recruteur"),
        detail: tr("Motivation, level calibration, location and basic fit.", "动机、职级校准、地点与基础匹配。", "Motivation, calibration du niveau, lieu et adéquation de base.")
      },
      {
        name: tr("Technical rounds", "技术轮", "Entretiens techniques"),
        detail: tr("Coding and/or domain depth; clarity of invariants and trade-offs.", "编码和/或领域深度；关注不变量与权衡的表达。", "Code et/ou profondeur métier ; clarté des invariants et des compromis.")
      },
      {
        name: tr("Design / specialty", "设计/专业轮", "Conception / spécialité"),
        detail: tr("System design, ML depth, product sense or another role-specific loop.", "系统设计、ML 深度、产品判断或岗位专属考核。", "Conception système, profondeur ML, sens produit ou boucle propre au poste.")
      },
      {
        name: tr("Hiring committee", "招聘委员会", "Comité de recrutement"),
        detail: tr("Packet review by people who did not interview you. Evidence must stand on its own.", "由未参与面试的委员会审阅材料，证据必须能独立成立。", "Examen par des personnes qui ne vous ont pas rencontré. Les preuves doivent tenir seules.")
      }
    ],
    signals: [
      tr("Generality and clean reasoning under ambiguity.", "在不确定性中展现通用性与清晰推理。", "Généralité et raisonnement clair face à l'ambiguïté."),
      tr("Impact at scale, supported by concrete evidence.", "以具体证据说明规模化影响。", "Impact à grande échelle, appuyé par des preuves concrètes."),
      tr("Low-ego collaboration across strong opinions.", "在强观点环境中保持低自我、推动协作。", "Collaboration sans ego dans un environnement d'opinions fortes.")
    ],
    payMix: { base: 65, bonus: 15, equity: 20 },
    sources: ["googleCareers", "levels", "leetcode", "glassdoor"]
  },
  {
    id: "meta",
    name: "Meta",
    legal: "Meta Platforms",
    mark: "M",
    color: "#69b7ff",
    hq: "Menlo Park",
    hubs: ["Menlo Park", "Seattle", "New York", "London", "Singapore"],
    tracks: ["engineering", "data", "product"],
    summary: tr(
      "A product-velocity company built around social connection, advertising and AI. Teams tend to optimize for measurable user or business impact quickly, then iterate in public-facing systems with very large blast radius.",
      "Meta 是围绕社交连接、广告与 AI 构建的产品速度型公司。团队通常快速优化可量化的用户或业务影响，再在影响面极大的公开系统中迭代。",
      "Une entreprise de haute vélocité produit autour du lien social, de la publicité et de l'IA. Les équipes optimisent vite un impact mesurable, puis itèrent sur des systèmes à très grande échelle."
    ),
    orgs: [
      {
        name: tr("Family of Apps", "应用家族", "Famille d'applications"),
        focus: tr("Facebook, Instagram, WhatsApp, Messenger", "Facebook、Instagram、WhatsApp、Messenger", "Facebook, Instagram, WhatsApp, Messenger")
      },
      {
        name: tr("Ads & Business AI", "广告与商业 AI", "Publicité et IA business"),
        focus: tr("Ranking, auction, measurement, generative ads", "排序、竞价、归因与生成式广告", "Classement, enchères, mesure, publicités génératives")
      },
      {
        name: tr("Reality Labs", "Reality Labs", "Reality Labs"),
        focus: tr("XR, wearables, avatars, spatial computing", "XR、可穿戴、虚拟形象与空间计算", "XR, objets connectés, avatars, informatique spatiale")
      },
      {
        name: tr("Meta AI", "Meta AI", "Meta AI"),
        focus: tr("Foundation models, assistants, research", "基础模型、助手与研究", "Modèles de fondation, assistants, recherche")
      }
    ],
    payModel: tr(
      "Base salary + target bonus + RSU package. Equity weighting rises with level; refreshers and performance multipliers can move total compensation well beyond the posted base.",
      "基本工资 + 目标奖金 + RSU。职级越高股权权重越大；年度刷新与绩效系数会使总包显著高于基本工资。",
      "Salaire de base + bonus cible + RSU. Le poids des actions augmente avec le niveau ; attributions et multiplicateurs de performance peuvent dépasser nettement le salaire de base."
    ),
    loop: [
      {
        name: tr("Recruiter screen", "招聘官初筛", "Échange recruteur"),
        detail: tr("Background, level and role fit; compensation expectations surfaced early.", "背景、职级与岗位匹配；通常会较早讨论薪酬预期。", "Parcours, niveau et adéquation ; les attentes salariales sont souvent abordées tôt.")
      },
      {
        name: tr("Coding", "编码轮", "Entretiens de code"),
        detail: tr("Usually two interviews focused on implementation, debugging and communication.", "通常两轮，关注实现、调试与沟通。", "Généralement deux entretiens axés sur l'implémentation, le débogage et la communication.")
      },
      {
        name: tr("Design", "设计轮", "Conception"),
        detail: tr("System design for senior engineers; product sense for PM and data roles.", "高级工程师考系统设计；PM 与数据岗位考产品判断。", "Conception système pour les ingénieurs seniors ; sens produit pour PM et data.")
      },
      {
        name: tr("Behavioral + team match", "行为面试 + 团队匹配", "Comportemental + matching"),
        detail: tr("Impact, conflict, feedback and speed; team selection follows a positive decision.", "关注影响、冲突、反馈与速度；通过后进入团队选择。", "Impact, conflit, feedback et vitesse ; choix d'équipe après décision positive.")
      }
    ],
    signals: [
      tr("Speed with a measurable impact thesis.", "以可量化的影响假设体现速度。", "Vitesse avec une thèse d'impact mesurable."),
      tr("Product sense, even in engineering roles.", "即使是工程岗位也重视产品判断。", "Sens produit, même pour les ingénieurs."),
      tr("Direct, specific feedback and self-correction.", "直接、具体的反馈与自我修正。", "Feedback direct et spécifique, capacité d'auto-correction.")
    ],
    payMix: { base: 55, bonus: 15, equity: 30 },
    sources: ["metaCareers", "levels", "leetcode", "glassdoor"]
  },
  {
    id: "amazon",
    name: "Amazon",
    legal: "Amazon.com",
    mark: "A",
    color: "#ffb454",
    hq: "Seattle",
    hubs: ["Seattle", "Bellevue", "New York", "Luxembourg", "Bengaluru"],
    tracks: ["engineering", "ai", "ops", "product"],
    summary: tr(
      "An operating company where scale, customer obsession and written reasoning are woven into the hiring system. Role scope is often broad, and evidence is evaluated through Amazon's public Leadership Principles as well as technical depth.",
      "Amazon 是一家运营导向公司，规模化、客户至上与书面推理嵌入整个招聘系统。岗位职责通常较宽，评估既看技术深度，也通过公开的领导力准则检验行为证据。",
      "Une entreprise d'exploitation où l'échelle, l'obsession du client et le raisonnement écrit structurent le recrutement. Le périmètre est souvent large et les preuves sont évaluées via les principes de leadership publics."
    ),
    orgs: [
      {
        name: tr("AWS", "AWS", "AWS"),
        focus: tr("Cloud infrastructure, databases, AI services", "云基础设施、数据库与 AI 服务", "Infrastructure cloud, bases de données, services IA")
      },
      {
        name: tr("Stores", "零售业务", "Boutiques"),
        focus: tr("Search, catalog, pricing, checkout, advertising", "搜索、目录、定价、结账与广告", "Recherche, catalogue, prix, paiement, publicité")
      },
      {
        name: tr("Devices & Alexa", "设备与 Alexa", "Appareils et Alexa"),
        focus: tr("Embedded systems, voice, robotics, consumer hardware", "嵌入式系统、语音、机器人与消费硬件", "Systèmes embarqués, voix, robotique, matériel grand public")
      },
      {
        name: tr("Operations", "运营体系", "Opérations"),
        focus: tr("Fulfilment, logistics, automation, planning", "履约、物流、自动化与规划", "Fulfilment, logistique, automatisation, planification")
      }
    ],
    payModel: tr(
      "Base + sign-on + restricted stock units. Amazon often uses front-loaded vesting and a sign-on payment to bridge the first-year equity gap; level and location bands are explicit.",
      "基本工资 + 签约奖金 + RSU。Amazon 常采用前重后轻的归属节奏，并以签约奖金弥补首年股权缺口；职级与地点带宽相对明确。",
      "Salaire de base + prime à la signature + RSU. Amazon utilise souvent un vesting accéléré au début et une prime pour compenser le premier année ; les bandes dépendent du niveau et du lieu."
    ),
    loop: [
      {
        name: tr("Assessment", "在线评估", "Évaluation en ligne"),
        detail: tr("Coding and/or work-style assessment for many early-career and technical roles.", "许多早期职业与技术岗位会安排编码和/或工作风格评估。", "Code et/ou évaluation de style de travail pour de nombreux postes techniques.")
      },
      {
        name: tr("Technical screen", "技术初面", "Entretien technique"),
        detail: tr("Coding, domain fundamentals and ownership of past work.", "编码、领域基础与过往工作的主导性。", "Code, fondamentaux métier et appropriation du travail passé.")
      },
      {
        name: tr("Loop / Bar Raiser", "面试环 / Bar Raiser", "Boucle / Bar Raiser"),
        detail: tr("Four to five interviews with behavioral evidence mapped to Leadership Principles.", "通常 4–5 轮，行为证据会对应领导力准则。", "Quatre à cinq entretiens, avec des preuves comportementales liées aux principes de leadership.")
      },
      {
        name: tr("Debrief", "复盘评审", "Débriefing"),
        detail: tr("Interviewers write evidence; the Bar Raiser protects the hiring standard.", "面试官提交证据；Bar Raiser 负责守住招聘标准。", "Les évaluateurs consignent les preuves ; le Bar Raiser protège le standard.")
      }
    ],
    signals: [
      tr("Customer impact and ownership, not task completion.", "强调客户影响与主人翁意识，而不只是完成任务。", "Impact client et appropriation, pas simple exécution."),
      tr("Written clarity: situation, decision, result, lesson.", "书面表达清晰：情境、决策、结果与复盘。", "Clarté écrite : situation, décision, résultat, leçon."),
      tr("Comfort with measurable operating constraints.", "能在可量化的运营约束中工作。", "Aisance avec des contraintes opérationnelles mesurables.")
    ],
    payMix: { base: 60, bonus: 10, equity: 30 },
    sources: ["amazonLP", "amazonScience", "levels", "leetcode"]
  },
  {
    id: "microsoft",
    name: "Microsoft",
    legal: "Microsoft Corporation",
    mark: "M",
    color: "#7fdcff",
    hq: "Redmond",
    hubs: ["Redmond", "Dublin", "London", "Bengaluru", "Singapore"],
    tracks: ["engineering", "ai", "product", "ops"],
    summary: tr(
      "An enterprise and platform company spanning Azure, Microsoft 365, Windows, LinkedIn, GitHub and AI. Hiring often rewards growth mindset, customer empathy and the ability to make complex systems understandable to other teams.",
      "Microsoft 是覆盖 Azure、Microsoft 365、Windows、LinkedIn、GitHub 与 AI 的企业级平台公司。招聘通常看重成长型思维、客户同理心，以及把复杂系统讲清楚并推动其他团队协作的能力。",
      "Une entreprise de plateformes et d'entreprise couvrant Azure, Microsoft 365, Windows, LinkedIn, GitHub et l'IA. Le recrutement valorise l'état d'esprit de croissance, l'empathie client et la capacité à rendre les systèmes complexes compréhensibles."
    ),
    orgs: [
      {
        name: tr("Cloud & AI", "云与 AI", "Cloud et IA"),
        focus: tr("Azure compute, data, AI platform and models", "Azure 计算、数据、AI 平台与模型", "Calcul Azure, données, plateforme IA et modèles")
      },
      {
        name: tr("Experiences & Devices", "体验与设备", "Expériences et appareils"),
        focus: tr("Windows, Surface, productivity and consumer apps", "Windows、Surface、生产力与消费应用", "Windows, Surface, productivité et applications grand public")
      },
      {
        name: tr("GitHub", "GitHub", "GitHub"),
        focus: tr("Developer platform, code intelligence, collaboration", "开发者平台、代码智能与协作", "Plateforme développeur, intelligence du code, collaboration")
      },
      {
        name: tr("LinkedIn", "LinkedIn", "LinkedIn"),
        focus: tr("Talent, learning, feed, enterprise products", "人才、学习、信息流与企业产品", "Talents, apprentissage, fil d'actualité, produits entreprise")
      }
    ],
    payModel: tr(
      "Base salary + annual bonus + stock awards. Senior bands place meaningful weight on stock; cloud solution and customer-facing roles may include different variable components.",
      "基本工资 + 年度奖金 + 股票奖励。高级别岗位的股票权重较高；云解决方案与客户岗位可能有不同的浮动薪酬结构。",
      "Salaire de base + bonus annuel + actions. Les niveaux seniors accordent un poids important aux actions ; les rôles cloud et client peuvent avoir d'autres composantes variables."
    ),
    loop: [
      {
        name: tr("Recruiter conversation", "招聘官沟通", "Échange recruteur"),
        detail: tr("Role scope, location, level and interview format.", "岗位范围、地点、职级与面试形式。", "Périmètre, lieu, niveau et format d'entretien.")
      },
      {
        name: tr("Technical screen", "技术初面", "Entretien technique"),
        detail: tr("Coding or role-specific problem solving with an emphasis on communication.", "编码或岗位专属问题解决，强调沟通。", "Code ou résolution propre au poste, avec priorité à la communication.")
      },
      {
        name: tr("Full loop", "完整面试环", "Boucle complète"),
        detail: tr("Coding, design, behavioral and cross-team collaboration scenarios.", "编码、设计、行为与跨团队协作场景。", "Code, conception, comportement et scénarios de collaboration.")
      },
      {
        name: tr("As-appropriate review", "综合评审", "Revue finale"),
        detail: tr("Depending on role, an additional review or team-match step may follow.", "视岗位而定，可能会有额外评审或团队匹配。", "Selon le poste, une revue ou un matching d'équipe peut suivre.")
      }
    ],
    signals: [
      tr("Growth mindset and receptiveness to feedback.", "成长型思维与接受反馈的能力。", "État d'esprit de croissance et réceptivité au feedback."),
      tr("Customer empathy translated into technical choices.", "把客户同理心转化为技术选择。", "Empathie client traduite en choix techniques."),
      tr("Cross-team influence in complex organizations.", "在复杂组织中推动跨团队协作。", "Influence transversale dans des organisations complexes.")
    ],
    payMix: { base: 65, bonus: 15, equity: 20 },
    sources: ["microsoftCareers", "levels", "glassdoor"]
  },
  {
    id: "apple",
    name: "Apple",
    legal: "Apple Inc.",
    mark: "A",
    color: "#e8edf0",
    hq: "Cupertino",
    hubs: ["Cupertino", "Austin", "London", "Munich", "Shanghai"],
    tracks: ["engineering", "hardware", "ops", "product"],
    summary: tr(
      "A product-integrated company where hardware, software, silicon and services meet under unusually strict quality and confidentiality norms. Teams are often small, highly specialized and expected to protect both craft and launch timing.",
      "Apple 是一家高度纵向整合的公司，硬件、软件、芯片与服务在极严格的质量与保密规范下交汇。团队通常小而专精，既要守住工艺质量，也要守住发布节奏。",
      "Une entreprise intégrée où matériel, logiciel, silicium et services se rejoignent sous des normes de qualité et de confidentialité très strictes. Les équipes sont souvent petites, spécialisées et responsables du craft comme du calendrier."
    ),
    orgs: [
      {
        name: tr("Software Engineering", "软件工程", "Ingénierie logicielle"),
        focus: tr("iOS, macOS, services, developer tools, AI", "iOS、macOS、服务、开发者工具与 AI", "iOS, macOS, services, outils développeurs, IA")
      },
      {
        name: tr("Hardware & Silicon", "硬件与芯片", "Matériel et silicium"),
        focus: tr("SoC, display, sensors, wireless, product design", "SoC、显示、传感器、无线与产品设计", "SoC, écrans, capteurs, sans-fil, design produit")
      },
      {
        name: tr("Services", "服务业务", "Services"),
        focus: tr("Payments, media, cloud, identity, search", "支付、媒体、云、身份与搜索", "Paiements, médias, cloud, identité, recherche")
      },
      {
        name: tr("Operations", "运营", "Opérations"),
        focus: tr("Supply chain, manufacturing, quality, logistics", "供应链、制造、质量与物流", "Chaîne d'approvisionnement, fabrication, qualité, logistique")
      }
    ],
    payModel: tr(
      "Base salary + annual bonus + RSUs. Apple's bands are comparatively private; equity is a significant part of senior compensation and role families can have very different structures.",
      "基本工资 + 年度奖金 + RSU。Apple 的薪酬带宽相对不透明；股权是高级别总包的重要部分，不同岗位族的结构差异较大。",
      "Salaire de base + bonus annuel + RSU. Les bandes sont relativement discrètes ; les actions pèsent fortement aux niveaux seniors et les familles de métiers diffèrent."
    ),
    loop: [
      {
        name: tr("Recruiter screen", "招聘官初筛", "Échange recruteur"),
        detail: tr("Team, location, confidentiality and role scope.", "团队、地点、保密要求与岗位范围。", "Équipe, lieu, confidentialité et périmètre.")
      },
      {
        name: tr("Hiring manager", "用人经理", "Manager recruteur"),
        detail: tr("Craft depth, product judgment and evidence of ownership.", "专业深度、产品判断与主导性证据。", "Profondeur du métier, jugement produit et preuves d'appropriation.")
      },
      {
        name: tr("Technical deep dive", "技术深挖", "Approfondissement technique"),
        detail: tr("Role-specific problem solving; quality and edge cases matter.", "岗位专属问题解决；质量与边界条件很重要。", "Résolution propre au poste ; qualité et cas limites comptent.")
      },
      {
        name: tr("Cross-functional", "跨职能面试", "Entretien transversal"),
        detail: tr("Collaboration, taste, judgment and ability to protect the user experience.", "协作、品味、判断与保护用户体验的能力。", "Collaboration, goût, jugement et protection de l'expérience utilisateur.")
      }
    ],
    signals: [
      tr("Craft, precision and respect for edge cases.", "重视工艺、精度与边界条件。", "Craft, précision et respect des cas limites."),
      tr("Cross-functional judgment without oversharing.", "具备跨职能判断力，并保持必要的保密边界。", "Jugement transversal dans le respect de la confidentialité."),
      tr("Evidence that quality survived schedule pressure.", "证明质量在进度压力下仍被守住。", "Preuve que la qualité a résisté à la pression du calendrier.")
    ],
    payMix: { base: 65, bonus: 10, equity: 25 },
    sources: ["appleCareers", "levels", "glassdoor"]
  },
  {
    id: "netflix",
    name: "Netflix",
    legal: "Netflix, Inc.",
    mark: "N",
    color: "#ff5c5c",
    hq: "Los Gatos",
    hubs: ["Los Gatos", "Los Angeles", "New York", "London", "Amsterdam"],
    tracks: ["engineering", "data", "product", "ops"],
    summary: tr(
      "A high-context, high-freedom entertainment technology company. Public culture materials emphasize judgment, candor and responsibility; roles often expect senior-level autonomy and comfort with rapid, well-reasoned decisions.",
      "Netflix 是高上下文、高自由度的娱乐科技公司。公开文化材料强调判断力、坦诚与责任；岗位通常期待高级别自主性，以及快速但有理有据地做决定的能力。",
      "Une entreprise de divertissement et de technologie à fort contexte et forte autonomie. Les documents publics insistent sur le jugement, la franchise et la responsabilité ; les rôles attendent une autonomie senior."
    ),
    orgs: [
      {
        name: tr("Streaming & Platform", "流媒体与平台", "Streaming et plateforme"),
        focus: tr("Playback, encoding, reliability, personalization", "播放、编码、可靠性与个性化", "Lecture, encodage, fiabilité, personnalisation")
      },
      {
        name: tr("Content & Studio", "内容与工作室", "Contenus et studio"),
        focus: tr("Production technology, creative operations, content strategy", "制作技术、创意运营与内容策略", "Technologie de production, opérations créatives, stratégie de contenu")
      },
      {
        name: tr("Ads", "广告", "Publicité"),
        focus: tr("Adtech, measurement, targeting, marketplace", "广告技术、测量、定向与市场", "Adtech, mesure, ciblage, marketplace")
      },
      {
        name: tr("Data & Insights", "数据与洞察", "Données et insights"),
        focus: tr("Experimentation, forecasting, consumer analytics", "实验、预测与消费者分析", "Expérimentation, prévision, analyse consommateur")
      }
    ],
    payModel: tr(
      "Top-of-market cash compensation is a defining feature; many roles emphasize salary rather than large annual bonuses, with stock options and personal allocation choices in some packages.",
      "高于市场水平的现金薪酬是其显著特征；许多岗位强调基本工资而非大额年度奖金，部分方案提供股票期权与个人配置选择。",
      "Une rémunération cash au-dessus du marché est caractéristique ; de nombreux postes privilégient le salaire plutôt qu'un gros bonus, avec parfois options et choix d'allocation."
    ),
    loop: [
      {
        name: tr("Recruiter screen", "招聘官初筛", "Échange recruteur"),
        detail: tr("Seniority, context, compensation and culture calibration.", "资历、上下文、薪酬与文化校准。", "Séniorité, contexte, rémunération et culture.")
      },
      {
        name: tr("Hiring manager", "用人经理", "Manager recruteur"),
        detail: tr("Judgment, domain depth and evidence of self-directed impact.", "判断力、领域深度与自主影响的证据。", "Jugement, profondeur métier et impact autonome.")
      },
      {
        name: tr("Functional deep dive", "职能深挖", "Approfondissement fonctionnel"),
        detail: tr("Technical or analytical problem solving with real constraints.", "在真实约束下进行技术或分析问题解决。", "Résolution technique ou analytique avec contraintes réelles.")
      },
      {
        name: tr("Cross-functional", "跨职能面试", "Entretien transversal"),
        detail: tr("Candor, disagreement and decision quality with senior stakeholders.", "与高级利益相关者的坦诚、分歧处理与决策质量。", "Franchise, désaccord et qualité de décision avec des parties prenantes seniors.")
      }
    ],
    signals: [
      tr("Judgment over process dependence.", "依靠判断力，而非流程依赖。", "Jugement plutôt que dépendance aux processus."),
      tr("Candor delivered with respect and specificity.", "以尊重和具体事实表达坦诚。", "Franchise respectueuse et spécifique."),
      tr("High context: you can explain the business, not just the task.", "具备高上下文：能解释业务，而不只是任务。", "Fort contexte : expliquer le business, pas seulement la tâche.")
    ],
    payMix: { base: 90, bonus: 0, equity: 10 },
    sources: ["netflixCulture", "levels", "glassdoor", "blind"]
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    legal: "NVIDIA Corporation",
    mark: "N",
    color: "#a5f36d",
    hq: "Santa Clara",
    hubs: ["Santa Clara", "Austin", "Tel Aviv", "Taipei", "Shanghai"],
    tracks: ["engineering", "ai", "hardware"],
    summary: tr(
      "A deep-tech platform company spanning accelerated computing, GPUs, networking, software and AI systems. The strongest signals are usually demonstrated performance reasoning, physical constraints and the ability to move between architecture and implementation.",
      "NVIDIA 是覆盖加速计算、GPU、网络、软件与 AI 系统的深科技平台公司。最强信号通常来自可验证的性能推理、对物理约束的理解，以及架构与实现之间切换的能力。",
      "Une entreprise deep tech couvrant calcul accéléré, GPU, réseau, logiciel et systèmes d'IA. Les signaux forts sont le raisonnement sur les performances, les contraintes physiques et la navigation entre architecture et implémentation."
    ),
    orgs: [
      {
        name: tr("GPU Architecture", "GPU 架构", "Architecture GPU"),
        focus: tr("Cores, memory hierarchy, interconnects, performance modeling", "核心、存储层级、互连与性能建模", "Cœurs, hiérarchie mémoire, interconnexions, modélisation")
      },
      {
        name: tr("DGX & Systems", "DGX 与系统", "DGX et systèmes"),
        focus: tr("AI clusters, networking, thermal, reliability", "AI 集群、网络、散热与可靠性", "Clusters IA, réseau, thermique, fiabilité")
      },
      {
        name: tr("CUDA & Software", "CUDA 与软件", "CUDA et logiciel"),
        focus: tr("Compilers, libraries, inference, developer tools", "编译器、库、推理与开发者工具", "Compilateurs, bibliothèques, inférence, outils développeurs")
      },
      {
        name: tr("Automotive & Robotics", "汽车与机器人", "Automobile et robotique"),
        focus: tr("DRIVE, simulation, sensors, embodied AI", "DRIVE、仿真、传感器与具身 AI", "DRIVE, simulation, capteurs, IA incarnée")
      }
    ],
    payModel: tr(
      "Base + annual bonus + equity. Stock appreciation can dominate long-tenure compensation, so current offer value should be modeled separately from historic outcomes.",
      "基本工资 + 年度奖金 + 股权。长期任职者的总包可能被股价上涨显著放大，因此评估新 offer 时应把当前授予价值与历史收益分开。",
      "Salaire de base + bonus + actions. La hausse du titre peut dominer la rémunération de long terme ; il faut distinguer la valeur actuelle d'une offre des performances passées."
    ),
    loop: [
      {
        name: tr("Technical screen", "技术初面", "Entretien technique"),
        detail: tr("Fundamentals in systems, algorithms, architecture or domain physics.", "系统、算法、架构或领域物理基础。", "Fondamentaux systèmes, algorithmes, architecture ou physique du domaine.")
      },
      {
        name: tr("Deep technical", "技术深挖", "Technique approfondie"),
        detail: tr("Performance, constraints, debugging and hardware/software interaction.", "性能、约束、调试与软硬件交互。", "Performance, contraintes, débogage et interaction matériel/logiciel.")
      },
      {
        name: tr("Applied problem", "应用问题", "Problème appliqué"),
        detail: tr("Role-specific design or optimization with quantified trade-offs.", "岗位专属设计或优化，要求量化权衡。", "Conception ou optimisation avec compromis quantifiés.")
      },
      {
        name: tr("Manager / values", "经理/价值观", "Manager / valeurs"),
        detail: tr("Ownership, collaboration and ability to explain complex work simply.", "主人翁意识、协作与把复杂工作讲简单的能力。", "Appropriation, collaboration et capacité à simplifier un travail complexe.")
      }
    ],
    signals: [
      tr("Quantitative performance reasoning.", "量化性能推理。", "Raisonnement quantitatif sur les performances."),
      tr("Respect for physical and system constraints.", "尊重物理与系统约束。", "Respect des contraintes physiques et système."),
      tr("Depth that survives follow-up questions.", "深度足以承受连续追问。", "Profondeur qui résiste aux questions de suivi.")
    ],
    payMix: { base: 55, bonus: 10, equity: 35 },
    sources: ["nvidiaCareers", "cudaGuide", "levels", "glassdoor"]
  },
  {
    id: "openai",
    name: "OpenAI",
    legal: "OpenAI",
    mark: "O",
    color: "#f0f4ef",
    hq: "San Francisco",
    hubs: ["San Francisco", "New York", "London", "Dublin", "Singapore"],
    tracks: ["ai", "engineering", "product", "ops"],
    summary: tr(
      "A frontier AI company combining research, product, safety and large-scale infrastructure. Hiring often looks for unusually high agency, research taste, practical shipping evidence and the ability to reason about second-order effects.",
      "OpenAI 是结合研究、产品、安全与大规模基础设施的前沿 AI 公司。招聘通常寻找极高自主性、研究品味、实际交付证据，以及思考二阶影响的能力。",
      "Une entreprise d'IA de frontière combinant recherche, produit, sûreté et infrastructure à grande échelle. Le recrutement recherche autonomie, goût pour la recherche, preuves de livraison et raisonnement sur les effets de second ordre."
    ),
    orgs: [
      {
        name: tr("Research", "研究", "Recherche"),
        focus: tr("Model capabilities, alignment, interpretability, evals", "模型能力、对齐、可解释性与评估", "Capacités, alignement, interprétabilité, évaluations")
      },
      {
        name: tr("Applied", "应用团队", "Applied"),
        focus: tr("Product engineering, inference, agent systems", "产品工程、推理与智能体系统", "Ingénierie produit, inférence, systèmes d'agents")
      },
      {
        name: tr("Safety", "安全", "Sûreté"),
        focus: tr("Policy, preparedness, trust, red teaming", "政策、预备、信任与红队测试", "Politique, préparation, confiance, red teaming")
      },
      {
        name: tr("Infrastructure", "基础设施", "Infrastructure"),
        focus: tr("Compute, training clusters, reliability, data", "算力、训练集群、可靠性与数据", "Calcul, clusters d'entraînement, fiabilité, données")
      }
    ],
    payModel: tr(
      "Base salary + equity, with some roles including variable or annual incentives. Equity can be a very large part of total compensation; private-company valuation assumptions deserve explicit scrutiny.",
      "基本工资 + 股权，部分岗位含浮动或年度激励。股权可能占总包很大比例；评估私营公司估值假设时需要格外谨慎。",
      "Salaire de base + actions, parfois avec incentives variables. Les actions peuvent dominer la rémunération ; les hypothèses de valorisation privée doivent être examinées."
    ),
    loop: [
      {
        name: tr("Recruiter screen", "招聘官初筛", "Échange recruteur"),
        detail: tr("Mission alignment, role scope, level and location.", "使命匹配、岗位范围、职级与地点。", "Alignement, périmètre, niveau et lieu.")
      },
      {
        name: tr("Technical screen", "技术初面", "Entretien technique"),
        detail: tr("Practical coding, ML fundamentals or domain reasoning.", "实际编码、ML 基础或领域推理。", "Code pratique, fondamentaux ML ou raisonnement métier.")
      },
      {
        name: tr("Deep dive", "深度面试", "Entretien approfondi"),
        detail: tr("Research taste, system design, evals, product judgment or safety reasoning.", "研究品味、系统设计、评估、产品判断或安全推理。", "Goût recherche, conception, évaluations, jugement produit ou sûreté.")
      },
      {
        name: tr("Values / collaborator", "价值观/协作", "Valeurs / collaboration"),
        detail: tr("High agency, humility under uncertainty and mission-critical judgment.", "高自主性、在不确定性中的谦逊与关键判断。", "Autonomie, humilité face à l'incertitude et jugement critique.")
      }
    ],
    signals: [
      tr("Research taste plus evidence of shipping.", "研究品味，同时有交付证据。", "Goût pour la recherche et preuves de livraison."),
      tr("Safety considered as a product constraint, not a footnote.", "把安全作为产品约束，而非附加说明。", "Sûreté comme contrainte produit, pas comme note de bas de page."),
      tr("High agency with low drama.", "高自主性，低内耗。", "Forte autonomie, faible théâtralité.")
    ],
    payMix: { base: 50, bonus: 0, equity: 50 },
    sources: ["openaiCareers", "levels", "glassdoor", "blind"]
  },
  {
    id: "anthropic",
    name: "Anthropic",
    legal: "Anthropic PBC",
    mark: "A",
    color: "#e0b68f",
    hq: "San Francisco",
    hubs: ["San Francisco", "New York", "London", "Dublin", "Tokyo"],
    tracks: ["ai", "engineering", "product"],
    summary: tr(
      "An AI safety and research company building frontier models. Public materials emphasize empirical reasoning, careful communication and low-ego collaboration; interviewers often probe how you handle uncertainty and competing objectives.",
      "Anthropic 是一家构建前沿模型的 AI 安全与研究公司。公开材料强调实证推理、谨慎沟通与低自我协作；面试常会追问你如何处理不确定性与相互竞争的目标。",
      "Une entreprise de recherche et de sûreté en IA qui construit des modèles de frontière. Les documents publics insistent sur le raisonnement empirique, la communication prudente et la collaboration sans ego."
    ),
    orgs: [
      {
        name: tr("Research", "研究", "Recherche"),
        focus: tr("Capabilities, alignment, interpretability, model organisms", "能力、对齐、可解释性与模型生物", "Capacités, alignement, interprétabilité")
      },
      {
        name: tr("Safeguards", "安全防护", "Safeguards"),
        focus: tr("Policy, trust, abuse, red teaming, deployment safety", "政策、信任、滥用、红队与部署安全", "Politique, confiance, abus, red teaming, sûreté du déploiement")
      },
      {
        name: tr("Product & Applied", "产品与应用", "Produit et Applied"),
        focus: tr("Claude products, API, enterprise, agents", "Claude 产品、API、企业与智能体", "Produits Claude, API, entreprise, agents")
      },
      {
        name: tr("Infrastructure", "基础设施", "Infrastructure"),
        focus: tr("Training, inference, reliability, compute", "训练、推理、可靠性与算力", "Entraînement, inférence, fiabilité, calcul")
      }
    ],
    payModel: tr(
      "Base salary + equity, with role-specific variable components. Because the company is private, equity value is a scenario, not a cash-equivalent promise.",
      "基本工资 + 股权，部分岗位含浮动薪酬。由于公司未上市，股权价值应视为情景假设，而非等同于现金的承诺。",
      "Salaire de base + actions, avec des composantes variables selon le poste. L'entreprise étant privée, la valeur des actions est un scénario, pas un équivalent cash garanti."
    ),
    loop: [
      {
        name: tr("Recruiter screen", "招聘官初筛", "Échange recruteur"),
        detail: tr("Mission, role, location and working-style alignment.", "使命、岗位、地点与工作方式匹配。", "Mission, poste, lieu et style de travail.")
      },
      {
        name: tr("Work sample", "工作样本", "Échantillon de travail"),
        detail: tr("Role-dependent exercise focused on real reasoning rather than trivia.", "视岗位而定，聚焦真实推理，而非冷知识。", "Exercice selon le poste, centré sur le raisonnement réel.")
      },
      {
        name: tr("Technical / research", "技术/研究面试", "Technique / recherche"),
        detail: tr("Coding, ML, evals, safety or product depth depending on the role.", "视岗位考察编码、ML、评估、安全或产品深度。", "Code, ML, évaluations, sûreté ou profondeur produit selon le poste.")
      },
      {
        name: tr("Values & collaboration", "价值观与协作", "Valeurs et collaboration"),
        detail: tr("Empirical honesty, judgment under uncertainty and ability to change your mind.", "实证诚实、不确定性下的判断与改变观点的能力。", "Honnêteté empirique, jugement dans l'incertitude et capacité à changer d'avis.")
      }
    ],
    signals: [
      tr("Empirical reasoning with explicit uncertainty.", "实证推理，并明确表达不确定性。", "Raisonnement empirique avec incertitude explicite."),
      tr("Careful language and willingness to be wrong.", "谨慎表达，并愿意承认错误。", "Langage précis et volonté de se tromper."),
      tr("Low-ego collaboration on hard, contested problems.", "在困难且有争议的问题上低自我协作。", "Collaboration sans ego sur des problèmes difficiles.")
    ],
    payMix: { base: 50, bonus: 0, equity: 50 },
    sources: ["anthropicCareers", "anthropicConstitution", "levels", "glassdoor"]
  },
  {
    id: "bytedance",
    name: "ByteDance",
    legal: "ByteDance",
    mark: "B",
    color: "#79e7ee",
    hq: "Beijing",
    hubs: ["Beijing", "Shanghai", "Singapore", "London", "San Jose"],
    tracks: ["engineering", "ai", "product", "data"],
    summary: tr(
      "A global consumer technology group behind TikTok, Douyin and a broad portfolio of content, commerce and enterprise products. Teams often combine rapid experimentation with large-scale recommendation and international coordination.",
      "字节跳动是 TikTok、抖音及内容、电商与企业产品组合背后的全球消费科技集团。团队通常把快速实验、大规模推荐与国际协作结合在一起。",
      "Un groupe technologique mondial derrière TikTok, Douyin et un large portefeuille de contenus, commerce et produits d'entreprise. Les équipes combinent expérimentation rapide, recommandation à grande échelle et coordination internationale."
    ),
    orgs: [
      {
        name: tr("TikTok / Content", "TikTok / 内容", "TikTok / Contenus"),
        focus: tr("Feed, creation, livestream, trust and safety", "信息流、创作、直播、信任与安全", "Fil, création, live, confiance et sécurité")
      },
      {
        name: tr("Recommendation", "推荐系统", "Recommandation"),
        focus: tr("Ranking, retrieval, LLM, user understanding", "排序、召回、LLM 与用户理解", "Classement, retrieval, LLM, compréhension utilisateur")
      },
      {
        name: tr("Commerce", "商业与电商", "Commerce"),
        focus: tr("Marketplace, ads, payments, logistics", "市场、广告、支付与物流", "Marketplace, publicité, paiements, logistique")
      },
      {
        name: tr("Enterprise", "企业服务", "Entreprise"),
        focus: tr("Lark, cloud, productivity, AI tools", "飞书、云、生产力与 AI 工具", "Lark, cloud, productivité, outils IA")
      }
    ],
    payModel: tr(
      "Base + performance bonus + equity or long-term incentive, with bands strongly shaped by location and level. China-market and overseas packages should not be compared without currency and tax normalization.",
      "基本工资 + 绩效奖金 + 股权或长期激励，带宽受地点与职级影响显著。中国市场与海外方案需先统一币种和税制，才能比较。",
      "Salaire de base + bonus de performance + actions ou incentive long terme. Les bandes dépendent fortement du lieu et du niveau ; les packages Chine et internationaux ne sont pas comparables sans normalisation."
    ),
    loop: [
      {
        name: tr("Resume / recruiter screen", "简历/招聘官初筛", "CV / échange recruteur"),
        detail: tr("Evidence of scale, speed and ownership; role and location fit.", "规模化、速度与主导性证据；岗位与地点匹配。", "Preuves d'échelle, de vitesse et d'appropriation ; adéquation poste/lieu.")
      },
      {
        name: tr("Online assessment", "在线测评", "Évaluation en ligne"),
        detail: tr("Coding, analytics or product case depending on the track.", "视岗位安排编码、分析或产品案例。", "Code, analyse ou cas produit selon le parcours.")
      },
      {
        name: tr("Technical / case rounds", "技术/案例轮", "Entretiens techniques / cas"),
        detail: tr("Two to four rounds, often with a cross-border panel.", "通常 2–4 轮，可能包含跨境面试官。", "Deux à quatre entretiens, parfois avec un panel international.")
      },
      {
        name: tr("Hiring manager / HR", "用人经理/HR", "Manager / RH"),
        detail: tr("Level, compensation, motivation and operating rhythm.", "职级、薪酬、动机与工作节奏。", "Niveau, rémunération, motivation et rythme de travail.")
      }
    ],
    signals: [
      tr("Speed, data and closed-loop execution.", "速度、数据与闭环执行。", "Vitesse, données et exécution en boucle fermée."),
      tr("Global-local product judgment.", "全球化与本地化兼具的产品判断。", "Jugement produit global-local."),
      tr("Comfort with intense iteration and cross-time-zone work.", "适应高强度迭代与跨时区协作。", "Aisance avec l'itération intense et les fuseaux horaires.")
    ],
    payMix: { base: 70, bonus: 15, equity: 15 },
    sources: ["bytedanceCareers", "levels", "leetcode", "blind"]
  },
  {
    id: "tencent",
    name: "Tencent",
    legal: "Tencent Holdings",
    mark: "T",
    color: "#7b9fff",
    hq: "Shenzhen",
    hubs: ["Shenzhen", "Beijing", "Shanghai", "Singapore", "Palo Alto"],
    tracks: ["engineering", "product", "data"],
    summary: tr(
      "A platform and gaming group spanning social, payments, cloud, content and interactive entertainment. Hiring often rewards sustained product craft, engineering depth and a long-horizon view of user and ecosystem health.",
      "腾讯是覆盖社交、支付、云、内容与互动娱乐的平台及游戏集团。招聘通常看重持续的产品打磨、工程深度，以及对用户与生态健康的长期视角。",
      "Un groupe de plateformes et de jeux couvrant social, paiements, cloud, contenus et divertissement interactif. Le recrutement valorise le craft produit, la profondeur technique et une vision de long terme."
    ),
    orgs: [
      {
        name: tr("Interactive Entertainment", "互动娱乐", "Divertissement interactif"),
        focus: tr("Game engines, graphics, live operations, studios", "游戏引擎、图形、长线运营与工作室", "Moteurs de jeu, graphisme, live ops, studios")
      },
      {
        name: tr("WeChat", "微信", "WeChat"),
        focus: tr("Messaging, mini programs, payments, ecosystem", "通讯、小程序、支付与生态", "Messagerie, mini-programmes, paiements, écosystème")
      },
      {
        name: tr("Cloud & Industry", "云与产业", "Cloud et industrie"),
        focus: tr("Cloud, enterprise software, media, fintech", "云、企业软件、媒体与金融科技", "Cloud, logiciel d'entreprise, médias, fintech")
      },
      {
        name: tr("Content & Platforms", "内容与平台", "Contenus et plateformes"),
        focus: tr("Video, music, news, advertising", "视频、音乐、新闻与广告", "Vidéo, musique, actualités, publicité")
      }
    ],
    payModel: tr(
      "Base + performance/team bonus + long-term incentive. Studio and business-unit pay can differ materially from platform teams; project success and tenure influence variable pay.",
      "基本工资 + 绩效/团队奖金 + 长期激励。工作室与事业群的薪酬结构可能与平台团队差异较大；项目成果与任职年限会影响浮动薪酬。",
      "Salaire de base + bonus performance/équipe + incentive long terme. Les studios et unités peuvent différer fortement ; le succès de projet et l'ancienneté influencent la part variable."
    ),
    loop: [
      {
        name: tr("Resume screen", "简历筛选", "Sélection CV"),
        detail: tr("Domain depth, shipped products and level fit.", "领域深度、已交付产品与职级匹配。", "Profondeur, produits livrés et adéquation de niveau.")
      },
      {
        name: tr("Written / online test", "笔试/在线测试", "Test écrit / en ligne"),
        detail: tr("Coding, fundamentals or product analysis depending on track.", "视岗位考察编码、基础或产品分析。", "Code, fondamentaux ou analyse produit selon le parcours.")
      },
      {
        name: tr("Technical / domain rounds", "技术/领域轮", "Entretiens techniques"),
        detail: tr("Two to three rounds with hiring team and cross-functional partners.", "通常 2–3 轮，包含用人团队与跨职能伙伴。", "Deux à trois entretiens avec l'équipe et des partenaires.")
      },
      {
        name: tr("HR / values", "HR/价值观", "RH / valeurs"),
        detail: tr("Motivation, teamwork, stability and operating expectations.", "动机、团队协作、稳定性与工作预期。", "Motivation, travail d'équipe, stabilité et attentes.")
      }
    ],
    signals: [
      tr("Long-horizon product and ecosystem judgment.", "长期产品与生态判断。", "Jugement produit et écosystème à long terme."),
      tr("Engineering or analytical depth in a chosen domain.", "在特定领域具备工程或分析深度。", "Profondeur technique ou analytique dans un domaine."),
      tr("Stable collaboration in large, matrixed teams.", "在大型矩阵团队中稳定协作。", "Collaboration stable dans de grandes équipes matricielles.")
    ],
    payMix: { base: 65, bonus: 15, equity: 20 },
    sources: ["tencentCareers", "levels", "glassdoor"]
  },
  {
    id: "alibaba",
    name: "Alibaba",
    legal: "Alibaba Group",
    mark: "A",
    color: "#ff8d4d",
    hq: "Hangzhou",
    hubs: ["Hangzhou", "Beijing", "Shanghai", "Singapore", "Sunnyvale"],
    tracks: ["engineering", "ai", "product", "ops"],
    summary: tr(
      "A commerce, cloud and logistics ecosystem where technology is tightly coupled to business operations. Hiring often looks for customer value, resilience under operating pressure and the ability to connect technical choices to commercial outcomes.",
      "阿里巴巴是电商、云与物流生态，技术选择与业务运营高度耦合。招聘通常看重客户价值、运营压力下的韧性，以及把技术选择与商业结果连接起来的能力。",
      "Un écosystème de commerce, cloud et logistique où la technologie est étroitement liée aux opérations. Le recrutement valorise la valeur client, la résilience et le lien entre choix techniques et résultats commerciaux."
    ),
    orgs: [
      {
        name: tr("Cloud Intelligence", "云智能", "Cloud Intelligence"),
        focus: tr("Cloud infrastructure, databases, AI platform", "云基础设施、数据库与 AI 平台", "Infrastructure cloud, bases de données, plateforme IA")
      },
      {
        name: tr("Taobao & Tmall", "淘宝与天猫", "Taobao et Tmall"),
        focus: tr("Search, recommendation, marketplace, merchant tools", "搜索、推荐、市场与商家工具", "Recherche, recommandation, marketplace, outils marchands")
      },
      {
        name: tr("International Commerce", "国际商业", "Commerce international"),
        focus: tr("AliExpress, Lazada, cross-border, payments", "AliExpress、Lazada、跨境与支付", "AliExpress, Lazada, transfrontalier, paiements")
      },
      {
        name: tr("Logistics & Local Services", "物流与本地生活", "Logistique et services locaux"),
        focus: tr("Cainiao, delivery, mapping, operations", "菜鸟、配送、地图与运营", "Cainiao, livraison, cartographie, opérations")
      }
    ],
    payModel: tr(
      "Base + performance bonus + equity/long-term incentive. Business-unit performance and level strongly affect the variable component; China and overseas bands require normalization.",
      "基本工资 + 绩效奖金 + 股权/长期激励。业务单元表现与职级会显著影响浮动部分；中国与海外带宽需要统一口径后再比较。",
      "Salaire de base + bonus de performance + actions/incentive long terme. La performance de l'unité et le niveau pèsent sur la part variable ; les bandes Chine et internationales doivent être normalisées."
    ),
    loop: [
      {
        name: tr("Resume screen", "简历筛选", "Sélection CV"),
        detail: tr("Business context, technical depth and evidence of ownership.", "业务背景、技术深度与主导性证据。", "Contexte business, profondeur technique et appropriation.")
      },
      {
        name: tr("Online assessment", "在线测评", "Évaluation en ligne"),
        detail: tr("Coding, analytics or case depending on role family.", "视岗位族安排编码、分析或案例。", "Code, analyse ou cas selon la famille de métier.")
      },
      {
        name: tr("Technical rounds", "技术轮", "Entretiens techniques"),
        detail: tr("Two to four rounds covering architecture, trade-offs and operating reality.", "通常 2–4 轮，覆盖架构、权衡与真实运营。", "Deux à quatre entretiens sur l'architecture, les compromis et les opérations.")
      },
      {
        name: tr("Business / HR", "业务/HR", "Business / RH"),
        detail: tr("Customer value, resilience, collaboration and level calibration.", "客户价值、韧性、协作与职级校准。", "Valeur client, résilience, collaboration et niveau.")
      }
    ],
    signals: [
      tr("Customer value tied to measurable business outcomes.", "客户价值与可衡量业务结果相连。", "Valeur client liée à des résultats mesurables."),
      tr("Resilience under high-volume operating pressure.", "在高吞吐运营压力下保持韧性。", "Résilience sous forte pression opérationnelle."),
      tr("Technology choices explained in business language.", "用业务语言解释技术选择。", "Choix techniques expliqués en langage business.")
    ],
    payMix: { base: 65, bonus: 15, equity: 20 },
    sources: ["alibabaCareers", "levels", "glassdoor"]
  },
  {
    id: "huawei",
    name: "Huawei",
    legal: "Huawei Technologies",
    mark: "H",
    color: "#ef5b5b",
    hq: "Shenzhen",
    hubs: ["Shenzhen", "Shanghai", "Beijing", "Hangzhou", "Hong Kong"],
    tracks: ["engineering", "ai", "hardware", "product"],
    summary: tr(
      "A global ICT and devices group spanning carrier networks, cloud, consumer electronics, digital power and intelligent automotive systems. Teams often work on long-horizon infrastructure with demanding reliability and delivery constraints.",
      "华为是覆盖运营商网络、云、消费者业务、数字能源与智能汽车的全球 ICT 集团。团队常年在长周期基础设施上工作，对可靠性与交付有很高要求。",
      "Un groupe TIC et appareils couvrant réseaux, cloud, électronique grand public, énergie numérique et automobile intelligente. Les équipes travaillent sur des infrastructures de long terme à forte exigence de fiabilité."
    ),
    orgs: [
      { name: tr("ICT Infrastructure", "ICT 基础设施", "Infrastructure TIC"), focus: tr("Networks, computing, storage, cloud", "网络、计算、存储与云", "Réseaux, calcul, stockage, cloud") },
      { name: tr("Consumer Business", "消费者业务", "Activités grand public"), focus: tr("Devices, OS, cameras, wearables", "终端、操作系统、影像与穿戴", "Appareils, OS, photo, objets connectés") },
      { name: tr("Intelligent Automotive", "智能汽车", "Automobile intelligente"), focus: tr("Cockpit, autonomous driving, vehicle systems", "座舱、自动驾驶与车载系统", "Cockpit, conduite autonome, systèmes véhicule") }
    ],
    payModel: tr(
      "Base salary + performance bonus + long-term incentives where eligible. Compensation varies materially by business group, level and performance rating.",
      "基本工资 + 绩效奖金 + 符合条件者的长期激励。总包会因业务集团、职级与绩效评级显著变化。",
      "Salaire de base + bonus de performance + incentives long terme selon éligibilité. La rémunération varie selon le groupe, le niveau et la performance."
    ),
    loop: [
      { name: tr("Online assessment", "在线测评", "Évaluation en ligne"), detail: tr("Coding, fundamentals or domain test.", "编码、基础或领域测试。", "Code, fondamentaux ou test métier.") },
      { name: tr("Technical rounds", "技术轮", "Entretiens techniques"), detail: tr("Two to three rounds on depth, delivery and problem solving.", "通常 2–3 轮，关注深度、交付与问题解决。", "Deux à trois entretiens sur la profondeur et la livraison.") },
      { name: tr("Manager / values", "主管/价值观", "Manager / valeurs"), detail: tr("Ownership, resilience and customer orientation.", "主导性、韧性与客户导向。", "Appropriation, résilience et orientation client.") }
    ],
    signals: [
      tr("Strong fundamentals and large-scale delivery evidence.", "扎实基础与大规模交付证据。", "Fondamentaux solides et preuves de livraison à grande échelle."),
      tr("Long-horizon technical persistence.", "长期技术投入与坚持。", "Persévérance technique sur le long terme."),
      tr("Customer and reliability orientation.", "客户与可靠性导向。", "Orientation client et fiabilité.")
    ],
    payMix: { base: 70, bonus: 20, equity: 10 },
    sources: ["huaweiCareers", "levels", "glassdoor", "leetcode"]
  },
  {
    id: "xiaomi",
    name: "Xiaomi",
    legal: "Xiaomi Corporation",
    mark: "MI",
    color: "#ff7a45",
    hq: "Beijing",
    hubs: ["Beijing", "Shanghai", "Wuhan", "Shenzhen", "Singapore"],
    tracks: ["engineering", "hardware", "ai", "product"],
    summary: tr(
      "A consumer hardware and internet company connecting smartphones, IoT devices, services and electric vehicles. Hiring often rewards product speed, cost awareness and cross-domain hardware-software execution.",
      "小米是连接智能手机、IoT 设备、互联网服务与电动汽车的消费科技公司。招聘通常看重产品速度、成本意识与软硬件跨域交付能力。",
      "Une entreprise grand public reliant smartphones, IoT, services et véhicules électriques. Le recrutement valorise la vitesse produit, la conscience des coûts et l'exécution matériel-logiciel."
    ),
    orgs: [
      { name: tr("Smartphone", "智能手机", "Smartphones"), focus: tr("Android, camera, performance, system software", "Android、影像、性能与系统软件", "Android, photo, performance, logiciel système") },
      { name: tr("IoT & Ecosystem", "IoT 与生态", "IoT et écosystème"), focus: tr("Connected devices, platform, wearables", "互联设备、平台与穿戴", "Appareils connectés, plateforme, wearables") },
      { name: tr("Xiaomi EV", "小米汽车", "Xiaomi EV"), focus: tr("Autonomous driving, cockpit, vehicle software", "自动驾驶、座舱与车载软件", "Conduite autonome, cockpit, logiciel véhicule") }
    ],
    payModel: tr(
      "Base + performance bonus + equity incentives for eligible roles. Hardware and automotive teams can have different project and delivery multipliers.",
      "基本工资 + 绩效奖金 + 符合条件岗位的股权激励。硬件与汽车团队的项目和交付系数可能不同。",
      "Salaire de base + bonus + actions pour les rôles éligibles. Les équipes matériel et automobile peuvent avoir des multiplicateurs différents."
    ),
    loop: [
      { name: tr("Resume / assessment", "简历/测评", "CV / évaluation"), detail: tr("Track-specific screening and online test.", "岗位方向筛选与在线测评。", "Sélection et test en ligne selon la filière.") },
      { name: tr("Technical rounds", "技术轮", "Entretiens techniques"), detail: tr("Depth in platform, hardware or product execution.", "平台、硬件或产品交付深度。", "Profondeur plateforme, matériel ou produit.") },
      { name: tr("Hiring manager / HR", "主管/HR", "Manager / RH"), detail: tr("Ownership, pace and business context.", "主导性、节奏与业务理解。", "Appropriation, rythme et contexte business.") }
    ],
    signals: [
      tr("Product speed with cost discipline.", "兼顾产品速度与成本纪律。", "Vitesse produit et discipline de coût."),
      tr("Hardware-software integration judgment.", "软硬件一体化判断。", "Jugement d'intégration matériel-logiciel."),
      tr("Evidence of shipping to real users.", "面向真实用户交付的证据。", "Preuves de livraison à de vrais utilisateurs.")
    ],
    payMix: { base: 70, bonus: 15, equity: 15 },
    sources: ["xiaomiCareers", "levels", "glassdoor"]
  },
  {
    id: "baidu",
    name: "Baidu",
    legal: "Baidu, Inc.",
    mark: "B",
    color: "#5c85ff",
    hq: "Beijing",
    hubs: ["Beijing", "Shanghai", "Shenzhen", "Hong Kong", "Mountain View"],
    tracks: ["ai", "engineering", "product", "data"],
    summary: tr(
      "An AI and search technology group spanning foundation models, cloud, autonomous driving and content. Research depth matters, but teams increasingly expect model work to connect to products, cost and deployment.",
      "百度是覆盖基础模型、云、自动驾驶与内容的 AI 与搜索科技集团。研究深度很重要，但团队也越来越重视模型与产品、成本和部署的连接。",
      "Un groupe d'IA et de recherche couvrant modèles de fondation, cloud, conduite autonome et contenus. La profondeur de recherche compte, mais doit se relier au produit, au coût et au déploiement."
    ),
    orgs: [
      { name: tr("Search & Feed", "搜索与信息流", "Recherche et fil"), focus: tr("Ranking, content, ads, user understanding", "排序、内容、广告与用户理解", "Classement, contenus, publicité, utilisateurs") },
      { name: tr("AI Cloud", "智能云", "AI Cloud"), focus: tr("Cloud infrastructure, model services, enterprise AI", "云基础设施、模型服务与企业 AI", "Infrastructure cloud, services de modèles, IA entreprise") },
      { name: tr("Apollo", "Apollo", "Apollo"), focus: tr("Autonomous driving, maps, vehicle intelligence", "自动驾驶、地图与车路协同", "Conduite autonome, cartes, intelligence véhicule") }
    ],
    payModel: tr(
      "Base + performance bonus + equity for eligible levels. AI research and critical technical roles can receive stronger long-term incentives.",
      "基本工资 + 绩效奖金 + 符合条件职级的股权。AI 研究与关键技术岗位的长期激励可能更高。",
      "Salaire + bonus + actions selon le niveau. La recherche IA et certains rôles critiques peuvent recevoir davantage d'incentives long terme."
    ),
    loop: [
      { name: tr("Written / coding screen", "笔试/编码初筛", "Test écrit / code"), detail: tr("Algorithms, ML fundamentals or product analysis.", "算法、ML 基础或产品分析。", "Algorithmes, fondamentaux ML ou analyse produit.") },
      { name: tr("Research / technical", "研究/技术轮", "Recherche / technique"), detail: tr("Paper-to-product reasoning and deep technical questions.", "从论文到产品的推理与深入技术问题。", "Du papier au produit et questions techniques approfondies.") },
      { name: tr("Business / HR", "业务/HR", "Business / RH"), detail: tr("Impact, level and operating expectations.", "影响力、职级与工作预期。", "Impact, niveau et attentes opérationnelles.") }
    ],
    signals: [
      tr("Research depth with deployment awareness.", "研究深度与部署意识。", "Profondeur de recherche et conscience du déploiement."),
      tr("Clear model evaluation logic.", "清晰的模型评估逻辑。", "Logique d'évaluation claire."),
      tr("Ability to connect AI to a product metric.", "把 AI 与产品指标连接起来。", "Relier l'IA à une métrique produit.")
    ],
    payMix: { base: 68, bonus: 12, equity: 20 },
    sources: ["baiduCareers", "levels", "glassdoor", "leetcode"]
  },
  {
    id: "jd",
    name: "JD.com",
    legal: "JD.com, Inc.",
    mark: "JD",
    color: "#f05252",
    hq: "Beijing",
    hubs: ["Beijing", "Shanghai", "Shenzhen", "Chengdu", "Hong Kong"],
    tracks: ["engineering", "data", "product", "ops"],
    summary: tr(
      "A retail and supply-chain technology group whose engineering work is tightly coupled to logistics, marketplace operations and customer experience. Scale and operating reality are central to hiring.",
      "京东是零售与供应链科技集团，工程工作与物流、平台运营和客户体验高度耦合。招聘高度重视规模与真实运营。",
      "Un groupe de distribution et de supply chain dont l'ingénierie est liée à la logistique, au marketplace et à l'expérience client. Échelle et réalité opérationnelle sont centrales."
    ),
    orgs: [
      { name: tr("JD Retail", "京东零售", "JD Retail"), focus: tr("Marketplace, search, pricing, merchant tools", "平台、搜索、定价与商家工具", "Marketplace, recherche, prix, outils marchands") },
      { name: tr("JD Logistics", "京东物流", "JD Logistics"), focus: tr("Fulfilment, routing, automation, planning", "履约、路由、自动化与规划", "Fulfilment, routage, automatisation, planification") },
      { name: tr("JD Technology", "京东科技", "JD Technology"), focus: tr("Cloud, fintech, enterprise software", "云、金融科技与企业软件", "Cloud, fintech, logiciel d'entreprise") }
    ],
    payModel: tr(
      "Base + performance bonus + equity or long-term incentive for eligible levels. Operations and business-unit performance influence variable pay.",
      "基本工资 + 绩效奖金 + 符合条件职级的股权或长期激励。运营与业务单元表现会影响浮动薪酬。",
      "Salaire + bonus + actions ou incentive long terme selon le niveau. La performance opérationnelle influence la part variable."
    ),
    loop: [
      { name: tr("Online assessment", "在线测评", "Évaluation en ligne"), detail: tr("Coding, data or business case.", "编码、数据或业务案例。", "Code, données ou cas business.") },
      { name: tr("Technical rounds", "技术轮", "Entretiens techniques"), detail: tr("Two to three rounds on systems and operating constraints.", "通常 2–3 轮，关注系统与运营约束。", "Deux à trois entretiens sur systèmes et contraintes.") },
      { name: tr("Business / HR", "业务/HR", "Business / RH"), detail: tr("Customer value, resilience and collaboration.", "客户价值、韧性与协作。", "Valeur client, résilience et collaboration.") }
    ],
    signals: [
      tr("Scale and operating-cost awareness.", "规模与运营成本意识。", "Conscience de l'échelle et des coûts."),
      tr("Measurable supply-chain or customer impact.", "可量化的供应链或客户影响。", "Impact mesurable sur la supply chain ou le client."),
      tr("Execution under peak demand.", "高峰需求下的执行能力。", "Exécution en pic de demande.")
    ],
    payMix: { base: 70, bonus: 15, equity: 15 },
    sources: ["jdCareers", "levels", "glassdoor"]
  },
  {
    id: "meituan",
    name: "Meituan",
    legal: "Meituan",
    mark: "M",
    color: "#ffd34e",
    hq: "Beijing",
    hubs: ["Beijing", "Shanghai", "Shenzhen", "Singapore", "Hong Kong"],
    tracks: ["engineering", "ai", "data", "product", "ops"],
    summary: tr(
      "A local-services platform spanning food delivery, in-store services, travel and instant retail. Teams optimize dense real-world operations where growth, rider supply, merchant economics and user experience interact.",
      "美团是覆盖外卖、到店、酒旅与即时零售的本地生活平台。团队优化高度复杂的真实世界运营，增长、骑手供给、商家经济与用户体验相互影响。",
      "Une plateforme de services locaux couvrant livraison, commerce local, voyage et retail instantané. Les équipes optimisent des opérations complexes où croissance, offre de livreurs, économie marchande et expérience interagissent."
    ),
    orgs: [
      { name: tr("Food Delivery", "外卖", "Livraison"), focus: tr("Dispatch, pricing, supply, reliability", "调度、定价、供给与可靠性", "Dispatch, prix, offre, fiabilité") },
      { name: tr("In-store & Travel", "到店与酒旅", "Commerce local et voyage"), focus: tr("Search, recommendations, merchant growth", "搜索、推荐与商家增长", "Recherche, recommandation, croissance marchande") },
      { name: tr("Instashopping", "即时零售", "Retail instantané"), focus: tr("Inventory, fulfilment, forecasting", "库存、履约与预测", "Stock, fulfilment, prévision") }
    ],
    payModel: tr(
      "Base + performance bonus + equity for eligible levels. Business-unit outcomes and operating metrics can materially change variable pay.",
      "基本工资 + 绩效奖金 + 符合条件职级的股权。业务单元结果与运营指标会显著影响浮动薪酬。",
      "Salaire + bonus + actions selon le niveau. Les résultats d'unité et métriques opérationnelles pèsent sur la part variable."
    ),
    loop: [
      { name: tr("Online assessment", "在线测评", "Évaluation en ligne"), detail: tr("Algorithms, analytics or product case.", "算法、分析或产品案例。", "Algorithmes, analytique ou cas produit.") },
      { name: tr("Technical / case rounds", "技术/案例轮", "Technique / cas"), detail: tr("Two to three rounds with real operating constraints.", "通常 2–3 轮，包含真实运营约束。", "Deux à trois entretiens avec contraintes réelles.") },
      { name: tr("Manager / HR", "主管/HR", "Manager / RH"), detail: tr("Ownership, pace and metric judgment.", "主导性、节奏与指标判断。", "Appropriation, rythme et jugement métrique.") }
    ],
    signals: [
      tr("Real-world operational judgment.", "真实世界运营判断。", "Jugement opérationnel réel."),
      tr("Experimentation with local-network effects.", "理解本地网络效应的实验能力。", "Expérimentation avec effets de réseau locaux."),
      tr("Speed with marketplace guardrails.", "在平台护栏下保持速度。", "Vitesse avec garde-fous marketplace.")
    ],
    payMix: { base: 68, bonus: 17, equity: 15 },
    sources: ["meituanCareers", "levels", "glassdoor"]
  },
  {
    id: "netease",
    name: "NetEase",
    legal: "NetEase, Inc.",
    mark: "N",
    color: "#ff5a6f",
    hq: "Hangzhou / Guangzhou",
    hubs: ["Hangzhou", "Guangzhou", "Shanghai", "Beijing", "Hong Kong"],
    tracks: ["engineering", "data", "product"],
    summary: tr(
      "A games, music, education and internet services group with strong studio cultures. Hiring rewards craft, player empathy and the ability to sustain live products over long cycles.",
      "网易是覆盖游戏、音乐、教育与互联网服务的集团，工作室文化鲜明。招聘看重工艺、玩家同理心与长期运营产品的能力。",
      "Un groupe jeux, musique, éducation et services internet avec de fortes cultures de studio. Le recrutement valorise le craft, l'empathie joueur et la tenue de produits live."
    ),
    orgs: [
      { name: tr("Games", "游戏", "Jeux"), focus: tr("Engine, gameplay, art, live operations", "引擎、玩法、美术与长线运营", "Moteur, gameplay, art, live ops") },
      { name: tr("Youdao", "有道", "Youdao"), focus: tr("Learning products, AI, content", "学习产品、AI 与内容", "Produits d'apprentissage, IA, contenus") },
      { name: tr("Cloud Music", "云音乐", "Cloud Music"), focus: tr("Recommendation, community, audio", "推荐、社区与音频", "Recommandation, communauté, audio") }
    ],
    payModel: tr(
      "Base + project or performance bonus + equity for eligible roles. Studio and project success can have an outsized effect on rewards.",
      "基本工资 + 项目/绩效奖金 + 符合条件岗位的股权。工作室与项目成功可能显著影响回报。",
      "Salaire + bonus projet/performance + actions selon le rôle. Le succès du studio ou du projet peut fortement peser."
    ),
    loop: [
      { name: tr("Portfolio / assessment", "作品/测评", "Portfolio / évaluation"), detail: tr("Track-specific coding, portfolio or case.", "视方向安排编码、作品或案例。", "Code, portfolio ou cas selon la filière.") },
      { name: tr("Technical / craft", "技术/专业轮", "Technique / craft"), detail: tr("Depth in engine, data or product craft.", "引擎、数据或产品工艺深度。", "Profondeur moteur, données ou produit.") },
      { name: tr("Team / HR", "团队/HR", "Équipe / RH"), detail: tr("Player empathy, collaboration and long-term fit.", "玩家同理心、协作与长期匹配。", "Empathie joueur, collaboration et adéquation long terme.") }
    ],
    signals: [
      tr("Craft quality and player empathy.", "工艺质量与玩家同理心。", "Qualité du craft et empathie joueur."),
      tr("Long-cycle product ownership.", "长周期产品主导经验。", "Ownership produit sur cycle long."),
      tr("Evidence of learning from live feedback.", "从线上反馈中学习的证据。", "Apprentissage à partir du feedback live.")
    ],
    payMix: { base: 65, bonus: 20, equity: 15 },
    sources: ["neteaseCareers", "levels", "glassdoor"]
  },
  {
    id: "dji",
    name: "DJI",
    legal: "DJI",
    mark: "D",
    color: "#d9e2e7",
    hq: "Shenzhen",
    hubs: ["Shenzhen", "Shanghai", "Hong Kong", "Palo Alto", "Tokyo"],
    tracks: ["engineering", "hardware", "ai"],
    summary: tr(
      "A robotics and camera-technology company building drones, gimbals, imaging systems and enterprise platforms. Work frequently crosses embedded software, controls, computer vision and physical product constraints.",
      "大疆是构建无人机、云台、影像系统与企业平台的机器人与影像科技公司。工作常横跨嵌入式软件、控制、计算机视觉与实体产品约束。",
      "Une entreprise de robotique et d'imagerie construisant drones, stabilisateurs, systèmes d'imagerie et plateformes d'entreprise. Le travail croise logiciel embarqué, contrôle, vision et contraintes physiques."
    ),
    orgs: [
      { name: tr("Consumer Drones", "消费无人机", "Drones grand public"), focus: tr("Flight control, imaging, reliability", "飞控、影像与可靠性", "Contrôle de vol, imagerie, fiabilité") },
      { name: tr("Enterprise & Agriculture", "行业与农业", "Entreprise et agriculture"), focus: tr("Mapping, autonomy, spray systems", "测绘、自主作业与喷洒系统", "Cartographie, autonomie, pulvérisation") },
      { name: tr("Robotics & Imaging", "机器人与影像", "Robotique et imagerie"), focus: tr("Sensors, stabilization, vision", "传感器、增稳与视觉", "Capteurs, stabilisation, vision") }
    ],
    payModel: tr(
      "Base + performance bonus, with selective long-term incentives. Hardware quality and product success can materially influence annual rewards.",
      "基本工资 + 绩效奖金，部分岗位提供长期激励。硬件质量与产品成功会显著影响年度回报。",
      "Salaire + bonus, avec incentives long terme sélectifs. Qualité matérielle et succès produit influencent fortement la rémunération annuelle."
    ),
    loop: [
      { name: tr("Technical screen", "技术初面", "Entretien technique"), detail: tr("Embedded, robotics or vision fundamentals.", "嵌入式、机器人或视觉基础。", "Fondamentaux embarqué, robotique ou vision.") },
      { name: tr("Deep technical", "技术深挖", "Technique approfondie"), detail: tr("Debugging, constraints and physical-system reasoning.", "调试、约束与物理系统推理。", "Débogage, contraintes et raisonnement physique.") },
      { name: tr("Manager / culture", "主管/文化", "Manager / culture"), detail: tr("Craft, iteration and cross-functional delivery.", "工艺、迭代与跨职能交付。", "Craft, itération et livraison transversale.") }
    ],
    signals: [
      tr("Physical-system intuition.", "物理系统直觉。", "Intuition des systèmes physiques."),
      tr("Debugging evidence from real devices.", "真实设备上的调试证据。", "Preuves de débogage sur appareils réels."),
      tr("Craft and detail orientation.", "工艺与细节导向。", "Souci du craft et du détail.")
    ],
    payMix: { base: 72, bonus: 18, equity: 10 },
    sources: ["djiCareers", "levels", "glassdoor"]
  },
  {
    id: "sensetime",
    name: "SenseTime",
    legal: "SenseTime Group",
    mark: "S",
    color: "#808cff",
    hq: "Shanghai / Hong Kong",
    hubs: ["Shanghai", "Hong Kong", "Beijing", "Shenzhen", "Singapore"],
    tracks: ["ai", "engineering", "product"],
    summary: tr(
      "An AI company spanning computer vision, foundation models, automotive intelligence and enterprise AI. Research quality matters, but commercial deployment and responsible model behavior increasingly shape hiring.",
      "商汤是覆盖计算机视觉、基础模型、智能汽车与企业 AI 的 AI 公司。研究质量重要，但商业部署与负责任的模型行为在招聘中权重上升。",
      "Une entreprise d'IA couvrant vision, modèles de fondation, intelligence automobile et IA d'entreprise. La qualité de recherche compte, mais déploiement et comportement responsable pèsent davantage."
    ),
    orgs: [
      { name: tr("Computer Vision", "计算机视觉", "Vision par ordinateur"), focus: tr("Recognition, video, multimodal", "识别、视频与多模态", "Reconnaissance, vidéo, multimodal") },
      { name: tr("Foundation Models", "基础模型", "Modèles de fondation"), focus: tr("LLMs, training, evaluation", "大模型、训练与评估", "LLM, entraînement, évaluation") },
      { name: tr("Automotive & Enterprise", "汽车与企业", "Automobile et entreprise"), focus: tr("Cockpit, driving, industry solutions", "座舱、驾驶与行业方案", "Cockpit, conduite, solutions sectorielles") }
    ],
    payModel: tr(
      "Base + performance bonus + equity for eligible levels. Private-market-style incentives and project success can affect total reward.",
      "基本工资 + 绩效奖金 + 符合条件职级的股权。项目成功与长期激励会影响总回报。",
      "Salaire + bonus + actions selon le niveau. Le succès de projet et les incentives long terme influencent la rémunération totale."
    ),
    loop: [
      { name: tr("Research screen", "研究初筛", "Sélection recherche"), detail: tr("Paper, project or applied ML evidence.", "论文、项目或应用 ML 证据。", "Papier, projet ou preuves ML appliquées.") },
      { name: tr("Technical deep dive", "技术深挖", "Approfondissement technique"), detail: tr("Modeling, coding, evaluation and deployment.", "建模、编码、评估与部署。", "Modélisation, code, évaluation et déploiement.") },
      { name: tr("Business / HR", "业务/HR", "Business / RH"), detail: tr("Commercial relevance and collaboration.", "商业相关性与协作。", "Pertinence commerciale et collaboration.") }
    ],
    signals: [
      tr("Research quality with deployment realism.", "研究质量与部署现实感。", "Qualité de recherche et réalisme du déploiement."),
      tr("Clear evaluation and failure analysis.", "清晰的评估与失败分析。", "Évaluation et analyse d'échec claires."),
      tr("Ability to explain model behavior to customers.", "能向客户解释模型行为。", "Capacité à expliquer le comportement du modèle.")
    ],
    payMix: { base: 65, bonus: 15, equity: 20 },
    sources: ["sensetimeCareers", "levels", "glassdoor"]
  },
  {
    id: "hkex",
    name: "HKEX",
    legal: "Hong Kong Exchanges and Clearing",
    mark: "HK",
    color: "#e7c36d",
    hq: "Hong Kong",
    hubs: ["Hong Kong", "Beijing", "Shanghai", "London", "Singapore"],
    tracks: ["engineering", "data", "product", "ops"],
    summary: tr(
      "The operator of Hong Kong's securities and derivatives markets and a major market-infrastructure group. Technology roles combine low-latency reliability, regulatory discipline and multi-stakeholder delivery.",
      "香港交易所是香港证券与衍生品市场运营方，也是重要金融市场基础设施集团。技术岗位同时要求低延迟可靠性、监管纪律与多方交付能力。",
      "L'opérateur des marchés actions et dérivés de Hong Kong et une infrastructure de marché majeure. Les rôles tech combinent fiabilité à faible latence, discipline réglementaire et delivery multi-parties."
    ),
    orgs: [
      { name: tr("Trading Technology", "交易科技", "Technologie de trading"), focus: tr("Matching, market data, connectivity", "撮合、行情与连接", "Matching, données de marché, connectivité") },
      { name: tr("Clearing & Risk", "清算与风险", "Compensation et risque"), focus: tr("Clearing, settlement, risk systems", "清算、结算与风险系统", "Compensation, règlement, systèmes de risque") },
      { name: tr("Data & Platform", "数据与平台", "Données et plateforme"), focus: tr("Market data products, analytics, APIs", "行情产品、分析与 API", "Produits de données, analytique, API") }
    ],
    payModel: tr(
      "Base salary + discretionary performance bonus + benefits. Cash bonus is typically more material than equity for many grades.",
      "基本工资 + 酌情绩效奖金 + 福利。对多数职级而言，现金奖金的权重通常高于股权。",
      "Salaire + bonus discrétionnaire + avantages. Le bonus cash pèse généralement plus que les actions pour de nombreux grades."
    ),
    loop: [
      { name: tr("Technical screen", "技术初面", "Entretien technique"), detail: tr("Engineering fundamentals or domain expertise.", "工程基础或领域专长。", "Fondamentaux d'ingénierie ou expertise métier.") },
      { name: tr("Technical / stakeholder", "技术/利益相关者", "Technique / parties prenantes"), detail: tr("Reliability, regulation and delivery constraints.", "可靠性、监管与交付约束。", "Fiabilité, réglementation et contraintes de delivery.") },
      { name: tr("Panel / HR", "小组/HR", "Panel / RH"), detail: tr("Judgment, communication and market-infrastructure mindset.", "判断、沟通与市场基础设施思维。", "Jugement, communication et logique d'infrastructure de marché.") }
    ],
    signals: [
      tr("Reliability and incident discipline.", "可靠性与事故纪律。", "Fiabilité et discipline d'incident."),
      tr("Regulatory and control awareness.", "监管与控制意识。", "Conscience réglementaire et de contrôle."),
      tr("Multi-stakeholder clarity.", "面向多方利益相关者的清晰沟通。", "Clarté multi-parties prenantes.")
    ],
    payMix: { base: 72, bonus: 24, equity: 4 },
    sources: ["hkexCareers", "levels", "glassdoor"]
  },
  {
    id: "cathay",
    name: "Cathay Pacific",
    legal: "Cathay Pacific Airways",
    mark: "CX",
    color: "#68d5d3",
    hq: "Hong Kong",
    hubs: ["Hong Kong", "London", "Singapore", "Sydney", "Taipei"],
    tracks: ["data", "product", "ops", "engineering"],
    summary: tr(
      "A Hong Kong-based international airline whose digital and operating teams work on network planning, revenue, customer experience and complex 24/7 operations. Shift dynamics and safety discipline are part of the environment.",
      "国泰航空是以香港为基地的国际航空公司，数字化与运营团队负责网络规划、收益、客户体验与复杂 24/7 运营。轮班节奏与安全纪律是工作环境的一部分。",
      "Une compagnie internationale basée à Hong Kong. Les équipes digitales et opérationnelles travaillent sur réseau, revenus, expérience client et opérations 24/7. Rythme décalé et discipline sécurité font partie du contexte."
    ),
    orgs: [
      { name: tr("Digital & IT", "数字与 IT", "Digital et IT"), focus: tr("Customer platforms, data, cloud, APIs", "客户平台、数据、云与 API", "Plateformes client, données, cloud, API") },
      { name: tr("Revenue & Network", "收益与网络", "Revenus et réseau"), focus: tr("Pricing, forecasting, network planning", "定价、预测与网络规划", "Prix, prévision, planification réseau") },
      { name: tr("Airport & Cargo", "机场与货运", "Aéroport et fret"), focus: tr("Operations, logistics, service recovery", "运营、物流与服务恢复", "Opérations, logistique, reprise de service") }
    ],
    payModel: tr(
      "Base salary + performance bonus + allowances depending on role. Operational and shift-based roles may include different allowance structures.",
      "基本工资 + 绩效奖金 + 视岗位而定的津贴。运营与轮班岗位可能有不同的津贴结构。",
      "Salaire + bonus + indemnités selon le poste. Les rôles opérationnels et décalés peuvent avoir des structures différentes."
    ),
    loop: [
      { name: tr("Recruiter screen", "招聘官初筛", "Échange recruteur"), detail: tr("Role, shift and right-to-work requirements.", "岗位、轮班与工作资格要求。", "Poste, horaires et droit de travail.") },
      { name: tr("Case / technical", "案例/技术轮", "Cas / technique"), detail: tr("Data, product or operational problem solving.", "数据、产品或运营问题解决。", "Résolution data, produit ou opérationnelle.") },
      { name: tr("Panel / HR", "小组/HR", "Panel / RH"), detail: tr("Safety mindset, customer focus and collaboration.", "安全意识、客户导向与协作。", "Sécurité, orientation client et collaboration.")
      }
    ],
    signals: [
      tr("Safety and operational discipline.", "安全与运营纪律。", "Sécurité et discipline opérationnelle."),
      tr("Customer recovery under disruption.", "中断情境下的客户恢复。", "Reprise client en situation perturbée."),
      tr("Cross-functional clarity in a 24/7 business.", "在 24/7 业务中的跨职能清晰度。", "Clarté transversale dans une activité 24/7.")
    ],
    payMix: { base: 75, bonus: 18, equity: 7 },
    sources: ["cathayCareers", "levels", "glassdoor"]
  },
  {
    id: "mtr",
    name: "MTR",
    legal: "MTR Corporation",
    mark: "MTR",
    color: "#df4d5c",
    hq: "Hong Kong",
    hubs: ["Hong Kong", "Shenzhen", "Beijing", "London", "Sydney"],
    tracks: ["engineering", "data", "ops", "product"],
    summary: tr(
      "A rail and property group operating one of the world's most intensively used metro systems. Technology and engineering roles balance passenger reliability, asset life, safety and long-horizon capital planning.",
      "港铁是运营全球最繁忙地铁系统之一的铁路与物业集团。技术与工程岗位需要平衡乘客可靠性、资产寿命、安全与长期资本规划。",
      "Un groupe ferroviaire et immobilier exploitant l'un des métros les plus intensifs au monde. Les rôles tech et ingénierie équilibrent fiabilité voyageurs, durée de vie des actifs, sécurité et planification long terme."
    ),
    orgs: [
      { name: tr("Rail Operations", "铁路运营", "Opérations ferroviaires"), focus: tr("Signalling, control, service reliability", "信号、控制与服务可靠性", "Signalisation, contrôle, fiabilité") },
      { name: tr("Asset & Engineering", "资产与工程", "Actifs et ingénierie"), focus: tr("Maintenance, sensors, asset management", "维护、传感器与资产管理", "Maintenance, capteurs, gestion d'actifs") },
      { name: tr("Digital & Innovation", "数字与创新", "Digital et innovation"), focus: tr("Data platforms, passenger products, automation", "数据平台、乘客产品与自动化", "Plateformes data, produits voyageurs, automatisation") }
    ],
    payModel: tr(
      "Base salary + performance bonus + benefits and allowances. Shift, operational and professional engineering roles can have distinct structures.",
      "基本工资 + 绩效奖金 + 福利与津贴。轮班、运营与专业工程岗位可能有不同结构。",
      "Salaire + bonus + avantages et indemnités. Les rôles décalés, opérationnels et d'ingénierie peuvent différer."
    ),
    loop: [
      { name: tr("Application screen", "申请筛选", "Sélection"), detail: tr("Qualifications, safety awareness and role fit.", "资历、安全意识与岗位匹配。", "Qualifications, sécurité et adéquation.") },
      { name: tr("Technical interview", "技术面试", "Entretien technique"), detail: tr("Engineering, data or operational depth.", "工程、数据或运营深度。", "Profondeur ingénierie, data ou opérations.") },
      { name: tr("Panel / HR", "小组/HR", "Panel / RH"), detail: tr("Reliability, stakeholder management and public-service mindset.", "可靠性、利益相关者管理与公共服务意识。", "Fiabilité, gestion des parties prenantes et service public.")
      }
    ],
    signals: [
      tr("Safety-first engineering judgment.", "安全优先的工程判断。", "Jugement d'ingénierie centré sécurité."),
      tr("Long-lived asset thinking.", "长期资产思维。", "Pensée actif long terme."),
      tr("Public-service reliability.", "公共服务可靠性。", "Fiabilité de service public.")
    ],
    payMix: { base: 78, bonus: 16, equity: 6 },
    sources: ["mtrCareers", "levels", "glassdoor"]
  },
  {
    id: "hangseng",
    name: "Hang Seng Bank",
    legal: "Hang Seng Bank",
    mark: "HS",
    color: "#68d39a",
    hq: "Hong Kong",
    hubs: ["Hong Kong", "Shenzhen", "Guangzhou", "Shanghai", "Macau"],
    tracks: ["engineering", "data", "product", "ops"],
    summary: tr(
      "A Hong Kong retail and commercial bank investing in mobile banking, data, risk analytics and digital wealth. Hiring balances engineering speed with financial control, security and regulatory expectations.",
      "恒生银行是香港零售与商业银行，持续投入移动银行、数据、风险分析与数字财富。招聘在工程速度与金融控制、安全和监管要求之间取得平衡。",
      "Une banque de détail et commerciale de Hong Kong investissant dans le mobile, la data, l'analytique risque et la gestion digitale. Le recrutement équilibre vitesse technique, contrôle, sécurité et réglementation."
    ),
    orgs: [
      { name: tr("Digital Banking", "数字银行", "Banque digitale"), focus: tr("Mobile, onboarding, payments, wealth", "移动端、开户、支付与财富", "Mobile, onboarding, paiements, gestion") },
      { name: tr("Risk & Analytics", "风险与分析", "Risque et analytique"), focus: tr("Credit, fraud, market risk, data science", "信贷、欺诈、市场风险与数据科学", "Crédit, fraude, risque de marché, data science") },
      { name: tr("Technology", "科技", "Technologie"), focus: tr("Cloud, integration, security, operations", "云、集成、安全与运营", "Cloud, intégration, sécurité, opérations") }
    ],
    payModel: tr(
      "Base salary + performance bonus + banking benefits. Bonus and progression depend on grade, business performance and risk outcomes.",
      "基本工资 + 绩效奖金 + 银行福利。奖金与晋升取决于职级、业务表现和风险结果。",
      "Salaire + bonus + avantages bancaires. Bonus et progression dépendent du grade, de la performance et des résultats de risque."
    ),
    loop: [
      { name: tr("Application screen", "申请筛选", "Sélection"), detail: tr("Experience, regulatory awareness and role fit.", "经验、监管意识与岗位匹配。", "Expérience, conscience réglementaire et adéquation.") },
      { name: tr("Technical / case", "技术/案例轮", "Technique / cas"), detail: tr("Engineering, data or banking scenario.", "工程、数据或银行场景。", "Ingénierie, data ou scénario bancaire.") },
      { name: tr("Panel / HR", "小组/HR", "Panel / RH"), detail: tr("Risk judgment, communication and stakeholder trust.", "风险判断、沟通与利益相关者信任。", "Jugement de risque, communication et confiance.")
      }
    ],
    signals: [
      tr("Security and risk awareness.", "安全与风险意识。", "Conscience sécurité et risque."),
      tr("Customer trust in digital channels.", "数字渠道中的客户信任。", "Confiance client sur les canaux digitaux."),
      tr("Practical delivery inside regulatory constraints.", "监管约束下的务实交付。", "Livraison pragmatique sous contraintes réglementaires.")
    ],
    payMix: { base: 74, bonus: 20, equity: 6 },
    sources: ["hangsengCareers", "levels", "glassdoor"]
  }
];

export const getCompany = (id) => COMPANIES.find((company) => company.id === id);
COMPANIES.push(...JP_COMPANIES);

export const JOB_PORTALS = {
  google: "https://www.google.com/about/careers/applications/jobs/results/",
  meta: "https://www.metacareers.com/jobsearch/",
  amazon: "https://www.amazon.jobs/en/",
  microsoft: "https://apply.careers.microsoft.com/careers",
  apple: "https://jobs.apple.com/en-us/search",
  netflix: "https://explore.jobs.netflix.net/careers",
  nvidia: "https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite",
  openai: "https://openai.com/careers/search/",
  anthropic: "https://www.anthropic.com/careers",
  bytedance: "https://joinbytedance.com/search",
  tencent: "https://careers.tencent.com/en-us/search.html",
  alibaba: "https://talent.alibaba.com/",
  huawei: "https://career.huawei.com/reccampportal/portal5/index.html",
  xiaomi: "https://hr.xiaomi.com/",
  baidu: "https://talent.baidu.com/jobs/social-list",
  jd: "https://zhaopin.jd.com/",
  meituan: "https://zhaopin.meituan.com/web/position",
  netease: "https://hr.163.com/",
  dji: "https://careers.dji.com/zh-CN/",
  sensetime: "https://hr.sensetime.com/",
  hkex: "https://www.hkexgroup.com/About-HKEX/Careers-at-HKEX?sc_lang=en",
  cathay: "https://careers.cathaypacific.com/en",
  mtr: "https://www.mtr.com.hk/en/corporate/careers/career.html",
  hangseng: "https://www.hangseng.com/en-hk/about/careers/"
};

export const getJobPortal = (companyId) =>
  JOB_PORTALS[companyId] || "https://www.google.com/about/careers/applications/jobs/results/";

Object.assign(JOB_PORTALS, JP_PORTALS);
