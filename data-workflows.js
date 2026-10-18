const tr = (en, zh, fr) => ({ en, zh, fr });

export const WORKFLOW_TRACKS = {
  engineering: {
    label: tr("Engineering delivery loop", "工程交付闭环", "Boucle de delivery ingénierie"),
    summary: tr(
      "Turn an ambiguous request into a bounded, observable system change that can be shipped and reversed.",
      "把模糊需求转化为边界清晰、可观测、可上线也可回滚的系统变更。",
      "Transformer une demande ambiguë en changement système borné, observable, livrable et réversible."
    ),
    collaborators: tr("Product, SRE, dependent teams", "产品、SRE、依赖团队", "Produit, SRE, équipes dépendantes"),
    scenario: {
      title: tr("Checkout latency spike", "支付链路延迟突增", "Pic de latence au paiement"),
      brief: tr(
        "A payment endpoint doubled p95 latency after a routine release, and a major promotion starts in two days.",
        "一次常规发布后支付接口 p95 延迟翻倍，而大型促销将在两天后开始。",
        "Un endpoint de paiement a doublé sa latence p95 après une release, deux jours avant une grande promotion."
      ),
      stakeholder: tr("Payments, merchant support, SRE", "支付、商家支持、SRE", "Paiements, support marchand, SRE"),
      success: tr("p95 back below 180 ms with no error-rate regression", "p95 恢复到 180ms 以下，且错误率不退化", "p95 sous 180 ms sans régression du taux d'erreur"),
      risk: tr("Optimizing the wrong hop under launch pressure", "在发布压力下优化了错误的链路", "Optimiser le mauvais maillon sous pression")
    },
    stages: [
      {
        id: "frame",
        title: tr("Frame the constraint", "定义约束与影响面", "Cadrer la contrainte"),
        action: tr(
          "Read the request, map the critical path, set the SLO and blast radius, and name what is explicitly out of scope.",
          "阅读需求，画出关键路径，明确 SLO 与影响面，并写清哪些不在本次范围内。",
          "Lire la demande, cartographier le chemin critique, fixer le SLO et le blast radius, puis expliciter le hors-périmètre."
        ),
        output: tr(
          "A one-page system map with constraints, unknowns and a risk list.",
          "一页系统图，包含约束、未知项与风险清单。",
          "Une page de cartographie avec contraintes, inconnues et liste de risques."
        ),
        minutes: 25,
        tools: ["Trace", "Design doc", "Incident history"]
      },
      {
        id: "design",
        title: tr("Design the change", "设计变更方案", "Concevoir le changement"),
        action: tr(
          "Compare two options, define interfaces and rollout strategy, and record the trade-off you reject.",
          "比较两个方案，定义接口与上线策略，并记录被否决方案的权衡。",
          "Comparer deux options, définir interfaces et stratégie de rollout, et documenter le compromis rejeté."
        ),
        output: tr(
          "Decision note, interface contract and rollback plan.",
          "决策记录、接口契约与回滚方案。",
          "Note de décision, contrat d'interface et plan de rollback."
        ),
        minutes: 45,
        tools: ["Architecture diagram", "ADR", "Feature flag"]
      },
      {
        id: "build",
        title: tr("Build in thin slices", "小步构建", "Construire par petites tranches"),
        action: tr(
          "Ship behind a flag, add observability and tests, and keep every change reviewable.",
          "在开关后小步交付，补充可观测性与测试，确保每次变更都可评审。",
          "Livrer derrière un flag, ajouter observabilité et tests, et garder chaque changement révisable."
        ),
        output: tr(
          "Reviewable diff, automated tests and first dashboards.",
          "可评审代码、自动化测试与首批监控看板。",
          "Diff révisable, tests automatisés et premiers dashboards."
        ),
        minutes: 90,
        tools: ["Feature flag", "CI", "Unit tests"]
      },
      {
        id: "verify",
        title: tr("Verify under pressure", "压力下验证", "Vérifier sous pression"),
        action: tr(
          "Test edge cases, profile the critical path, inject failures and challenge your blast-radius assumptions.",
          "测试边界条件，剖析关键路径，注入故障，并挑战对影响面的假设。",
          "Tester les cas limites, profiler le chemin critique, injecter des pannes et challenger le blast radius."
        ),
        output: tr(
          "Evidence pack: tests, benchmark, failure notes and open risks.",
          "证据包：测试、基准、故障记录与未决风险。",
          "Dossier de preuves : tests, benchmark, notes de panne et risques ouverts."
        ),
        minutes: 45,
        tools: ["Load test", "Profiler", "Chaos runbook"]
      },
      {
        id: "ship",
        title: tr("Ship and observe", "上线并观察", "Livrer et observer"),
        action: tr(
          "Run a canary, watch guardrails, write the launch memo and hand off ownership.",
          "执行灰度，观察护栏指标，写发布记录并完成责任交接。",
          "Lancer un canary, surveiller les garde-fous, rédiger la note de lancement et transférer l'ownership."
        ),
        output: tr(
          "Launch record, alerts and follow-up list.",
          "发布记录、告警与后续事项清单。",
          "Dossier de lancement, alertes et liste de suivi."
        ),
        minutes: 40,
        tools: ["Canary", "Dashboard", "Launch memo"]
      }
    ]
  },
  ai: {
    label: tr("AI research-to-release loop", "AI 研究与发布闭环", "Boucle recherche-IA à la release"),
    summary: tr(
      "Frame a model decision, design evidence, iterate without fooling yourself, then gate deployment on measured behavior.",
      "先定义模型要支持的决策，设计证据，在避免自欺的迭代后，用可测行为决定是否发布。",
      "Cadrer une décision modèle, concevoir les preuves, itérer sans s'auto-tromper, puis conditionner le déploiement aux comportements mesurés."
    ),
    collaborators: tr("Research, product, safety, infrastructure", "研究、产品、安全、基础设施", "Recherche, produit, sûreté, infrastructure"),
    scenario: {
      title: tr("Support agent gives a wrong refund answer", "客服智能体给出错误退款答案", "Un agent support se trompe sur les remboursements"),
      brief: tr(
        "A retrieval-augmented support agent is confident but wrong on refunds, and launch is one week away.",
        "一个检索增强客服智能体在退款问题上自信但错误，距离上线只剩一周。",
        "Un agent support augmenté par retrieval est confiant mais faux sur les remboursements, une semaine avant le lancement."
      ),
      stakeholder: tr("Support, legal, product, safety", "客服、法务、产品、安全", "Support, juridique, produit, sûreté"),
      success: tr("False-answer rate under 2% on high-risk intents, latency under 1.8 s", "高风险意图的错误率低于 2%，延迟低于 1.8 秒", "Taux de fausses réponses sous 2 % sur les intentions à risque, latence sous 1,8 s"),
      risk: tr("Improving average quality while missing the high-severity slice", "平均质量提升，却漏掉高风险切片", "Améliorer la moyenne en manquant les segments critiques")
    },
    stages: [
      {
        id: "frame",
        title: tr("Frame the decision", "定义决策与风险", "Cadrer la décision"),
        action: tr(
          "Name the user decision, task distribution, target behavior, cost limit and abstention rule.",
          "明确用户决策、任务分布、目标行为、成本上限与拒答规则。",
          "Nommer la décision utilisateur, la distribution des tâches, le comportement cible, la limite de coût et la règle d'abstention."
        ),
        output: tr("Problem framing and evaluation contract.", "问题定义与评估契约。", "Cadrage du problème et contrat d'évaluation."),
        minutes: 30,
        tools: ["Task taxonomy", "Eval brief", "Cost model"]
      },
      {
        id: "evals",
        title: tr("Design data and evals", "设计数据与评估", "Concevoir données et évaluations"),
        action: tr(
          "Curate high-risk slices, adversarial cases and a judge rubric; check leakage and label reliability.",
          "构造高风险切片、对抗样本与评审规则，并检查数据泄漏与标注可靠性。",
          "Construire segments critiques, cas adversariaux et rubrique de jugement ; vérifier fuite et fiabilité des labels."
        ),
        output: tr("Eval plan, dataset card and scoring rubric.", "评估方案、数据卡与评分规则。", "Plan d'éval, fiche dataset et rubrique de score."),
        minutes: 45,
        tools: ["Eval harness", "Rubric", "Contamination check"]
      },
      {
        id: "baseline",
        title: tr("Establish a baseline", "建立基线", "Établir une base"),
        action: tr(
          "Run a simple baseline, measure latency and cost, and inspect where failures cluster.",
          "运行简单基线，测量延迟与成本，并分析失败集中在哪里。",
          "Lancer une base simple, mesurer latence et coût, puis examiner les clusters d'échec."
        ),
        output: tr("Baseline scorecard and failure taxonomy.", "基线记分卡与失败分类。", "Scorecard baseline et taxonomie des échecs."),
        minutes: 60,
        tools: ["Baseline eval", "Trace viewer", "Error analysis"]
      },
      {
        id: "iterate",
        title: tr("Iterate without self-deception", "避免自欺地迭代", "Itérer sans s'auto-tromper"),
        action: tr(
          "Change one variable at a time, compare slices, document uncertainty and keep failed attempts.",
          "一次只改变一个变量，比较切片，记录不确定性，并保留失败尝试。",
          "Changer une variable à la fois, comparer les segments, documenter l'incertitude et conserver les essais échoués."
        ),
        output: tr("Experiment log, candidate model and uncertainty notes.", "实验日志、候选模型与不确定性说明。", "Journal d'expériences, modèle candidat et notes d'incertitude."),
        minutes: 90,
        tools: ["Experiment tracker", "A/B eval", "Model card"]
      },
      {
        id: "gate",
        title: tr("Evaluate and gate release", "评估并设置发布门槛", "Évaluer et conditionner la release"),
        action: tr(
          "Stress-test safety, compare against the gate, stage rollout and define monitoring and rollback.",
          "进行安全压力测试，对照发布门槛，分阶段上线并定义监控与回滚。",
          "Stress-tester la sûreté, comparer au seuil, déployer par étapes et définir monitoring et rollback."
        ),
        output: tr("Release scorecard, guardrails and rollback decision.", "发布记分卡、护栏指标与回滚决策。", "Scorecard de release, garde-fous et décision de rollback."),
        minutes: 60,
        tools: ["Guardrail eval", "Canary", "Incident plan"]
      }
    ]
  },
  data: {
    label: tr("Decision-grade analytics loop", "决策级分析闭环", "Boucle analytique décisionnelle"),
    summary: tr(
      "Turn a fuzzy business question into a defensible measurement, then separate signal from coincidence.",
      "把模糊业务问题转化为可辩护的测量，再区分真实信号与巧合。",
      "Transformer une question métier floue en mesure défendable, puis distinguer signal et coïncidence."
    ),
    collaborators: tr("Product, finance, engineering, operations", "产品、财务、工程、运营", "Produit, finance, ingénierie, opérations"),
    scenario: {
      title: tr("Metric up, revenue flat", "指标涨了，收入没涨", "Métrique en hausse, revenu stable"),
      brief: tr(
        "Weekly engagement is up after a redesign, but revenue is flat and executives want a causal story.",
        "改版后周活跃提升，但收入持平，管理层希望得到一个可信的因果解释。",
        "L'engagement hebdomadaire augmente après un redesign, mais le revenu stagne ; la direction veut une explication causale."
      ),
      stakeholder: tr("Growth, finance, product leadership", "增长、财务、产品管理层", "Growth, finance, direction produit"),
      success: tr("A defensible driver and a clear stop/continue recommendation", "找到可辩护的驱动因素，并给出明确的继续/停止建议", "Un facteur défendable et une recommandation claire"),
      risk: tr("Mistaking segment mix for behavior change", "把结构变化误当成行为变化", "Confondre changement de mix et changement de comportement")
    },
    stages: [
      {
        id: "question",
        title: tr("Question and decision", "定义问题与决策", "Question et décision"),
        action: tr(
          "Write the decision, estimand, population, time window and guardrail metrics before touching the data.",
          "在看数据前，先写清决策、估计对象、人群、时间窗口与护栏指标。",
          "Écrire la décision, l'estimand, la population, la période et les garde-fous avant de toucher aux données."
        ),
        output: tr("Decision brief with one primary metric.", "包含单一主指标的决策简报。", "Brief de décision avec une métrique principale."),
        minutes: 20,
        tools: ["Metric tree", "Decision memo", "Power check"]
      },
      {
        id: "audit",
        title: tr("Audit the data", "审计数据", "Auditer les données"),
        action: tr(
          "Check lineage, completeness, selection effects and whether the event means what the dashboard says.",
          "检查数据血缘、完整性、选择效应，以及事件定义是否与看板含义一致。",
          "Vérifier lineage, complétude, effets de sélection et cohérence de la définition des événements."
        ),
        output: tr("Data-quality notes and excluded-user rationale.", "数据质量记录与排除用户说明。", "Notes de qualité data et justification des exclusions."),
        minutes: 40,
        tools: ["SQL", "Lineage", "Quality checks"]
      },
      {
        id: "analyze",
        title: tr("Analyze and test", "分析与检验", "Analyser et tester"),
        action: tr(
          "Segment the effect, use a causal design where possible, and report uncertainty instead of a single point.",
          "拆分效应，尽可能使用因果设计，并报告不确定性而非单一数值。",
          "Segmenter l'effet, utiliser un design causal si possible et rapporter l'incertitude."
        ),
        output: tr("Analysis notebook with effect sizes and limitations.", "包含效应量与局限的分析记录。", "Notebook avec tailles d'effet et limites."),
        minutes: 70,
        tools: ["Python / R", "Experiment analysis", "Sensitivity test"]
      },
      {
        id: "stress",
        title: tr("Stress-test the story", "压力测试结论", "Stress-tester le récit"),
        action: tr(
          "List alternative explanations, segment anomalies and ask a skeptical reviewer to attack the conclusion.",
          "列出替代解释、分群异常，并让一位怀疑者挑战结论。",
          "Lister les explications alternatives, anomalies de segment et faire challenger la conclusion."
        ),
        output: tr("Red-team notes and a revised confidence level.", "红队记录与修正后的置信水平。", "Notes de red team et niveau de confiance révisé."),
        minutes: 40,
        tools: ["Peer review", "Sensitivity analysis", "Segment cuts"]
      },
      {
        id: "decide",
        title: tr("Decide and monitor", "决策与监控", "Décider et monitorer"),
        action: tr(
          "Recommend a decision, state what would change your mind, and define leading indicators.",
          "给出决策建议，说明什么会改变你的判断，并定义领先指标。",
          "Recommander une décision, dire ce qui changerait votre avis et définir des indicateurs avancés."
        ),
        output: tr("Decision brief, dashboard and monitoring owner.", "决策简报、看板与监控负责人。", "Brief de décision, dashboard et owner du monitoring."),
        minutes: 30,
        tools: ["Dashboard", "Decision log", "Alert rules"]
      }
    ]
  },
  product: {
    label: tr("Product discovery-to-learning loop", "产品发现与学习闭环", "Boucle découverte-apprentissage produit"),
    summary: tr(
      "Reduce uncertainty about users and value before committing the organization to a build.",
      "在组织投入建设前，先降低关于用户与价值的最大不确定性。",
      "Réduire l'incertitude sur les utilisateurs et la valeur avant d'engager l'organisation."
    ),
    collaborators: tr("Design, engineering, data, go-to-market", "设计、工程、数据、市场", "Design, ingénierie, data, go-to-market"),
    scenario: {
      title: tr("Activation drops for new teams", "新团队激活率下降", "Baisse d'activation des nouvelles équipes"),
      brief: tr(
        "A new onboarding flow increased sign-ups but reduced week-one activation for newly created teams.",
        "新的引导流程提高了注册量，却降低了新建团队的首周激活率。",
        "Un nouvel onboarding augmente les inscriptions mais réduit l'activation à J7 des nouvelles équipes."
      ),
      stakeholder: tr("Growth, design, customer success", "增长、设计、客户成功", "Growth, design, customer success"),
      success: tr("Lift activation by 5 points without increasing support load", "激活率提升 5 个百分点且不增加客服负担", "Gagner 5 points d'activation sans augmenter la charge support"),
      risk: tr("Optimizing completion instead of meaningful use", "优化了流程完成率，而非真正使用", "Optimiser la complétion plutôt que l'usage réel")
    },
    stages: [
      {
        id: "discover",
        title: tr("Discover the job", "发现真实任务", "Découvrir le vrai besoin"),
        action: tr(
          "Talk to recent users and rejecters, observe the current workaround and separate stated requests from needs.",
          "访谈新用户与流失用户，观察现有替代方案，并区分用户说的请求与真实需求。",
          "Parler aux utilisateurs récents et aux rejets, observer le contournement actuel et séparer demandes et besoins."
        ),
        output: tr("Interview notes and an opportunity map.", "访谈记录与机会地图。", "Notes d'entretien et carte d'opportunités."),
        minutes: 35,
        tools: ["Interview guide", "Journey map", "Session replay"]
      },
      {
        id: "evidence",
        title: tr("Synthesize evidence", "整合证据", "Synthétiser les preuves"),
        action: tr(
          "Triangulate qualitative and quantitative signals, size the segment and define the behavior to change.",
          "三角验证定性定量信号，评估人群规模，并定义要改变的行为。",
          "Recouper signaux qualitatifs et quantitatifs, dimensionner le segment et définir le comportement cible."
        ),
        output: tr("Opportunity brief with segment and baseline.", "包含人群与基线的机会简报。", "Brief d'opportunité avec segment et baseline."),
        minutes: 40,
        tools: ["Funnel", "Cohorts", "Opportunity tree"]
      },
      {
        id: "prototype",
        title: tr("Prototype and prioritize", "原型与优先级", "Prototyper et prioriser"),
        action: tr(
          "Prototype the smallest learning artifact, test it, and explicitly choose what to cut.",
          "制作最小的学习原型，进行测试，并明确选择要砍掉什么。",
          "Prototyper le plus petit artefact d'apprentissage, le tester et choisir explicitement ce qu'il faut couper."
        ),
        output: tr("Prototype, test notes and priority rationale.", "原型、测试记录与优先级理由。", "Prototype, notes de test et justification de priorité."),
        minutes: 60,
        tools: ["Figma", "Concept test", "RICE / opportunity score"]
      },
      {
        id: "spec",
        title: tr("Spec and align", "规格与对齐", "Spécifier et aligner"),
        action: tr(
          "Write the decision, scope, dependencies, instrumentation and staged rollout; resolve objections in writing.",
          "写清决策、范围、依赖、埋点与分阶段发布，并通过书面方式解决异议。",
          "Écrire décision, périmètre, dépendances, instrumentation et rollout ; résoudre les objections par écrit."
        ),
        output: tr("PRD, launch plan and decision log.", "PRD、发布方案与决策记录。", "PRD, plan de lancement et journal de décision."),
        minutes: 50,
        tools: ["PRD", "Dependency map", "Experiment plan"]
      },
      {
        id: "learn",
        title: tr("Launch and learn", "发布与学习", "Lancer et apprendre"),
        action: tr(
          "Stage the launch, watch adoption and harm signals, and decide whether to scale, iterate or stop.",
          "分阶段发布，观察采用与伤害信号，并决定扩展、迭代或停止。",
          "Déployer par étapes, surveiller adoption et signaux négatifs, puis décider d'étendre, itérer ou arrêter."
        ),
        output: tr("Launch review and next-bet recommendation.", "发布复盘与下一项下注建议。", "Revue de lancement et recommandation suivante."),
        minutes: 40,
        tools: ["A/B test", "Adoption dashboard", "Postmortem"]
      }
    ]
  },
  hardware: {
    label: tr("Hardware concept-to-production loop", "硬件概念到量产闭环", "Boucle concept-production matériel"),
    summary: tr(
      "Prove a physical design against power, thermal, reliability and manufacturing constraints before volume.",
      "在量产前证明物理设计能同时满足功耗、散热、可靠性与制造约束。",
      "Prouver un design physique face aux contraintes de puissance, thermique, fiabilité et fabrication avant le volume."
    ),
    collaborators: tr("EE, mechanical, software, operations, quality", "电子、结构、软件、运营、质量", "EE, mécanique, logiciel, opérations, qualité"),
    scenario: {
      title: tr("Thermal throttle only in hot climates", "仅高温地区出现热降频", "Throttling thermique en climat chaud"),
      brief: tr(
        "A device passes lab tests but throttles in hot climates, six weeks before launch.",
        "设备通过实验室测试，却在炎热气候下降频，距离发布只剩六周。",
        "Un appareil passe les tests labo mais throttle en climat chaud, six semaines avant le lancement."
      ),
      stakeholder: tr("Hardware, software, quality, supply chain", "硬件、软件、质量、供应链", "Matériel, logiciel, qualité, supply chain"),
      success: tr("Sustained performance within 8% of baseline after 30 minutes at 40°C", "40°C 运行 30 分钟后，持续性能保持在基线 8% 以内", "Performance soutenue à 8 % de la base après 30 min à 40 °C"),
      risk: tr("Solving thermals by damaging battery life or durability", "以牺牲电池寿命或耐久性为代价解决散热", "Résoudre le thermique en dégradant batterie ou durabilité")
    },
    stages: [
      {
        id: "requirements",
        title: tr("Requirements and budgets", "需求与预算", "Exigences et budgets"),
        action: tr(
          "Translate product goals into power, thermal, area, reliability and schedule budgets; define pass/fail.",
          "把产品目标转化为功耗、散热、面积、可靠性与进度预算，并定义通过标准。",
          "Traduire les objectifs produit en budgets puissance, thermique, surface, fiabilité et calendrier."
        ),
        output: tr("Requirement spec and risk register.", "需求规格与风险登记表。", "Spécification et registre des risques."),
        minutes: 40,
        tools: ["Requirement matrix", "FMEA", "Test plan"]
      },
      {
        id: "architecture",
        title: tr("Architecture and trade-offs", "架构与权衡", "Architecture et compromis"),
        action: tr(
          "Define blocks and interfaces, allocate budgets, and identify the physical test that could falsify the concept.",
          "定义模块与接口，分配预算，并找出能证伪概念的关键物理测试。",
          "Définir blocs et interfaces, allouer les budgets et identifier le test physique capable de falsifier le concept."
        ),
        output: tr("Architecture review and validation plan.", "架构评审与验证方案。", "Revue d'architecture et plan de validation."),
        minutes: 60,
        tools: ["Block diagram", "Budget sheet", "Simulation"]
      },
      {
        id: "design",
        title: tr("Design and review", "设计与评审", "Conception et revue"),
        action: tr(
          "Implement or verify the design, run cross-functional reviews and keep every change traceable.",
          "实现或验证设计，进行跨职能评审，并保持所有变更可追溯。",
          "Implémenter ou vérifier le design, mener des revues transversales et tracer chaque changement."
        ),
        output: tr("Design package, review actions and change log.", "设计包、评审行动项与变更记录。", "Package design, actions de revue et journal de changement."),
        minutes: 90,
        tools: ["EDA / CAD", "Design review", "Change control"]
      },
      {
        id: "bringup",
        title: tr("Verify and bring up", "验证与回片", "Vérifier et bring-up"),
        action: tr(
          "Run simulation, corner cases and real-device bring-up; isolate design, manufacturing and environment effects.",
          "执行仿真、边界条件与真实设备回片，隔离设计、制造与环境因素。",
          "Lancer simulation, cas limites et bring-up réel ; isoler design, fabrication et environnement."
        ),
        output: tr("Verification report and bring-up debug log.", "验证报告与回片调试记录。", "Rapport de vérification et journal de debug."),
        minutes: 120,
        tools: ["Oscilloscope", "Thermal chamber", "ATE"]
      },
      {
        id: "qualify",
        title: tr("Qualify and transfer", "认证与转产", "Qualifier et transférer"),
        action: tr(
          "Complete reliability, yield and field-readiness checks, then hand off with open risks explicit.",
          "完成可靠性、良率与现场准备检查，并在明确剩余风险后移交。",
          "Finaliser fiabilité, rendement et readiness terrain, puis transférer avec risques explicites."
        ),
        output: tr("Qualification report, manufacturing checklist and field plan.", "认证报告、制造检查表与现场计划。", "Rapport de qualification, checklist et plan terrain."),
        minutes: 60,
        tools: ["Reliability test", "Yield review", "Manufacturing checklist"]
      }
    ]
  },
  ops: {
    label: tr("Program launch and operating loop", "项目发布与运营闭环", "Boucle lancement et opérations"),
    summary: tr(
      "Make complex delivery visible, decide under incomplete information and leave behind an operating mechanism.",
      "让复杂交付可见，在信息不完整时做出决策，并留下可持续运作的机制。",
      "Rendre la delivery visible, décider avec une information incomplète et laisser un mécanisme opérationnel."
    ),
    collaborators: tr("Owners, engineering, business, support, leadership", "各负责人、工程、业务、客服、管理层", "Owners, ingénierie, business, support, direction"),
    scenario: {
      title: tr("Two dependencies late before launch", "发布前两个依赖延期", "Deux dépendances en retard"),
      brief: tr(
        "A global launch has two late dependencies and the team wants to remove load testing.",
        "一次全球发布有两个依赖延期，而团队希望取消压测。",
        "Un lancement mondial a deux dépendances en retard et l'équipe veut supprimer le load test."
      ),
      stakeholder: tr("Engineering, business, support, regional leads", "工程、业务、客服、区域负责人", "Ingénierie, business, support, responsables régionaux"),
      success: tr("A defensible go/no-go with explicit residual risk and rollback", "形成可辩护的发布/不发布决策，并明确剩余风险与回滚", "Un go/no-go défendable avec risque résiduel et rollback"),
      risk: tr("Heroic optimism masking a systemic readiness gap", "英雄式乐观掩盖系统性准备不足", "Un optimisme héroïque masquant un déficit systémique")
    },
    stages: [
      {
        id: "mandate",
        title: tr("Mandate and stakeholders", "任务授权与利益相关者", "Mandat et parties prenantes"),
        action: tr(
          "Clarify the outcome, decision rights, customer impact and constraints; make the sponsor explicit.",
          "澄清目标、决策权、客户影响与约束，并明确项目发起人。",
          "Clarifier résultat, droits de décision, impact client et contraintes ; expliciter le sponsor."
        ),
        output: tr("Program charter and stakeholder map.", "项目章程与利益相关者地图。", "Charte programme et cartographie des parties prenantes."),
        minutes: 25,
        tools: ["RACI", "Charter", "Stakeholder map"]
      },
      {
        id: "dependencies",
        title: tr("Map dependencies and risk", "梳理依赖与风险", "Cartographier dépendances et risques"),
        action: tr(
          "Find the critical path, name owners and define escalation thresholds before they become surprises.",
          "找出关键路径，明确负责人，并在问题变成意外前定义升级阈值。",
          "Trouver le chemin critique, nommer les owners et définir les seuils d'escalade."
        ),
        output: tr("Dependency graph, risk register and escalation rules.", "依赖图、风险登记表与升级规则。", "Graphe de dépendances, registre des risques et règles d'escalade."),
        minutes: 40,
        tools: ["Critical path", "Risk register", "RACI"]
      },
      {
        id: "plan",
        title: tr("Build the delivery cadence", "建立交付节奏", "Construire la cadence"),
        action: tr(
          "Set milestones, operating reviews, communication and realistic buffers; define what evidence closes each gate.",
          "设置里程碑、运营评审、沟通与合理缓冲，并定义每个门槛需要什么证据。",
          "Fixer jalons, revues, communication et buffers ; définir la preuve qui ferme chaque porte."
        ),
        output: tr("Integrated plan, decision calendar and comms map.", "集成计划、决策日历与沟通地图。", "Plan intégré, calendrier de décision et carte de communication."),
        minutes: 45,
        tools: ["Milestone plan", "Decision log", "Comms plan"]
      },
      {
        id: "readiness",
        title: tr("Test launch readiness", "检验发布准备", "Tester la readiness"),
        action: tr(
          "Review evidence, dependencies, rollback and residual risk; give decision-makers options, not optimism.",
          "审查证据、依赖、回滚与剩余风险；向决策者提供选项，而不是乐观情绪。",
          "Examiner preuves, dépendances, rollback et risque résiduel ; offrir des options, pas de l'optimisme."
        ),
        output: tr("Readiness review and go/no-go record.", "发布准备评审与 go/no-go 记录。", "Revue de readiness et décision go/no-go."),
        minutes: 60,
        tools: ["Readiness checklist", "Risk matrix", "Rollback test"]
      },
      {
        id: "operate",
        title: tr("Operate and learn", "运营与复盘", "Opérer et apprendre"),
        action: tr(
          "Run the launch room, monitor signals, resolve incidents and close the loop with a blameless retro.",
          "运行发布指挥室，监控信号，处理事故，并以无责复盘完成闭环。",
          "Piloter la salle de lancement, surveiller les signaux, gérer les incidents et clore par une rétro sans blâme."
        ),
        output: tr("Operating dashboard, incident notes and retro actions.", "运营看板、事故记录与复盘行动。", "Dashboard, notes d'incident et actions de rétro."),
        minutes: 45,
        tools: ["Launch room", "Incident log", "Retro"]
      }
    ]
  }
};

