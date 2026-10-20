import { JA_PROMPTS } from "./data-prompts-ja.js";

const tr = (en, zh, fr, ja) => ({ en, zh, fr, ja: ja || en });

export const PROMPT_CATEGORIES = [
  { id: "behavioral", label: tr("Behavioral", "行为面试", "Comportemental", "行動面接") },
  { id: "technical", label: tr("Technical", "技术面试", "Technique", "技術面接") },
  { id: "system", label: tr("System / case", "系统与案例", "Système / cas", "システム・ケース") }
];

export const PROMPTS = [
  {
    id: "b-amazon-incomplete",
    category: "behavioral",
    track: "behavioral",
    companies: ["amazon", "microsoft", "huawei", "meituan"],
    difficulty: "core",
    minutes: 4,
    title: tr("Decision with incomplete data", "信息不完整时的决策", "Décider avec des données incomplètes"),
    prompt: tr(
      "Tell me about a decision you had to make with incomplete data. What did you decide, and what evidence changed your confidence?",
      "请讲一次你在数据不完整时不得不做决策的经历。你做了什么决定？哪些证据改变了你的信心？",
      "Racontez une décision prise avec des données incomplètes. Qu'avez-vous décidé et quelle preuve a changé votre confiance ?"
    ),
    context: tr(
      "The interviewer is testing judgment under uncertainty, not whether you can wait for perfect information.",
      "面试官在考察不确定性下的判断，而不是你能否等到完美信息。",
      "L'interviewer teste le jugement dans l'incertitude, pas votre capacité à attendre une information parfaite."
    ),
    probe: tr(
      "What was the cost of being wrong? Which signal would have made you reverse the decision?",
      "判断错误的代价是什么？哪个信号会让你反转决定？",
      "Quel était le coût d'une erreur ? Quel signal vous aurait fait changer d'avis ?"
    ),
    framework: tr(
      "Name the missing data → state the reversible/irreversible stakes → explain the decision rule → give the result → say what signal would have reversed you.",
      "说明缺失数据 → 判断可逆/不可逆风险 → 解释决策规则 → 给出结果 → 说出什么信号会让你反转。",
      "Données manquantes → enjeu réversible/irréversible → règle de décision → résultat → signal qui aurait renversé la décision."
    ),
    sourceIds: ["amazonLP", "techInterviewHandbook"]
  },
  {
    id: "b-google-influence",
    category: "behavioral",
    track: "behavioral",
    companies: ["google", "microsoft", "alibaba", "hkex", "mtr"],
    difficulty: "core",
    minutes: 4,
    title: tr("Influence without authority", "无职权影响", "Influencer sans autorité"),
    prompt: tr(
      "Describe a time you changed a team's direction without formal authority. What resistance did you encounter, and what made the argument land?",
      "描述一次你没有正式职权却改变了团队方向的经历。你遇到什么阻力？论证为什么最终被接受？",
      "Décrivez une fois où vous avez changé la direction d'une équipe sans autorité formelle. Quelle résistance et pourquoi l'argument a-t-il convaincu ?"
    ),
    context: tr(
      "Strong answers separate persuasion from escalation and show how trust was built before the decision.",
      "强答案会区分说服与升级，并说明决策前如何建立信任。",
      "Une bonne réponse distingue persuasion et escalade, et montre comment la confiance a été construite."
    ),
    probe: tr(
      "Who disagreed most strongly, and what did you learn from their objection?",
      "谁最强烈反对？你从对方的异议中学到了什么？",
      "Qui était le plus en désaccord et qu'avez-vous appris de son objection ?"
    ),
    framework: tr(
      "Stakeholder map → initial position → evidence or prototype → concession/iteration → decision → adoption metric.",
      "利益相关者地图 → 初始立场 → 证据或原型 → 让步/迭代 → 决策 → 采用指标。",
      "Cartographie → position initiale → preuve/prototype → concession/itération → décision → adoption."
    ),
    sourceIds: ["googleCareers", "microsoftCareers", "techInterviewHandbook"]
  },
  {
    id: "b-meta-speed",
    category: "behavioral",
    track: "behavioral",
    companies: ["meta", "bytedance", "jd", "xiaomi"],
    difficulty: "core",
    minutes: 4,
    title: tr("Speed versus correctness", "速度与正确性", "Vitesse et correction"),
    prompt: tr(
      "Tell me about a time you moved fast and later had to correct course. How did you detect the problem and contain the damage?",
      "讲一次你快速推进、后来不得不纠正方向的经历。你如何发现问题并控制损失？",
      "Racontez une fois où vous avez avancé vite puis dû corriger. Comment avez-vous détecté le problème et limité les dégâts ?"
    ),
    context: tr(
      "The interviewer wants a real error story with detection, ownership and a change in process — not a disguised success.",
      "面试官想要一个真实的失误故事，包含发现、担责与流程改变，而不是伪装的成功。",
      "L'interviewer veut une vraie erreur avec détection, responsabilité et changement de processus."
    ),
    probe: tr(
      "What would you have done differently in the first hour?",
      "如果重来，你会在第一个小时做什么不同的事？",
      "Qu'auriez-vous fait différemment dans la première heure ?"
    ),
    framework: tr(
      "Speed thesis → hidden assumption → detection signal → containment → root cause → durable change.",
      "速度假设 → 隐藏假设 → 发现信号 → 控制损失 → 根因 → 持久改变。",
      "Thèse de vitesse → hypothèse cachée → signal → confinement → cause racine → changement durable."
    ),
    sourceIds: ["metaCareers", "bytedanceCareers", "techInterviewHandbook"]
  },
  {
    id: "b-netflix-stop",
    category: "behavioral",
    track: "behavioral",
    companies: ["netflix", "google", "openai", "netease", "cathay"],
    difficulty: "stretch",
    minutes: 4,
    title: tr("What to stop doing", "应该停止做什么", "Ce qu'il faut arrêter"),
    prompt: tr(
      "When priorities collide, how do you decide what to stop doing? Walk me through a specific trade-off you made and who absorbed the cost.",
      "当优先级冲突时，你如何决定停止做什么？请讲一个具体权衡，以及谁承担了代价。",
      "Quand les priorités entrent en conflit, comment décidez-vous ce qu'il faut arrêter ? Donnez un compromis précis et qui en a subi le coût."
    ),
    context: tr(
      "This tests prioritization maturity: whether you can disappoint a stakeholder deliberately rather than quietly under-deliver.",
      "这考察优先级成熟度：你是否能主动让某个利益相关者失望，而不是悄悄少交付。",
      "Cela teste la maturité de priorisation : décevoir volontairement plutôt que sous-livrer en silence."
    ),
    probe: tr(
      "What did you explicitly communicate would not happen, and when?",
      "你明确告知了什么不会发生？何时告知？",
      "Qu'avez-vous annoncé explicitement comme non réalisé, et quand ?"
    ),
    framework: tr(
      "Goal conflict → decision criteria → explicit stop list → stakeholder cost → result → review.",
      "目标冲突 → 决策标准 → 明确停止清单 → 利益相关者代价 → 结果 → 复盘。",
      "Conflit d'objectifs → critères → liste d'arrêt explicite → coût pour les parties → résultat → revue."
    ),
    sourceIds: ["netflixCulture", "glassdoor", "techInterviewHandbook"]
  },
  {
    id: "b-apple-quality",
    category: "behavioral",
    track: "behavioral",
    companies: ["apple", "nvidia", "dji", "huawei"],
    difficulty: "stretch",
    minutes: 4,
    title: tr("Protecting quality", "守住质量", "Protéger la qualité"),
    prompt: tr(
      "Tell me about a time you pushed back on a requirement to protect quality. What data did you bring, and how did you keep the relationship intact?",
      "讲一次你为了保护质量而反对某项需求的经历。你带来了什么数据？如何维持关系？",
      "Racontez une fois où vous avez contesté une exigence pour protéger la qualité. Quelles données et comment préserver la relation ?"
    ),
    context: tr(
      "The interviewer is testing craft, evidence and cross-functional judgment — not stubbornness.",
      "面试官在考察工艺、证据与跨职能判断，而不是固执。",
      "L'interviewer teste le craft, les preuves et le jugement transversal, pas l'entêtement."
    ),
    probe: tr(
      "If the launch date had been immovable, what would you have cut first?",
      "如果发布日期完全不可移动，你会先砍掉什么？",
      "Si la date était immuable, qu'auriez-vous réduit en premier ?"
    ),
    framework: tr(
      "Quality risk → user evidence → options presented → decision → residual risk → relationship outcome.",
      "质量风险 → 用户证据 → 提供的选项 → 决策 → 剩余风险 → 关系结果。",
      "Risque qualité → preuve utilisateur → options → décision → risque résiduel → relation."
    ),
    sourceIds: ["appleCareers", "nvidiaCareers", "glassdoor"]
  },
  {
    id: "b-microsoft-learn",
    category: "behavioral",
    track: "behavioral",
    companies: ["microsoft", "amazon", "baidu", "hangseng"],
    difficulty: "warmup",
    minutes: 3,
    title: tr("Learning a new domain", "进入新领域", "Apprendre un nouveau domaine"),
    prompt: tr(
      "Describe a time you had to become useful in a new domain under deadline. How did you decide what to learn first, and how did you validate your understanding?",
      "描述一次你必须在截止日期前快速进入新领域的经历。你如何决定先学什么？又如何验证理解？",
      "Décrivez une fois où vous avez dû devenir utile dans un nouveau domaine sous délai. Comment avez-vous choisi d'apprendre et validé votre compréhension ?"
    ),
    context: tr(
      "A good answer shows a learning strategy, not just a list of courses.",
      "好答案展示学习策略，而不只是课程清单。",
      "Une bonne réponse montre une stratégie d'apprentissage, pas une liste de cours."
    ),
    probe: tr(
      "What did you misunderstand first, and how did you discover it?",
      "你最初误解了什么？又是如何发现的？",
      "Qu'avez-vous mal compris d'abord et comment l'avez-vous découvert ?"
    ),
    framework: tr(
      "Knowledge gap → learning sequence → expert checks → first useful output → correction → transferable method.",
      "知识缺口 → 学习顺序 → 专家校验 → 首个有用产出 → 修正 → 可迁移方法。",
      "Lacune → séquence → vérification experte → premier résultat → correction → méthode transférable."
    ),
    sourceIds: ["microsoftCareers", "amazonLP"]
  },
  {
    id: "b-anthropic-disagree",
    category: "behavioral",
    track: "behavioral",
    companies: ["anthropic", "openai", "sensetime", "hkex"],
    difficulty: "stretch",
    minutes: 4,
    title: tr("Disagreement under uncertainty", "不确定性下的分歧", "Désaccord dans l'incertitude"),
    prompt: tr(
      "Tell me about a time you disagreed with a high-conviction decision. How did you separate values from evidence, and what would have changed your mind?",
      "讲一次你不同意一个高信心决策的经历。你如何区分价值观与证据？什么会改变你的观点？",
      "Racontez un désaccord avec une décision très assurée. Comment avez-vous séparé valeurs et preuves, et qu'est-ce qui aurait changé votre avis ?"
    ),
    context: tr(
      "The interviewer is probing epistemic honesty: can you hold a strong view without treating it as identity?",
      "面试官在考察认知诚实：你能否坚持强观点，却不把它等同于身份。",
      "L'interviewer teste l'honnêteté épistémique : tenir une opinion forte sans en faire une identité."
    ),
    probe: tr(
      "Did you eventually agree, agree to disagree, or escalate? Why was that the right move?",
      "最后你们达成一致、保留分歧还是升级？为什么那是正确动作？",
      "Avez-vous finalement accepté, maintenu le désaccord ou escaladé ? Pourquoi ?"
    ),
    framework: tr(
      "Decision and stakes → your uncertainty → evidence exchanged → what changed (or did not) → final action → later learning.",
      "决策与风险 → 你的不确定性 → 交换的证据 → 什么改变/未改变 → 最终行动 → 后续学习。",
      "Décision et enjeu → incertitude → preuves échangées → changement → action → apprentissage."
    ),
    sourceIds: ["anthropicCareers", "anthropicConstitution", "openaiCareers"]
  },
  {
    id: "b-bytedance-metrics",
    category: "behavioral",
    track: "behavioral",
    companies: ["bytedance", "meta", "alibaba", "meituan", "cathay"],
    difficulty: "core",
    minutes: 4,
    title: tr("Conflicting success metrics", "冲突的成功指标", "Métriques de succès contradictoires"),
    prompt: tr(
      "Two teams define success differently and both metrics are moving in opposite directions. Tell me how you diagnosed the conflict and what you recommended.",
      "两个团队对成功的定义不同，且两个指标朝相反方向变化。你如何诊断冲突？提出了什么建议？",
      "Deux équipes définissent le succès différemment et leurs métriques divergent. Comment avez-vous diagnostiqué le conflit et que avez-vous recommandé ?"
    ),
    context: tr(
      "This is a cross-functional judgment question disguised as analytics.",
      "这其实是伪装成分析题的跨职能判断题。",
      "C'est une question de jugement transversal déguisée en analyse."
    ),
    probe: tr(
      "Which metric did you decide was a proxy, and which was the actual goal?",
      "你判断哪个指标是代理指标？哪个才是真正目标？",
      "Quelle métrique était un proxy et laquelle était le vrai objectif ?"
    ),
    framework: tr(
      "Metric definitions → causal model → segment analysis → trade-off → stakeholder decision → guardrail.",
      "指标定义 → 因果模型 → 分群分析 → 权衡 → 利益相关者决策 → 护栏指标。",
      "Définitions → modèle causal → segmentation → compromis → décision → garde-fou."
    ),
    sourceIds: ["bytedanceCareers", "metaCareers", "glassdoor"]
  },
  {
    id: "t-meta-lru",
    category: "technical",
    track: "technical",
    companies: ["meta", "google", "amazon", "huawei", "hkex"],
    difficulty: "core",
    minutes: 8,
    title: tr("O(1) LRU cache", "O(1) LRU 缓存", "Cache LRU en O(1)"),
    prompt: tr(
      "Design a least-recently-used cache with get and put in O(1). Explain the data structures, the eviction invariant and the failure cases you would test.",
      "设计一个 get 与 put 均为 O(1) 的 LRU 缓存。说明数据结构、淘汰不变量与需要测试的失败场景。",
      "Concevez un cache LRU avec get et put en O(1). Expliquez structures, invariant d'éviction et cas de test."
    ),
    context: tr(
      "Publicly discussed interview pattern. The interviewer cares more about invariants and bug prevention than memorized code.",
      "公开讨论较多的面试题型。面试官更关心不变量与防错，而不是背诵代码。",
      "Schéma d'entretien public. L'interviewer s'intéresse aux invariants et à la prévention des bugs."
    ),
    probe: tr(
      "How would the design change for concurrent access?",
      "如果要求并发访问，设计会如何改变？",
      "Comment le design changerait-il avec accès concurrent ?"
    ),
    framework: tr(
      "Hash map + doubly linked list → invariant for recency → get/put cases → capacity/zero/duplicate tests → concurrency trade-off.",
      "哈希表 + 双向链表 → 最近使用不变量 → get/put 分支 → 容量/零值/重复测试 → 并发权衡。",
      "HashMap + liste doublement liée → invariant → cas get/put → tests capacité/zéro/doublon → compromis concurrence."
    ),
    sourceIds: ["leetcode", "interviewingIo", "techInterviewHandbook"]
  },
  {
    id: "t-amazon-vertical",
    category: "technical",
    track: "technical",
    companies: ["amazon", "google", "baidu", "xiaomi"],
    difficulty: "core",
    minutes: 8,
    title: tr("Vertical order traversal", "二叉树垂序遍历", "Parcours vertical d'un arbre"),
    prompt: tr(
      "Given a binary tree, return its vertical order traversal. Define how you order nodes that share the same column and discuss time, space and edge cases.",
      "给定二叉树，返回垂序遍历。说明同列节点的排序规则，并讨论时间、空间复杂度与边界条件。",
      "Pour un arbre binaire, retournez le parcours vertical. Définissez l'ordre des nœuds d'une même colonne et discutez complexité et cas limites."
    ),
    context: tr(
      "A commonly shared pattern. Clarify whether node row and value determine tie-breaking before you code.",
      "常见公开题型。编码前先明确同列节点是按行还是按值排序。",
      "Schéma courant. Clarifiez l'ordre des nœuds d'une colonne avant de coder."
    ),
    probe: tr(
      "What changes if the tree is extremely unbalanced?",
      "如果树极度不平衡，会有什么变化？",
      "Que change un arbre extrêmement déséquilibré ?"
    ),
    framework: tr(
      "Clarify tie-break → BFS with column index → ordered container → complexity → imbalance/null tests.",
      "明确排序 → 带列索引 BFS → 有序容器 → 复杂度 → 不平衡/空树测试。",
      "Clarifier l'ordre → BFS avec colonne → conteneur ordonné → complexité → tests."
    ),
    sourceIds: ["leetcode", "interviewingIo"]
  },
  {
    id: "t-nvidia-cuda",
    category: "technical",
    track: "technical",
    companies: ["nvidia", "huawei", "dji"],
    difficulty: "stretch",
    minutes: 10,
    title: tr("Memory-bound CUDA kernel", "受内存带宽限制的 CUDA 内核", "Noyau CUDA limité par la mémoire"),
    prompt: tr(
      "A CUDA kernel is limited by memory bandwidth. How would you profile it, and which changes would you try first? Explain coalescing, occupancy and arithmetic intensity.",
      "一个 CUDA 内核受内存带宽限制。你会如何做性能剖析？优先尝试哪些修改？解释合并访问、占用率与算术强度。",
      "Un noyau CUDA est limité par la bande passante mémoire. Comment le profiler et quelles optimisations essayer ? Expliquez coalescence, occupancy et intensité arithmétique."
    ),
    context: tr(
      "The interviewer wants measured reasoning and GPU fundamentals, not a list of flags.",
      "面试官想要有测量依据的推理与 GPU 基础，而不是参数清单。",
      "L'interviewer veut un raisonnement mesuré et des fondamentaux GPU, pas une liste de flags."
    ),
    probe: tr(
      "When could increasing occupancy make performance worse?",
      "什么情况下提高占用率反而会让性能变差？",
      "Quand augmenter l'occupancy peut-il dégrader les performances ?"
    ),
    framework: tr(
      "Measure with profiler → classify bottleneck → memory access pattern → occupancy/resource trade-offs → arithmetic intensity → validate with benchmark.",
      "用性能工具测量 → 判定瓶颈 → 内存访问模式 → 占用率/资源权衡 → 算术强度 → 用基准验证。",
      "Profiler → classifier le goulot → accès mémoire → compromis occupancy → intensité arithmétique → benchmark."
    ),
    sourceIds: ["cudaGuide", "nvidiaCareers"]
  },
  {
    id: "t-bytedance-topk",
    category: "technical",
    track: "technical",
    companies: ["bytedance", "amazon", "alibaba", "meituan", "jd"],
    difficulty: "stretch",
    minutes: 9,
    title: tr("Top-K in a log stream", "日志流中的 Top-K", "Top-K dans un flux de logs"),
    prompt: tr(
      "You receive billions of user-event records per day and need approximate top-K items by region in near real time. Design the algorithm and explain accuracy, memory and late-data trade-offs.",
      "每天收到数十亿条用户事件，需要近实时计算分区域近似 Top-K。设计算法并解释准确率、内存与迟到数据的权衡。",
      "Des milliards d'événements par jour ; calculez un top-K approximatif par région en quasi temps réel. Expliquez précision, mémoire et données tardives."
    ),
    context: tr(
      "This is a systems-plus-algorithms question; start with the decision the metric supports.",
      "这是系统加算法题；先说明该指标支持什么决策。",
      "Question systèmes + algorithmes ; commencez par la décision soutenue par la métrique."
    ),
    probe: tr(
      "How would you detect a sudden bot-driven spike?",
      "如何识别突发机器人流量导致的高峰？",
      "Comment détecter un pic soudain généré par des bots ?"
    ),
    framework: tr(
      "Stream partitioning → sketch/heavy hitter algorithm → windowing/watermarks → merge → accuracy budget → monitoring.",
      "流分区 → sketch/重击者算法 → 窗口/水位 → 合并 → 精度预算 → 监控。",
      "Partitionnement → sketch/heavy hitters → fenêtres/watermarks → fusion → budget de précision → monitoring."
    ),
    sourceIds: ["bytedanceCareers", "systemDesignPrimer"]
  },
  {
    id: "t-openai-eval",
    category: "technical",
    track: "technical",
    companies: ["openai", "anthropic", "baidu", "sensetime"],
    difficulty: "stretch",
    minutes: 10,
    title: tr("Agent evaluation harness", "智能体评估框架", "Harnais d'évaluation d'agent"),
    prompt: tr(
      "Design an evaluation harness for an agent that completes multi-step coding tasks. What is the unit of evaluation, how do you prevent contamination, and when would you trust the result?",
      "为一个完成多步编码任务的智能体设计评估框架。评估单元是什么？如何防止污染？什么情况下你会相信结果？",
      "Concevez un harnais d'évaluation pour un agent de codage multi-étapes. Quelle est l'unité, comment éviter la contamination et quand faire confiance au résultat ?"
    ),
    context: tr(
      "The interviewer is testing whether you treat evals as decision infrastructure rather than a leaderboard.",
      "面试官在检验你是否把评估当作决策基础设施，而非排行榜。",
      "L'interviewer teste si vous traitez l'évaluation comme une infrastructure de décision, pas un classement."
    ),
    probe: tr(
      "What would you measure if the final test passes but the agent used an unsafe shortcut?",
      "如果最终测试通过，但智能体使用了不安全捷径，你会测量什么？",
      "Que mesurer si le test final passe mais que l'agent a utilisé un raccourci dangereux ?"
    ),
    framework: tr(
      "Decision → task distribution → environment/tools → success rubric → contamination controls → reliability/uncertainty → cost.",
      "决策 → 任务分布 → 环境/工具 → 成功标准 → 防污染控制 → 可靠性/不确定性 → 成本。",
      "Décision → distribution → environnement/outils → rubrique → anti-contamination → fiabilité → coût."
    ),
    sourceIds: ["openaiCareers", "anthropicCareers", "anthropicConstitution"]
  },
  {
    id: "t-anthropic-refusal",
    category: "technical",
    track: "technical",
    companies: ["anthropic", "openai", "sensetime", "hkex"],
    difficulty: "stretch",
    minutes: 9,
    title: tr("Calibrated refusal", "校准拒答", "Refus calibré"),
    prompt: tr(
      "How would you measure whether a model's refusal behavior is calibrated? Define false-positive harm, false-negative harm and a decision rule for shipping a change.",
      "你会如何测量模型拒答行为是否校准？定义假阳性伤害、假阴性伤害，以及上线变更的决策规则。",
      "Comment mesurer si les refus d'un modèle sont calibrés ? Définissez les dommages faux positifs, faux négatifs et une règle de décision."
    ),
    context: tr(
      "A strong answer separates policy, capability and uncertainty, and avoids treating all refusals as equivalent.",
      "强答案会区分政策、能力与不确定性，并避免把所有拒答视为同一类。",
      "Une bonne réponse sépare politique, capacité et incertitude, sans traiter tous les refus comme équivalents."
    ),
    probe: tr(
      "Who should own the threshold when the harm distribution is contested?",
      "当伤害分布存在争议时，谁应拥有阈值决策权？",
      "Qui doit posséder le seuil lorsque la distribution des dommages est contestée ?"
    ),
    framework: tr(
      "Taxonomy → labeled sets → dual error metrics → subgroup analysis → threshold/decision owner → monitoring.",
      "分类体系 → 标注集 → 双误差指标 → 子群分析 → 阈值/决策负责人 → 监控。",
      "Taxonomie → jeux annotés → deux métriques d'erreur → sous-groupes → propriétaire du seuil → monitoring."
    ),
    sourceIds: ["anthropicConstitution", "anthropicCareers", "openaiCareers"]
  },
  {
    id: "t-tencent-frame",
    category: "technical",
    track: "technical",
    companies: ["tencent", "apple", "netease", "dji"],
    difficulty: "core",
    minutes: 8,
    title: tr("Frame budget regression", "帧预算回归", "Régression du budget de frame"),
    prompt: tr(
      "A mobile game renderer regressed from 8 ms to 14 ms per frame after an update. How would you isolate the cause without guessing?",
      "一次更新后，移动游戏渲染器从每帧 8ms 退化到 14ms。你会如何在不猜测的情况下定位原因？",
      "Un renderer mobile passe de 8 à 14 ms par frame après une mise à jour. Comment isoler la cause sans deviner ?"
    ),
    context: tr(
      "The interviewer cares about controlled experiments across GPU, CPU, memory and content changes.",
      "面试官关心跨 GPU、CPU、内存与内容变更的受控实验。",
      "L'interviewer s'intéresse aux expériences contrôlées GPU, CPU, mémoire et contenu."
    ),
    probe: tr(
      "What if the regression only appears on one device family?",
      "如果退化只出现在一个设备系列上，怎么办？",
      "Et si la régression n'apparaît que sur une famille d'appareils ?"
    ),
    framework: tr(
      "Reproduce → capture timeline → bisect assets/code/driver → isolate CPU/GPU → profile → fix → regression test.",
      "复现 → 抓取时间线 → 对资源/代码/驱动做二分 → 隔离 CPU/GPU → 剖析 → 修复 → 回归测试。",
      "Reproduire → timeline → bisect assets/code/driver → isoler CPU/GPU → profiler → corriger → test de régression."
    ),
    sourceIds: ["tencentCareers", "glassdoor"]
  },
  {
    id: "t-apple-cdc",
    category: "technical",
    track: "technical",
    companies: ["apple", "nvidia", "huawei", "dji"],
    difficulty: "stretch",
    minutes: 8,
    title: tr("Clock-domain crossing", "跨时钟域", "Traversée de domaines d'horloge"),
    prompt: tr(
      "Explain how you would safely transfer a multi-bit counter across clock domains. What can go wrong, and how would you verify the design?",
      "解释如何安全地把多比特计数器跨时钟域传递。可能出什么问题？你如何验证设计？",
      "Expliquez le transfert sûr d'un compteur multi-bits entre domaines d'horloge. Quels risques et comment vérifier ?"
    ),
    context: tr(
      "A hardware fundamentals question. State assumptions about clock relationship and data semantics first.",
      "硬件基础题。先说明时钟关系与数据语义的假设。",
      "Question fondamentale matériel. Énoncez d'abord les hypothèses d'horloge et de sémantique."
    ),
    probe: tr(
      "When is a handshake preferable to a gray-code FIFO?",
      "什么时候握手优于格雷码 FIFO？",
      "Quand un handshake est-il préférable à une FIFO en code Gray ?"
    ),
    framework: tr(
      "Clock relationship → data semantics → synchronization strategy → metastability/coherency → assertion/formal checks.",
      "时钟关系 → 数据语义 → 同步策略 → 亚稳态/一致性 → 断言/形式验证。",
      "Relation d'horloge → sémantique → synchronisation → métastabilité/cohérence → assertions/formel."
    ),
    sourceIds: ["appleCareers", "nvidiaCareers"]
  },
  {
    id: "s-google-url",
    category: "system",
    track: "system",
    companies: ["google", "microsoft", "amazon", "hkex"],
    difficulty: "core",
    minutes: 12,
    title: tr("Global URL shortener", "全球短链接服务", "Raccourcisseur d'URL mondial"),
    prompt: tr(
      "Design a global URL shortener. Cover key generation, read latency, abuse, analytics and what happens during a regional outage.",
      "设计一个全球短链接服务。覆盖 key 生成、读取延迟、滥用、分析与区域故障时的行为。",
      "Concevez un raccourcisseur d'URL mondial : génération de clés, latence, abus, analytics et panne régionale."
    ),
    context: tr(
      "A classic public system-design prompt. Differentiate yourself with failure, abuse and operational reasoning.",
      "经典公开系统设计题。用故障、滥用与运营推理拉开差距。",
      "Prompt classique. Différenciez-vous par les pannes, l'abus et les opérations."
    ),
    probe: tr(
      "What consistency guarantee does a newly created link actually need?",
      "新建链接真正需要什么一致性保证？",
      "Quelle garantie de cohérence un lien neuf exige-t-il réellement ?"
    ),
    framework: tr(
      "Requirements/scale → ID/key strategy → read path/cache → storage → abuse → analytics → multi-region failure.",
      "需求/规模 → ID/key 策略 → 读取路径/缓存 → 存储 → 滥用 → 分析 → 多区域故障。",
      "Exigences → clés → lecture/cache → stockage → abus → analytics → panne multi-région."
    ),
    sourceIds: ["systemDesignPrimer", "techInterviewHandbook"]
  },
  {
    id: "s-meta-presence",
    category: "system",
    track: "system",
    companies: ["meta", "microsoft", "meituan"],
    difficulty: "stretch",
    minutes: 12,
    title: tr("Real-time presence", "实时在线状态", "Présence en temps réel"),
    prompt: tr(
      "Design presence for a messaging product with hundreds of millions of users. How do you keep it fresh, cheap and correct during reconnects?",
      "为数亿用户的通讯产品设计在线状态。如何在重连期间保持新鲜、低成本且正确？",
      "Concevez la présence d'une messagerie à des centaines de millions d'utilisateurs : fraîcheur, coût et correction lors des reconnexions."
    ),
    context: tr(
      "The hard part is not a WebSocket; it is fan-out, staleness, fan-in and failure semantics.",
      "难点不是 WebSocket，而是扇出、过期、扇入与故障语义。",
      "Le difficile n'est pas WebSocket, mais fan-out, fraîcheur, fan-in et sémantique de panne."
    ),
    probe: tr(
      "What stale presence is acceptable to a user, and for how long?",
      "用户能接受多长时间的过期状态？",
      "Quelle présence obsolète est acceptable et pendant combien de temps ?"
    ),
    framework: tr(
      "Semantics → connection edge → presence store → pub/sub fan-out → heartbeat/debounce → reconnect/reconcile → failure.",
      "语义 → 连接边缘 → 状态存储 → 发布订阅扇出 → 心跳/防抖 → 重连/对账 → 故障。",
      "Sémantique → edge → stockage → pub/sub → heartbeat/debounce → reconnexion → panne."
    ),
    sourceIds: ["metaCareers", "systemDesignPrimer"]
  },
  {
    id: "s-openai-gateway",
    category: "system",
    track: "system",
    companies: ["openai", "anthropic", "microsoft", "baidu", "sensetime"],
    difficulty: "stretch",
    minutes: 13,
    title: tr("Multimodal API gateway", "多模态 API 网关", "Passerelle API multimodale"),
    prompt: tr(
      "Design an API gateway for multimodal model traffic with per-tenant budgets, streaming responses and graceful overload. What must be observable?",
      "设计一个支持多租户预算、流式响应与优雅过载的多模态模型 API 网关。必须可观测什么？",
      "Concevez une passerelle API multimodale avec budgets par tenant, réponses streaming et surcharge maîtrisée. Que doit-on observer ?"
    ),
    context: tr(
      "The interviewer is looking for queueing, fairness, token accounting and failure isolation rather than model architecture.",
      "面试官关注排队、公平性、token 计费与故障隔离，而非模型架构。",
      "L'interviewer cherche file d'attente, équité, comptabilité de tokens et isolation des pannes."
    ),
    probe: tr(
      "What happens when one tenant streams a long response and exceeds budget mid-stream?",
      "一个租户在流式输出中途超出预算时怎么办？",
      "Que se passe-t-il si un tenant dépasse son budget en cours de streaming ?"
    ),
    framework: tr(
      "Request classes → auth/quota → routing/queue → streaming lifecycle → token accounting → overload → observability.",
      "请求分类 → 鉴权/配额 → 路由/队列 → 流式生命周期 → token 计费 → 过载 → 可观测性。",
      "Classes de requête → auth/quota → routage/file → streaming → tokens → surcharge → observabilité."
    ),
    sourceIds: ["openaiCareers", "anthropicCareers", "systemDesignPrimer"]
  },
  {
    id: "s-netflix-coldstart",
    category: "system",
    track: "system",
    companies: ["netflix", "bytedance", "netease", "cathay"],
    difficulty: "core",
    minutes: 12,
    title: tr("Discovery cold start", "内容发现冷启动", "Cold start de découverte"),
    prompt: tr(
      "Design a content discovery experience for a new member with almost no viewing history. How would you measure whether it worked?",
      "为一个几乎没有观看历史的新会员设计内容发现体验。如何衡量是否有效？",
      "Concevez une découverte de contenus pour un nouvel abonné sans historique. Comment mesurer le succès ?"
    ),
    context: tr(
      "This is a product-system case. Balance data, exploration and the user's time.",
      "这是产品系统案例。平衡数据、探索与用户时间。",
      "Cas produit-système. Équilibrez données, exploration et temps utilisateur."
    ),
    probe: tr(
      "How do you avoid optimizing for clicks that lead to abandoned playback?",
      "如何避免优化了点击、却导致播放被放弃？",
      "Comment éviter d'optimiser des clics menant à un abandon de lecture ?"
    ),
    framework: tr(
      "User goal → available signals → candidate generation → exploration → ranking → success metric → long-term guardrail.",
      "用户目标 → 可用信号 → 候选生成 → 探索 → 排序 → 成功指标 → 长期护栏。",
      "Objectif utilisateur → signaux → génération → exploration → classement → métrique → garde-fou."
    ),
    sourceIds: ["netflixCulture", "systemDesignPrimer"]
  },
  {
    id: "s-alibaba-multiregion",
    category: "system",
    track: "system",
    companies: ["alibaba", "amazon", "google", "jd", "meituan"],
    difficulty: "stretch",
    minutes: 13,
    title: tr("Multi-region control plane", "多区域控制面", "Plan de contrôle multi-région"),
    prompt: tr(
      "Design a multi-region cloud control plane that can tolerate a region failure without making unsafe conflicting changes.",
      "设计一个多区域云控制面，能够承受区域故障，同时不产生不安全的冲突变更。",
      "Concevez un plan de contrôle cloud multi-région tolérant une panne sans changements contradictoires dangereux."
    ),
    context: tr(
      "The interviewer wants to see consistency boundaries, quorum, idempotency and recovery, not just replication.",
      "面试官想看一致性边界、quorum、幂等与恢复，而不是只说复制。",
      "L'interviewer veut frontières de cohérence, quorum, idempotence et reprise, pas seulement réplication."
    ),
    probe: tr(
      "Which operations must be globally serialized, and which can be region-local?",
      "哪些操作必须全局串行？哪些可以区域本地化？",
      "Quelles opérations doivent être globalement sérialisées et lesquelles peuvent être locales ?"
    ),
    framework: tr(
      "Control vs data plane → consistency classes → consensus/ownership → idempotency → failure detection → failover → reconciliation.",
      "控制面与数据面 → 一致性类别 → 共识/归属 → 幂等 → 故障检测 → 切换 → 对账。",
      "Plan contrôle/données → classes de cohérence → consensus → idempotence → détection → bascule → réconciliation."
    ),
    sourceIds: ["systemDesignPrimer", "alibabaCareers", "levels"]
  },
  {
    id: "s-amazon-launch",
    category: "system",
    track: "system",
    companies: ["amazon", "microsoft", "cathay", "mtr"],
    difficulty: "core",
    minutes: 8,
    title: tr("Launch readiness review", "发布准备评审", "Revue de préparation au lancement"),
    prompt: tr(
      "A major service launch is two weeks away, two dependencies are late and the team wants to remove load-testing. How do you run the readiness decision?",
      "一个重要服务两周后发布，两个依赖延期，团队想取消压测。你如何主持发布准备决策？",
      "Un lancement majeur est dans deux semaines, deux dépendances sont en retard et l'équipe veut supprimer le load test. Comment décidez-vous ?"
    ),
    context: tr(
      "A program-management scenario. The goal is a defensible decision with explicit residual risk, not heroic optimism.",
      "项目管理场景。目标是形成可辩护的决策并明确剩余风险，而不是英雄式乐观。",
      "Scénario programme. Objectif : décision défendable et risque résiduel explicite."
    ),
    probe: tr(
      "Who has the authority to accept the residual risk, and what would you document?",
      "谁有权接受剩余风险？你会记录什么？",
      "Qui peut accepter le risque résiduel et que documentez-vous ?"
    ),
    framework: tr(
      "Launch criteria → dependency criticality → test alternatives → risk owner → go/no-go/limited launch → rollback and comms.",
      "发布标准 → 依赖关键性 → 测试替代 → 风险负责人 → 发布/不发布/受限发布 → 回滚与沟通。",
      "Critères → criticité → alternatives → propriétaire du risque → go/no-go/limité → rollback et communication."
    ),
    sourceIds: ["amazonLP", "microsoftCareers", "techInterviewHandbook"]
  },
  {
    id: "s-apple-crisis",
    category: "system",
    track: "system",
    companies: ["apple", "nvidia", "huawei", "dji"],
    difficulty: "stretch",
    minutes: 9,
    title: tr("Quality crisis under secrecy", "保密下的质量危机", "Crise qualité sous confidentialité"),
    prompt: tr(
      "A pre-launch hardware issue is confirmed, but the root cause is not. How do you structure the first 24 hours while protecting confidentiality and the launch decision?",
      "发布前确认存在硬件问题，但根因未明。你如何在保护保密性与发布决策的同时安排最初 24 小时？",
      "Un problème matériel est confirmé avant lancement, sans cause racine. Comment structurer les 24 premières heures en protégeant confidentialité et décision ?"
    ),
    context: tr(
      "The interviewer is testing incident command, evidence discipline and controlled communication.",
      "面试官在考察事故指挥、证据纪律与受控沟通。",
      "L'interviewer teste commandement d'incident, discipline des preuves et communication contrôlée."
    ),
    probe: tr(
      "What is the smallest experiment that could distinguish design, manufacturing and use-case causes?",
      "哪个最小实验能区分设计、制造与使用场景原因？",
      "Quelle plus petite expérience distingue design, fabrication et usage ?"
    ),
    framework: tr(
      "Incident lead → impact scope → evidence log → parallel hypotheses → containment → comms ring → decision gate.",
      "事故负责人 → 影响范围 → 证据日志 → 并行假设 → 控制 → 沟通圈 → 决策门。",
      "Responsable → impact → journal → hypothèses → confinement → cercle de communication → décision."
    ),
    sourceIds: ["appleCareers", "glassdoor"]
  },
  {
    id: "s-anthropic-regression",
    category: "system",
    track: "system",
    companies: ["anthropic", "openai", "sensetime", "hkex"],
    difficulty: "stretch",
    minutes: 11,
    title: tr("Safety regression triage", "安全回归分诊", "Triage d'une régression de sûreté"),
    prompt: tr(
      "A customer reports that a model update is more compliant with harmful requests in one narrow domain. How do you triage, measure and decide whether to roll back?",
      "客户报告模型更新在某个狭窄领域对有害请求更顺从。你如何分诊、测量并决定是否回滚？",
      "Un client signale qu'une mise à jour est plus complaisante sur un domaine nuisible étroit. Comment trier, mesurer et décider un rollback ?"
    ),
    context: tr(
      "This combines incident response, evals and governance. Start by checking whether the report is real and reproducible.",
      "这结合事故响应、评估与治理。先确认报告是否真实且可复现。",
      "Combine réponse à incident, évaluations et gouvernance. Vérifiez d'abord la reproductibilité."
    ),
    probe: tr(
      "What evidence would justify a targeted policy change instead of a full rollback?",
      "什么证据能支持定向策略修改而不是全面回滚？",
      "Quelle preuve justifierait un changement ciblé plutôt qu'un rollback complet ?"
    ),
    framework: tr(
      "Reproduce → severity/blast radius → eval set → compare versions → mitigation options → decision owner → postmortem.",
      "复现 → 严重性/影响面 → 评估集 → 版本对比 → 缓解选项 → 决策负责人 → 复盘。",
      "Reproduire → gravité/portée → jeu d'éval → comparer → mitigations → décideur → postmortem."
    ),
    sourceIds: ["anthropicConstitution", "anthropicCareers", "openaiCareers"]
  },
  {
    id: "s-microsoft-migration",
    category: "system",
    track: "system",
    companies: ["microsoft", "alibaba", "hangseng", "mtr"],
    difficulty: "core",
    minutes: 10,
    title: tr("Enterprise migration plan", "企业迁移方案", "Plan de migration d'entreprise"),
    prompt: tr(
      "An enterprise customer must migrate a critical workload to your cloud in six months. Design the technical and organizational plan, including the rollback path.",
      "企业客户必须在六个月内把关键负载迁移到你的云。设计技术与组织方案，包括回滚路径。",
      "Un client entreprise doit migrer une charge critique vers votre cloud en six mois. Concevez le plan technique et organisationnel, avec rollback."
    ),
    context: tr(
      "A customer-facing architecture case. Show discovery, risk segmentation and adoption, not just a reference diagram.",
      "面向客户的架构案例。展示发现、风险分段与采用，而不只是参考架构图。",
      "Cas d'architecture client. Montrez découverte, segmentation du risque et adoption, pas seulement un schéma."
    ),
    probe: tr(
      "What workload would you migrate last, and why?",
      "哪类负载会最后迁移？为什么？",
      "Quelle charge migreriez-vous en dernier et pourquoi ?"
    ),
    framework: tr(
      "Business constraints → inventory/dependency map → risk tiers → pilot → landing zone → cutover → rollback/exit.",
      "业务约束 → 资产/依赖图 → 风险分层 → 试点 → 着陆区 → 切换 → 回滚/退出。",
      "Contraintes → inventaire/dépendances → niveaux de risque → pilote → landing zone → bascule → rollback."
    ),
    sourceIds: ["microsoftCareers", "systemDesignPrimer", "alibabaCareers"]
  }
];

export const getPrompt = (id) => PROMPTS.find((prompt) => prompt.id === id);

PROMPTS.push(...JA_PROMPTS);
