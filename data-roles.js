const tr = (en, zh, fr) => ({ en, zh, fr });

const EDU_CS = tr(
  "Bachelor's in CS/CE or equivalent demonstrated engineering evidence; master's common but not required.",
  "计算机/计算机工程本科或等价的工程能力证据；硕士常见但非硬性要求。",
  "Licence en informatique ou génie informatique, ou preuves d'ingénierie équivalentes ; master courant mais non obligatoire."
);
const EDU_AI = tr(
  "Strong ML fundamentals; PhD valued for research-heavy teams, while applied teams accept exceptional shipping evidence.",
  "扎实的 ML 基础；研究型团队偏好博士，应用团队也接受极强的实际交付证据。",
  "Solides fondamentaux ML ; doctorat apprécié en recherche, preuves de livraison exceptionnelles acceptées en équipe appliquée."
);
const EDU_QUANT = tr(
  "Bachelor's required; MS/PhD in a quantitative field is common for science and senior data roles.",
  "本科为基本要求；科学与高级数据岗位常见量化领域硕士/博士。",
  "Licence requise ; master/doctorat quantitatif courant pour la science et les rôles data seniors."
);
const EDU_PRODUCT = tr(
  "Bachelor's required; MBA or technical master's is optional and never a substitute for product evidence.",
  "本科为基本要求；MBA 或技术硕士并非必需，也不能替代产品判断证据。",
  "Licence requise ; MBA ou master technique facultatif, jamais un substitut aux preuves produit."
);
const EDU_HW = tr(
  "BS/MS in EE, CE or a related physical-engineering field; tape-out, lab or silicon internship evidence matters.",
  "电子、计算机或相关物理工程本科/硕士；流片、实验室或芯片实习证据很重要。",
  "Licence/master en EE, CE ou domaine physique lié ; preuves de tape-out, laboratoire ou stage silicium."
);
const EDU_OPS = tr(
  "Bachelor's or equivalent operational track record; domain experience often outweighs institutional prestige.",
  "本科或等价的运营履历；领域经验通常比院校名气更重要。",
  "Licence ou parcours opérationnel équivalent ; l'expérience du domaine pèse souvent plus que le prestige de l'école."
);

const MAJORS_CS = tr(
  "Computer science, computer engineering, software engineering, mathematics or a related field.",
  "计算机科学、计算机工程、软件工程、数学或相关专业。",
  "Informatique, génie informatique, génie logiciel, mathématiques ou domaine proche."
);
const MAJORS_AI = tr(
  "CS, ML, statistics, applied mathematics or a domain with strong computational research.",
  "计算机、机器学习、统计、应用数学，或具有强计算研究背景的领域。",
  "Informatique, ML, statistiques, mathématiques appliquées ou domaine à forte composante computationnelle."
);
const MAJORS_QUANT = tr(
  "Statistics, CS, economics, operations research, applied mathematics or a quantitative social science.",
  "统计、计算机、经济、运筹、应用数学或量化社会科学。",
  "Statistiques, informatique, économie, recherche opérationnelle, mathématiques appliquées ou sciences sociales quantitatives."
);
const MAJORS_PRODUCT = tr(
  "Any discipline with evidence of product judgment, technical fluency and customer discovery.",
  "专业不限，但需有产品判断、技术理解与客户发现的证据。",
  "Toute discipline avec preuves de jugement produit, aisance technique et découverte client."
);
const MAJORS_HW = tr(
  "Electrical engineering, computer engineering, materials, physics or a related hardware field.",
  "电子工程、计算机工程、材料、物理或相关硬件专业。",
  "Génie électrique, génie informatique, matériaux, physique ou domaine matériel proche."
);
const MAJORS_OPS = tr(
  "Industrial engineering, operations, supply chain, business or a technical field with operating experience.",
  "工业工程、运营、供应链、商科，或具备运营经验的技术专业。",
  "Génie industriel, opérations, supply chain, gestion ou domaine technique avec expérience opérationnelle."
);

const EXP_SENIOR = tr(
  "Typically 4–7+ years, or equivalent scope and autonomy in smaller environments.",
  "通常 4–7 年以上，或在更小环境中有等价的职责范围与自主性。",
  "Généralement 4 à 7 ans et plus, ou un périmètre et une autonomie équivalents."
);
const EXP_STAFF = tr(
  "Typically 8+ years with evidence of multi-team technical direction.",
  "通常 8 年以上，并有跨团队技术方向主导证据。",
  "Généralement 8 ans et plus, avec preuve de direction technique multi-équipes."
);
const EXP_AI = tr(
  "Strong research or applied ML record; years matter less than reproducible evidence and judgment.",
  "研究或应用 ML 履历扎实；相比年限，更看重可复现证据与判断力。",
  "Solide parcours recherche ou ML appliqué ; les preuves reproductibles et le jugement comptent plus que les années."
);
const EXP_PRODUCT = tr(
  "Typically 4–8 years in product or a directly adjacent technical/customer-facing role.",
  "通常 4–8 年产品经验，或直接相关的技术/客户岗位经验。",
  "Généralement 4 à 8 ans en produit ou dans un rôle technique/client directement adjacent."
);
const EXP_OPS = tr(
  "Typically 5+ years in a comparable operating environment with measurable ownership.",
  "通常在可比运营环境中有 5 年以上经验，并有可量化主导性。",
  "Généralement 5 ans et plus dans un environnement comparable, avec appropriation mesurable."
);