export const getWorkflowTrack = (trackId) =>
  WORKFLOW_TRACKS[trackId] || WORKFLOW_TRACKS.engineering;

export const DECISION_NODES = [
  {
    id: "pressure",
    stageIndex: 0,
    prompt: tr(
      "The deadline is close. A shortcut could protect the date, but it hides a key risk. What do you do?",
      "截止日期已经逼近。一个捷径能保住时间，但会掩盖关键风险。你会怎么做？",
      "La date approche. Un raccourci protège le calendrier mais cache un risque clé. Que faites-vous ?"
    ),
    options: [
      {
        id: "speed",
        label: tr("Take the shortcut and monitor later", "先走捷径，之后再补监控", "Prendre le raccourci et monitorer plus tard"),
        outcome: tr(
          "You protect the date, but the failure mode becomes harder to see. The next decision starts with more risk.",
          "你保住了时间，但失败模式变得更难看见，下一项决策的风险更高。",
          "Vous protégez la date, mais le mode de défaillance devient moins visible. La décision suivante commence avec plus de risque."
        ),
        riskDelta: 18,
        xp: 10,
        lesson: tr("Speed without observability borrows risk from the future.", "没有可观测性的速度，是在向未来借风险。", "La vitesse sans observabilité emprunte du risque au futur.")
      },
      {
        id: "scope",
        label: tr("Cut scope and keep the guardrail", "缩小范围，保留护栏", "Réduire le périmètre et garder le garde-fou"),
        outcome: tr(
          "You deliver less, but the core path remains observable and reversible. The team can make the next call with evidence.",
          "你少交付了一部分，但核心路径仍可观测、可回滚，团队能用证据做下一步决策。",
          "Vous livrez moins, mais le chemin critique reste observable et réversible. L'équipe peut décider avec des preuves."
        ),
        riskDelta: -8,
        xp: 28,
        lesson: tr("Scope is a risk-control tool, not a failure.", "缩小范围是一种风险控制手段，不是失败。", "Réduire le périmètre est un outil de contrôle du risque.")
      },
      {
        id: "escalate",
        label: tr("Escalate the trade-off with evidence", "带着证据升级权衡", "Escalader le compromis avec des preuves"),
        outcome: tr(
          "The decision moves to the right owner with options and residual risk stated. You preserve trust, though not total control.",
          "决策被交给正确的负责人，并明确选项与剩余风险。你守住了信任，但不是全部控制权。",
          "La décision revient au bon owner avec options et risque résiduel. Vous préservez la confiance, pas tout le contrôle."
        ),
        riskDelta: -12,
        xp: 20,
        lesson: tr("Escalation is useful when it hands over a clear decision, not a panic.", "升级的价值在于交出一个清晰决策，而不是传递恐慌。", "Une escalade utile transmet une décision claire, pas la panique.")
      }
    ]
  },
  {
    id: "contradiction",
    stageIndex: 3,
    prompt: tr(
      "The headline metric is green, but a high-severity customer slice is getting worse. What do you do next?",
      "主指标看起来很好，但一个高风险客户切片正在恶化。你接下来怎么做？",
      "La métrique principale est au vert, mais un segment client critique se dégrade. Que faites-vous ?"
    ),
    options: [
      {
        id: "headline",
        label: tr("Trust the headline metric and keep moving", "相信主指标，继续推进", "Faire confiance à la métrique principale"),
        outcome: tr(
          "The average looks healthy, but the severe failure remains latent. You have optimized the story, not the system.",
          "平均值看起来健康，但严重失败仍然潜伏。你优化了叙事，而不是系统。",
          "La moyenne paraît saine, mais l'échec sévère reste latent. Vous avez optimisé le récit, pas le système."
        ),
        riskDelta: 16,
        xp: 8,
        lesson: tr("An average can hide the segment that decides trust.", "平均值可能隐藏真正决定信任的那个切片。", "Une moyenne peut cacher le segment qui décide de la confiance.")
      },
      {
        id: "slice",
        label: tr("Inspect the high-severity slice first", "先检查高风险切片", "Inspecter d'abord le segment critique"),
        outcome: tr(
          "You find that the failure is concentrated and reproducible. The wider rollout pauses while the team fixes the real risk.",
          "你发现失败集中在特定条件且可复现。团队暂停扩量，转而修复真实风险。",
          "Vous découvrez un échec concentré et reproductible. Le déploiement large s'arrête pendant que l'équipe corrige le vrai risque."
        ),
        riskDelta: -10,
        xp: 30,
        lesson: tr("Segment the harm before defending the average.", "在为平均值辩护之前，先拆解伤害。", "Segmenter le dommage avant de défendre la moyenne.")
      },
      {
        id: "wait",
        label: tr("Wait for more data without a decision rule", "等更多数据，但没有决策规则", "Attendre plus de données sans règle de décision"),
        outcome: tr(
          "The team keeps collecting evidence without agreeing on what would stop the rollout. Time passes; the risk does not.",
          "团队持续收集证据，却没有约定什么情况下停止扩展。时间过去了，风险没有。",
          "L'équipe collecte sans définir ce qui arrêterait le déploiement. Le temps passe ; pas le risque."
        ),
        riskDelta: 7,
        xp: 12,
        lesson: tr("Waiting is a decision too; define its exit condition.", "等待本身也是决策，也要定义退出条件。", "Attendre est aussi une décision : définissez sa condition de sortie.")
      }
    ]
  },
  {
    id: "launch",
    stageIndex: 4,
    prompt: tr(
      "You can launch now with a known residual risk, or stage the release and delay part of the upside. What do you choose?",
      "现在可以带着已知剩余风险发布，也可以分阶段发布并延后一部分收益。你怎么选？",
      "Vous pouvez lancer avec un risque résiduel connu, ou déployer par étapes en retardant une partie du gain. Que choisissez-vous ?"
    ),
    options: [
      {
        id: "full",
        label: tr("Launch fully and react if needed", "全面发布，出问题再反应", "Lancer partout et réagir si nécessaire"),
        outcome: tr(
          "The upside arrives immediately, but the blast radius is now the whole market. Recovery becomes a major incident.",
          "收益立即兑现，但影响面变成整个市场，恢复也将升级为重大事故。",
          "Le gain arrive immédiatement, mais le blast radius devient tout le marché. La reprise devient un incident majeur."
        ),
        riskDelta: 22,
        xp: 6,
        lesson: tr("A reversible launch is usually cheaper than a heroic recovery.", "可回滚的发布通常比英雄式恢复更便宜。", "Un lancement réversible coûte généralement moins qu'une reprise héroïque.")
      },
      {
        id: "canary",
        label: tr("Stage the release with a rollback gate", "分阶段发布并设置回滚门槛", "Déployer par étapes avec porte de rollback"),
        outcome: tr(
          "A smaller population absorbs the uncertainty. You catch the edge case before it becomes the headline.",
          "更小的人群先承受不确定性，你在边缘问题变成头条前发现了它。",
          "Une population plus petite absorbe l'incertitude. Vous trouvez le cas limite avant qu'il devienne le titre."
        ),
        riskDelta: -9,
        xp: 30,
        lesson: tr("Exposure should increase only after evidence does.", "只有证据增加后，暴露面才应该增加。", "L'exposition ne doit augmenter qu'après les preuves.")
      },
      {
        id: "block",
        label: tr("Block launch until the risk is eliminated", "在风险完全消除前阻止发布", "Bloquer jusqu'à élimination du risque"),
        outcome: tr(
          "You avoid the known harm but also block learning and delay value. The team still needs a decision rule for what is good enough.",
          "你避免了已知伤害，却也阻止了学习和价值兑现。团队仍然需要一个“足够好”的决策规则。",
          "Vous évitez le dommage connu mais bloquez l'apprentissage et la valeur. Il faut encore définir ce qui est suffisamment bon."
        ),
        riskDelta: -14,
        xp: 15,
        lesson: tr("Zero risk is not a strategy; explicit residual risk is.", "零风险不是策略，明确剩余风险才是。", "Le risque zéro n'est pas une stratégie ; le risque résiduel explicite oui.")
      }
    ]
  }
];
