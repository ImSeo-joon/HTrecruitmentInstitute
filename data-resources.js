const tr = (en, zh, fr) => ({ en, zh, fr });

export const RESOURCE_CATEGORIES = [
  { id: "all", label: tr("All notes", "全部资料", "Toutes les notes") },
  { id: "pay", label: tr("Pay", "薪酬", "Rémunération") },
  { id: "process", label: tr("Process", "流程", "Processus") },
  { id: "rehearsal", label: tr("Rehearsal", "演练", "Entraînement") },
  { id: "markets", label: tr("Markets", "市场", "Marchés") }
];

export const RESOURCES = [
  {
    id: "pay-decoder",
    featured: true,
    type: "read",
    category: "pay",
    readTime: 8,
    updated: "2026-10",
    title: tr(
      "The pay architecture decoder",
      "薪酬结构解码器",
      "Décoder l'architecture de rémunération"
    ),
    summary: tr(
      "Base, bonus, equity, sign-on and refresh: how to compare offers without being seduced by a single headline number.",
      "基本工资、奖金、股权、签字费与年度刷新：如何比较 offer，而不被一个头条数字牵着走。",
      "Salaire, bonus, actions, prime de signature et refresh : comparer les offres sans se laisser séduire par un seul chiffre."
    ),
    sourceIds: ["levels", "glassdoor"],
    body: {
      en: `
        <h3>1. Four numbers, not one</h3>
        <p>A senior offer is usually a package, not a salary. Write down four lines before you compare anything: base, target bonus, annualized equity, and one-time cash. Then add the conditions attached to each line.</p>
        <table class="table-in-modal">
          <thead><tr><th>Component</th><th>What it means</th><th>Question to ask</th></tr></thead>
          <tbody>
            <tr><td>Base</td><td>Cash paid regardless of company performance.</td><td>Is this the posted band or an exception? When is the next review?</td></tr>
            <tr><td>Bonus</td><td>Usually target × company/personal multiplier.</td><td>What was the actual multiplier for the last two cycles?</td></tr>
            <tr><td>Equity</td><td>RSUs, options or a long-term incentive.</td><td>What is the grant value, vesting schedule and refresh policy?</td></tr>
            <tr><td>Sign-on</td><td>One-time cash or replacement equity.</td><td>Is it repayable? Does it replace first-year equity?</td></tr>
          </tbody>
        </table>
        <div class="callout"><strong>Normalize first.</strong> Convert currencies, separate one-time from recurring pay, and annualize equity over the correct vesting period before comparing an Amazon front-loaded grant with a Meta or Google package.</div>
        <h3>2. Equity is a scenario</h3>
        <p>For a public company, use a transparent reference price and state the assumption. For a private company, use a range: current grant value, a downside case and a plausible upside case. Do not treat paper value as cash.</p>
        <ul>
          <li>Ask for the number of units as well as the dollar value.</li>
          <li>Ask whether the value was calculated at the offer date or a trailing average.</li>
          <li>Ask whether annual refreshes are discretionary, formulaic or committee-led.</li>
          <li>Ask what happens on promotion, transfer or termination.</li>
        </ul>
        <h3>3. Level is the real price signal</h3>
        <p>Most large technology companies pay for scope, not personal negotiating theatre. A strong candidate at the wrong level can receive a great first-year number and still be under-leveled for the next four years. Compare the level's expected autonomy, decision rights and promotion clock, not just the first offer.</p>
        <h3>4. The questions that change the decision</h3>
        <ul>
          <li>What percentage of my total compensation is at risk?</li>
          <li>What does the median refresher look like for someone performing well?</li>
          <li>How has the company handled equity in the last two downturns?</li>
          <li>Is the bonus target realistic given the last two performance cycles?</li>
          <li>What trade am I making in time density and optionality?</li>
        </ul>
        <div class="callout"><strong>Editorial rule:</strong> a higher total-compensation number is not automatically a better offer. It may buy more on-call, less learning, a weaker manager or a shorter runway.</div>
      `,
      zh: `
        <h3>1. 看四个数字，而不是一个</h3>
        <p>高级岗位的 offer 通常是一个组合，而非单一工资。比较之前先写下四项：基本工资、目标奖金、年化股权与一次性现金。然后把每项附带的条件也写下来。</p>
        <table class="table-in-modal">
          <thead><tr><th>组成</th><th>含义</th><th>该问的问题</th></tr></thead>
          <tbody>
            <tr><td>基本工资</td><td>与公司业绩无关的现金。</td><td>处在公开带宽的什么位置？下一次调薪是什么时候？</td></tr>
            <tr><td>奖金</td><td>通常为目标值乘以公司/个人系数。</td><td>过去两个周期实际系数是多少？</td></tr>
            <tr><td>股权</td><td>RSU、期权或长期激励。</td><td>授予价值、归属节奏与年度刷新政策是什么？</td></tr>
            <tr><td>签字费</td><td>一次性现金或补偿未归属股权。</td><td>是否需要返还？是否替代首年股权？</td></tr>
          </tbody>
        </table>
        <div class="callout"><strong>先统一口径。</strong> 比较 Amazon 的前置归属、Meta 或 Google 的方案前，先换算币种、拆分一次性与经常性收入，并按正确归属期年化股权。</div>
        <h3>2. 股权是一个情景，不是现金</h3>
        <p>上市公司可采用透明参考价并明确假设；未上市公司应给出区间：当前授予价值、下行情景与合理上行情景。不要把纸面价值直接当作现金。</p>
        <ul>
          <li>同时询问股数与授予日估值。</li>
          <li>确认价值基于 offer 日价格还是历史均价。</li>
          <li>询问年度刷新是酌情、公式化还是委员会决定。</li>
          <li>询问晋升、转岗、离职时股权如何处理。</li>
        </ul>
        <h3>3. 职级才是核心价格信号</h3>
        <p>多数大型科技公司为职责范围付费，而不是为谈判表演付费。强候选人如果被低配职级，可能拿到漂亮的签字包，却在未来数年持续吃亏。比较该职级应有的自主性、决策权与晋升时钟，而不只是首年数字。</p>
        <h3>4. 真正改变决策的问题</h3>
        <ul>
          <li>总包中有多大比例是“有风险”的？</li>
          <li>绩效良好者的年度刷新中位数大约是多少？</li>
          <li>过去两轮市场下行中，公司如何处理股权？</li>
          <li>基于过去两个绩效周期，奖金目标现实吗？</li>
          <li>我在时间密度和未来选择权上交换了什么？</li>
        </ul>
        <div class="callout"><strong>编辑原则：</strong> 总包更高并不自动代表 offer 更好。它可能换来更多 on-call、更少学习、更差的经理或更短的职业跑道。</div>
      `,
      fr: `
        <h3>1. Quatre chiffres, pas un seul</h3>
        <p>Une offre senior est un package. Notez quatre lignes : salaire de base, bonus cible, actions annualisées et cash exceptionnel. Ajoutez ensuite les conditions de chaque ligne.</p>
        <table class="table-in-modal">
          <thead><tr><th>Élément</th><th>Signification</th><th>Question à poser</th></tr></thead>
          <tbody>
            <tr><td>Base</td><td>Cash indépendant des résultats.</td><td>Position dans la bande ? Date de la prochaine revue ?</td></tr>
            <tr><td>Bonus</td><td>Souvent cible × multiplicateur.</td><td>Quel multiplicateur réel sur les deux derniers cycles ?</td></tr>
            <tr><td>Actions</td><td>RSU, options ou incentive long terme.</td><td>Valeur, vesting et politique de refresh ?</td></tr>
            <tr><td>Signature</td><td>Cash ou compensation d'actions non vestées.</td><td>Remboursable ? Remplace-t-elle le premier année d'actions ?</td></tr>
          </tbody>
        </table>
        <div class="callout"><strong>Normalisez.</strong> Convertissez les devises, séparez exceptionnel et récurrent, puis annualisez les actions avant de comparer Amazon, Meta ou Google.</div>
        <h3>2. Les actions sont un scénario</h3>
        <p>Pour une société cotée, utilisez un prix de référence transparent. Pour une société privée, donnez une fourchette : valeur actuelle, scénario bas et scénario haut plausible. Le papier n'est pas du cash.</p>
        <ul>
          <li>Demandez le nombre d'unités et la valeur en dollars.</li>
          <li>Vérifiez si la valeur utilise le prix du jour ou une moyenne.</li>
          <li>Demandez si les refreshs sont discrétionnaires ou formulés.</li>
          <li>Clarifiez promotion, mobilité et départ.</li>
        </ul>
        <h3>3. Le niveau est le vrai signal de prix</h3>
        <p>Les grandes entreprises tech paient le périmètre, pas le théâtre de négociation. Un bon candidat sous-nivelé peut recevoir un beau premier chiffre et rester pénalisé pendant des années. Comparez autonomie, droits de décision et horizon de promotion.</p>
        <h3>4. Les questions qui changent la décision</h3>
        <ul>
          <li>Quelle part de ma rémunération est à risque ?</li>
          <li>Quel refresh médian pour une bonne performance ?</li>
          <li>Comment l'entreprise a-t-elle traité les actions lors des deux derniers ralentissements ?</li>
          <li>Le bonus cible est-il réaliste au vu des deux derniers cycles ?</li>
          <li>Quel compromis je fais sur la densité temporelle et l'optionalité ?</li>
        </ul>
        <div class="callout"><strong>Règle éditoriale :</strong> une rémunération totale plus élevée n'est pas automatiquement une meilleure offre. Elle peut acheter plus d'astreinte, moins d'apprentissage ou un manager plus faible.</div>
      `
    }
  },
  {
    id: "resume-signal",
    featured: false,
    type: "template",
    category: "process",
    readTime: 6,
    updated: "2026-10",
    title: tr(
      "The four-signal résumé",
      "四信号简历法",
      "Le CV à quatre signaux"
    ),
    summary: tr(
      "A repeatable bullet structure for scope, action, evidence and outcome — without turning your résumé into a list of adjectives.",
      "用“范围、行动、证据、结果”的可重复句式写项目，避免简历沦为形容词堆砌。",
      "Une structure répétable portée, action, preuve, résultat — sans transformer le CV en liste d'adjectifs."
    ),
    sourceIds: ["techInterviewHandbook", "googleCareers", "amazonLP"],
    template: tr(
      "[Scope] I led / designed / debugged [system or problem] for [users, traffic, revenue or team size]. I chose [approach] because [constraint / trade-off]. The result was [metric before → after] within [time], and the evidence was [test, launch, experiment, adoption].",
      "[范围] 我主导/设计/排查了面向 [用户、流量、收入或团队规模] 的 [系统或问题]。基于 [约束/权衡]，我选择 [方法]。结果是在 [时间] 内把 [指标从 X 变为 Y]，证据来自 [测试、发布、实验、采用情况]。",
      "[Périmètre] J'ai piloté / conçu / débogué [système ou problème] pour [utilisateurs, trafic, revenu ou taille d'équipe]. J'ai choisi [approche] à cause de [contrainte/compromis]. Résultat : [métrique avant → après] en [durée], prouvé par [test, lancement, expérience, adoption]."
    ),
    body: {
      en: `
        <h3>The four signals</h3>
        <ul>
          <li><strong>Scope:</strong> how large was the surface, who depended on it, and what freedom did you have?</li>
          <li><strong>Action:</strong> what did you personally decide, build, debug, reject or negotiate?</li>
          <li><strong>Evidence:</strong> what did you measure, test or observe? A result without a measurement method is a rumor.</li>
          <li><strong>Outcome:</strong> what changed for the user, team, system or business — and at what cost?</li>
        </ul>
        <div class="callout"><strong>Weak:</strong> “Worked on a high-impact recommendation system and improved user experience.”<br><strong>Stronger:</strong> “Rebuilt candidate retrieval for a 40M-DAU feed; cut p99 latency from 180 ms to 95 ms and lifted 7-day retention by 1.8pp in an A/B test (n=4.2M), while holding GPU cost flat.”</div>
        <h3>Use a small portfolio, not a job diary</h3>
        <p>Choose three projects that show different muscles: one system, one ambiguous problem, one cross-functional influence story. Within each, keep only the details that a skeptical interviewer could probe for twenty minutes.</p>
        <h3>Seniority changes the verb</h3>
        <table class="table-in-modal">
          <thead><tr><th>Level</th><th>What to prove</th><th>Verb to earn</th></tr></thead>
          <tbody>
            <tr><td>Early</td><td>Reliable execution and learning speed.</td><td>Built, debugged, tested</td></tr>
            <tr><td>Senior</td><td>Onesystem or product outcome with autonomy.</td><td>Designed, owned, improved</td></tr>
            <tr><td>Staff+</td><td>Multi-team direction and durable mechanism.</td><td>Set direction, aligned, institutionalized</td></tr>
          </tbody>
        </table>
        <h3>Before you send it</h3>
        <ul>
          <li>Remove every adjective that is not backed by a verb or a number.</li>
          <li>Make the first six words of each bullet carry information.</li>
          <li>Use one metric per bullet; more numbers can hide the causal story.</li>
          <li>Keep a private appendix with architecture, failure modes and test details for interviews.</li>
        </ul>
      `,
      zh: `
        <h3>四个信号</h3>
        <ul>
          <li><strong>范围：</strong> 系统影响面多大、谁依赖它、你拥有多少自主权？</li>
          <li><strong>行动：</strong> 你个人决定、构建、排查、否决或协调了什么？</li>
          <li><strong>证据：</strong> 你测量、测试或观察到了什么？没有测量方法的结果只是传闻。</li>
          <li><strong>结果：</strong> 用户、团队、系统或业务发生了什么改变，代价是什么？</li>
        </ul>
        <div class="callout"><strong>弱：</strong> “参与高影响力推荐系统，提升用户体验。”<br><strong>强：</strong> “为 4000 万 DAU 信息流重建候选召回；A/B 实验中 p99 延迟从 180ms 降至 95ms，7 日留存提升 1.8 个百分点（n=420 万），GPU 成本持平。”</div>
        <h3>准备一个小型作品集，而不是工作日记</h3>
        <p>选三个体现不同能力面的项目：一个系统、一个模糊问题、一个跨职能影响故事。每个项目只保留面试官可能追问二十分钟的细节。</p>
        <h3>职级改变动词</h3>
        <table class="table-in-modal">
          <thead><tr><th>层级</th><th>要证明什么</th><th>配得上的动词</th></tr></thead>
          <tbody>
            <tr><td>早期</td><td>可靠执行与学习速度。</td><td>构建、调试、测试</td></tr>
            <tr><td>高级</td><td>独立负责一个系统或产品结果。</td><td>设计、主导、改善</td></tr>
            <tr><td>资深/专家</td><td>跨团队方向与可持续机制。</td><td>设定方向、达成对齐、制度化</td></tr>
          </tbody>
        </table>
        <h3>发送前检查</h3>
        <ul>
          <li>删掉没有动词或数字支撑的形容词。</li>
          <li>让每条开头六个字就携带信息。</li>
          <li>每条只放一个核心指标；数字太多会掩盖因果故事。</li>
          <li>另备一份私有附录，记录架构、失败模式与测试细节。</li>
        </ul>
      `,
      fr: `
        <h3>Les quatre signaux</h3>
        <ul>
          <li><strong>Périmètre :</strong> quelle surface, quelles dépendances, quelle autonomie ?</li>
          <li><strong>Action :</strong> qu'avez-vous personnellement décidé, construit, débogué, refusé ou négocié ?</li>
          <li><strong>Preuve :</strong> qu'avez-vous mesuré ou testé ? Un résultat sans méthode est une rumeur.</li>
          <li><strong>Résultat :</strong> qu'est-ce qui a changé pour l'utilisateur, l'équipe, le système ou le business ?</li>
        </ul>
        <div class="callout"><strong>Faible :</strong> « Participation à un système de recommandation à fort impact. »<br><strong>Plus fort :</strong> « Reconstruction du retrieval pour un fil à 40 M d'utilisateurs actifs ; p99 de 180 à 95 ms et rétention J7 +1,8 pt dans un A/B test (n=4,2 M), à coût GPU constant. »</div>
        <h3>Un petit portfolio, pas un journal de bord</h3>
        <p>Choisissez trois projets montrant trois muscles : un système, un problème ambigu, une influence transversale. Gardez les détails qu'un interviewer sceptique pourrait creuser pendant vingt minutes.</p>
        <h3>Le niveau change le verbe</h3>
        <table class="table-in-modal">
          <thead><tr><th>Niveau</th><th>Preuve attendue</th><th>Verbe</th></tr></thead>
          <tbody>
            <tr><td>Débutant</td><td>Exécution fiable et apprentissage rapide.</td><td>Construit, débogué, testé</td></tr>
            <tr><td>Senior</td><td>Un résultat avec autonomie.</td><td>Conçu, piloté, amélioré</td></tr>
            <tr><td>Staff+</td><td>Direction multi-équipes et mécanisme durable.</td><td>Défini, aligné, institutionnalisé</td></tr>
          </tbody>
        </table>
        <h3>Avant l'envoi</h3>
        <ul>
          <li>Supprimez les adjectifs sans verbe ni chiffre.</li>
          <li>Faites porter l'information par les six premiers mots.</li>
          <li>Une métrique principale par ligne.</li>
          <li>Gardez une annexe privée : architecture, modes de panne, tests.</li>
        </ul>
      `
    }
  },
  {
    id: "loop-anatomy",
    featured: false,
    type: "read",
    category: "process",
    readTime: 7,
    updated: "2026-10",
    title: tr(
      "Anatomy of a big-tech loop",
      "大厂面试环解剖",
      "Anatomie d'une boucle big tech"
    ),
    summary: tr(
      "What each round is actually buying, how evidence travels between interviewers, and where candidates accidentally lose their own case.",
      "每轮面试真正评估什么、证据如何在面试官之间流动，以及候选人最容易在哪里丢掉自己的案例。",
      "Ce que chaque entretien évalue, comment les preuves circulent et où les candidats perdent leur propre dossier."
    ),
    sourceIds: ["googleCareers", "metaCareers", "amazonLP", "techInterviewHandbook"],
    body: {
      en: `
        <h3>The loop is an evidence assembly line</h3>
        <p>Most companies do not hire the candidate who “seems smartest.” They assemble a packet of independent evidence against role dimensions, then ask people who did not meet you whether the packet is strong enough. Your job is to make each round produce a clean, quotable piece of evidence.</p>
        <table class="table-in-modal">
          <thead><tr><th>Round</th><th>What it is buying</th><th>Common loss mode</th></tr></thead>
          <tbody>
            <tr><td>Recruiter</td><td>Level, scope, motivation and logistics.</td><td>Being vague about level or compensation expectations.</td></tr>
            <tr><td>Coding</td><td>Problem decomposition, correctness, communication.</td><td>Silent coding or jumping to implementation before invariants.</td></tr>
            <tr><td>Design</td><td>Requirements, architecture, trade-offs and failure modes.</td><td>Naming technologies instead of explaining constraints.</td></tr>
            <tr><td>Behavioral</td><td>Judgment, ownership, conflict and learning.</td><td>Using “we” for decisions you personally made.</td></tr>
            <tr><td>Committee</td><td>Consistency across independent signals.</td><td>A strong story that never reaches the written packet.</td></tr>
          </tbody>
        </table>
        <h3>Make evidence portable</h3>
        <p>End each answer with the decision, the measured outcome and the lesson. Interviewers are often writing notes while you speak; a crisp closing sentence is easier to record than a long narrative.</p>
        <ul>
          <li>State the constraint before the solution.</li>
          <li>Name one alternative you rejected and why.</li>
          <li>Quantify the change, even if the number is an estimate.</li>
          <li>Say what you would do differently with another quarter.</li>
        </ul>
        <h3>Team match is not a formality</h3>
        <p>At several companies, a positive hiring decision is followed by team selection. Ask about on-call, manager style, decision cadence, roadmap confidence and whether the team has open headcount for your level. A strong hire can still land in a poorly matched team.</p>
      `,
      zh: `
        <h3>面试环是一条证据流水线</h3>
        <p>多数公司不是在招“看起来最聪明的人”，而是围绕岗位维度收集独立证据，再由没见过你的委员会判断证据是否足够强。你的任务是让每一轮产出清晰、可被引用的证据。</p>
        <table class="table-in-modal">
          <thead><tr><th>轮次</th><th>真正购买什么</th><th>常见失分</th></tr></thead>
          <tbody>
            <tr><td>招聘官</td><td>职级、范围、动机与流程匹配。</td><td>对职级或薪酬预期表达模糊。</td></tr>
            <tr><td>编码</td><td>问题拆解、正确性与沟通。</td><td>沉默编码，或未定义不变量就写实现。</td></tr>
            <tr><td>设计</td><td>需求、架构、权衡与故障模式。</td><td>堆技术名词，却没有解释约束。</td></tr>
            <tr><td>行为</td><td>判断、主导性、冲突与学习。</td><td>用“我们”描述本应由你个人承担的决策。</td></tr>
            <tr><td>委员会</td><td>多个独立信号是否一致。</td><td>好故事没有进入书面材料。</td></tr>
          </tbody>
        </table>
        <h3>让证据可以“带走”</h3>
        <p>每个回答都以决策、可衡量结果与复盘收尾。面试官常边听边记；一句清晰的结论比一段漫长叙事更容易被记录。</p>
        <ul>
          <li>先讲约束，再讲方案。</li>
          <li>说出一个被你否决的替代方案与原因。</li>
          <li>量化变化，即使只是估算。</li>
          <li>说明如果多给一个季度，你会怎么改。</li>
        </ul>
        <h3>团队匹配不是形式</h3>
        <p>多家公司在通过招聘决策后进入团队选择。主动询问 on-call、经理风格、决策节奏、路线图信心，以及该团队是否有你职级的编制。强候选人也可能落进不匹配的团队。</p>
      `,
      fr: `
        <h3>La boucle est une chaîne de preuves</h3>
        <p>Les entreprises ne recrutent pas seulement la personne qui « semble la plus intelligente ». Elles assemblent des preuves indépendantes sur des dimensions du poste, puis des personnes qui ne vous ont pas rencontré jugent le dossier. Chaque entretien doit produire une preuve claire et citable.</p>
        <table class="table-in-modal">
          <thead><tr><th>Étape</th><th>Ce qu'elle achète</th><th>Perte fréquente</th></tr></thead>
          <tbody>
            <tr><td>Recruteur</td><td>Niveau, périmètre, motivation.</td><td>Attentes floues sur niveau ou salaire.</td></tr>
            <tr><td>Code</td><td>Décomposition, correction, communication.</td><td>Silence ou implémentation avant invariants.</td></tr>
            <tr><td>Conception</td><td>Exigences, architecture, compromis.</td><td>Noms de technologies sans contraintes.</td></tr>
            <tr><td>Comportemental</td><td>Jugement, ownership, conflit, apprentissage.</td><td>Dire « nous » pour des décisions personnelles.</td></tr>
            <tr><td>Comité</td><td>Cohérence de signaux indépendants.</td><td>Bonne histoire absente du dossier écrit.</td></tr>
          </tbody>
        </table>
        <h3>Rendre la preuve portable</h3>
        <p>Terminez par la décision, le résultat mesuré et la leçon. Une phrase de clôture précise est plus facile à noter qu'un long récit.</p>
        <ul>
          <li>Énoncez la contrainte avant la solution.</li>
          <li>Nommez une alternative rejetée et pourquoi.</li>
          <li>Quantifiez, même par estimation.</li>
          <li>Dites ce que vous feriez avec un trimestre de plus.</li>
        </ul>
        <h3>Le matching d'équipe n'est pas une formalité</h3>
        <p>Après une décision positive, plusieurs entreprises choisissent l'équipe. Demandez astreinte, style de manager, cadence de décision, confiance dans la roadmap et headcount au bon niveau.</p>
      `
    }
  },
  {
    id: "density-decoder",
    featured: false,
    type: "read",
    category: "process",
    readTime: 5,
    updated: "2026-10",
    title: tr(
      "Time density, decoded",
      "时间稠密度解码",
      "Décoder la densité temporelle"
    ),
    summary: tr(
      "A five-part editorial index for reading workload before you accept the offer: focus, hours, on-call, meetings and time-zone load.",
      "在接受 offer 前用五个维度阅读工作负荷：专注、工时、on-call、会议与时区负荷。",
      "Un indice éditorial en cinq parties pour lire la charge avant l'offre : concentration, heures, astreinte, réunions et fuseaux."
    ),
    sourceIds: ["glassdoor", "blind", "netflixCulture", "amazonLP"],
    body: {
      en: `
        <h3>Density is not “hours”</h3>
        <p>Two roles can both be labeled 45 hours a week and feel completely different. Our density score combines five observable pressures. It is an editorial synthesis, not an official employer metric.</p>
        <ul>
          <li><strong>Focus load:</strong> how much uninterrupted deep work the role genuinely requires.</li>
          <li><strong>Weekly intensity:</strong> typical hours, launch periods and recovery time.</li>
          <li><strong>On-call / interrupt load:</strong> pager frequency, incident ownership and after-hours expectations.</li>
          <li><strong>Meeting surface:</strong> coordination load across stakeholders and time zones.</li>
          <li><strong>Change pressure:</strong> reorgs, roadmap churn and performance-cycle urgency.</li>
        </ul>
        <div class="callout"><strong>Read scores as relative, not absolute.</strong> A 4 in one team can feel like a 2 in another. The index is most useful for comparing role archetypes and generating better questions.</div>
        <h3>Five questions for the hiring manager</h3>
        <ul>
          <li>What does a normal Tuesday look like, and what does launch week look like?</li>
          <li>How often is the team paged, and who triages first?</li>
          <li>Which recurring meetings would I own or be required to attend?</li>
          <li>How many time zones does the team span, and when is overlap expected?</li>
          <li>What happened to the last two people who held this role?</li>
        </ul>
        <h3>Look for the hidden contract</h3>
        <p>High density is sometimes a deliberate trade for learning, scope or compensation. It becomes a problem when it is undisclosed, unevenly distributed or treated as a personality test. Ask for concrete examples, not “we work hard but play hard.”</p>
      `,
      zh: `
        <h3>稠密度不等于工时</h3>
        <p>两个岗位都可能被写成每周 45 小时，但真实体感可能完全不同。我们的稠密度分数综合五种可观察压力，是编辑综合判断，不是雇主官方指标。</p>
        <ul>
          <li><strong>专注负荷：</strong> 岗位真正需要多少不被打断的深度工作。</li>
          <li><strong>周强度：</strong> 常规工时、发布期与恢复时间。</li>
          <li><strong>On-call/打断负荷：</strong> 告警频率、事故责任与非工作时间预期。</li>
          <li><strong>会议面：</strong> 跨利益相关者与时区的协调量。</li>
          <li><strong>变化压力：</strong> 重组、路线图反复与绩效周期紧迫度。</li>
        </ul>
        <div class="callout"><strong>分数是相对值，不是绝对值。</strong> 某团队的 4 分可能比另一个团队的 2 分更轻松。这个指数最适合比较岗位原型，并生成更好的提问。</div>
        <h3>问用人经理的五个问题</h3>
        <ul>
          <li>普通周二是什么样？发布周又是什么样？</li>
          <li>团队多久被 page 一次？谁先处理？</li>
          <li>哪些例会需要我主持或必须参加？</li>
          <li>团队跨几个时区？什么时候必须重叠？</li>
          <li>上两位担任该岗位的人后来怎样了？</li>
        </ul>
        <h3>识别隐性契约</h3>
        <p>高密度有时是主动交换学习、范围或薪酬。真正的问题在于它没有被披露、分配不均，或被当成性格测试。要具体例子，不要“我们工作时拼命，玩时也拼命”。</p>
      `,
      fr: `
        <h3>La densité n'est pas le nombre d'heures</h3>
        <p>Deux postes à 45 heures peuvent être radicalement différents. Notre score combine cinq pressions observables. C'est une synthèse éditoriale, pas une métrique officielle.</p>
        <ul>
          <li><strong>Concentration :</strong> travail profond sans interruption réellement requis.</li>
          <li><strong>Intensité :</strong> heures, périodes de lancement, récupération.</li>
          <li><strong>Astreinte :</strong> fréquence des alertes, incidents, hors horaires.</li>
          <li><strong>Réunions :</strong> coordination entre parties prenantes et fuseaux.</li>
          <li><strong>Pression de changement :</strong> réorganisations, roadmap, performance.</li>
        </ul>
        <div class="callout"><strong>Les scores sont relatifs.</strong> Un 4 dans une équipe peut être plus léger qu'un 2 ailleurs. L'indice sert à comparer des archétypes et à poser de meilleures questions.</div>
        <h3>Cinq questions au manager</h3>
        <ul>
          <li>À quoi ressemble un mardi normal et une semaine de lancement ?</li>
          <li>À quelle fréquence l'équipe est-elle alertée et qui triage ?</li>
          <li>Quelles réunions récurrentes vais-je posséder ?</li>
          <li>Combien de fuseaux et quel chevauchement attendu ?</li>
          <li>Que sont devenues les deux dernières personnes au poste ?</li>
        </ul>
        <h3>Chercher le contrat caché</h3>
        <p>Une forte densité peut être un échange assumé pour apprendre, avoir du périmètre ou gagner plus. Elle devient un problème si elle est cachée, inégale ou présentée comme un test de personnalité.</p>
      `
    }
  },
  {
    id: "star-rehearsal",
    featured: false,
    type: "template",
    category: "rehearsal",
    readTime: 4,
    updated: "2026-10",
    title: tr(
      "STAR without the theatre",
      "不表演的 STAR",
      "STAR sans théâtre"
    ),
    summary: tr(
      "A compact behavioral answer skeleton that survives follow-up questions and avoids the four-minute monologue.",
      "一个能承受追问、避免四分钟独白的行为面试回答骨架。",
      "Un squelette de réponse comportementale qui résiste aux relances et évite le monologue de quatre minutes."
    ),
    sourceIds: ["amazonLP", "techInterviewHandbook", "microsoftCareers"],
    template: tr(
      "Situation (15s): In [context], [stakeholder] needed [outcome] under [constraint]. Task (10s): I owned [specific decision]. Action (60s): I did [1], [2], [3], choosing [trade-off] over [alternative] because [reason]. Result (20s): [metric/decision] changed from [X] to [Y]; the lesson was [lesson].",
      "情境（15秒）：在 [背景] 中，[利益相关者] 需要在 [约束] 下实现 [结果]。任务（10秒）：我负责 [具体决策]。行动（60秒）：我做了 [1]、[2]、[3]，选择 [权衡] 而非 [替代方案]，因为 [原因]。结果（20秒）：[指标/决策] 从 [X] 变为 [Y]；复盘是 [教训]。",
      "Situation (15 s) : dans [contexte], [partie prenante] devait obtenir [résultat] sous [contrainte]. Tâche (10 s) : je possédais [décision]. Action (60 s) : j'ai fait [1], [2], [3], en choisissant [compromis] plutôt que [alternative] car [raison]. Résultat (20 s) : [métrique] est passée de [X] à [Y] ; leçon : [leçon]."
    ),
    body: {
      en: `
        <h3>Use STAR as a spine, not a script</h3>
        <p>STAR is useful because it prevents contextless boasting. It becomes painful when every answer sounds like a consulting case. Aim for 90–120 seconds, then stop and let the interviewer probe.</p>
        <h3>One story, three depths</h3>
        <p>Prepare each story at three lengths: a 20-second headline, a 90-second answer and a five-minute deep dive. The short version proves judgment; the long version proves that the details are real.</p>
        <ul>
          <li><strong>Headline:</strong> “I chose a slower launch to avoid a billing incident affecting 12% of customers.”</li>
          <li><strong>Middle:</strong> constraint, decision, alternative rejected, measured outcome.</li>
          <li><strong>Deep dive:</strong> architecture, conflict, failure, what you personally learned.</li>
        </ul>
        <div class="callout"><strong>The follow-up test:</strong> if the interviewer asks “why?” three times, you should still have a concrete answer. If you cannot, the story is probably borrowed or too vague.</div>
        <h3>Avoid these four tells</h3>
        <ul>
          <li>Hero language with no team context.</li>
          <li>“We” when the question asks what you decided.</li>
          <li>Metrics with no baseline, time window or measurement method.</li>
          <li>A lesson that is actually a humblebrag.</li>
        </ul>
      `,
      zh: `
        <h3>把 STAR 当骨架，而不是台词</h3>
        <p>STAR 的价值是防止没有上下文的自夸；如果每个回答都像咨询案例，就会变得僵硬。目标 90–120 秒，然后停下让面试官追问。</p>
        <h3>一个故事，三种深度</h3>
        <p>每个故事准备三个长度：20 秒标题版、90 秒完整版、5 分钟深挖版。短版证明判断力，长版证明细节真实。</p>
        <ul>
          <li><strong>标题版：</strong> “我选择推迟发布，避免影响 12% 客户的计费事故。”</li>
          <li><strong>完整版：</strong> 约束、决策、否决的替代方案、可衡量结果。</li>
          <li><strong>深挖版：</strong> 架构、冲突、失败，以及你个人学到了什么。</li>
        </ul>
        <div class="callout"><strong>追问测试：</strong> 如果面试官连续问三次“为什么”，你仍应有具体答案。答不上来，通常说明故事是借来的或过于模糊。</div>
        <h3>避开四个信号</h3>
        <ul>
          <li>没有团队上下文的英雄叙事。</li>
          <li>问题问“你做了什么决定”，却一直说“我们”。</li>
          <li>指标没有基线、时间窗或测量方法。</li>
          <li>所谓“教训”其实是变相自夸。</li>
        </ul>
      `,
      fr: `
        <h3>STAR est une colonne, pas un script</h3>
        <p>STAR évite la vantardise sans contexte. Il devient pénible quand chaque réponse ressemble à un cas de conseil. Visez 90 à 120 secondes, puis laissez l'interviewer creuser.</p>
        <h3>Une histoire, trois profondeurs</h3>
        <p>Préparez une version de 20 secondes, une de 90 secondes et une de cinq minutes. La courte prouve le jugement ; la longue prouve que les détails sont réels.</p>
        <ul>
          <li><strong>Titre :</strong> « J'ai retardé le lancement pour éviter un incident de facturation touchant 12 % des clients. »</li>
          <li><strong>Milieu :</strong> contrainte, décision, alternative rejetée, résultat mesuré.</li>
          <li><strong>Approfondissement :</strong> architecture, conflit, échec, apprentissage personnel.</li>
        </ul>
        <div class="callout"><strong>Test de relance :</strong> si l'interviewer demande « pourquoi ? » trois fois, vous devez encore avoir une réponse concrète.</div>
        <h3>Éviter quatre signaux</h3>
        <ul>
          <li>Langage de héros sans contexte d'équipe.</li>
          <li>« Nous » quand la question porte sur votre décision.</li>
          <li>Métrique sans base, période ou méthode.</li>
          <li>Une leçon qui est une fausse modestie.</li>
        </ul>
      `
    }
  },
  {
    id: "system-skeleton",
    featured: false,
    type: "template",
    category: "rehearsal",
    readTime: 6,
    updated: "2026-10",
    title: tr(
      "The 45-minute system design skeleton",
      "45 分钟系统设计骨架",
      "Le squelette de system design en 45 minutes"
    ),
    summary: tr(
      "A time-boxed structure for requirements, scale, architecture, data, failure and trade-offs under interview pressure.",
      "在面试压力下分配需求、规模、架构、数据、故障与权衡的时间盒结构。",
      "Une structure chronométrée pour exigences, échelle, architecture, données, pannes et compromis."
    ),
    sourceIds: ["systemDesignPrimer", "techInterviewHandbook", "metaCareers"],
    template: tr(
      "0–5 min: clarify users, core action, scale and non-goals. 5–10 min: estimate QPS, storage and latency. 10–20 min: sketch the critical path. 20–30 min: data model and consistency. 30–38 min: failures, bottlenecks and operation. 38–45 min: trade-offs, evolution and summary.",
      "0–5 分钟：明确用户、核心动作、规模与非目标。5–10 分钟：估算 QPS、存储与延迟。10–20 分钟：画关键路径。20–30 分钟：数据模型与一致性。30–38 分钟：故障、瓶颈与运维。38–45 分钟：权衡、演进与总结。",
      "0–5 min : clarifier utilisateurs, action centrale, échelle et non-objectifs. 5–10 min : QPS, stockage, latence. 10–20 min : chemin critique. 20–30 min : modèle de données et cohérence. 30–38 min : pannes, goulots, opérations. 38–45 min : compromis et évolution."
    ),
    body: {
      en: `
        <h3>Start with the one action that matters</h3>
        <p>“Design a feed” is not a requirement. Ask what the user does, which action must succeed, what latency is acceptable and what the system can safely lose. Write the non-goals on the board; they prevent you from building an imaginary product for forty minutes.</p>
        <h3>Estimate only enough to choose</h3>
        <p>Calculations are not a math test. Use them to decide whether you need sharding, a cache, asynchronous writes or a different index. State assumptions and keep numbers in one visible block.</p>
        <table class="table-in-modal">
          <thead><tr><th>Dimension</th><th>Rough question</th><th>Consequence</th></tr></thead>
          <tbody>
            <tr><td>Read/write ratio</td><td>Is this a cache-first or write-heavy path?</td><td>Storage and consistency design.</td></tr>
            <tr><td>Payload / cardinality</td><td>How large is one item and how many exist?</td><td>Index, partition and cost.</td></tr>
            <tr><td>Latency SLO</td><td>What must feel instant?</td><td>Caching, fan-out, precomputation.</td></tr>
            <tr><td>Failure budget</td><td>What can degrade first?</td><td>Fallback and isolation.</td></tr>
          </tbody>
        </table>
        <h3>Draw the critical path before the toolbox</h3>
        <p>Client → edge → service → data is a start, not an answer. Annotate where state lives, where consistency changes, where backpressure appears and what is asynchronous. Then introduce components because they solve a named constraint.</p>
        <h3>Failure is part of the design</h3>
        <ul>
          <li>What happens on a hot partition or celebrity key?</li>
          <li>Which writes can be retried safely?</li>
          <li>What does the user see when a dependency degrades?</li>
          <li>How do you roll out a schema change without a flag day?</li>
        </ul>
        <div class="callout"><strong>Close on evolution.</strong> Spend the final minutes explaining what you would build next if traffic grows 10× or the product adds a new consistency requirement. It shows judgment beyond the whiteboard.</div>
      `,
      zh: `
        <h3>从一个真正重要的动作开始</h3>
        <p>“设计信息流”不是需求。要问用户做什么、哪个动作必须成功、可接受延迟多少、系统能安全丢失什么。把非目标写在白板上，避免四十分钟都在构建想象中的产品。</p>
        <h3>只估算到足以做选择</h3>
        <p>计算不是数学考试，而是用来判断是否需要分片、缓存、异步写或不同索引。明确假设，把数字集中写在一块可见区域。</p>
        <table class="table-in-modal">
          <thead><tr><th>维度</th><th>粗略问题</th><th>设计后果</th></tr></thead>
          <tbody>
            <tr><td>读写比</td><td>这是缓存优先还是写密集路径？</td><td>存储与一致性设计。</td></tr>
            <tr><td>载荷/基数</td><td>单条多大，总量多少？</td><td>索引、分区与成本。</td></tr>
            <tr><td>延迟 SLO</td><td>什么必须“瞬时”？</td><td>缓存、扇出、预计算。</td></tr>
            <tr><td>故障预算</td><td>什么可以先降级？</td><td>回退与隔离。</td></tr>
          </tbody>
        </table>
        <h3>先画关键路径，再摆工具箱</h3>
        <p>客户端 → 边缘 → 服务 → 数据只是起点。标注状态在哪里、一致性在哪里改变、背压出现在哪里、什么异步。之后每个组件都应解决一个已命名约束。</p>
        <h3>故障也是设计的一部分</h3>
        <ul>
          <li>热点分区或“名人 key”发生时怎么办？</li>
          <li>哪些写操作可以安全重试？</li>
          <li>依赖降级时用户看到什么？</li>
          <li>如何在不“停机日”的情况下推 schema 变更？</li>
        </ul>
        <div class="callout"><strong>用演进来收尾。</strong> 最后几分钟说明流量增长 10 倍或新增一致性要求时你会怎么演进，这能展示白板之外的判断。</div>
      `,
      fr: `
        <h3>Commencer par l'action qui compte</h3>
        <p>« Concevoir un feed » n'est pas une exigence. Demandez ce que fait l'utilisateur, quelle action doit réussir, quelle latence est acceptable et ce que le système peut perdre. Écrivez les non-objectifs pour éviter de construire un produit imaginaire.</p>
        <h3>Estimer juste assez pour choisir</h3>
        <p>Les calculs servent à décider sharding, cache, écriture asynchrone ou index. Énoncez les hypothèses et gardez les chiffres visibles.</p>
        <table class="table-in-modal">
          <thead><tr><th>Dimension</th><th>Question</th><th>Conséquence</th></tr></thead>
          <tbody>
            <tr><td>Ratio lecture/écriture</td><td>Cache-first ou écriture intensive ?</td><td>Stockage et cohérence.</td></tr>
            <tr><td>Volume / cardinalité</td><td>Taille et nombre d'objets ?</td><td>Index, partitionnement, coût.</td></tr>
            <tr><td>SLO de latence</td><td>Qu'est-ce qui doit sembler instantané ?</td><td>Cache, fan-out, précalcul.</td></tr>
            <tr><td>Budget de panne</td><td>Que peut-on dégrader ?</td><td>Fallback et isolation.</td></tr>
          </tbody>
        </table>
        <h3>Dessiner le chemin critique avant la boîte à outils</h3>
        <p>Client → edge → service → données est un début. Annotez l'état, la cohérence, la backpressure et l'asynchrone. Chaque composant doit résoudre une contrainte nommée.</p>
        <h3>La panne fait partie du design</h3>
        <ul>
          <li>Que se passe-t-il avec une partition chaude ou une clé célébrité ?</li>
          <li>Quelles écritures sont sûres à retenter ?</li>
          <li>Que voit l'utilisateur lors d'une dégradation ?</li>
          <li>Comment migrer un schéma sans flag day ?</li>
        </ul>
        <div class="callout"><strong>Terminer par l'évolution.</strong> Expliquez ce que vous construiriez avec 10× le trafic ou une nouvelle contrainte de cohérence.</div>
      `
    }
  },
  {
    id: "ai-lab-signals",
    featured: false,
    type: "read",
    category: "rehearsal",
    readTime: 7,
    updated: "2026-10",
    title: tr(
      "What frontier AI labs actually probe",
      "前沿 AI 实验室真正追问什么",
      "Ce que les labs d'IA de frontière explorent"
    ),
    summary: tr(
      "Research taste, evaluation literacy, systems judgment and safety reasoning — the recurring signals behind AI-lab role descriptions.",
      "研究品味、评估素养、系统判断与安全推理——AI 实验室岗位描述背后的重复信号。",
      "Goût recherche, littératie d'évaluation, jugement système et raisonnement de sûreté."
    ),
    sourceIds: ["openaiCareers", "anthropicCareers", "anthropicConstitution", "nvidiaCareers"],
    body: {
      en: `
        <h3>1. Research taste is a selection function</h3>
        <p>Labs want people who can choose a question worth pursuing, recognize a dead end early and explain why a result matters. Prepare one project where you changed direction because the evidence changed — not because a manager told you to.</p>
        <h3>2. Evaluation is product and science</h3>
        <p>“We fine-tuned and it felt better” is not evidence. Be ready to discuss task distribution, leakage, judge reliability, human evaluation, confidence intervals, cost and the decision that changes when the eval moves.</p>
        <div class="callout"><strong>Interview probe:</strong> “Design an eval for an agent that should complete a multi-step task.” A strong answer starts with the decision the eval must support, not with a list of metrics.</div>
        <h3>3. Systems reality constrains research</h3>
        <p>Training and inference are not abstract. Expect questions about memory, parallelism, failure recovery, latency, throughput and cost. The best research answer often includes an operational consequence.</p>
        <h3>4. Safety is not a separate personality</h3>
        <p>For safety-adjacent roles, be specific about threat models, measurement, deployment controls and residual risk. Avoid both “safety will solve itself” and “nothing should ship.” Show how you would decide under uncertainty.</p>
        <h3>5. A useful portfolio</h3>
        <ul>
          <li>One result you can defend at the level of method and statistics.</li>
          <li>One system you made faster, cheaper or more reliable.</li>
          <li>One ambiguous product or safety decision with a written rationale.</li>
          <li>One failure analysis that changed your next experiment.</li>
        </ul>
      `,
      zh: `
        <h3>1. 研究品味是一种筛选函数</h3>
        <p>实验室希望候选人能选择值得研究的问题、尽早识别死路，并解释结果为何重要。准备一个因证据变化而主动改变方向的项目，而不是被经理要求转向。</p>
        <h3>2. 评估既是科学也是产品</h3>
        <p>“微调后感觉更好”不是证据。准备讨论任务分布、数据泄漏、评审可靠性、人类评估、置信区间、成本，以及评估结果变化会改变什么决策。</p>
        <div class="callout"><strong>面试追问：</strong> “为一个应完成多步任务的智能体设计评估。” 强答案先说明评估要支持什么决策，而不是先罗列指标。</div>
        <h3>3. 系统现实约束研究</h3>
        <p>训练与推理并不抽象。准备回答内存、并行、故障恢复、延迟、吞吐与成本问题。最好的研究答案通常包含运营后果。</p>
        <h3>4. 安全不是另一种人格</h3>
        <p>安全相关岗位需要具体说明威胁模型、测量、部署控制与剩余风险。避免“安全会自己解决”和“什么都不能上线”两个极端。展示你如何在不确定性下做决定。</p>
        <h3>5. 有用的作品组合</h3>
        <ul>
          <li>一个能在方法与统计层面辩护的结果。</li>
          <li>一个你做得更快、更便宜或更可靠的系统。</li>
          <li>一个产品/安全模糊决策，以及书面理由。</li>
          <li>一个改变了下一次实验的失败分析。</li>
        </ul>
      `,
      fr: `
        <h3>1. Le goût de recherche est une fonction de sélection</h3>
        <p>Les labs veulent des personnes capables de choisir une question utile, reconnaître une impasse et expliquer l'importance d'un résultat. Préparez un projet où vous avez changé de direction à cause des preuves.</p>
        <h3>2. L'évaluation est science et produit</h3>
        <p>« Après fine-tuning, c'était mieux » n'est pas une preuve. Préparez distribution des tâches, fuite de données, fiabilité des juges, évaluation humaine, intervalles de confiance, coût et décision affectée.</p>
        <div class="callout"><strong>Relance :</strong> « Concevez une évaluation pour un agent multi-étapes. » Une bonne réponse commence par la décision à éclairer, pas par une liste de métriques.</div>
        <h3>3. La réalité système contraint la recherche</h3>
        <p>Entraînement et inférence ne sont pas abstraits. Attendez mémoire, parallélisme, reprise, latence, débit et coût. Une bonne réponse de recherche inclut souvent une conséquence opérationnelle.</p>
        <h3>4. La sûreté n'est pas une personnalité séparée</h3>
        <p>Pour les rôles liés à la sûreté, soyez précis sur menaces, mesure, contrôles de déploiement et risque résiduel. Évitez « la sûreté se réglera seule » et « rien ne doit sortir ».</p>
        <h3>5. Un portfolio utile</h3>
        <ul>
          <li>Un résultat défendable au niveau méthode et statistiques.</li>
          <li>Un système rendu plus rapide, moins cher ou plus fiable.</li>
          <li>Une décision produit ou sûreté ambiguë avec justification écrite.</li>
          <li>Une analyse d'échec qui a changé l'expérience suivante.</li>
        </ul>
      `
    }
  },
  {
    id: "china-tracks",
    featured: false,
    type: "dataset",
    category: "markets",
    readTime: 5,
    updated: "2026-10",
    title: tr(
      "China tech: campus versus lateral tracks",
      "中国互联网：校招与社招轨道",
      "Tech chinoise : campus et recrutement latéral"
    ),
    summary: tr(
      "How campus, lateral and expert tracks differ in evidence, level calibration and compensation structure.",
      "校招、社招与专家轨在证据、职级校准和薪酬结构上的差异。",
      "Différences entre campus, recrutement latéral et filière experte : preuves, niveau et rémunération."
    ),
    sourceIds: ["bytedanceCareers", "tencentCareers", "alibabaCareers", "levels"],
    body: {
      en: `
        <h3>Three doors, different evidence</h3>
        <table class="table-in-modal">
          <thead><tr><th>Track</th><th>Primary evidence</th><th>Typical calibration</th></tr></thead>
          <tbody>
            <tr><td>Campus</td><td>Internships, competitions, research, foundational coding.</td><td>Potential and trainability; level usually fixed.</td></tr>
            <tr><td>Lateral</td><td>Shipped systems, scope, business outcomes, domain depth.</td><td>Prior level plus interview evidence; negotiation band.</td></tr>
            <tr><td>Expert / research</td><td>Publications, production impact, technical direction,稀缺 domain.</td><td>Specialist track; scope and scarcity drive premium.</td></tr>
          </tbody>
        </table>
        <h3>Do not compare headline packages across markets</h3>
        <p>China packages often mix base, performance bonus, equity/long-term incentive and sometimes allowances. US packages often weight RSUs more heavily. Tax, cost of living, vesting and liquidity differ. Normalize currency and time horizon before comparing.</p>
        <div class="callout"><strong>Level names are not portable.</strong> A Tencent T10, Alibaba P7 or ByteDance 2-2 does not map cleanly to Google L5 or Meta E5. Compare scope, decision rights and expected outcomes, not labels.</div>
        <h3>The interview difference</h3>
        <ul>
          <li>Written or online assessments may filter earlier and more aggressively.</li>
          <li>Technical depth can be paired with business or operations scenarios.</li>
          <li>Cross-time-zone panels are common for global product teams.</li>
          <li>HR and values conversations can materially affect level and package.</li>
        </ul>
        <h3>Questions for a China-market offer</h3>
        <ul>
          <li>How is the bonus funded and what has the actual payout been?</li>
          <li>Is the equity liquid, and what event would create liquidity?</li>
          <li>How many months of base are guaranteed versus performance-linked?</li>
          <li>What are the expected working hours and weekend expectations during launches?</li>
          <li>Is the level a terminal band or is promotion expected within a fixed window?</li>
        </ul>
      `,
      zh: `
        <h3>三扇门，不同证据</h3>
        <table class="table-in-modal">
          <thead><tr><th>轨道</th><th>主要证据</th><th>常见校准方式</th></tr></thead>
          <tbody>
            <tr><td>校招</td><td>实习、竞赛、科研、基础编码能力。</td><td>潜力与可培养性；职级通常固定。</td></tr>
            <tr><td>社招</td><td>已交付系统、职责范围、业务结果、领域深度。</td><td>过往职级加面试证据；存在谈判带宽。</td></tr>
            <tr><td>专家/研究</td><td>论文、生产影响、技术方向、稀缺领域。</td><td>专家通道；范围与稀缺性决定溢价。</td></tr>
          </tbody>
        </table>
        <h3>不要跨市场直接比较头条总包</h3>
        <p>中国方案常混合基本工资、绩效奖金、股权/长期激励，有时还有补贴。美国方案通常股权权重更高。税制、生活成本、归属与流动性均不同，比较前先统一币种与时间口径。</p>
        <div class="callout"><strong>职级名称不可直接移植。</strong> 腾讯 T10、阿里 P7 或字节 2-2 不能简单映射到 Google L5 或 Meta E5。比较职责范围、决策权与预期结果，而不是标签。</div>
        <h3>面试差异</h3>
        <ul>
          <li>笔试或在线测评可能更早、更激进地筛选。</li>
          <li>技术深度可能结合业务或运营场景。</li>
          <li>全球产品团队常见跨时区面试官。</li>
          <li>HR 与价值观沟通可能实质影响职级和方案。</li>
        </ul>
        <h3>面对中国市场 offer 的问题</h3>
        <ul>
          <li>奖金如何计提？过去实际发放多少？</li>
          <li>股权是否可流动？什么事件会创造流动性？</li>
          <li>多少个月基本工资有保障，多少与绩效挂钩？</li>
          <li>发布期实际工作时间和周末预期是什么？</li>
          <li>该职级是终点带宽，还是需要在固定窗口内晋升？</li>
        </ul>
      `,
      fr: `
        <h3>Trois portes, trois types de preuves</h3>
        <table class="table-in-modal">
          <thead><tr><th>Voie</th><th>Preuves principales</th><th>Calibration</th></tr></thead>
          <tbody>
            <tr><td>Campus</td><td>Stages, concours, recherche, fondamentaux.</td><td>Potentiel ; niveau souvent fixe.</td></tr>
            <tr><td>Latéral</td><td>Systèmes livrés, périmètre, résultats, expertise.</td><td>Niveau antérieur + entretiens ; marge de négociation.</td></tr>
            <tr><td>Expert / recherche</td><td>Publications, impact production, direction technique.</td><td>Voie spécialiste ; rareté et périmètre.</td></tr>
          </tbody>
        </table>
        <h3>Ne pas comparer les packages bruts entre marchés</h3>
        <p>Les packages chinois mélangent souvent base, bonus, actions/incentive et parfois allocations. Les packages américains accordent plus de poids aux RSU. Fiscalité, coût de vie, vesting et liquidité diffèrent.</p>
        <div class="callout"><strong>Les niveaux ne sont pas portables.</strong> Tencent T10, Alibaba P7 ou ByteDance 2-2 ne correspondent pas directement à Google L5 ou Meta E5. Comparez périmètre, droits de décision et résultats attendus.</div>
        <h3>La différence d'entretien</h3>
        <ul>
          <li>Tests écrits ou en ligne parfois plus précoces.</li>
          <li>Profondeur technique combinée à des scénarios business.</li>
          <li>Panels multi-fuseaux fréquents.</li>
          <li>RH et valeurs peuvent influencer niveau et package.</li>
        </ul>
        <h3>Questions pour une offre en Chine</h3>
        <ul>
          <li>Comment le bonus est-il financé et versé réellement ?</li>
          <li>Les actions sont-elles liquides, et quel événement créerait la liquidité ?</li>
          <li>Combien de mois de base sont garantis ?</li>
          <li>Quelles attentes d'horaires et de week-end en période de lancement ?</li>
          <li>Le niveau est-il terminal ou une promotion est-elle attendue dans un délai fixe ?</li>
        </ul>
      `
    }
  }
];

export const getResource = (id) => RESOURCES.find((resource) => resource.id === id);