export const ROLES = [
  {
    id: "google-senior-swe",
    companyId: "google",
    title: tr("Senior Software Engineer", "高级软件工程师", "Ingénieur logiciel senior"),
    track: "engineering",
    level: "L5",
    location: "Mountain View / NYC / London",
    currency: "USD",
    unit: "k",
    base: [185, 220],
    total: [320, 420],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 3, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Distributed systems", "C++ / Java / Go", "Design review", "Reliability"],
    summary: tr(
      "Own a meaningful system boundary, turn ambiguous product needs into robust designs, and raise the technical bar through review and mentoring.",
      "负责有实质影响的系统边界，把模糊的产品需求转化为稳健设计，并通过评审与带教提升团队技术标准。",
      "Piloter un périmètre système significatif, transformer des besoins ambigus en conceptions robustes et élever le niveau technique par la revue et le mentorat."
    ),
    path: tr(
      "Common route: strong generalist engineering, one or two deep infrastructure/product areas, and evidence that your work changed a team-level or user-level metric.",
      "常见路径：扎实的通用工程能力，1–2 个深入的基础设施/产品领域，以及你的工作改变团队或用户指标的证据。",
      "Parcours courant : ingénierie généraliste solide, un ou deux domaines approfondis, et preuve d'un changement de métrique équipe ou utilisateur."
    ),
    screening: tr(
      "Expect coding with invariants and edge cases, a design conversation, and questions about how you resolve disagreement without slowing the team.",
      "预计会考带不变量与边界条件的编码、一次设计讨论，以及你如何在不拖慢团队的前提下处理分歧。",
      "Attendez du code avec invariants et cas limites, une conversation de conception et des questions sur la résolution de désaccords."
    ),
    sourceIds: ["googleCareers", "levels", "leetcode", "glassdoor"]
  },
  {
    id: "google-staff-ml",
    companyId: "google",
    title: tr("Staff Machine Learning Engineer", "资深机器学习工程师", "Ingénieur ML principal"),
    track: "ai",
    level: "L6",
    location: "Mountain View / London / Zurich",
    currency: "USD",
    unit: "k",
    base: [230, 260],
    total: [480, 650],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 3, meetings: 4 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_STAFF,
    skills: ["ML systems", "LLMs", "Evaluation", "Technical leadership"],
    summary: tr(
      "Set the technical direction for ML systems that serve millions of users, from modeling and evaluation strategy to serving cost and product integration.",
      "为数百万用户规模的 ML 系统设定技术方向，涵盖建模、评估策略、服务成本与产品集成。",
      "Définir la direction technique de systèmes ML à grande échelle, du modeling et de l'évaluation au coût de serving et à l'intégration produit."
    ),
    path: tr(
      "Often a PhD plus applied production experience, or a long applied track with evidence of model quality, latency, cost and organizational influence moving together.",
      "常见路径为博士加生产落地经验，或长期应用履历，能证明模型质量、延迟、成本与组织影响同步改善。",
      "Souvent un doctorat et de l'expérience en production, ou un long parcours appliqué démontrant qualité, latence, coût et influence organisationnelle."
    ),
    screening: tr(
      "Expect ML depth, evaluation design, systems trade-offs and a leadership narrative covering several teams rather than a single model launch.",
      "预计会深挖 ML、评估设计、系统权衡，并考察跨多个团队而非单一模型发布的领导经历。",
      "Attendez profondeur ML, conception d'évaluations, compromis système et un récit de leadership sur plusieurs équipes."
    ),
    sourceIds: ["googleCareers", "levels", "leetcode", "glassdoor"]
  },
  {
    id: "google-senior-pm",
    companyId: "google",
    title: tr("Senior Product Manager", "高级产品经理", "Chef de produit senior"),
    track: "product",
    level: "L5",
    location: "Mountain View / NYC",
    currency: "USD",
    unit: "k",
    base: [190, 220],
    total: [300, 380],
    density: 3,
    rhythm: { focus: 3, hours: 3, oncall: 1, meetings: 4 },
    education: EDU_PRODUCT,
    majors: MAJORS_PRODUCT,
    experience: EXP_PRODUCT,
    skills: ["Product strategy", "Experimentation", "Stakeholder alignment", "Technical fluency"],
    summary: tr(
      "Define a product direction inside a large platform, align competing teams, and use evidence to decide what not to build.",
      "在大型平台内定义产品方向，协调相互竞争的团队，并用证据决定哪些事情不该做。",
      "Définir une direction produit dans une grande plateforme, aligner des équipes concurrentes et décider, preuves à l'appui, ce qu'il ne faut pas construire."
    ),
    path: tr(
      "Common route: product ownership with measurable user or business outcomes, enough technical depth to challenge trade-offs, and experience navigating matrixed organizations.",
      "常见路径：具备可量化用户/业务结果的产品主导经验，技术深度足以挑战权衡，并有复杂矩阵组织中的协作经历。",
      "Parcours courant : ownership produit avec résultats mesurables, profondeur technique suffisante et expérience des organisations matricielles."
    ),
    screening: tr(
      "Expect product sense, metric design, prioritization under constraints, and a realistic account of influence without formal authority.",
      "预计考察产品判断、指标设计、约束下的优先级，以及无正式职权时如何发挥影响的真实案例。",
      "Attendez sens produit, conception de métriques, priorisation sous contrainte et influence sans autorité formelle."
    ),
    sourceIds: ["googleCareers", "levels", "glassdoor"]
  },
  {
    id: "meta-senior-swe",
    companyId: "meta",
    title: tr("Senior Software Engineer", "高级软件工程师", "Ingénieur logiciel senior"),
    track: "engineering",
    level: "E5",
    location: "Menlo Park / Seattle / NYC",
    currency: "USD",
    unit: "k",
    base: [200, 230],
    total: [340, 440],
    density: 4,
    rhythm: { focus: 4, hours: 4, oncall: 3, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Product engineering", "System design", "Data analysis", "Rapid iteration"],
    summary: tr(
      "Ship product-facing systems at very large scale, own outcomes beyond the code, and iterate quickly with data from real users.",
      "交付超大规模、面向用户的产品系统，对代码之外的结果负责，并依据真实用户数据快速迭代。",
      "Livrer des systèmes produit à très grande échelle, assumer les résultats au-delà du code et itérer vite avec les données utilisateurs."
    ),
    path: tr(
      "Common route: strong coding, product intuition and evidence of shipping across the full lifecycle, including instrumentation and post-launch learning.",
      "常见路径：强编码、产品直觉，以及覆盖完整生命周期的交付证据，包括埋点与上线后学习。",
      "Parcours courant : code solide, intuition produit et preuves de livraison sur tout le cycle, instrumentation et apprentissage post-lancement inclus."
    ),
    screening: tr(
      "Expect two coding rounds, a design round and behavioral questions about speed, impact and giving/receiving direct feedback.",
      "预计两轮编码、一轮设计和关于速度、影响及直接反馈的行为问题。",
      "Attendez deux entretiens de code, une conception et des questions sur vitesse, impact et feedback direct."
    ),
    sourceIds: ["metaCareers", "levels", "leetcode", "glassdoor"]
  },
  {
    id: "meta-data-scientist",
    companyId: "meta",
    title: tr("Data Scientist, Analytics", "数据分析科学家", "Data scientist, analytics"),
    track: "data",
    level: "IC5",
    location: "Menlo Park / Remote-US",
    currency: "USD",
    unit: "k",
    base: [180, 205],
    total: [280, 360],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 1, meetings: 4 },
    education: EDU_QUANT,
    majors: MAJORS_QUANT,
    experience: EXP_SENIOR,
    skills: ["Experimentation", "SQL", "Causal inference", "Product metrics"],
    summary: tr(
      "Turn product and business questions into measurable analyses, design experiments, and make uncertainty legible to decision-makers.",
      "把产品与业务问题转化为可衡量的分析，设计实验，并让决策者理解其中的不确定性。",
      "Transformer des questions produit et business en analyses mesurables, concevoir des expériences et rendre l'incertitude lisible."
    ),
    path: tr(
      "Common route: analytics or experimentation ownership in a consumer product, with the ability to explain effect size and limitations rather than only statistical significance.",
      "常见路径：在消费产品中主导分析或实验，能解释效应量与局限，而不只报告统计显著性。",
      "Parcours courant : ownership analytique ou expérimental sur un produit grand public, avec explication de la taille d'effet et des limites."
    ),
    screening: tr(
      "Expect SQL, experimental design, metric trade-offs, a product case and a clear explanation of when the data cannot answer the question.",
      "预计考察 SQL、实验设计、指标权衡、产品案例，以及何时数据无法回答问题的清晰说明。",
      "Attendez SQL, design expérimental, compromis de métriques, cas produit et limites des données."
    ),
    sourceIds: ["metaCareers", "levels", "glassdoor"]
  },
  {
    id: "amazon-sde-ii",
    companyId: "amazon",
    title: tr("Software Development Engineer II", "软件开发工程师 II", "Ingénieur logiciel II"),
    track: "engineering",
    level: "L5",
    location: "Seattle / Bellevue / NYC",
    currency: "USD",
    unit: "k",
    base: [160, 190],
    total: [240, 320],
    density: 4,
    rhythm: { focus: 4, hours: 4, oncall: 4, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["AWS", "Distributed systems", "Operational excellence", "Ownership"],
    summary: tr(
      "Own a service or product area end to end, including design, delivery, operations and the written narrative that makes decisions durable.",
      "端到端负责一个服务或产品领域，包括设计、交付、运营，以及让决策可沉淀的书面材料。",
      "Posséder un service ou domaine produit de bout en bout : conception, livraison, opérations et documentation qui rend les décisions durables."
    ),
    path: tr(
      "Common route: strong coding plus evidence of operating production systems, managing trade-offs and taking ownership when requirements are incomplete.",
      "常见路径：强编码，加上生产系统运营、权衡管理，以及需求不完整时主动补位的证据。",
      "Parcours courant : code solide, opération de systèmes en production, gestion des compromis et appropriation face à des exigences incomplètes."
    ),
    screening: tr(
      "Expect coding, system design, operational scenarios and leadership-principle questions anchored in specific past decisions.",
      "预计考察编码、系统设计、运营场景，以及基于具体过往决策的领导力准则问题。",
      "Attendez code, conception, scénarios opérationnels et questions liées aux principes de leadership."
    ),
    sourceIds: ["amazonLP", "levels", "leetcode", "glassdoor"]
  },
  {
    id: "amazon-applied-scientist",
    companyId: "amazon",
    title: tr("Applied Scientist II", "应用科学家 II", "Scientifique appliqué II"),
    track: "ai",
    level: "L5",
    location: "Seattle / Bay Area / NYC",
    currency: "USD",
    unit: "k",
    base: [180, 210],
    total: [300, 390],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 2, meetings: 3 },
    education: EDU_QUANT,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["Machine learning", "Python", "Causal / statistical methods", "Production ML"],
    summary: tr(
      "Translate a business or customer problem into an ML formulation, build reliable experiments, and move successful models into production.",
      "把业务或客户问题转化为 ML 建模问题，构建可靠实验，并推动成功模型进入生产。",
      "Traduire un problème business ou client en formulation ML, construire des expériences fiables et industrialiser les modèles performants."
    ),
    path: tr(
      "Common route: MS/PhD plus evidence of applied research, or a strong engineering background with rigorous experimentation and deployed ML.",
      "常见路径：硕士/博士加应用研究证据，或强工程背景并具备严谨实验与已部署 ML 经验。",
      "Parcours courant : master/doctorat et recherche appliquée, ou ingénierie solide avec expérimentation rigoureuse et ML en production."
    ),
    screening: tr(
      "Expect ML fundamentals, a research deep dive, coding/statistics and a business framing that shows why the model matters.",
      "预计考察 ML 基础、研究深挖、编码/统计，以及说明模型为何重要的业务框架。",
      "Attendez fondamentaux ML, approfondissement recherche, code/statistiques et cadrage business."
    ),
    sourceIds: ["amazonScience", "amazonLP", "levels", "glassdoor"]
  },
  {
    id: "amazon-tpm-iii",
    companyId: "amazon",
    title: tr("Technical Program Manager III", "技术项目经理 III", "Chef de programme technique III"),
    track: "ops",
    level: "L6",
    location: "Seattle / Arlington / Remote-US",
    currency: "USD",
    unit: "k",
    base: [160, 190],
    total: [220, 300],
    density: 4,
    rhythm: { focus: 2, hours: 4, oncall: 2, meetings: 5 },
    education: EDU_OPS,
    majors: MAJORS_OPS,
    experience: EXP_OPS,
    skills: ["Program delivery", "Risk management", "Written communication", "Cross-org influence"],
    summary: tr(
      "Drive a complex technical program across teams, surface risks early, and create written mechanisms that keep decisions and dependencies visible.",
      "推动跨团队复杂技术项目，尽早暴露风险，并建立让决策与依赖关系持续可见的书面机制。",
      "Piloter un programme technique complexe entre équipes, révéler les risques tôt et créer des mécanismes écrits rendant décisions et dépendances visibles."
    ),
    path: tr(
      "Common route: delivery leadership on multi-team systems, or engineering/operations experience followed by program ownership.",
      "常见路径：多团队系统的交付领导经验，或工程/运营背景后转向项目主导。",
      "Parcours courant : leadership de livraison multi-équipes, ou expérience ingénierie/opérations suivie d'un ownership programme."
    ),
    screening: tr(
      "Expect scenario questions on conflict, launch readiness, ambiguous ownership and evidence-based escalation, plus Leadership Principles.",
      "预计考察冲突、发布准备、职责模糊与基于证据的升级机制等场景，以及领导力准则。",
      "Attendez des scénarios de conflit, préparation de lancement, ownership ambigu et escalade factuelle, ainsi que les principes de leadership."
    ),
    sourceIds: ["amazonLP", "levels", "glassdoor"]
  },
  {
    id: "microsoft-senior-swe",
    companyId: "microsoft",
    title: tr("Senior Software Engineer", "高级软件工程师", "Ingénieur logiciel senior"),
    track: "engineering",
    level: "63",
    location: "Redmond / Remote-US",
    currency: "USD",
    unit: "k",
    base: [170, 200],
    total: [240, 330],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 3, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Cloud services", "C# / Java / C++", "System design", "Cross-team collaboration"],
    summary: tr(
      "Design and operate services used by enterprises, with attention to compatibility, security and adoption across organizational boundaries.",
      "设计并运营企业级服务，关注兼容性、安全性及跨组织采用。",
      "Concevoir et opérer des services d'entreprise en tenant compte de la compatibilité, de la sécurité et de l'adoption inter-organisationnelle."
    ),
    path: tr(
      "Common route: product or platform engineering with evidence of customer empathy, operational maturity and influence across partner teams.",
      "常见路径：产品/平台工程经验，能证明客户同理心、运营成熟度及跨伙伴团队影响力。",
      "Parcours courant : ingénierie produit/plateforme avec empathie client, maturité opérationnelle et influence transverse."
    ),
    screening: tr(
      "Expect coding, design, debugging and collaboration scenarios; explain not only what you built but how it was adopted.",
      "预计考察编码、设计、调试与协作场景；不只说明做了什么，也要说明如何被采用。",
      "Attendez code, conception, débogage et collaboration ; expliquez aussi l'adoption, pas seulement la construction."
    ),
    sourceIds: ["microsoftCareers", "levels", "glassdoor"]
  },
  {
    id: "microsoft-cloud-architect",
    companyId: "microsoft",
    title: tr("Cloud Solution Architect", "云解决方案架构师", "Architecte de solutions cloud"),
    track: "ops",
    level: "65",
    location: "Redmond / Field-US",
    currency: "USD",
    unit: "k",
    base: [160, 190],
    total: [220, 290],
    density: 3,
    rhythm: { focus: 3, hours: 3, oncall: 1, meetings: 5 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Azure", "Solution architecture", "Customer discovery", "Migration strategy"],
    summary: tr(
      "Convert customer constraints into a defensible cloud architecture, then help teams adopt it without trading away security or reliability.",
      "把客户约束转化为可辩护的云架构，并帮助团队在不牺牲安全与可靠性的前提下落地采用。",
      "Transformer des contraintes client en architecture cloud défendable, puis accompagner l'adoption sans sacrifier sécurité ou fiabilité."
    ),
    path: tr(
      "Common route: hands-on cloud engineering or consulting, with repeated evidence of simplifying migration decisions for skeptical stakeholders.",
      "常见路径：实操云工程或咨询经验，并多次证明能替持怀疑态度的利益相关者简化迁移决策。",
      "Parcours courant : ingénierie cloud ou conseil, avec preuves répétées de simplification des décisions de migration."
    ),
    screening: tr(
      "Expect Azure architecture, customer scenario, migration risk and a communication exercise aimed at both engineers and executives.",
      "预计考察 Azure 架构、客户场景、迁移风险，以及同时面向工程师和高管的沟通练习。",
      "Attendez architecture Azure, scénario client, risque de migration et communication pour ingénieurs et dirigeants."
    ),
    sourceIds: ["microsoftCareers", "levels", "glassdoor"]
  },
  {
    id: "apple-swe-ict4",
    companyId: "apple",
    title: tr("Software Engineer, ICT4", "软件工程师 ICT4", "Ingénieur logiciel, ICT4"),
    track: "engineering",
    level: "ICT4",
    location: "Cupertino / Austin",
    currency: "USD",
    unit: "k",
    base: [180, 210],
    total: [280, 360],
    density: 3,
    rhythm: { focus: 5, hours: 4, oncall: 3, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Swift / C++ / Objective-C", "Performance", "Privacy", "Product integration"],
    summary: tr(
      "Build tightly integrated software where performance, privacy and user experience are evaluated as one system rather than isolated features.",
      "构建高度整合的软件，把性能、隐私与用户体验作为一个系统而不是孤立功能来评估。",
      "Construire un logiciel fortement intégré où performance, confidentialité et expérience utilisateur forment un seul système."
    ),
    path: tr(
      "Common route: deep platform or product engineering, with evidence of owning edge cases through launch and post-launch quality.",
      "常见路径：深耕平台或产品工程，并有从边界条件到发布及上市后质量全程负责的证据。",
      "Parcours courant : ingénierie plateforme/produit approfondie, avec ownership des cas limites jusqu'à la qualité post-lancement."
    ),
    screening: tr(
      "Expect coding, debugging, deep system or platform questions, and scrutiny of how you protect quality when schedule pressure rises.",
      "预计考察编码、调试、深入的系统/平台问题，并追问进度压力上升时如何守住质量。",
      "Attendez code, débogage, questions système/plateforme et défense de la qualité sous pression."
    ),
    sourceIds: ["appleCareers", "levels", "glassdoor"]
  },
  {
    id: "apple-silicon",
    companyId: "apple",
    title: tr("Silicon Design Engineer", "芯片设计工程师", "Ingénieur conception silicium"),
    track: "hardware",
    level: "ICT4",
    location: "Cupertino / Austin / Munich",
    currency: "USD",
    unit: "k",
    base: [180, 210],
    total: [270, 350],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 2, meetings: 3 },
    education: EDU_HW,
    majors: MAJORS_HW,
    experience: EXP_SENIOR,
    skills: ["RTL", "Verification", "Power / performance", "Physical constraints"],
    summary: tr(
      "Design and verify silicon under aggressive power, performance and schedule constraints, where small decisions can affect an entire product line.",
      "在严苛的功耗、性能与进度约束下设计并验证芯片，一个小决策可能影响整条产品线。",
      "Concevoir et vérifier du silicium sous de fortes contraintes de puissance, performance et calendrier, où chaque décision peut affecter une gamme entière."
    ),
    path: tr(
      "Common route: EE/CE depth, lab or tape-out exposure, and evidence of finding subtle bugs with systematic verification rather than intuition alone.",
      "常见路径：电子/计算机工程深度、实验室或流片经历，并有以系统验证而非纯直觉发现隐蔽缺陷的证据。",
      "Parcours courant : profondeur EE/CE, laboratoire ou tape-out, et preuves de détection systématique de bugs subtils."
    ),
    screening: tr(
      "Expect digital design fundamentals, timing/power trade-offs, verification methodology and a detailed project deep dive.",
      "预计考察数字设计基础、时序/功耗权衡、验证方法学及详细项目深挖。",
      "Attendez fondamentaux de conception numérique, compromis timing/puissance, méthodologie de vérification et projet détaillé."
    ),
    sourceIds: ["appleCareers", "levels", "glassdoor"]
  },
  {
    id: "netflix-senior-swe",
    companyId: "netflix",
    title: tr("Senior Software Engineer", "高级软件工程师", "Ingénieur logiciel senior"),
    track: "engineering",
    level: "L5",
    location: "Los Gatos / Remote-US",
    currency: "USD",
    unit: "k",
    base: [250, 340],
    total: [300, 430],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 4, meetings: 2 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Streaming", "Distributed systems", "Reliability", "Judgment"],
    summary: tr(
      "Operate with high autonomy on systems where playback reliability and member experience are visible immediately, with little process to hide behind.",
      "在高自主性下负责系统，播放可靠性与会员体验会立刻显现，没有太多流程可以遮蔽问题。",
      "Travailler avec une forte autonomie sur des systèmes où fiabilité et expérience membre sont immédiatement visibles, sans processus derrière lequel se cacher."
    ),
    path: tr(
      "Common route: senior-level ownership in streaming, infrastructure or another high-scale consumer system, with crisp judgment about when to stop optimizing.",
      "常见路径：在流媒体、基础设施或其他大规模消费系统中有高级别主导经验，并能清晰判断何时停止优化。",
      "Parcours courant : ownership senior en streaming, infrastructure ou système grand public, avec jugement clair sur l'arrêt de l'optimisation."
    ),
    screening: tr(
      "Expect senior technical depth, real trade-offs, incident judgment and direct conversations about disagreement and accountability.",
      "预计考察高级技术深度、真实权衡、故障判断，以及关于分歧与责任的直接对话。",
      "Attendez profondeur technique senior, compromis réels, jugement d'incident et conversations directes sur désaccord et responsabilité."
    ),
    sourceIds: ["netflixCulture", "levels", "glassdoor", "blind"]
  },
  {
    id: "netflix-senior-ds",
    companyId: "netflix",
    title: tr("Senior Data Scientist", "高级数据科学家", "Data scientist senior"),
    track: "data",
    level: "L5",
    location: "Los Gatos / Remote-US",
    currency: "USD",
    unit: "k",
    base: [220, 290],
    total: [260, 350],
    density: 3,
    rhythm: { focus: 5, hours: 3, oncall: 1, meetings: 3 },
    education: EDU_QUANT,
    majors: MAJORS_QUANT,
    experience: EXP_SENIOR,
    skills: ["Causal inference", "Experimentation", "Forecasting", "Storytelling"],
    summary: tr(
      "Turn entertainment and member behavior into decisions, balancing statistical rigor with the speed expected in a high-context culture.",
      "把娱乐与会员行为转化为决策，在统计严谨性与高上下文文化所要求的速度之间取得平衡。",
      "Transformer les comportements de divertissement et des membres en décisions, en équilibrant rigueur statistique et vitesse."
    ),
    path: tr(
      "Common route: senior analytics or experimentation ownership, with evidence of influencing product strategy rather than only producing dashboards.",
      "常见路径：高级分析或实验主导经验，并能证明影响产品策略，而不只是产出看板。",
      "Parcours courant : analytics ou expérimentation senior, avec preuve d'influence sur la stratégie produit."
    ),
    screening: tr(
      "Expect a business case, causal reasoning, metric design and questions about what you would do if the experiment contradicted the executive hypothesis.",
      "预计考察业务案例、因果推理、指标设计，以及实验与高管假设相悖时你会怎么做。",
      "Attendez cas business, raisonnement causal, conception de métriques et réaction face à un résultat contraire à l'hypothèse dirigeante."
    ),
    sourceIds: ["netflixCulture", "levels", "glassdoor"]
  },
  {
    id: "nvidia-systems-swe",
    companyId: "nvidia",
    title: tr("Senior Systems Software Engineer", "高级系统软件工程师", "Ingénieur logiciel systèmes senior"),
    track: "engineering",
    level: "IC4",
    location: "Santa Clara / Austin",
    currency: "USD",
    unit: "k",
    base: [180, 210],
    total: [300, 420],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 3, meetings: 2 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["C / C++", "CUDA", "Linux internals", "Performance profiling"],
    summary: tr(
      "Work close to accelerators, drivers and runtime systems where throughput, latency and hardware behavior are the core product.",
      "深入加速器、驱动与运行时系统，吞吐、延迟与硬件行为本身就是核心产品。",
      "Travailler au plus près des accélérateurs, pilotes et runtimes, où débit, latence et comportement matériel sont le produit."
    ),
    path: tr(
      "Common route: systems programming, performance engineering or HPC, with evidence of diagnosing bottlenecks across software and hardware boundaries.",
      "常见路径：系统编程、性能工程或 HPC，并能证明跨越软硬件边界定位瓶颈。",
      "Parcours courant : programmation système, performance ou HPC, avec diagnostic de goulots entre logiciel et matériel."
    ),
    screening: tr(
      "Expect C/C++ depth, memory and concurrency, profiling methodology and a detailed performance story with measured results.",
      "预计考察 C/C++ 深度、内存与并发、性能剖析方法，以及有实测结果的详细性能案例。",
      "Attendez profondeur C/C++, mémoire et concurrence, méthodologie de profilage et résultats mesurés."
    ),
    sourceIds: ["nvidiaCareers", "cudaGuide", "levels", "glassdoor"]
  },
  {
    id: "nvidia-dl-engineer",
    companyId: "nvidia",
    title: tr("Deep Learning Engineer", "深度学习工程师", "Ingénieur deep learning"),
    track: "ai",
    level: "IC4",
    location: "Santa Clara / Toronto / Shanghai",
    currency: "USD",
    unit: "k",
    base: [190, 220],
    total: [330, 450],
    density: 5,
    rhythm: { focus: 5, hours: 5, oncall: 3, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["PyTorch", "CUDA", "Model optimization", "Inference"],
    summary: tr(
      "Make large models faster and more deployable, connecting model architecture, kernel behavior, memory layout and end-to-end serving.",
      "让大模型更快、更易部署，把模型架构、内核行为、内存布局与端到端服务连接起来。",
      "Rendre les grands modèles plus rapides et déployables, en reliant architecture, noyaux, mémoire et serving de bout en bout."
    ),
    path: tr(
      "Common route: applied ML plus strong systems intuition, or systems/compilers experience plus demonstrated model optimization.",
      "常见路径：应用 ML 加强系统直觉，或系统/编译器背景并证明过模型优化能力。",
      "Parcours courant : ML appliqué et intuition système, ou systèmes/compilateurs avec optimisation de modèles démontrée."
    ),
    screening: tr(
      "Expect model math, GPU performance, kernels/memory bandwidth, numerical trade-offs and an optimization case with data.",
      "预计考察模型数学、GPU 性能、内核/带宽、数值权衡，以及有数据支撑的优化案例。",
      "Attendez mathématiques de modèle, performance GPU, noyaux/bande passante, compromis numériques et cas d'optimisation chiffré."
    ),
    sourceIds: ["nvidiaCareers", "cudaGuide", "levels", "glassdoor"]
  },
  {
    id: "nvidia-asic",
    companyId: "nvidia",
    title: tr("ASIC Design Engineer", "ASIC 设计工程师", "Ingénieur conception ASIC"),
    track: "hardware",
    level: "IC4",
    location: "Santa Clara / Austin / Taipei",
    currency: "USD",
    unit: "k",
    base: [170, 200],
    total: [280, 390],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 2, meetings: 3 },
    education: EDU_HW,
    majors: MAJORS_HW,
    experience: EXP_SENIOR,
    skills: ["Verilog / SystemVerilog", "Microarchitecture", "Verification", "Timing closure"],
    summary: tr(
      "Architect and verify high-performance silicon blocks where correctness, clock frequency, power and manufacturing reality all constrain the design.",
      "设计并验证高性能芯片模块，正确性、频率、功耗与制造现实共同约束设计。",
      "Concevoir et vérifier des blocs silicium haute performance sous contraintes de correction, fréquence, puissance et fabrication."
    ),
    path: tr(
      "Common route: digital design or verification depth, with lab, FPGA or tape-out evidence and strong debugging discipline.",
      "常见路径：数字设计或验证深度，并有实验室、FPGA 或流片证据及严格调试纪律。",
      "Parcours courant : conception numérique ou vérification, avec laboratoire, FPGA ou tape-out et discipline de débogage."
    ),
    screening: tr(
      "Expect microarchitecture, timing, CDC/RDC or verification, plus a project where you found and fixed a non-obvious bug.",
      "预计考察微架构、时序、跨时钟域/复位域或验证，并深挖你发现并修复隐蔽缺陷的项目。",
      "Attendez microarchitecture, timing, CDC/RDC ou vérification, et un bug non évident trouvé et corrigé."
    ),
    sourceIds: ["nvidiaCareers", "levels", "glassdoor"]
  },
  {
    id: "openai-research-engineer",
    companyId: "openai",
    title: tr("Research Engineer", "研究工程师", "Ingénieur de recherche"),
    track: "ai",
    level: "Senior / Staff",
    location: "San Francisco / London",
    currency: "USD",
    unit: "k",
    base: [250, 350],
    total: [400, 800],
    density: 5,
    rhythm: { focus: 5, hours: 5, oncall: 3, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["LLM training", "Python", "Distributed systems", "Research engineering"],
    summary: tr(
      "Turn research ideas into scalable experiments: build training or evaluation infrastructure, debug at the edge of current knowledge, and report evidence clearly.",
      "把研究想法转化为可扩展实验：构建训练或评估基础设施，在现有知识边缘调试，并清晰报告证据。",
      "Transformer des idées de recherche en expériences scalables : infrastructure d'entraînement ou d'évaluation, débogage à la frontière des connaissances et preuves claires."
    ),
    path: tr(
      "Common route: strong ML research plus elite engineering, or a systems background with credible model-training or evaluation work.",
      "常见路径：强 ML 研究加顶级工程能力，或系统背景并有可信的模型训练/评估工作。",
      "Parcours courant : forte recherche ML et ingénierie d'élite, ou systèmes avec travail crédible sur entraînement/évaluation."
    ),
    screening: tr(
      "Expect research depth, coding, experiment design, failure analysis and questions about compute trade-offs and safety implications.",
      "预计考察研究深度、编码、实验设计、失败分析，以及算力权衡与安全影响。",
      "Attendez profondeur recherche, code, design expérimental, analyse d'échec et compromis de calcul/sûreté."
    ),
    sourceIds: ["openaiCareers", "levels", "glassdoor", "blind"]
  },
  {
    id: "openai-ml-engineer",
    companyId: "openai",
    title: tr("Machine Learning Engineer, Applied", "应用机器学习工程师", "Ingénieur ML appliqué"),
    track: "ai",
    level: "Senior",
    location: "San Francisco / NYC / London",
    currency: "USD",
    unit: "k",
    base: [230, 320],
    total: [380, 650],
    density: 5,
    rhythm: { focus: 4, hours: 5, oncall: 4, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["Inference", "Evaluation", "Python", "Product engineering"],
    summary: tr(
      "Bring frontier models into reliable products: design evaluations, improve latency and quality, and build the systems that make model behavior observable.",
      "把前沿模型带入可靠产品：设计评估、改善延迟与质量，并构建让模型行为可观测的系统。",
      "Intégrer des modèles de frontière dans des produits fiables : évaluations, latence, qualité et observabilité du comportement des modèles."
    ),
    path: tr(
      "Common route: production ML or backend engineering plus rigorous evaluation practice and user-facing product judgment.",
      "常见路径：生产 ML 或后端工程，加上严谨评估实践与面向用户的产品判断。",
      "Parcours courant : ML en production ou backend, avec évaluation rigoureuse et jugement produit."
    ),
    screening: tr(
      "Expect coding, ML systems, evaluation design, incident reasoning and a concrete example of trading quality against cost or latency.",
      "预计考察编码、ML 系统、评估设计、故障推理，以及在质量与成本/延迟间权衡的具体案例。",
      "Attendez code, systèmes ML, évaluations, raisonnement d'incident et compromis qualité/coût/latence."
    ),
    sourceIds: ["openaiCareers", "levels", "glassdoor", "blind"]
  },
  {
    id: "openai-product-manager",
    companyId: "openai",
    title: tr("Product Manager", "产品经理", "Chef de produit"),
    track: "product",
    level: "Senior",
    location: "San Francisco / London",
    currency: "USD",
    unit: "k",
    base: [220, 300],
    total: [350, 550],
    density: 5,
    rhythm: { focus: 3, hours: 5, oncall: 2, meetings: 5 },
    education: EDU_PRODUCT,
    majors: MAJORS_PRODUCT,
    experience: EXP_PRODUCT,
    skills: ["AI product", "Evaluation", "User research", "Safety judgment"],
    summary: tr(
      "Define useful, trustworthy AI products in a landscape where capability, user expectation and safety constraints move at the same time.",
      "在能力、用户预期与安全约束同时变化的环境中，定义有用且可信的 AI 产品。",
      "Définir des produits d'IA utiles et fiables dans un paysage où capacités, attentes et contraintes de sûreté évoluent ensemble."
    ),
    path: tr(
      "Common route: technical product leadership with launched products, strong user evidence and comfort with probabilistic behavior.",
      "常见路径：有已发布产品的技术产品领导经验、扎实用户证据，并能适应概率性系统行为。",
      "Parcours courant : leadership produit technique avec produits lancés, preuves utilisateur et aisance avec le comportement probabiliste."
    ),
    screening: tr(
      "Expect product strategy, evaluation literacy, safety trade-offs, ambiguity handling and a clear example of killing a plausible idea.",
      "预计考察产品策略、评估素养、安全权衡、不确定性处理，以及主动终止一个看似合理想法的案例。",
      "Attendez stratégie produit, littératie d'évaluation, compromis de sûreté, ambiguïté et exemple d'idée abandonnée."
    ),
    sourceIds: ["openaiCareers", "levels", "glassdoor"]
  },
  {
    id: "anthropic-research-engineer",
    companyId: "anthropic",
    title: tr("Research Engineer", "研究工程师", "Ingénieur de recherche"),
    track: "ai",
    level: "Senior / Staff",
    location: "San Francisco / London",
    currency: "USD",
    unit: "k",
    base: [250, 350],
    total: [400, 750],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 3, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["ML research", "Python", "Interpretability", "Experimental design"],
    summary: tr(
      "Build and test frontier-model research infrastructure, with emphasis on reproducible experiments and careful interpretation of uncertain results.",
      "构建并检验前沿模型研究基础设施，强调可复现实验与对不确定结果的谨慎解读。",
      "Construire et tester l'infrastructure de recherche sur les modèles de frontière, avec reproductibilité et interprétation prudente."
    ),
    path: tr(
      "Common route: empirical ML research plus strong software engineering, or a systems/compilers background with credible model work.",
      "常见路径：实证 ML 研究加强软件工程，或系统/编译器背景并有可信模型工作。",
      "Parcours courant : recherche ML empirique et ingénierie logicielle, ou systèmes/compilateurs avec travail crédible sur modèles."
    ),
    screening: tr(
      "Expect coding, experiment critique, uncertainty handling and a research discussion where changing your mind is a strength.",
      "预计考察编码、实验批判、不确定性处理，以及把“改变观点”视为优势的研究讨论。",
      "Attendez code, critique expérimentale, gestion de l'incertitude et discussion où changer d'avis est une force."
    ),
    sourceIds: ["anthropicCareers", "anthropicConstitution", "levels", "glassdoor"]
  },
  {
    id: "anthropic-safety-researcher",
    companyId: "anthropic",
    title: tr("Safety Researcher", "安全研究员", "Chercheur en sûreté"),
    track: "ai",
    level: "Senior",
    location: "San Francisco / London / Remote",
    currency: "USD",
    unit: "k",
    base: [220, 300],
    total: [350, 600],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 1, meetings: 4 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["Empirical safety", "Threat modeling", "Evaluation", "Technical writing"],
    summary: tr(
      "Design measurements and interventions for model behavior, separating demonstrable risk from speculation and communicating both to technical and nontechnical stakeholders.",
      "为模型行为设计测量与干预，区分可证明风险与推测，并向技术与非技术利益相关者清晰沟通。",
      "Concevoir mesures et interventions pour le comportement des modèles, distinguer risque démontré et spéculation, et communiquer clairement."
    ),
    path: tr(
      "Common route: empirical ML, security, policy or cognitive science research with operational evidence, not only conceptual commentary.",
      "常见路径：实证 ML、安全、政策或认知科学研究，并有实际操作证据，而非只有概念评论。",
      "Parcours courant : ML empirique, sécurité, politique ou sciences cognitives avec preuves opérationnelles."
    ),
    screening: tr(
      "Expect a research critique, a concrete safety scenario, measurement design and questions about trade-offs between capability and mitigation.",
      "预计考察研究批判、具体安全场景、测量设计，以及能力与缓解措施之间的权衡。",
      "Attendez critique de recherche, scénario concret, conception de mesure et compromis capacité/mitigation."
    ),
    sourceIds: ["anthropicCareers", "anthropicConstitution", "levels", "glassdoor"]
  },
  {
    id: "anthropic-product-manager",
    companyId: "anthropic",
    title: tr("Product Manager, Claude", "Claude 产品经理", "Chef de produit, Claude"),
    track: "product",
    level: "Senior",
    location: "San Francisco / London",
    currency: "USD",
    unit: "k",
    base: [220, 280],
    total: [350, 500],
    density: 4,
    rhythm: { focus: 3, hours: 4, oncall: 2, meetings: 5 },
    education: EDU_PRODUCT,
    majors: MAJORS_PRODUCT,
    experience: EXP_PRODUCT,
    skills: ["AI product", "Developer experience", "Safety", "Evangelism"],
    summary: tr(
      "Shape Claude products for developers and enterprises, balancing capability, trust, usability and a rapidly changing technical surface.",
      "为开发者与企业塑造 Claude 产品，在能力、信任、可用性与快速变化的技术面之间取得平衡。",
      "Façonner les produits Claude pour développeurs et entreprises en équilibrant capacité, confiance, utilisabilité et évolution technique rapide."
    ),
    path: tr(
      "Common route: technical product ownership in developer tools, AI or platforms, with evidence of earning trust from demanding users.",
      "常见路径：开发者工具、AI 或平台领域的技术产品主导经验，并能证明赢得高要求用户信任。",
      "Parcours courant : ownership produit technique dans les outils développeurs, l'IA ou les plateformes, avec confiance d'utilisateurs exigeants."
    ),
    screening: tr(
      "Expect product judgment, model-evaluation literacy, developer empathy and a safety-sensitive launch scenario.",
      "预计考察产品判断、模型评估素养、开发者同理心，以及安全敏感的发布场景。",
      "Attendez jugement produit, littératie d'évaluation, empathie développeur et scénario de lancement sensible à la sûreté."
    ),
    sourceIds: ["anthropicCareers", "anthropicConstitution", "levels", "glassdoor"]
  },
  {
    id: "bytedance-backend",
    companyId: "bytedance",
    title: tr("Backend Engineer, 2-2", "后端工程师 2-2", "Ingénieur backend, 2-2"),
    track: "engineering",
    level: "2-2",
    location: "Beijing / Shanghai",
    currency: "CNY",
    unit: "m",
    base: [0.7, 0.95],
    total: [1.2, 1.8],
    density: 5,
    rhythm: { focus: 4, hours: 5, oncall: 4, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Go / C++", "Microservices", "Storage", "High concurrency"],
    summary: tr(
      "Build and operate high-QPS backend systems for content, commerce or enterprise products, with tight feedback loops between incident, metric and code.",
      "为内容、电商或企业产品构建并运营高 QPS 后端系统，故障、指标与代码之间形成紧密反馈闭环。",
      "Construire et opérer des backends à fort QPS pour contenus, commerce ou entreprise, avec boucle serrée entre incident, métrique et code."
    ),
    path: tr(
      "Common route: strong backend fundamentals and evidence of high-traffic ownership; internal transfers are also common across product lines.",
      "常见路径：扎实后端基础与高流量系统主导证据；业务线之间的内部转岗也较常见。",
      "Parcours courant : fondamentaux backend solides et ownership à fort trafic ; les mobilités internes sont courantes."
    ),
    screening: tr(
      "Expect algorithms, concurrency, storage design, failure scenarios and questions about operating under rapid product iteration.",
      "预计考察算法、并发、存储设计、故障场景，以及在快速产品迭代下运营的问题。",
      "Attendez algorithmes, concurrence, stockage, scénarios de panne et itération produit rapide."
    ),
    sourceIds: ["bytedanceCareers", "levels", "leetcode", "blind"]
  },
  {
    id: "bytedance-algorithm",
    companyId: "bytedance",
    title: tr("Recommendation Algorithm Engineer, 2-2", "推荐算法工程师 2-2", "Ingénieur algorithmes de recommandation, 2-2"),
    track: "ai",
    level: "2-2",
    location: "Beijing / Shanghai / Singapore",
    currency: "CNY",
    unit: "m",
    base: [0.8, 1.1],
    total: [1.4, 2.2],
    density: 5,
    rhythm: { focus: 5, hours: 5, oncall: 3, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["Recommendation", "Ranking", "PyTorch", "Large-scale training"],
    summary: tr(
      "Improve retrieval, ranking or user modeling for massive content feeds, where offline metrics, online experiments and business constraints must agree.",
      "改进大规模内容信息流的召回、排序或用户建模，使离线指标、在线实验与业务约束相互一致。",
      "Améliorer retrieval, classement ou modélisation utilisateur pour des fils massifs, en alignant métriques offline, expériences online et contraintes business."
    ),
    path: tr(
      "Common route: recommendation/search/ads ML with strong offline-online experiment discipline and large-scale training experience.",
      "常见路径：推荐/搜索/广告 ML 经验，具备严格的离线-在线实验纪律与大规模训练经历。",
      "Parcours courant : ML recommandation/recherche/publicité, discipline offline-online et entraînement à grande échelle."
    ),
    screening: tr(
      "Expect ML fundamentals, recommendation system design, coding and a deep discussion of an online metric you moved and why.",
      "预计考察 ML 基础、推荐系统设计、编码，并深挖你推动过的一个在线指标及其原因。",
      "Attendez fondamentaux ML, design de recommandation, code et discussion d'une métrique online améliorée."
    ),
    sourceIds: ["bytedanceCareers", "levels", "leetcode", "blind"]
  },
  {
    id: "bytedance-product",
    companyId: "bytedance",
    title: tr("Product Manager, 2-2", "产品经理 2-2", "Chef de produit, 2-2"),
    track: "product",
    level: "2-2",
    location: "Beijing / Shanghai / Singapore",
    currency: "CNY",
    unit: "m",
    base: [0.6, 0.9],
    total: [0.9, 1.4],
    density: 4,
    rhythm: { focus: 3, hours: 4, oncall: 1, meetings: 5 },
    education: EDU_PRODUCT,
    majors: MAJORS_PRODUCT,
    experience: EXP_PRODUCT,
    skills: ["Product strategy", "Data analysis", "Growth", "Cross-border collaboration"],
    summary: tr(
      "Own a product surface in a fast feedback environment, using experiment data, creator/user insight and regional constraints to set priorities.",
      "在快速反馈环境中负责产品面，利用实验数据、创作者/用户洞察与区域约束设定优先级。",
      "Posséder une surface produit dans un environnement à feedback rapide, en priorisant via données, insights créateurs/utilisateurs et contraintes régionales."
    ),
    path: tr(
      "Common route: high-growth consumer product experience, with evidence of moving a metric and coordinating across regions or functions.",
      "常见路径：高增长消费产品经验，并能证明推动指标及协调跨区域/跨职能工作。",
      "Parcours courant : produit grand public à forte croissance, avec métrique améliorée et coordination multi-régions."
    ),
    screening: tr(
      "Expect product cases, metric diagnosis, prioritization, execution under ambiguity and cross-time-zone collaboration examples.",
      "预计考察产品案例、指标诊断、优先级、模糊环境下执行及跨时区协作案例。",
      "Attendez cas produit, diagnostic de métriques, priorisation, exécution ambiguë et collaboration multi-fuseaux."
    ),
    sourceIds: ["bytedanceCareers", "levels", "glassdoor"]
  },
  {
    id: "tencent-backend",
    companyId: "tencent",
    title: tr("Senior Backend Engineer, T10", "高级后端工程师 T10", "Ingénieur backend senior, T10"),
    track: "engineering",
    level: "T10",
    location: "Shenzhen / Beijing",
    currency: "CNY",
    unit: "m",
    base: [0.7, 1.0],
    total: [1.0, 1.6],
    density: 4,
    rhythm: { focus: 4, hours: 4, oncall: 4, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["C++ / Go", "Distributed systems", "Storage", "Massive-scale services"],
    summary: tr(
      "Operate large-scale platform or business services, balancing latency, cost, stability and long-term maintainability in mature product ecosystems.",
      "运营大型平台或业务服务，在成熟产品生态中平衡延迟、成本、稳定性与长期可维护性。",
      "Opérer des services plateforme ou business à grande échelle, en équilibrant latence, coût, stabilité et maintenabilité."
    ),
    path: tr(
      "Common route: deep backend or infrastructure experience, with sustained ownership of high-availability systems.",
      "常见路径：深厚后端或基础设施经验，并长期主导高可用系统。",
      "Parcours courant : backend ou infrastructure approfondi, avec ownership durable de systèmes haute disponibilité."
    ),
    screening: tr(
      "Expect algorithms, distributed design, performance debugging and operational scenarios from real high-scale systems.",
      "预计考察算法、分布式设计、性能调试及真实大规模系统的运营场景。",
      "Attendez algorithmes, design distribué, débogage de performance et scénarios opérationnels réels."
    ),
    sourceIds: ["tencentCareers", "levels", "glassdoor"]
  },
  {
    id: "tencent-game-engine",
    companyId: "tencent",
    title: tr("Game Engine Engineer, T10", "游戏引擎工程师 T10", "Ingénieur moteur de jeu, T10"),
    track: "engineering",
    level: "T10",
    location: "Shenzhen / Shanghai",
    currency: "CNY",
    unit: "m",
    base: [0.8, 1.2],
    total: [1.2, 1.9],
    density: 5,
    rhythm: { focus: 5, hours: 5, oncall: 4, meetings: 2 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["C++", "Graphics", "Frame budget", "Cross-platform runtime"],
    summary: tr(
      "Optimize rendering and runtime systems under a hard frame budget, where a few milliseconds decide whether a game feels responsive on target devices.",
      "在硬性帧预算下优化渲染与运行时系统，几毫秒决定游戏在目标设备上是否跟手。",
      "Optimiser rendu et runtime sous un budget de frame strict, où quelques millisecondes déterminent la réactivité."
    ),
    path: tr(
      "Common route: graphics, engine or high-performance systems experience, with shipped titles or measurable runtime improvements.",
      "常见路径：图形、引擎或高性能系统经验，并有已上线项目或可量化运行时提升。",
      "Parcours courant : graphisme, moteur ou systèmes haute performance, avec jeux livrés ou gains mesurés."
    ),
    screening: tr(
      "Expect C++, graphics math, memory/cache behavior, profiling and a debugging story tied to frame time or device compatibility.",
      "预计考察 C++、图形数学、内存/缓存行为、性能剖析，以及和帧时间或设备兼容相关的调试案例。",
      "Attendez C++, mathématiques graphiques, mémoire/cache, profilage et débogage lié au frame time."
    ),
    sourceIds: ["tencentCareers", "levels", "glassdoor"]
  },
  {
    id: "alibaba-cloud",
    companyId: "alibaba",
    title: tr("Senior Cloud Engineer, P7", "云高级工程师 P7", "Ingénieur cloud senior, P7"),
    track: "engineering",
    level: "P7",
    location: "Hangzhou / Beijing / Singapore",
    currency: "CNY",
    unit: "m",
    base: [0.7, 1.0],
    total: [1.0, 1.6],
    density: 4,
    rhythm: { focus: 4, hours: 4, oncall: 4, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Cloud infrastructure", "Kubernetes", "Distributed systems", "Cost optimization"],
    summary: tr(
      "Build cloud infrastructure that must survive enterprise workloads, heterogeneous tenants and hard reliability commitments while remaining commercially viable.",
      "构建能承载企业负载、多租户与严格可靠性承诺，同时保持商业可行性的云基础设施。",
      "Construire une infrastructure cloud pour charges d'entreprise, multi-tenant et engagements de fiabilité, tout en restant économiquement viable."
    ),
    path: tr(
      "Common route: infrastructure or platform engineering with evidence of reliability, scale and cost ownership.",
      "常见路径：基础设施或平台工程经验，能证明可靠性、规模与成本主导能力。",
      "Parcours courant : infrastructure ou plateforme avec ownership fiabilité, échelle et coût."
    ),
    screening: tr(
      "Expect distributed systems, Kubernetes/cloud architecture, incident scenarios and commercial constraints.",
      "预计考察分布式系统、Kubernetes/云架构、故障场景与商业约束。",
      "Attendez systèmes distribués, architecture Kubernetes/cloud, incidents et contraintes commerciales."
    ),
    sourceIds: ["alibabaCareers", "levels", "glassdoor"]
  },
  {
    id: "alibaba-algorithm",
    companyId: "alibaba",
    title: tr("Algorithm Engineer, P7", "算法工程师 P7", "Ingénieur algorithmes, P7"),
    track: "ai",
    level: "P7",
    location: "Hangzhou / Beijing",
    currency: "CNY",
    unit: "m",
    base: [0.8, 1.1],
    total: [1.3, 2.0],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 3, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["Recommendation / search", "LLMs", "Python", "Business metrics"],
    summary: tr(
      "Apply ML to commerce, content or cloud problems where model quality must be translated into conversion, efficiency or customer value.",
      "把 ML 应用于电商、内容或云问题，模型质量必须转化为转化率、效率或客户价值。",
      "Appliquer le ML au commerce, aux contenus ou au cloud, en traduisant qualité des modèles en conversion, efficacité ou valeur client."
    ),
    path: tr(
      "Common route: applied ML at scale, with a clear record of moving online metrics and collaborating with product/operations teams.",
      "常见路径：大规模应用 ML，并清晰记录推动在线指标及与产品/运营团队协作。",
      "Parcours courant : ML appliqué à grande échelle, avec métriques online améliorées et collaboration produit/opérations."
    ),
    screening: tr(
      "Expect ML depth, recommendation/search design, coding, experiment analysis and business framing.",
      "预计考察 ML 深度、推荐/搜索设计、编码、实验分析与业务框架。",
      "Attendez profondeur ML, design recommandation/recherche, code, analyse expérimentale et cadrage business."
    ),
    sourceIds: ["alibabaCareers", "levels", "glassdoor"]
  },
  {
    id: "huawei-cloud-swe",
    companyId: "huawei",
    title: tr("Senior Cloud Software Engineer", "云高级软件工程师", "Ingénieur logiciel cloud senior"),
    track: "engineering",
    level: "15–17",
    location: "Shenzhen / Hangzhou",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.55, 0.85],
    total: [0.9, 1.4],
    density: 4,
    rhythm: { focus: 4, hours: 4, oncall: 4, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Cloud native", "Distributed systems", "C++ / Go", "Reliability"],
    summary: tr(
      "Build and operate cloud infrastructure for demanding enterprise and carrier workloads, where reliability and delivery are inseparable.",
      "为企业与运营商高要求负载构建并运营云基础设施，可靠性与交付密不可分。",
      "Construire et opérer une infrastructure cloud pour des charges exigeantes, où fiabilité et delivery sont indissociables."
    ),
    path: tr("Common route: large-scale backend or infrastructure ownership with operational evidence.", "常见路径：大规模后端或基础设施主导经验，并有运营证据。", "Parcours courant : backend ou infrastructure à grande échelle avec preuves opérationnelles."),
    screening: tr("Expect algorithms, distributed design, failure handling and delivery pressure.", "预计考察算法、分布式设计、故障处理与交付压力。", "Attendez algorithmes, design distribué, gestion de panne et pression de livraison."),
    sourceIds: ["huaweiCareers", "levels", "glassdoor", "leetcode"]
  },
  {
    id: "huawei-ai-algorithm",
    companyId: "huawei",
    title: tr("AI Algorithm Engineer", "AI 算法工程师", "Ingénieur algorithmes IA"),
    track: "ai",
    level: "16–17",
    location: "Shenzhen / Beijing / Shanghai",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.65, 1.0],
    total: [1.1, 1.8],
    density: 5,
    rhythm: { focus: 5, hours: 5, oncall: 2, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["ML", "Model training", "Inference", "Python / C++"],
    summary: tr(
      "Develop models and inference systems for cloud, devices or industry scenarios, balancing accuracy, latency and deployment constraints.",
      "为云、终端或行业场景开发模型与推理系统，平衡精度、延迟与部署约束。",
      "Développer modèles et inférence pour cloud, appareils ou industrie, en équilibrant précision, latence et déploiement."
    ),
    path: tr("Common route: strong ML fundamentals plus measurable model or systems outcomes.", "常见路径：扎实 ML 基础，并有可衡量的模型或系统结果。", "Parcours courant : fondamentaux ML solides et résultats mesurables."),
    screening: tr("Expect modeling depth, coding, experiment design and system-awareness questions.", "预计考察建模深度、编码、实验设计与系统意识。", "Attendez profondeur de modélisation, code, expérimentation et conscience système."),
    sourceIds: ["huaweiCareers", "levels", "glassdoor"]
  },
  {
    id: "huawei-ic-design",
    companyId: "huawei",
    title: tr("Digital IC Design Engineer", "数字芯片设计工程师", "Ingénieur conception IC numérique"),
    track: "hardware",
    level: "15–16",
    location: "Shenzhen / Shanghai / Xi'an",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.55, 0.85],
    total: [0.85, 1.35],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 2, meetings: 3 },
    education: EDU_HW,
    majors: MAJORS_HW,
    experience: EXP_SENIOR,
    skills: ["Verilog / SystemVerilog", "Microarchitecture", "Verification", "Timing"],
    summary: tr(
      "Design and verify digital silicon blocks for networking, computing or device platforms under performance and power constraints.",
      "为网络、计算或终端平台设计并验证数字芯片模块，满足性能与功耗约束。",
      "Concevoir et vérifier des blocs silicium numériques sous contraintes de performance et de puissance."
    ),
    path: tr("Common route: EE/CE depth with FPGA, lab or tape-out evidence.", "常见路径：电子/计算机工程深度，并有 FPGA、实验室或流片证据。", "Parcours courant : EE/CE avec FPGA, laboratoire ou tape-out."),
    screening: tr("Expect microarchitecture, timing, verification and detailed project review.", "预计考察微架构、时序、验证与详细项目复盘。", "Attendez microarchitecture, timing, vérification et projet détaillé."),
    sourceIds: ["huaweiCareers", "levels", "glassdoor"]
  },
  {
    id: "xiaomi-android",
    companyId: "xiaomi",
    title: tr("Senior Android Engineer", "高级 Android 工程师", "Ingénieur Android senior"),
    track: "engineering",
    level: "Senior",
    location: "Beijing / Nanjing",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.5, 0.8],
    total: [0.8, 1.25],
    density: 4,
    rhythm: { focus: 4, hours: 4, oncall: 3, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Android", "Kotlin / Java", "Performance", "System integration"],
    summary: tr(
      "Own system or app-level Android performance, stability and user experience across a very large device fleet.",
      "在庞大设备矩阵中负责系统或应用层 Android 的性能、稳定性与用户体验。",
      "Piloter performance, stabilité et expérience Android système ou applicative sur une flotte très large."
    ),
    path: tr("Common route: shipped Android products with evidence of performance or stability improvements.", "常见路径：已上线 Android 产品，并能证明性能或稳定性改善。", "Parcours courant : produits Android livrés avec gains de performance ou stabilité."),
    screening: tr("Expect Android internals, debugging, performance and product trade-offs.", "预计考察 Android 内部机制、调试、性能与产品权衡。", "Attendez internes Android, débogage, performance et compromis produit."),
    sourceIds: ["xiaomiCareers", "levels", "glassdoor", "leetcode"]
  },
  {
    id: "xiaomi-autonomous",
    companyId: "xiaomi",
    title: tr("Autonomous Driving Engineer", "自动驾驶工程师", "Ingénieur conduite autonome"),
    track: "ai",
    level: "Senior",
    location: "Beijing / Shanghai",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.6, 0.9],
    total: [0.95, 1.55],
    density: 5,
    rhythm: { focus: 5, hours: 5, oncall: 3, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["Perception", "Planning", "C++", "Sensor fusion"],
    summary: tr(
      "Develop perception, planning or vehicle intelligence systems where model quality must survive real roads and hard safety constraints.",
      "开发感知、规划或车辆智能系统，模型质量必须经得起真实道路与严格安全约束。",
      "Développer perception, planification ou intelligence véhicule, avec des modèles robustes sur route et sous contraintes de sécurité."
    ),
    path: tr("Common route: autonomous driving, robotics or production ML with vehicle evidence.", "常见路径：自动驾驶、机器人或生产 ML 经验，并有车载证据。", "Parcours courant : conduite autonome, robotique ou ML avec preuves véhicule."),
    screening: tr("Expect perception/planning depth, coding, failure analysis and safety reasoning.", "预计考察感知/规划深度、编码、失败分析与安全推理。", "Attendez perception/planification, code, analyse d'échec et sécurité."),
    sourceIds: ["xiaomiCareers", "levels", "glassdoor"]
  },
  {
    id: "baidu-llm",
    companyId: "baidu",
    title: tr("LLM Algorithm Engineer", "大模型算法工程师", "Ingénieur algorithmes LLM"),
    track: "ai",
    level: "T6",
    location: "Beijing / Shanghai",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.7, 1.1],
    total: [1.2, 2.0],
    density: 5,
    rhythm: { focus: 5, hours: 5, oncall: 2, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["LLMs", "Training", "Evaluation", "PyTorch"],
    summary: tr(
      "Improve foundation-model training, alignment or application quality, with clear evidence of what changed and why it matters.",
      "改进基础模型训练、对齐或应用质量，并清晰证明改变了什么以及为何重要。",
      "Améliorer entraînement, alignement ou qualité applicative des modèles, avec preuves claires de l'impact."
    ),
    path: tr("Common route: research depth plus production or benchmark evidence.", "常见路径：研究深度，加上生产或基准证据。", "Parcours courant : profondeur recherche et preuves production ou benchmark."),
    screening: tr("Expect model math, experiment critique, coding and product relevance.", "预计考察模型数学、实验批判、编码与产品相关性。", "Attendez mathématiques, critique expérimentale, code et pertinence produit."),
    sourceIds: ["baiduCareers", "levels", "glassdoor", "leetcode"]
  },
  {
    id: "baidu-cloud-architect",
    companyId: "baidu",
    title: tr("Cloud Solution Architect", "云解决方案架构师", "Architecte de solutions cloud"),
    track: "engineering",
    level: "T7",
    location: "Beijing / Shanghai / Shenzhen",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.6, 0.9],
    total: [0.9, 1.4],
    density: 4,
    rhythm: { focus: 3, hours: 4, oncall: 1, meetings: 5 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Cloud architecture", "Enterprise AI", "Security", "Customer discovery"],
    summary: tr(
      "Translate enterprise constraints into cloud and AI architectures that can be operated safely and adopted by real teams.",
      "把企业约束转化为可安全运营、能被真实团队采用的云与 AI 架构。",
      "Transformer des contraintes d'entreprise en architectures cloud et IA opérables et adoptables."
    ),
    path: tr("Common route: cloud engineering or consulting with repeated customer outcomes.", "常见路径：云工程或咨询经验，并有持续客户成果。", "Parcours courant : ingénierie cloud ou conseil avec résultats client répétés."),
    screening: tr("Expect architecture, migration, security and stakeholder communication.", "预计考察架构、迁移、安全与利益相关者沟通。", "Attendez architecture, migration, sécurité et communication."),
    sourceIds: ["baiduCareers", "levels", "glassdoor"]
  },
  {
    id: "jd-backend",
    companyId: "jd",
    title: tr("Senior Backend Engineer", "高级后端工程师", "Ingénieur backend senior"),
    track: "engineering",
    level: "T7",
    location: "Beijing / Chengdu",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.55, 0.85],
    total: [0.8, 1.3],
    density: 4,
    rhythm: { focus: 4, hours: 4, oncall: 4, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Java / Go", "High concurrency", "Storage", "Operational excellence"],
    summary: tr(
      "Own high-traffic commerce or logistics services where peak demand, correctness and cost all matter.",
      "负责高流量电商或物流服务，峰值需求、正确性与成本都至关重要。",
      "Piloter des services commerce ou logistique à fort trafic, sous contraintes de pic, correction et coût."
    ),
    path: tr("Common route: production backend ownership during peak traffic and incidents.", "常见路径：在峰值流量与故障中主导生产后端。", "Parcours courant : backend de production en pic de trafic et incident."),
    screening: tr("Expect algorithms, concurrency, storage and peak-load scenarios.", "预计考察算法、并发、存储与高峰负载场景。", "Attendez algorithmes, concurrence, stockage et scénarios de pic."),
    sourceIds: ["jdCareers", "levels", "glassdoor", "leetcode"]
  },
  {
    id: "jd-supply-algo",
    companyId: "jd",
    title: tr("Supply Chain Algorithm Engineer", "供应链算法工程师", "Ingénieur algorithmes supply chain"),
    track: "ai",
    level: "P6",
    location: "Beijing",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.6, 0.9],
    total: [1.0, 1.6],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 2, meetings: 3 },
    education: EDU_QUANT,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["Forecasting", "Optimization", "Python", "Operations research"],
    summary: tr(
      "Optimize inventory, routing or fulfilment decisions where model quality is measured in service level and operating cost.",
      "优化库存、路由或履约决策，模型质量最终体现在服务水平与运营成本。",
      "Optimiser stock, routage ou fulfilment, où la qualité du modèle se mesure en service et coût."
    ),
    path: tr("Common route: operations research or applied ML with measurable logistics outcomes.", "常见路径：运筹或应用 ML 经验，并有可衡量的物流结果。", "Parcours courant : recherche opérationnelle ou ML avec résultats logistiques mesurés."),
    screening: tr("Expect optimization, forecasting, coding and business trade-off analysis.", "预计考察优化、预测、编码与业务权衡分析。", "Attendez optimisation, prévision, code et analyse de compromis."),
    sourceIds: ["jdCareers", "levels", "glassdoor"]
  },
  {
    id: "meituan-recommendation",
    companyId: "meituan",
    title: tr("Recommendation Algorithm Engineer", "推荐算法工程师", "Ingénieur algorithmes de recommandation"),
    track: "ai",
    level: "L7",
    location: "Beijing / Shanghai",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.65, 1.0],
    total: [1.1, 1.8],
    density: 5,
    rhythm: { focus: 5, hours: 5, oncall: 3, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["Recommendation", "Ranking", "Experimentation", "PyTorch"],
    summary: tr(
      "Improve matching and ranking for local services, balancing user intent, merchant value and marketplace health.",
      "改进本地生活服务的匹配与排序，平衡用户意图、商家价值与平台健康。",
      "Améliorer matching et classement des services locaux, en équilibrant intention, valeur marchande et santé du marketplace."
    ),
    path: tr("Common route: recommender systems with online experiment ownership.", "常见路径：推荐系统经验，并主导在线实验。", "Parcours courant : systèmes de recommandation avec ownership des expériences online."),
    screening: tr("Expect ML fundamentals, recommendation design, coding and metric reasoning.", "预计考察 ML 基础、推荐设计、编码与指标推理。", "Attendez fondamentaux ML, design de recommandation, code et raisonnement métrique."),
    sourceIds: ["meituanCareers", "levels", "glassdoor", "leetcode"]
  },
  {
    id: "meituan-product",
    companyId: "meituan",
    title: tr("Local Services Product Manager", "本地生活产品经理", "Chef de produit services locaux"),
    track: "product",
    level: "L7",
    location: "Beijing / Shanghai",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.55, 0.8],
    total: [0.8, 1.3],
    density: 4,
    rhythm: { focus: 3, hours: 4, oncall: 1, meetings: 5 },
    education: EDU_PRODUCT,
    majors: MAJORS_PRODUCT,
    experience: EXP_PRODUCT,
    skills: ["Marketplace", "Operations", "Experimentation", "Merchant strategy"],
    summary: tr(
      "Design products that work for users, merchants and a dense physical operation at the same time.",
      "设计同时服务用户、商家与高密度线下运营的产品。",
      "Concevoir des produits utiles aux utilisateurs, marchands et opérations physiques denses."
    ),
    path: tr("Common route: consumer marketplace product ownership with operational evidence.", "常见路径：消费平台产品主导经验，并有运营证据。", "Parcours courant : ownership produit marketplace avec preuves opérationnelles."),
    screening: tr("Expect metric diagnosis, marketplace trade-offs and field-operation scenarios.", "预计考察指标诊断、平台权衡与线下运营场景。", "Attendez diagnostic de métriques, compromis marketplace et opérations terrain."),
    sourceIds: ["meituanCareers", "levels", "glassdoor"]
  },
  {
    id: "netease-game-engine",
    companyId: "netease",
    title: tr("Game Engine Engineer", "游戏引擎工程师", "Ingénieur moteur de jeu"),
    track: "engineering",
    level: "P4",
    location: "Hangzhou / Guangzhou",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.6, 0.9],
    total: [0.9, 1.5],
    density: 5,
    rhythm: { focus: 5, hours: 5, oncall: 3, meetings: 2 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["C++", "Rendering", "Memory", "Cross-platform runtime"],
    summary: tr(
      "Optimize rendering and runtime systems under frame, memory and device constraints for long-lived game products.",
      "在帧率、内存与设备约束下优化渲染与运行时系统，服务长线游戏产品。",
      "Optimiser rendu et runtime sous contraintes de frame, mémoire et appareils pour des jeux live."
    ),
    path: tr("Common route: graphics or engine experience with shipped product evidence.", "常见路径：图形或引擎经验，并有已上线产品证据。", "Parcours courant : graphisme ou moteur avec produit livré."),
    screening: tr("Expect C++, graphics math, profiling and a concrete frame-time debugging story.", "预计考察 C++、图形数学、性能剖析与具体帧时间调试案例。", "Attendez C++, mathématiques graphiques, profilage et débogage de frame time."),
    sourceIds: ["neteaseCareers", "levels", "glassdoor"]
  },
  {
    id: "netease-data",
    companyId: "netease",
    title: tr("Game Data Analyst", "游戏数据分析师", "Analyste data jeux"),
    track: "data",
    level: "P4",
    location: "Hangzhou / Guangzhou",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.45, 0.7],
    total: [0.65, 1.0],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 1, meetings: 3 },
    education: EDU_QUANT,
    majors: MAJORS_QUANT,
    experience: EXP_SENIOR,
    skills: ["SQL", "Experimentation", "Player segmentation", "Retention"],
    summary: tr(
      "Turn player behavior into product and live-operations decisions without confusing correlation with causation.",
      "把玩家行为转化为产品与长线运营决策，避免把相关误当成因果。",
      "Transformer le comportement des joueurs en décisions produit et live ops, sans confondre corrélation et causalité."
    ),
    path: tr("Common route: consumer analytics or experimentation with live-product evidence.", "常见路径：消费产品分析或实验经验，并有长线产品证据。", "Parcours courant : analytique ou expérimentation sur produit live."),
    screening: tr("Expect SQL, retention metrics, experiment interpretation and product judgment.", "预计考察 SQL、留存指标、实验解读与产品判断。", "Attendez SQL, rétention, interprétation d'expérience et jugement produit."),
    sourceIds: ["neteaseCareers", "levels", "glassdoor"]
  },
  {
    id: "dji-embedded",
    companyId: "dji",
    title: tr("Senior Embedded Software Engineer", "高级嵌入式软件工程师", "Ingénieur logiciel embarqué senior"),
    track: "engineering",
    level: "Senior",
    location: "Shenzhen",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.55, 0.8],
    total: [0.8, 1.3],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 3, meetings: 2 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["C / C++", "RTOS", "Drivers", "Debugging"],
    summary: tr(
      "Build low-level software for drones and imaging devices where latency, power and hardware reliability are visible to users.",
      "为无人机与影像设备构建底层软件，延迟、功耗与硬件可靠性会直接呈现给用户。",
      "Développer le logiciel bas niveau des drones et appareils d'imagerie, où latence, énergie et fiabilité sont visibles."
    ),
    path: tr("Common route: embedded or robotics software with real-device debugging evidence.", "常见路径：嵌入式或机器人软件，并有真实设备调试证据。", "Parcours courant : embarqué ou robotique avec débogage sur appareil."),
    screening: tr("Expect C/C++, RTOS, memory, hardware interfaces and device debugging.", "预计考察 C/C++、RTOS、内存、硬件接口与设备调试。", "Attendez C/C++, RTOS, mémoire, interfaces matérielles et débogage."),
    sourceIds: ["djiCareers", "levels", "glassdoor"]
  },
  {
    id: "dji-computer-vision",
    companyId: "dji",
    title: tr("Computer Vision Engineer", "计算机视觉工程师", "Ingénieur vision par ordinateur"),
    track: "ai",
    level: "Senior",
    location: "Shenzhen / Shanghai",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.6, 0.9],
    total: [0.9, 1.5],
    density: 5,
    rhythm: { focus: 5, hours: 5, oncall: 2, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["Computer vision", "SLAM", "C++", "Model deployment"],
    summary: tr(
      "Build perception systems that must work on moving devices with limited compute, imperfect sensors and real-time deadlines.",
      "构建必须在移动设备、有限算力、不完美传感器与实时截止时间内工作的感知系统。",
      "Construire des systèmes de perception sur appareils mobiles, avec calcul limité, capteurs imparfaits et temps réel."
    ),
    path: tr("Common route: vision research plus real-time deployment evidence.", "常见路径：视觉研究加上实时部署证据。", "Parcours courant : recherche vision et déploiement temps réel."),
    screening: tr("Expect vision fundamentals, coding, latency optimization and failure cases.", "预计考察视觉基础、编码、延迟优化与失败场景。", "Attendez fondamentaux vision, code, latence et cas d'échec."),
    sourceIds: ["djiCareers", "levels", "glassdoor"]
  },
  {
    id: "sensetime-cv",
    companyId: "sensetime",
    title: tr("Computer Vision Researcher", "计算机视觉研究员", "Chercheur en vision par ordinateur"),
    track: "ai",
    level: "Senior",
    location: "Shanghai / Hong Kong / Beijing",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.65, 1.0],
    total: [1.0, 1.7],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 2, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["Computer vision", "Multimodal", "Research", "Evaluation"],
    summary: tr(
      "Pursue vision or multimodal research with enough engineering rigor to test, reproduce and deploy the result.",
      "开展视觉或多模态研究，并以足够工程严谨性完成测试、复现与部署。",
      "Mener une recherche vision ou multimodale avec assez de rigueur pour tester, reproduire et déployer."
    ),
    path: tr("Common route: publications plus reproducible code or deployed systems.", "常见路径：论文加上可复现代码或已部署系统。", "Parcours courant : publications et code reproductible ou système déployé."),
    screening: tr("Expect paper critique, coding, experiment design and deployment trade-offs.", "预计考察论文批判、编码、实验设计与部署权衡。", "Attendez critique de papier, code, design expérimental et compromis."),
    sourceIds: ["sensetimeCareers", "levels", "glassdoor"]
  },
  {
    id: "sensetime-llm",
    companyId: "sensetime",
    title: tr("Large Model Engineer", "大模型工程师", "Ingénieur grands modèles"),
    track: "ai",
    level: "Senior",
    location: "Shanghai / Hong Kong",
    region: "CN",
    currency: "CNY",
    unit: "m",
    base: [0.7, 1.1],
    total: [1.2, 2.0],
    density: 5,
    rhythm: { focus: 5, hours: 5, oncall: 3, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["LLM training", "Inference", "Evaluation", "Distributed systems"],
    summary: tr(
      "Train, optimize and evaluate large models while making compute, latency and quality trade-offs explicit.",
      "训练、优化并评估大模型，同时明确算力、延迟与质量之间的权衡。",
      "Entraîner, optimiser et évaluer de grands modèles en explicitant les compromis calcul, latence et qualité."
    ),
    path: tr("Common route: ML systems or research engineering with large-scale training evidence.", "常见路径：ML 系统或研究工程经验，并有大规模训练证据。", "Parcours courant : systèmes ML ou ingénierie recherche avec entraînement à grande échelle."),
    screening: tr("Expect model math, distributed training, evaluation and cost reasoning.", "预计考察模型数学、分布式训练、评估与成本推理。", "Attendez mathématiques, entraînement distribué, évaluation et coût."),
    sourceIds: ["sensetimeCareers", "levels", "glassdoor"]
  },
  {
    id: "hkex-trading-engineer",
    companyId: "hkex",
    title: tr("Trading Systems Engineer", "交易系统工程师", "Ingénieur systèmes de trading"),
    track: "engineering",
    level: "AVP",
    location: "Hong Kong",
    region: "HK",
    currency: "HKD",
    unit: "k",
    base: [700, 950],
    total: [850, 1200],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 4, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["Low latency", "C++ / Java", "Market data", "Reliability"],
    summary: tr(
      "Build and operate exchange systems where microseconds, correctness and regulatory control are all first-order requirements.",
      "构建并运营交易所系统，微秒级性能、正确性与监管控制都是首要要求。",
      "Construire et opérer des systèmes de marché où microsecondes, correction et contrôle réglementaire sont critiques."
    ),
    path: tr("Common route: high-reliability backend or low-latency systems with incident ownership.", "常见路径：高可靠后端或低延迟系统经验，并主导事故处理。", "Parcours courant : backend haute fiabilité ou faible latence avec gestion d'incident."),
    screening: tr("Expect concurrency, latency, failover, market scenarios and regulatory discipline.", "预计考察并发、延迟、故障切换、市场场景与监管纪律。", "Attendez concurrence, latence, failover, scénarios de marché et réglementation."),
    sourceIds: ["hkexCareers", "levels", "glassdoor"]
  },
  {
    id: "hkex-market-data-pm",
    companyId: "hkex",
    title: tr("Market Data Product Manager", "市场数据产品经理", "Chef de produit données de marché"),
    track: "product",
    level: "VP",
    location: "Hong Kong",
    region: "HK",
    currency: "HKD",
    unit: "k",
    base: [750, 1000],
    total: [900, 1300],
    density: 3,
    rhythm: { focus: 3, hours: 3, oncall: 1, meetings: 5 },
    education: EDU_PRODUCT,
    majors: MAJORS_PRODUCT,
    experience: EXP_PRODUCT,
    skills: ["Market data", "APIs", "Product strategy", "Regulation"],
    summary: tr(
      "Shape market-data products for exchanges, brokers and data vendors while balancing commercial, technical and regulatory needs.",
      "为交易所、券商与数据供应商塑造市场数据产品，平衡商业、技术与监管需求。",
      "Façonner des produits de données de marché en équilibrant besoins commerciaux, techniques et réglementaires."
    ),
    path: tr("Common route: market-data, API or financial-platform product ownership.", "常见路径：市场数据、API 或金融平台产品主导经验。", "Parcours courant : ownership produit données de marché, API ou plateforme financière."),
    screening: tr("Expect market structure, product prioritization, regulation and stakeholder scenarios.", "预计考察市场结构、产品优先级、监管与利益相关者场景。", "Attendez structure de marché, priorisation, réglementation et parties prenantes."),
    sourceIds: ["hkexCareers", "levels", "glassdoor"]
  },
  {
    id: "cathay-digital-pm",
    companyId: "cathay",
    title: tr("Digital Product Manager", "数字产品经理", "Chef de produit digital"),
    track: "product",
    level: "Manager",
    location: "Hong Kong",
    region: "HK",
    currency: "HKD",
    unit: "k",
    base: [650, 850],
    total: [760, 1000],
    density: 3,
    rhythm: { focus: 3, hours: 4, oncall: 1, meetings: 5 },
    education: EDU_PRODUCT,
    majors: MAJORS_PRODUCT,
    experience: EXP_PRODUCT,
    skills: ["Customer journeys", "Mobile products", "Data", "Airline operations"],
    summary: tr(
      "Improve booking, disruption recovery or loyalty journeys across a complex global airline operation.",
      "在复杂全球航空运营中改进预订、航班中断恢复或忠诚度旅程。",
      "Améliorer réservation, reprise après perturbation ou fidélité dans une opération aérienne mondiale complexe."
    ),
    path: tr("Common route: consumer or travel product ownership with operational stakeholder experience.", "常见路径：消费或旅行产品主导经验，并有运营利益相关者协作经历。", "Parcours courant : produit grand public ou voyage avec parties prenantes opérationnelles."),
    screening: tr("Expect journey redesign, metric diagnosis, operational constraints and stakeholder judgment.", "预计考察旅程重构、指标诊断、运营约束与利益相关者判断。", "Attendez redesign de parcours, diagnostic métrique, contraintes et jugement."),
    sourceIds: ["cathayCareers", "levels", "glassdoor"]
  },
  {
    id: "cathay-operations-research",
    companyId: "cathay",
    title: tr("Operations Research Scientist", "运筹研究科学家", "Scientifique recherche opérationnelle"),
    track: "data",
    level: "Manager",
    location: "Hong Kong",
    region: "HK",
    currency: "HKD",
    unit: "k",
    base: [700, 950],
    total: [820, 1100],
    density: 4,
    rhythm: { focus: 4, hours: 4, oncall: 2, meetings: 3 },
    education: EDU_QUANT,
    majors: MAJORS_QUANT,
    experience: EXP_SENIOR,
    skills: ["Optimization", "Forecasting", "Python", "Network planning"],
    summary: tr(
      "Model scheduling, network or resource-allocation problems where a better decision must survive real operational constraints.",
      "建模排班、网络或资源分配问题，改进后的决策必须经得起真实运营约束。",
      "Modéliser planification, réseau ou allocation de ressources, avec des décisions robustes aux contraintes réelles."
    ),
    path: tr("Common route: operations research or forecasting with deployed decision systems.", "常见路径：运筹或预测经验，并有已部署决策系统。", "Parcours courant : recherche opérationnelle ou prévision avec systèmes déployés."),
    screening: tr("Expect optimization modeling, coding, assumptions and real-world validation.", "预计考察优化建模、编码、假设与现实校验。", "Attendez modélisation, code, hypothèses et validation réelle."),
    sourceIds: ["cathayCareers", "levels", "glassdoor"]
  },
  {
    id: "mtr-asset-data",
    companyId: "mtr",
    title: tr("Asset Data Engineer", "资产数据工程师", "Ingénieur data actifs"),
    track: "data",
    level: "Senior",
    location: "Hong Kong",
    region: "HK",
    currency: "HKD",
    unit: "k",
    base: [600, 800],
    total: [700, 950],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 2, meetings: 3 },
    education: EDU_QUANT,
    majors: MAJORS_QUANT,
    experience: EXP_SENIOR,
    skills: ["Data pipelines", "Asset management", "SQL", "Reliability"],
    summary: tr(
      "Turn sensor and maintenance data into asset decisions that improve reliability without compromising safety.",
      "把传感器与维护数据转化为资产决策，在不牺牲安全的前提下提升可靠性。",
      "Transformer données capteurs et maintenance en décisions d'actifs, sans compromettre la sécurité."
    ),
    path: tr("Common route: data engineering or industrial analytics in a safety-critical environment.", "常见路径：安全关键环境中的数据工程或工业分析。", "Parcours courant : data engineering ou analytique industrielle en environnement critique."),
    screening: tr("Expect data modeling, pipeline design, reliability metrics and safety awareness.", "预计考察数据建模、管道设计、可靠性指标与安全意识。", "Attendez modélisation data, pipelines, métriques de fiabilité et sécurité."),
    sourceIds: ["mtrCareers", "levels", "glassdoor"]
  },
  {
    id: "mtr-digital-pm",
    companyId: "mtr",
    title: tr("Digital Product Manager", "数字产品经理", "Chef de produit digital"),
    track: "product",
    level: "Manager",
    location: "Hong Kong",
    region: "HK",
    currency: "HKD",
    unit: "k",
    base: [650, 850],
    total: [750, 1000],
    density: 3,
    rhythm: { focus: 3, hours: 3, oncall: 1, meetings: 5 },
    education: EDU_PRODUCT,
    majors: MAJORS_PRODUCT,
    experience: EXP_PRODUCT,
    skills: ["Passenger products", "Agile delivery", "Data", "Operations"],
    summary: tr(
      "Design passenger and employee digital products for a high-reliability public transport network.",
      "为高可靠公共交通网络设计乘客与员工数字产品。",
      "Concevoir des produits digitaux voyageurs et employés pour un réseau de transport à haute fiabilité."
    ),
    path: tr("Common route: digital product ownership with operational or public-service complexity.", "常见路径：数字产品主导经验，并有运营或公共服务复杂性。", "Parcours courant : ownership produit digital avec complexité opérationnelle ou publique."),
    screening: tr("Expect user research, operational constraints, accessibility and delivery trade-offs.", "预计考察用户研究、运营约束、无障碍与交付权衡。", "Attendez recherche utilisateur, contraintes, accessibilité et compromis."),
    sourceIds: ["mtrCareers", "levels", "glassdoor"]
  },
  {
    id: "hangseng-mobile-engineer",
    companyId: "hangseng",
    title: tr("Mobile Engineer", "移动端工程师", "Ingénieur mobile"),
    track: "engineering",
    level: "AVP",
    location: "Hong Kong",
    region: "HK",
    currency: "HKD",
    unit: "k",
    base: [550, 750],
    total: [650, 900],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 3, meetings: 3 },
    education: EDU_CS,
    majors: MAJORS_CS,
    experience: EXP_SENIOR,
    skills: ["iOS / Android", "Security", "Payments", "Release engineering"],
    summary: tr(
      "Build secure mobile banking experiences where performance, accessibility and financial control must work together.",
      "构建安全移动银行体验，性能、无障碍与金融控制必须协同。",
      "Construire des expériences bancaires mobiles sécurisées, avec performance, accessibilité et contrôle financier."
    ),
    path: tr("Common route: mobile product engineering with security or regulated-release evidence.", "常见路径：移动产品工程，并有安全或受监管发布证据。", "Parcours courant : ingénierie mobile avec sécurité ou releases réglementées."),
    screening: tr("Expect mobile depth, security, release process and incident scenarios.", "预计考察移动端深度、安全、发布流程与事故场景。", "Attendez profondeur mobile, sécurité, release et incidents."),
    sourceIds: ["hangsengCareers", "levels", "glassdoor"]
  },
  {
    id: "hangseng-risk-ds",
    companyId: "hangseng",
    title: tr("Risk Data Scientist", "风险数据科学家", "Data scientist risque"),
    track: "data",
    level: "AVP",
    location: "Hong Kong",
    region: "HK",
    currency: "HKD",
    unit: "k",
    base: [600, 850],
    total: [700, 1000],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 1, meetings: 4 },
    education: EDU_QUANT,
    majors: MAJORS_QUANT,
    experience: EXP_SENIOR,
    skills: ["Credit risk", "Statistics", "Python / SQL", "Model governance"],
    summary: tr(
      "Build and validate risk models where statistical quality must be explainable to regulators and business owners.",
      "构建并验证风险模型，统计质量必须能向监管者与业务负责人解释。",
      "Construire et valider des modèles de risque explicables aux régulateurs et aux responsables métier."
    ),
    path: tr("Common route: credit, fraud or market-risk analytics with model-governance exposure.", "常见路径：信贷、欺诈或市场风险分析，并接触模型治理。", "Parcours courant : analytique crédit, fraude ou risque avec gouvernance de modèles."),
    screening: tr("Expect statistics, model validation, business interpretation and documentation discipline.", "预计考察统计、模型验证、业务解释与文档纪律。", "Attendez statistiques, validation, interprétation métier et documentation."),
    sourceIds: ["hangsengCareers", "levels", "glassdoor"]
  }
];

export const TRACKS = [
  { id: "engineering", label: tr("Engineering", "工程", "Ingénierie"), color: "#79e7ee" },
  { id: "ai", label: tr("AI & Research", "AI 与研究", "IA et recherche"), color: "#c8f56a" },
  { id: "data", label: tr("Data", "数据", "Données"), color: "#a99cff" },
  { id: "product", label: tr("Product", "产品", "Produit"), color: "#ffc95c" },
  { id: "hardware", label: tr("Hardware & Silicon", "硬件与芯片", "Matériel et silicium"), color: "#ff9d7a" },
  { id: "ops", label: tr("Programs & Cloud", "项目与云", "Programmes et cloud"), color: "#8fa7ff" }
];

export const getRole = (id) => ROLES.find((role) => role.id === id);
export const getRolesForCompany = (companyId) => ROLES.filter((role) => role.companyId === companyId);
export const getTrack = (id) => TRACKS.find((track) => track.id === id);
