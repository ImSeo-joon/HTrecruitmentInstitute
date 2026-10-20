const tr = (en, zh, fr, ja) => ({ en, zh, fr: fr || en, ja: ja || en });

const EDU_TECH = tr(
  "Bachelor's in computer science, engineering or a related technical field, or equivalent shipped-work evidence.",
  "计算机、工程或相关技术本科，或等价的已交付项目证据。",
  "Licence en informatique, ingénierie ou domaine technique proche, ou preuves de livraison équivalentes.",
  "情報科学・工学または関連技術分野の学士、もしくは同等の実装・納品実績。"
);
const EDU_AI = tr(
  "Strong ML fundamentals; a master's or PhD is common in research teams, while applied teams also value reproducible engineering evidence.",
  "扎实的机器学习基础；研究团队常见硕士或博士，应用团队同样看重可复现的工程证据。",
  "Solides fondamentaux ML ; master ou doctorat courant en recherche, l'ingénierie reproductible étant aussi valorisée en équipe appliquée.",
  "機械学習の確かな基礎。研究チームでは修士・博士が一般的ですが、応用チームでは再現可能な実装実績も重視されます。"
);
const EDU_HW = tr(
  "Bachelor's or master's in electrical, electronic, information or mechanical engineering; lab, prototype or mass-production evidence matters.",
  "电子、电气、信息或机械工程本科/硕士；实验室、原型或量产证据很重要。",
  "Licence/master en génie électrique, électronique, informatique ou mécanique ; preuves de laboratoire, prototype ou production.",
  "電気・電子・情報・機械工学の学士または修士。研究室、試作、量産の実績が重要です。"
);
const EDU_PRODUCT = tr(
  "Bachelor's required; technical fluency and evidence of customer discovery matter more than the specific major.",
  "本科为基本要求；技术理解与客户发现证据比具体专业更重要。",
  "Licence requise ; l'aisance technique et la découverte client comptent plus que la spécialité.",
  "学士は基本条件。専攻よりも、技術理解と顧客課題の発見・検証の実績が重視されます。"
);

const MAJORS_TECH = tr(
  "Computer science, information engineering, software engineering, mathematics or a related field.",
  "计算机科学、信息工程、软件工程、数学或相关专业。",
  "Informatique, ingénierie de l'information, génie logiciel, mathématiques ou domaine proche.",
  "情報科学、情報工学、ソフトウェア工学、数学または関連分野。"
);
const MAJORS_AI = tr(
  "Machine learning, computer science, statistics, applied mathematics or a domain with strong computational research.",
  "机器学习、计算机、统计、应用数学或具有强计算研究背景的领域。",
  "Apprentissage automatique, informatique, statistiques, mathématiques appliquées ou domaine à forte composante computationnelle.",
  "機械学習、情報科学、統計学、応用数学、または計算研究の強い専門分野。"
);
const MAJORS_HW = tr(
  "Electrical engineering, electronic engineering, information engineering, materials or physics.",
  "电子工程、电气工程、信息工程、材料或物理。",
  "Génie électrique, électronique, ingénierie de l'information, matériaux ou physique.",
  "電気工学、電子工学、情報工学、材料工学、物理学など。"
);

const EXP_SENIOR = tr(
  "Typically 5+ years with independent ownership of a product or system boundary.",
  "通常 5 年以上，并独立负责过产品或系统边界。",
  "Généralement 5 ans et plus avec une autonomie sur un produit ou un périmètre système.",
  "通常5年以上。製品またはシステムの責任範囲を自立して担当した経験。"
);
const EXP_STAFF = tr(
  "Typically 8+ years with evidence of multi-team technical direction.",
  "通常 8 年以上，并有跨团队技术方向主导证据。",
  "Généralement 8 ans et plus avec preuve de direction technique multi-équipes.",
  "通常8年以上。複数チームをまたぐ技術方針の主導実績。"
);
const EXP_AI = tr(
  "Research or applied ML record with reproducible experiments, shipped models or peer-reviewed work.",
  "研究或应用 ML 履历，并有可复现实验、已上线模型或同行评审成果。",
  "Parcours recherche ou ML appliqué avec expériences reproductibles, modèles livrés ou travaux évalués.",
  "再現可能な実験、稼働モデル、査読論文のいずれかで示せる研究・応用MLの実績。"
);
const EXP_PRODUCT = tr(
  "Typically 4+ years in product ownership, with measurable user or business outcomes.",
  "通常 4 年以上的产品主导经验，并有可量化的用户或业务结果。",
  "Généralement 4 ans et plus en ownership produit, avec des résultats mesurables.",
  "通常4年以上のプロダクト責任経験。ユーザーまたは事業の成果を数値で示せること。"
);

export const JP_SOURCES = {
  sonyCareers: {
    title: tr("Sony — Careers", "索尼 — 招聘", "Sony — Carrières", "ソニー — 採用情報"),
    url: "https://www.sony.com/en/SonyInfo/Careers/",
    kind: "official",
    note: tr(
      "Official Sony Group careers portal for current openings, teams and application routes.",
      "索尼集团官方招聘门户，用于查看当前岗位、团队与申请路径。",
      "Portail carrières officiel du groupe Sony : postes, équipes et parcours de candidature.",
      "ソニーグループ公式の採用サイト。現在の募集職種、チーム、応募ルートを確認できます。"
    )
  },
  nintendoCareers: {
    title: tr("Nintendo — Careers", "任天堂 — 招聘", "Nintendo — Carrières", "任天堂 — 採用情報"),
    url: "https://www.nintendo.co.jp/jobs/index.html",
    kind: "official",
    note: tr(
      "Official Nintendo recruitment site covering development, engineering and corporate roles in Japan.",
      "任天堂官方招聘网站，覆盖日本地区的开发、工程与企业岗位。",
      "Site officiel de recrutement Nintendo pour les métiers développement, ingénierie et fonctions support au Japon.",
      "任天堂公式の採用サイト。日本国内の開発、エンジニアリング、コーポレート職を掲載しています。"
    )
  },
  rakutenCareers: {
    title: tr("Rakuten — Careers", "乐天 — 招聘", "Rakuten — Carrières", "楽天グループ — 採用情報"),
    url: "https://global.rakuten.com/corp/careers/",
    kind: "official",
    note: tr(
      "Official Rakuten Group careers portal for technology, product, data and global roles.",
      "乐天集团官方招聘门户，覆盖技术、产品、数据与全球岗位。",
      "Portail carrières officiel de Rakuten pour les métiers technologie, produit, data et internationaux.",
      "楽天グループ公式の採用サイト。技術、プロダクト、データ、グローバル職を掲載しています。"
    )
  },
  pfnCareers: {
    title: tr("Preferred Networks — Careers", "Preferred Networks — 招聘", "Preferred Networks — Carrières", "Preferred Networks — 採用情報"),
    url: "https://www.preferred.jp/en/careers",
    kind: "official",
    note: tr(
      "Official Preferred Networks careers page for deep learning, robotics, computing and research roles.",
      "Preferred Networks 官方招聘页，覆盖深度学习、机器人、计算与研究岗位。",
      "Page carrières officielle de Preferred Networks : deep learning, robotique, calcul et recherche.",
      "Preferred Networks公式の採用ページ。深層学習、ロボティクス、計算基盤、研究職を掲載しています。"
    )
  },
  cyberagentCareers: {
    title: tr("CyberAgent — Careers", "CyberAgent — 招聘", "CyberAgent — Carrières", "サイバーエージェント — 採用情報"),
    url: "https://www.cyberagent.co.jp/careers/",
    kind: "official",
    note: tr(
      "Official CyberAgent recruitment site for internet services, games, advertising and AI.",
      "CyberAgent 官方招聘网站，覆盖互联网服务、游戏、广告与 AI。",
      "Site officiel de recrutement CyberAgent : services internet, jeux, publicité et IA.",
      "サイバーエージェント公式の採用サイト。インターネットサービス、ゲーム、広告、AI領域を掲載しています。"
    )
  },
  softbankCareers: {
    title: tr("SoftBank — Careers", "软银 — 招聘", "SoftBank — Carrières", "ソフトバンク — 採用情報"),
    url: "https://www.softbank.jp/en/corp/careers/",
    kind: "official",
    note: tr(
      "Official SoftBank careers portal for telecommunications, cloud, AI and corporate technology roles.",
      "软银官方招聘门户，覆盖通信、云、AI 与企业技术岗位。",
      "Portail carrières officiel de SoftBank : télécoms, cloud, IA et technologie d'entreprise.",
      "ソフトバンク公式の採用サイト。通信、クラウド、AI、コーポレート技術職を掲載しています。"
    )
  },
  hitachiCareers: {
    title: tr("Hitachi — Careers", "日立 — 招聘", "Hitachi — Carrières", "日立製作所 — 採用情報"),
    url: "https://www.hitachi.com/ja-jp/recruit/",
    kind: "official",
    note: tr(
      "Official Hitachi recruitment site covering IT, energy, rail, industrial and digital engineering.",
      "日立官方招聘网站，覆盖 IT、能源、铁路、工业与数字工程。",
      "Site officiel de recrutement Hitachi : IT, énergie, rail, industrie et ingénierie numérique.",
      "日立製作所公式の採用サイト。IT、エネルギー、鉄道、産業、デジタルエンジニアリングを掲載しています。"
    )
  },
  openwork: {
    title: tr("OpenWork — Employee reviews", "OpenWork — 员工评价", "OpenWork — Avis employés", "OpenWork — 社員口コミ"),
    url: "https://www.openwork.jp/",
    kind: "reviews",
    note: tr(
      "Japanese employee-review platform used as a weak directional signal on workload, culture and selection experience.",
      "日本员工评价平台，仅作为工作强度、文化与选考体验的弱方向性信号。",
      "Plateforme japonaise d'avis salariés utilisée comme signal directionnel faible sur la charge, la culture et les entretiens.",
      "日本の社員口コミサイト。業務負荷、文化、選考体験の弱い方向性シグナルとしてのみ参照します。"
    )
  }
};

export const JP_PORTALS = {
  sony: "https://www.sony.com/en/SonyInfo/Careers/",
  nintendo: "https://www.nintendo.co.jp/jobs/index.html",
  rakuten: "https://global.rakuten.com/corp/careers/",
  pfn: "https://www.preferred.jp/en/careers",
  cyberagent: "https://www.cyberagent.co.jp/careers/",
  softbank: "https://www.softbank.jp/en/corp/careers/",
  hitachi: "https://www.hitachi.com/ja-jp/recruit/"
};

export const JP_COMPANIES = [
  {
    id: "sony",
    name: "Sony Group",
    nameJa: "ソニーグループ",
    legal: "Sony Group Corporation",
    mark: "S",
    color: "#8ea0ff",
    hq: "Tokyo",
    hubs: ["Tokyo", "Yokohama", "San Mateo", "London", "Bengaluru"],
    tracks: ["engineering", "ai", "hardware", "product", "data"],
    summary: tr(
      "A conglomerate spanning games, music, film, imaging sensors, electronics and entertainment technology. Hiring combines product craft with deep platform engineering and long-cycle hardware judgment.",
      "索尼横跨游戏、音乐、影视、影像传感器、电子与娱乐科技。招聘同时看重产品工艺、平台工程深度与长周期硬件判断。",
      "Un groupe présent dans le jeu, la musique, le cinéma, les capteurs d'image, l'électronique et les technologies du divertissement. Le recrutement combine artisanat produit, ingénierie de plateforme et jugement matériel de long cycle.",
      "ゲーム、音楽、映画、イメージセンサー、エレクトロニクス、エンターテインメント技術を横断するコングロマリット。プロダクトの作り込み、プラットフォーム工学の深さ、長い開発サイクルを見通すハードウェア判断が求められます。"
    ),
    orgs: [
      { name: tr("Game & Network Services", "游戏与网络服务", "Jeux et services réseau", "ゲーム＆ネットワークサービス"), focus: tr("PlayStation platform, network, studios", "PlayStation 平台、网络与工作室", "Plateforme PlayStation, réseau, studios", "PlayStationプラットフォーム、ネットワーク、スタジオ") },
      { name: tr("Imaging & Sensing", "影像与传感", "Imagerie et capteurs", "イメージング＆センシング"), focus: tr("CMOS sensors, computational imaging, automotive", "CMOS 传感器、计算影像与车载", "Capteurs CMOS, imagerie computationnelle, automobile", "CMOSセンサー、計算イメージング、車載") },
      { name: tr("Sony AI", "Sony AI", "Sony AI", "ソニーAI"), focus: tr("Games, imaging, robotics, music AI", "游戏、影像、机器人与音乐 AI", "Jeux, imagerie, robotique, IA musicale", "ゲーム、イメージング、ロボティクス、音楽AI") },
      { name: tr("Entertainment Technology", "娱乐技术", "Technologies du divertissement", "エンタテインメントテクノロジー"), focus: tr("Content pipelines, cloud, creators", "内容管线、云与创作者", "Pipelines de contenu, cloud, créateurs", "コンテンツパイプライン、クラウド、クリエイター") }
    ],
    payModel: tr(
      "Base salary + annual bonus + role-dependent allowances and equity for senior or specialist tracks. Global technology roles may follow local market bands.",
      "基本工资 + 年度奖金 + 岗位相关津贴；高级或专家序列可能含股权。全球技术岗位可能采用当地市场带宽。",
      "Salaire + bonus annuel + indemnités selon le poste, avec actions pour les filières senior ou expertes. Les rôles technologiques mondiaux suivent parfois les bandes locales.",
      "基本給＋年次賞与＋職種別手当。シニア・専門職は株式報酬を含む場合があります。グローバル技術職は現地市場の報酬帯に準じることがあります。"
    ),
    loop: [
      { name: tr("Recruiter screen", "招聘官初筛", "Échange recruteur", "採用担当面談"), detail: tr("Motivation, team fit, level calibration and location.", "动机、团队匹配、职级校准与地点。", "Motivation, adéquation équipe, calibration du niveau et lieu.", "志望動機、チーム適合、等級の目線合わせ、勤務地を確認。") },
      { name: tr("Technical interview", "技术面试", "Entretien technique", "技術面接"), detail: tr("Coding, domain depth or hardware/software trade-offs.", "编码、领域深度或软硬件权衡。", "Code, profondeur métier ou compromis matériel/logiciel.", "コーディング、専門領域の深さ、ソフト・ハードのトレードオフ。") },
      { name: tr("Team / cross-functional panel", "团队/跨职能小组", "Panel équipe / transverse", "チーム・部門横断面接"), detail: tr("Collaboration across product, engineering and content stakeholders.", "与产品、工程和内容利益相关者的协作。", "Collaboration entre produit, ingénierie et contenus.", "プロダクト、エンジニアリング、コンテンツ部門との協働。") },
      { name: tr("Executive / HR", "高管/HR", "Direction / RH", "役員・人事面接"), detail: tr("Long-term judgment, values and offer calibration.", "长期判断、价值观与 offer 校准。", "Jugement long terme, valeurs et calibration de l'offre.", "長期的な判断力、価値観、条件のすり合わせ。") }
    ],
    signals: [
      tr("Craft and finish quality.", "工艺与完成度。", "Qualité d'exécution et finition.", "作り込みと仕上げの品質。"),
      tr("Cross-domain product intuition.", "跨领域产品直觉。", "Intuition produit transverse.", "領域をまたぐプロダクト感覚。"),
      tr("Long-cycle technical judgment.", "长周期技术判断。", "Jugement technique de long cycle.", "長い開発サイクルを見通す技術判断。")
    ],
    payMix: { base: 70, bonus: 18, equity: 12 },
    sources: ["sonyCareers", "levels", "openwork"]
  },
  {
    id: "nintendo",
    name: "Nintendo",
    nameJa: "任天堂",
    legal: "Nintendo Co., Ltd.",
    mark: "N",
    color: "#ff6b6b",
    hq: "Kyoto",
    hubs: ["Kyoto", "Tokyo", "Redmond"],
    tracks: ["engineering", "hardware", "product", "ops"],
    summary: tr(
      "A game platform and software company built around long-lived franchises, integrated hardware-software design and unusually high quality bars. Hiring rewards craft, play-testing discipline and patient iteration.",
      "任天堂是以长寿命 IP、软硬件一体设计与极高质量标准为核心的平台与软件公司。招聘看重工艺、试玩验证纪律与耐心迭代。",
      "Plateforme et éditeur de jeux fondé sur des franchises durables, une conception matériel-logiciel intégrée et un niveau de qualité très élevé. Le recrutement valorise l'artisanat, la discipline de playtest et l'itération patiente.",
      "長く愛されるIP、ハードとソフトの一体設計、非常に高い品質基準を軸とするゲームプラットフォーム企業。作り込み、プレイテストの規律、粘り強い反復が評価されます。"
    ),
    orgs: [
      { name: tr("Entertainment Planning & Development", "娱乐企划与开发", "Planification et développement", "企画開発本部"), focus: tr("Game design, direction, production", "游戏设计、导演与制作", "Game design, direction, production", "ゲームデザイン、ディレクション、プロデュース") },
      { name: tr("Platform Technology", "平台技术", "Technologie plateforme", "プラットフォーム技術"), focus: tr("OS, online, developer tools", "操作系统、在线与开发工具", "OS, online, outils développeurs", "OS、オンライン、開発ツール") },
      { name: tr("Hardware Development", "硬件开发", "Développement matériel", "ハードウェア開発"), focus: tr("Console, accessories, reliability", "主机、配件与可靠性", "Console, accessoires, fiabilité", "本体、周辺機器、信頼性") }
    ],
    payModel: tr(
      "Base salary + bonus + allowances. Compensation is comparatively stable and less equity-led than at venture-backed technology firms.",
      "基本工资 + 奖金 + 津贴。薪酬相对稳定，股权比重低于风险投资支持的科技公司。",
      "Salaire + bonus + indemnités. Rémunération plus stable et moins axée sur les actions que dans les entreprises technologiques financées par le capital-risque.",
      "基本給＋賞与＋手当。ベンチャー支援のテック企業より安定性が高く、株式報酬の比重は相対的に小さめです。"
    ),
    loop: [
      { name: tr("Application / portfolio", "申请/作品集", "Candidature / portfolio", "書類・ポートフォリオ選考"), detail: tr("Evidence of craft, shipped work and role-specific depth.", "工艺、已交付作品与岗位深度证据。", "Preuves d'artisanat, de livraison et de profondeur métier.", "作り込み、納品実績、職種固有の深さを示す資料。") },
      { name: tr("Practical exercise", "实操考核", "Exercice pratique", "実技・課題"), detail: tr("Design, coding, debugging or production exercise.", "设计、编码、调试或制作练习。", "Conception, code, débogage ou exercice de production.", "設計、コーディング、デバッグ、制作課題。") },
      { name: tr("Team interviews", "团队面试", "Entretiens équipe", "チーム面接"), detail: tr("Collaboration, player empathy and iteration discipline.", "协作、玩家同理心与迭代纪律。", "Collaboration, empathie joueur et discipline d'itération.", "協働、遊び手への共感、反復の規律。") },
      { name: tr("Final / HR", "终面/HR", "Final / RH", "最終・人事面接"), detail: tr("Values, long-term fit and location.", "价值观、长期匹配与地点。", "Valeurs, adéquation long terme et lieu.", "価値観、長期的な適合、勤務地。") }
    ],
    signals: [
      tr("Player-first craft.", "玩家优先的工艺。", "Artisanat centré joueur.", "遊び手を起点にした作り込み。"),
      tr("Integrated hardware-software thinking.", "软硬件一体思维。", "Pensée matériel-logiciel intégrée.", "ハードとソフトを一体で考える力。"),
      tr("Patient, evidence-led iteration.", "耐心且以证据驱动的迭代。", "Itération patiente guidée par les preuves.", "根拠に基づく粘り強い反復。")
    ],
    payMix: { base: 78, bonus: 18, equity: 4 },
    sources: ["nintendoCareers", "openwork", "glassdoor"]
  },
  {
    id: "rakuten",
    name: "Rakuten Group",
    nameJa: "楽天グループ",
    legal: "Rakuten Group, Inc.",
    mark: "R",
    color: "#ff4d7d",
    hq: "Tokyo",
    hubs: ["Tokyo", "Osaka", "Singapore", "San Mateo"],
    tracks: ["engineering", "data", "product", "ai", "ops"],
    summary: tr(
      "A large internet ecosystem spanning e-commerce, fintech, mobile, travel and advertising. English is used widely internally, and hiring rewards ownership across a complex matrix of services.",
      "乐天是覆盖电商、金融科技、移动、旅行与广告的大型互联网生态。内部广泛使用英语，招聘看重在复杂服务矩阵中的主导能力。",
      "Un vaste écosystème internet couvrant e-commerce, fintech, mobile, voyage et publicité. L'anglais est largement utilisé en interne et le recrutement valorise l'ownership dans une matrice de services complexe.",
      "EC、フィンテック、モバイル、旅行、広告を横断する大規模インターネット生態系。社内では英語が広く使われ、複雑なサービス群を横断するオーナーシップが評価されます。"
    ),
    orgs: [
      { name: tr("Commerce & Marketing", "商务与营销", "Commerce et marketing", "コマース＆マーケティング"), focus: tr("Marketplace, ads, merchant systems", "市场平台、广告与商家系统", "Marketplace, publicité, systèmes marchands", "マーケットプレイス、広告、出店者システム") },
      { name: tr("Fintech", "金融科技", "Fintech", "フィンテック"), focus: tr("Payments, banking, securities, credit", "支付、银行、证券与信贷", "Paiements, banque, titres, crédit", "決済、銀行、証券、与信") },
      { name: tr("Mobile & Communications", "移动与通信", "Mobile et communications", "モバイル・通信"), focus: tr("Network, mobile experience, identity", "网络、移动体验与身份", "Réseau, expérience mobile, identité", "ネットワーク、モバイル体験、ID") },
      { name: tr("Rakuten AI", "Rakuten AI", "Rakuten AI", "楽天AI"), focus: tr("Search, recommendation, LLM applications", "搜索、推荐与 LLM 应用", "Recherche, recommandation, applications LLM", "検索、推薦、LLM応用") }
    ],
    payModel: tr(
      "Base salary + performance bonus + role-dependent equity or incentives. Global and specialist roles may use separate bands.",
      "基本工资 + 绩效奖金 + 岗位相关股权或激励。全球与专家岗位可能采用独立带宽。",
      "Salaire + bonus de performance + actions ou incentives selon le poste. Les rôles mondiaux et experts peuvent avoir des bandes distinctes.",
      "基本給＋業績賞与＋職種別の株式・インセンティブ。グローバル職や専門職は別の報酬帯の場合があります。"
    ),
    loop: [
      { name: tr("Recruiter screen", "招聘官初筛", "Échange recruteur", "採用担当面談"), detail: tr("English communication, motivation and level.", "英语沟通、动机与职级。", "Communication en anglais, motivation et niveau.", "英語でのコミュニケーション、志望動機、等級。") },
      { name: tr("Technical / case", "技术/案例轮", "Technique / cas", "技術・ケース面接"), detail: tr("Coding, system design, data or product case.", "编码、系统设计、数据或产品案例。", "Code, conception système, data ou cas produit.", "コーディング、システム設計、データ・プロダクトケース。") },
      { name: tr("Hiring manager", "用人经理", "Responsable recrutement", "採用責任者面接"), detail: tr("Scope, ownership and cross-service delivery.", "职责范围、主导性与跨服务交付。", "Périmètre, ownership et livraison transverse.", "責任範囲、オーナーシップ、サービス横断の遂行力。") },
      { name: tr("Executive / HR", "高管/HR", "Direction / RH", "役員・人事面接"), detail: tr("Values, compensation and global collaboration.", "价值观、薪酬与全球协作。", "Valeurs, rémunération et collaboration mondiale.", "価値観、報酬条件、グローバル協働。") }
    ],
    signals: [
      tr("High ownership in a matrix.", "矩阵组织中的高主导性。", "Forte ownership dans une matrice.", "マトリクス組織での高いオーナーシップ。"),
      tr("English-first collaboration.", "英语优先协作。", "Collaboration en anglais.", "英語を中心とした協働。"),
      tr("Speed with commercial judgment.", "兼顾速度与商业判断。", "Vitesse et jugement commercial.", "スピードと事業判断の両立。")
    ],
    payMix: { base: 72, bonus: 18, equity: 10 },
    sources: ["rakutenCareers", "levels", "openwork"]
  },
  {
    id: "pfn",
    name: "Preferred Networks",
    nameJa: "Preferred Networks",
    legal: "Preferred Networks, Inc.",
    mark: "PFN",
    color: "#71f0c8",
    hq: "Tokyo",
    hubs: ["Tokyo", "Tsukuba", "Berkeley"],
    tracks: ["ai", "engineering", "hardware", "product"],
    summary: tr(
      "A deep-tech company working on deep learning, robotics, computing infrastructure and industrial applications. Hiring is research-heavy and rewards strong fundamentals, reproducible experiments and end-to-end ownership.",
      "Preferred Networks 是深耕深度学习、机器人、计算基础设施与工业应用的深科技公司。招聘偏研究导向，看重扎实基础、可复现实验与端到端主导能力。",
      "Entreprise de deep tech active en apprentissage profond, robotique, infrastructure de calcul et applications industrielles. Le recrutement est orienté recherche et valorise les fondamentaux, les expériences reproductibles et l'ownership de bout en bout.",
      "深層学習、ロボティクス、計算基盤、産業応用に取り組むディープテック企業。研究色が強く、確かな基礎力、再現可能な実験、端から端までのオーナーシップが評価されます。"
    ),
    orgs: [
      { name: tr("Machine Learning Research", "机器学习研究", "Recherche ML", "機械学習研究"), focus: tr("Foundation models, vision, generative AI", "基础模型、视觉与生成式 AI", "Modèles de fondation, vision, IA générative", "基盤モデル、ビジョン、生成AI") },
      { name: tr("Computing Infrastructure", "计算基础设施", "Infrastructure de calcul", "計算基盤"), focus: tr("Distributed training, compilers, accelerators", "分布式训练、编译器与加速器", "Entraînement distribué, compilateurs, accélérateurs", "分散学習、コンパイラ、アクセラレータ") },
      { name: tr("Robotics", "机器人", "Robotique", "ロボティクス"), focus: tr("Perception, control, autonomous systems", "感知、控制与自主系统", "Perception, contrôle, systèmes autonomes", "知覚、制御、自律システム") },
      { name: tr("Industrial Solutions", "工业解决方案", "Solutions industrielles", "産業ソリューション"), focus: tr("Manufacturing, materials, energy", "制造、材料与能源", "Fabrication, matériaux, énergie", "製造、材料、エネルギー") }
    ],
    payModel: tr(
      "Base salary + bonus + equity for eligible roles. Research and specialist compensation can be calibrated above standard bands for exceptional evidence.",
      "基本工资 + 奖金 + 符合条件岗位的股权。研究与专家岗位可因突出证据高于标准带宽。",
      "Salaire + bonus + actions selon le poste. La rémunération recherche et expert peut dépasser les bandes standard pour des preuves exceptionnelles.",
      "基本給＋賞与＋対象職種の株式報酬。研究・専門職は卓越した実績に応じて標準帯を上回る調整があり得ます。"
    ),
    loop: [
      { name: tr("Research screen", "研究初筛", "Sélection recherche", "研究面談"), detail: tr("Papers, repositories, experiments and problem taste.", "论文、代码库、实验与问题品味。", "Articles, dépôts, expériences et goût du problème.", "論文、リポジトリ、実験、問題設定のセンス。") },
      { name: tr("Technical deep dive", "技术深挖", "Approfondissement technique", "技術深掘り"), detail: tr("ML fundamentals, systems or hardware depth.", "ML 基础、系统或硬件深度。", "Fondamentaux ML, systèmes ou matériel.", "ML基礎、システム、ハードウェアの深さ。") },
      { name: tr("Practical / research talk", "实操/研究报告", "Exercice / exposé recherche", "実装課題・研究発表"), detail: tr("Reproduce an idea, critique a method or present prior work.", "复现想法、评析方法或展示既有工作。", "Reproduire une idée, critiquer une méthode ou présenter un travail.", "アイデアの再現、手法の批評、過去研究の発表。") },
      { name: tr("Founder / lead", "创始人/负责人", "Fondateur / lead", "経営・リード面談"), detail: tr("Ambiguity, long-horizon judgment and team fit.", "不确定性、长期判断与团队匹配。", "Ambiguïté, jugement long terme et adéquation.", "不確実性への判断、長期視点、チーム適合。") }
    ],
    signals: [
      tr("Reproducible research evidence.", "可复现的研究证据。", "Preuves de recherche reproductibles.", "再現可能な研究実績。"),
      tr("Strong first-principles fundamentals.", "扎实的第一性原理基础。", "Fondamentaux solides.", "確かな基礎力と原理からの思考。"),
      tr("End-to-end system ownership.", "端到端系统主导。", "Ownership système de bout en bout.", "端から端までのシステム責任。")
    ],
    payMix: { base: 68, bonus: 12, equity: 20 },
    sources: ["pfnCareers", "levels", "openwork"]
  },
  {
    id: "cyberagent",
    name: "CyberAgent",
    nameJa: "サイバーエージェント",
    legal: "CyberAgent, Inc.",
    mark: "CA",
    color: "#ffcf5c",
    hq: "Tokyo",
    hubs: ["Tokyo", "Osaka", "Fukuoka"],
    tracks: ["ai", "engineering", "product", "data"],
    summary: tr(
      "An internet company spanning advertising, media, games and AI. Its culture rewards speed, experimentation and visible product impact, with increasing investment in foundation models and applied AI.",
      "CyberAgent 是覆盖广告、媒体、游戏与 AI 的互联网公司。文化强调速度、实验与可见产品影响，并持续加大基础模型与应用 AI 投入。",
      "Entreprise internet active dans la publicité, les médias, les jeux et l'IA. Sa culture valorise la vitesse, l'expérimentation et l'impact produit visible, avec un investissement croissant dans les modèles de fondation.",
      "広告、メディア、ゲーム、AIを横断するインターネット企業。スピード、実験、目に見えるプロダクト成果を重視し、基盤モデルと応用AIへの投資を拡大しています。"
    ),
    orgs: [
      { name: tr("AI Lab", "AI 实验室", "Laboratoire IA", "AI Lab"), focus: tr("Foundation models, multimodal, agents", "基础模型、多模态与智能体", "Modèles de fondation, multimodal, agents", "基盤モデル、マルチモーダル、エージェント") },
      { name: tr("Internet Advertising", "互联网广告", "Publicité internet", "インターネット広告"), focus: tr("Ad tech, measurement, creative automation", "广告技术、测量与创意自动化", "Ad tech, mesure, automatisation créative", "アドテク、計測、クリエイティブ自動化") },
      { name: tr("Game & Media", "游戏与媒体", "Jeux et médias", "ゲーム・メディア"), focus: tr("Mobile games, streaming, content", "移动游戏、流媒体与内容", "Jeux mobiles, streaming, contenus", "モバイルゲーム、配信、コンテンツ") }
    ],
    payModel: tr(
      "Base salary + performance bonus + role-dependent incentives. AI specialist and senior engineering roles may receive separate market adjustments.",
      "基本工资 + 绩效奖金 + 岗位相关激励。AI 专家与高级工程岗位可能有独立市场调整。",
      "Salaire + bonus de performance + incentives selon le poste. Les profils IA et ingénierie senior peuvent recevoir des ajustements de marché.",
      "基本給＋業績賞与＋職種別インセンティブ。AI専門職やシニアエンジニアは別途市場調整がある場合があります。"
    ),
    loop: [
      { name: tr("Recruiter screen", "招聘官初筛", "Échange recruteur", "採用担当面談"), detail: tr("Motivation, speed of learning and role fit.", "动机、学习速度与岗位匹配。", "Motivation, vitesse d'apprentissage et adéquation.", "志望動機、学習速度、職種適合。") },
      { name: tr("Technical interview", "技术面试", "Entretien technique", "技術面接"), detail: tr("Coding, ML depth or product analytics.", "编码、ML 深度或产品分析。", "Code, profondeur ML ou analytique produit.", "コーディング、MLの深さ、プロダクト分析。") },
      { name: tr("Practical assignment", "实操任务", "Exercice pratique", "実技課題"), detail: tr("Build, analyze or present a realistic case.", "构建、分析或展示真实案例。", "Construire, analyser ou présenter un cas réaliste.", "現実的な課題の実装・分析・発表。") },
      { name: tr("Manager / executive", "经理/高管", "Manager / direction", "マネージャー・役員面接"), detail: tr("Ownership, speed and business impact.", "主导性、速度与业务影响。", "Ownership, vitesse et impact business.", "オーナーシップ、スピード、事業インパクト。") }
    ],
    signals: [
      tr("Speed with visible impact.", "速度与可见影响。", "Vitesse et impact visible.", "スピードと目に見える成果。"),
      tr("Experiment-driven product sense.", "实验驱动的产品判断。", "Sens produit guidé par l'expérimentation.", "実験から学ぶプロダクト感覚。"),
      tr("Applied AI depth.", "应用 AI 深度。", "Profondeur en IA appliquée.", "応用AIの深い実装力。")
    ],
    payMix: { base: 72, bonus: 18, equity: 10 },
    sources: ["cyberagentCareers", "openwork", "glassdoor"]
  },
  {
    id: "softbank",
    name: "SoftBank",
    nameJa: "ソフトバンク",
    legal: "SoftBank Corp.",
    mark: "SB",
    color: "#d7d9e0",
    hq: "Tokyo",
    hubs: ["Tokyo", "Osaka", "San Carlos", "London"],
    tracks: ["engineering", "ai", "product", "ops", "data"],
    summary: tr(
      "A telecommunications and technology group investing heavily in AI, cloud, enterprise services and next-generation infrastructure. Hiring blends carrier-scale reliability with ambitious new-business bets.",
      "软银是重投 AI、云、企业服务与下一代基础设施的通信科技集团。招聘兼具运营商级可靠性与大胆新业务探索。",
      "Groupe télécoms et technologie investissant massivement dans l'IA, le cloud, les services aux entreprises et les infrastructures de nouvelle génération. Le recrutement combine fiabilité à l'échelle opérateur et paris ambitieux.",
      "AI、クラウド、法人サービス、次世代インフラへ重点投資する通信・テクノロジーグループ。キャリア級の信頼性と大胆な新規事業の両立が求められます。"
    ),
    orgs: [
      { name: tr("AI & Cloud", "AI 与云", "IA et cloud", "AI・クラウド"), focus: tr("Compute, models, enterprise AI", "算力、模型与企业 AI", "Calcul, modèles, IA d'entreprise", "計算基盤、モデル、法人AI") },
      { name: tr("Mobile Network", "移动网络", "Réseau mobile", "モバイルネットワーク"), focus: tr("5G/6G, core network, reliability", "5G/6G、核心网与可靠性", "5G/6G, cœur de réseau, fiabilité", "5G/6G、コアネットワーク、信頼性") },
      { name: tr("Enterprise & Smart Society", "企业与智慧社会", "Entreprise et société connectée", "法人・スマート社会"), focus: tr("DX, IoT, robotics, public sector", "数字化、IoT、机器人与公共部门", "DX, IoT, robotique, secteur public", "DX、IoT、ロボティクス、公共領域") }
    ],
    payModel: tr(
      "Base salary + bonus + role-dependent allowances. Specialist AI and cloud roles may have market-adjusted bands and long-term incentives.",
      "基本工资 + 奖金 + 岗位相关津贴。AI 与云专家岗位可能有市场调整带宽与长期激励。",
      "Salaire + bonus + indemnités selon le poste. Les profils IA et cloud peuvent avoir des bandes ajustées et des incentives long terme.",
      "基本給＋賞与＋職種別手当。AI・クラウド専門職は市場調整された報酬帯や長期インセンティブの場合があります。"
    ),
    loop: [
      { name: tr("Application screen", "申请筛选", "Sélection", "書類選考"), detail: tr("Experience, domain fit and motivation.", "经验、领域匹配与动机。", "Expérience, adéquation domaine et motivation.", "経験、領域適合、志望動機。") },
      { name: tr("Technical / case", "技术/案例轮", "Technique / cas", "技術・ケース面接"), detail: tr("Engineering, cloud, AI or business design.", "工程、云、AI 或业务设计。", "Ingénierie, cloud, IA ou design business.", "エンジニアリング、クラウド、AI、事業設計。") },
      { name: tr("Cross-functional panel", "跨职能小组", "Panel transverse", "部門横断面接"), detail: tr("Stakeholder management and large-scale delivery.", "利益相关者管理与大规模交付。", "Gestion des parties prenantes et livraison à grande échelle.", "ステークホルダー管理と大規模遂行。") },
      { name: tr("Executive / HR", "高管/HR", "Direction / RH", "役員・人事面接"), detail: tr("Ambition, resilience and compensation.", "雄心、韧性与薪酬。", "Ambition, résilience et rémunération.", "志の高さ、粘り強さ、報酬条件。") }
    ],
    signals: [
      tr("Carrier-scale reliability.", "运营商级可靠性。", "Fiabilité à l'échelle opérateur.", "キャリア級の信頼性。"),
      tr("Ambition for new infrastructure.", "对新基础设施的雄心。", "Ambition pour les nouvelles infrastructures.", "新インフラへの高い志。"),
      tr("Partnership-heavy execution.", "重度依赖合作的执行。", "Exécution fondée sur les partenariats.", "パートナーシップ前提の遂行力。")
    ],
    payMix: { base: 74, bonus: 18, equity: 8 },
    sources: ["softbankCareers", "levels", "openwork"]
  },
  {
    id: "hitachi",
    name: "Hitachi",
    nameJa: "日立製作所",
    legal: "Hitachi, Ltd.",
    mark: "H",
    color: "#e36f5a",
    hq: "Tokyo",
    hubs: ["Tokyo", "Hitachi", "Yokohama", "Santa Clara"],
    tracks: ["engineering", "ai", "hardware", "ops", "data"],
    summary: tr(
      "An industrial and digital conglomerate spanning energy, rail, IT, building systems and industrial automation. Hiring values systems thinking, safety, long-lived asset reliability and practical digital transformation.",
      "日立是覆盖能源、铁路、IT、建筑系统与工业自动化的工业数字集团。招聘看重系统思维、安全、长期资产可靠性与务实的数字化转型。",
      "Conglomérat industriel et numérique actif dans l'énergie, le rail, l'IT, les bâtiments et l'automatisation. Le recrutement valorise la pensée systémique, la sécurité, la fiabilité des actifs et la transformation numérique pragmatique.",
      "エネルギー、鉄道、IT、ビルシステム、産業オートメーションを横断する産業・デジタル企業。システム思考、安全性、長期資産の信頼性、実践的なデジタル変革が評価されます。"
    ),
    orgs: [
      { name: tr("Digital Systems & Services", "数字系统与服务", "Systèmes et services numériques", "デジタルシステム＆サービス"), focus: tr("Cloud, data platforms, enterprise IT", "云、数据平台与企业 IT", "Cloud, plateformes data, IT d'entreprise", "クラウド、データ基盤、企業IT") },
      { name: tr("Energy", "能源", "Énergie", "エネルギー"), focus: tr("Grid, nuclear, renewables, control", "电网、核能、可再生与控制", "Réseaux, nucléaire, renouvelables, contrôle", "電力網、原子力、再生可能エネルギー、制御") },
      { name: tr("Rail & Mobility", "铁路与移动", "Rail et mobilité", "鉄道・モビリティ"), focus: tr("Signalling, rolling stock, maintenance", "信号、车辆与维护", "Signalisation, matériel roulant, maintenance", "信号、車両、保守") },
      { name: tr("Industrial Digital", "工业数字", "Industrie numérique", "産業デジタル"), focus: tr("OT/IT, robotics, quality, supply chain", "OT/IT、机器人、质量与供应链", "OT/IT, robotique, qualité, supply chain", "OT/IT、ロボティクス、品質、サプライチェーン") }
    ],
    payModel: tr(
      "Base salary + bonus + role-dependent allowances. Compensation is relatively stable, with specialist and global roles using separate market bands.",
      "基本工资 + 奖金 + 岗位相关津贴。薪酬相对稳定，专家与全球岗位采用独立市场带宽。",
      "Salaire + bonus + indemnités selon le poste. Rémunération relativement stable, avec des bandes distinctes pour les experts et rôles mondiaux.",
      "基本給＋賞与＋職種別手当。報酬は比較的安定しており、専門職・グローバル職は別の市場報酬帯を用います。"
    ),
    loop: [
      { name: tr("Application screen", "申请筛选", "Sélection", "書類選考"), detail: tr("Domain experience, safety awareness and project history.", "领域经验、安全意识与项目履历。", "Expérience métier, sécurité et historique projet.", "領域経験、安全意識、プロジェクト実績。") },
      { name: tr("Technical interview", "技术面试", "Entretien technique", "技術面接"), detail: tr("Systems, software, hardware or industrial case.", "系统、软件、硬件或工业案例。", "Systèmes, logiciel, matériel ou cas industriel.", "システム、ソフト、ハード、産業ケース。") },
      { name: tr("Panel / stakeholder", "小组/利益相关者", "Panel / parties prenantes", "部門・関係者面接"), detail: tr("Delivery across business units and customer constraints.", "跨事业部交付与客户约束。", "Livraison entre unités et contraintes client.", "事業部横断の遂行と顧客制約への対応。") },
      { name: tr("HR / final", "HR/终面", "RH / final", "人事・最終面接"), detail: tr("Long-term fit, mobility and values.", "长期匹配、流动意愿与价值观。", "Adéquation long terme, mobilité et valeurs.", "長期的適合、異動可能性、価値観。") }
    ],
    signals: [
      tr("Safety and reliability first.", "安全与可靠性优先。", "Sécurité et fiabilité d'abord.", "安全と信頼性の優先。"),
      tr("Systems thinking across OT and IT.", "跨越 OT 与 IT 的系统思维。", "Pensée systémique OT/IT.", "OTとITをまたぐシステム思考。"),
      tr("Pragmatic industrial delivery.", "务实的工业交付。", "Livraison industrielle pragmatique.", "実践的な産業実装力。")
    ],
    payMix: { base: 80, bonus: 16, equity: 4 },
    sources: ["hitachiCareers", "openwork", "glassdoor"]
  }
];

export const JP_ROLES = [
  {
    id: "sony-senior-swe",
    companyId: "sony",
    title: tr("Senior Software Engineer", "高级软件工程师", "Ingénieur logiciel senior", "シニアソフトウェアエンジニア"),
    track: "engineering",
    level: "Senior",
    location: "東京 / 横浜",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [8, 11],
    total: [10, 14],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 2, meetings: 3 },
    education: EDU_TECH,
    majors: MAJORS_TECH,
    experience: EXP_SENIOR,
    skills: ["分散システム", "C++ / Go", "クラウド", "設計レビュー"],
    summary: tr(
      "Own a platform or service boundary across PlayStation, imaging or entertainment systems, balancing reliability with a long product lifecycle.",
      "负责 PlayStation、影像或娱乐系统中的一个平台或服务边界，在可靠性与长产品生命周期之间取得平衡。",
      "Piloter un périmètre plateforme ou service pour PlayStation, l'imagerie ou le divertissement, en équilibrant fiabilité et cycle produit long.",
      "PlayStation、イメージング、エンタメ基盤のいずれかでプラットフォーム・サービスの責任範囲を持ち、信頼性と長い製品ライフサイクルを両立します。"
    ),
    path: tr(
      "Common route: strong general engineering, one deep platform area, and evidence of shipping under hardware or content constraints.",
      "常见路径：扎实的通用工程能力、一个深入的平台领域，以及在硬件或内容约束下交付的证据。",
      "Parcours courant : ingénierie générale solide, un domaine plateforme approfondi et preuve de livraison sous contraintes matériel ou contenu.",
      "一般的なルートは、幅広いエンジニアリング力、特定プラットフォーム領域の深い経験、ハードやコンテンツ制約下での納品実績です。"
    ),
    screening: tr(
      "Expect coding, system design, reliability scenarios and questions about cross-team delivery.",
      "预计考察编码、系统设计、可靠性场景与跨团队交付。",
      "Attendez code, conception système, scénarios de fiabilité et livraison transverse.",
      "コーディング、システム設計、信頼性シナリオ、チーム横断の遂行に関する質問が想定されます。"
    ),
    sourceIds: ["sonyCareers", "levels", "openwork"]
  },
  {
    id: "sony-imaging-ai",
    companyId: "sony",
    title: tr("Imaging AI Engineer", "影像 AI 工程师", "Ingénieur IA imagerie", "イメージングAIエンジニア"),
    track: "ai",
    level: "Senior",
    location: "東京 / 横浜",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [7, 9.5],
    total: [9, 12],
    density: 3,
    rhythm: { focus: 5, hours: 3, oncall: 1, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["計算イメージング", "PyTorch", "信号処理", "組み込み推論"],
    summary: tr(
      "Develop models that improve image quality, sensing or camera pipelines, working close to silicon, optics and product teams.",
      "开发提升画质、感知或相机管线的模型，并与芯片、光学和产品团队紧密合作。",
      "Développer des modèles d'amélioration de l'image, de la perception ou du pipeline caméra, au plus près du silicium, de l'optique et du produit.",
      "画質、センシング、カメラパイプラインを改善するモデルを開発し、半導体、光学、プロダクトチームと密接に連携します。"
    ),
    path: tr(
      "Common route: computer vision or computational imaging, plus evidence that a model survived real sensor and latency constraints.",
      "常见路径：计算机视觉或计算影像，并有模型在真实传感器与延迟约束下存活的证据。",
      "Parcours courant : vision par ordinateur ou imagerie computationnelle, avec preuve de robustesse aux capteurs et contraintes de latence.",
      "コンピュータビジョンや計算イメージングに加え、実センサーと遅延制約の下でモデルを成立させた実績が一般的です。"
    ),
    screening: tr(
      "Expect ML fundamentals, image pipeline design, evaluation methodology and hardware-aware trade-offs.",
      "预计考察 ML 基础、图像管线设计、评估方法与硬件感知权衡。",
      "Attendez fondamentaux ML, conception de pipeline image, méthodologie d'évaluation et compromis matériel.",
      "ML基礎、画像パイプライン設計、評価手法、ハードウェアを意識したトレードオフが問われます。"
    ),
    sourceIds: ["sonyCareers", "levels", "openwork"]
  },
  {
    id: "sony-hardware-architect",
    companyId: "sony",
    title: tr("Hardware Systems Architect", "硬件系统架构师", "Architecte systèmes matériel", "ハードウェアシステムアーキテクト"),
    track: "hardware",
    level: "Staff",
    location: "東京 / 横浜",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [8, 11],
    total: [10, 14],
    density: 4,
    rhythm: { focus: 4, hours: 4, oncall: 2, meetings: 4 },
    education: EDU_HW,
    majors: MAJORS_HW,
    experience: EXP_STAFF,
    skills: ["SoC", "信号完整性", "熱設計", "量産"],
    summary: tr(
      "Set architecture and integration direction for imaging, game or sensing hardware, from prototype through mass production.",
      "为影像、游戏或传感硬件制定架构与集成方向，从原型走到量产。",
      "Définir l'architecture et l'intégration de matériel imagerie, jeu ou capteurs, du prototype à la production.",
      "イメージング、ゲーム、センシング向けハードウェアのアーキテクチャと統合方針を、試作から量産まで主導します。"
    ),
    path: tr(
      "Common route: board or SoC design, cross-discipline debugging, and ownership of a product that reached mass production.",
      "常见路径：板级或 SoC 设计、跨学科调试，以及主导产品进入量产。",
      "Parcours courant : conception carte ou SoC, débogage pluridisciplinaire et produit arrivé en production.",
      "ボードまたはSoC設計、領域横断のデバッグ、量産到達までの責任経験が典型です。"
    ),
    screening: tr(
      "Expect architecture trade-offs, failure analysis, supplier coordination and design-review evidence.",
      "预计考察架构权衡、失效分析、供应商协调与设计评审证据。",
      "Attendez compromis d'architecture, analyse de défaillance, coordination fournisseurs et revues de conception.",
      "アーキテクチャのトレードオフ、故障解析、サプライヤ調整、設計レビューの実績が確認されます。"
    ),
    sourceIds: ["sonyCareers", "openwork", "glassdoor"]
  },
  {
    id: "nintendo-game-engine",
    companyId: "nintendo",
    title: tr("Game Engine Engineer", "游戏引擎工程师", "Ingénieur moteur de jeu", "ゲームエンジンエンジニア"),
    track: "engineering",
    level: "Mid",
    location: "京都 / 東京",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [6.5, 9],
    total: [8, 11],
    density: 3,
    rhythm: { focus: 5, hours: 3, oncall: 1, meetings: 2 },
    education: EDU_TECH,
    majors: MAJORS_TECH,
    experience: EXP_SENIOR,
    skills: ["C++", "レンダリング", "最適化", "コンソール"],
    summary: tr(
      "Build and optimize engine systems that support Nintendo's first-party games, with a strong focus on frame time, memory and tool quality.",
      "构建并优化支持任天堂第一方游戏的引擎系统，重点关注帧时间、内存与工具质量。",
      "Construire et optimiser des systèmes moteur pour les jeux first-party Nintendo, avec un focus sur le temps de frame, la mémoire et les outils.",
      "任天堂第一方ゲームを支えるエンジン基盤を開発・最適化します。フレーム時間、メモリ、ツール品質が重視されます。"
    ),
    path: tr(
      "Common route: graphics, physics, tools or console engineering, plus a shipped game or engine contribution.",
      "常见路径：图形、物理、工具或主机工程，并有已发行游戏或引擎贡献。",
      "Parcours courant : graphisme, physique, outils ou consoles, avec un jeu livré ou une contribution moteur.",
      "グラフィックス、物理、ツール、コンソール開発に加え、発売済みゲームやエンジンへの貢献実績が典型です。"
    ),
    screening: tr(
      "Expect C++ depth, debugging, performance analysis and a practical engine or graphics exercise.",
      "预计考察 C++ 深度、调试、性能分析以及引擎或图形实操。",
      "Attendez profondeur C++, débogage, analyse de performance et exercice moteur ou graphique.",
      "C++の深さ、デバッグ、性能分析、エンジンまたはグラフィックスの実技課題が想定されます。"
    ),
    sourceIds: ["nintendoCareers", "openwork", "glassdoor"]
  },
  {
    id: "nintendo-platform-swe",
    companyId: "nintendo",
    title: tr("Platform Software Engineer", "平台软件工程师", "Ingénieur logiciel plateforme", "プラットフォームソフトウェアエンジニア"),
    track: "engineering",
    level: "Senior",
    location: "京都 / 東京",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [7, 9.5],
    total: [9, 12],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 2, meetings: 3 },
    education: EDU_TECH,
    majors: MAJORS_TECH,
    experience: EXP_SENIOR,
    skills: ["OS", "ネットワーク", "セキュリティ", "開発者ツール"],
    summary: tr(
      "Work on console OS, online services or developer tooling where reliability and backward compatibility matter for millions of players.",
      "参与主机 OS、在线服务或开发者工具，可靠性及向后兼容性会影响数百万玩家。",
      "Travailler sur l'OS console, les services en ligne ou les outils développeurs, où fiabilité et compatibilité touchent des millions de joueurs.",
      "コンソールOS、オンラインサービス、開発者ツールを担当。何百万人ものプレイヤーに影響する信頼性と後方互換性が重要です。"
    ),
    path: tr(
      "Common route: systems, embedded, networking or platform engineering with production reliability evidence.",
      "常见路径：系统、嵌入式、网络或平台工程，并有生产可靠性证据。",
      "Parcours courant : systèmes, embarqué, réseau ou plateforme avec preuve de fiabilité en production.",
      "システム、組み込み、ネットワーク、プラットフォーム領域で、本番信頼性の実績があるルートが一般的です。"
    ),
    screening: tr(
      "Expect systems coding, failure scenarios, compatibility thinking and security basics.",
      "预计考察系统编码、故障场景、兼容性思维与安全基础。",
      "Attendez code système, scénarios de panne, compatibilité et bases de sécurité.",
      "システムコーディング、障害シナリオ、互換性の考え方、セキュリティ基礎が確認されます。"
    ),
    sourceIds: ["nintendoCareers", "openwork", "glassdoor"]
  },
  {
    id: "nintendo-hardware-pm",
    companyId: "nintendo",
    title: tr("Hardware Program Manager", "硬件项目经理", "Chef de programme matériel", "ハードウェアプログラムマネージャー"),
    track: "hardware",
    level: "Senior",
    location: "京都",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [6.5, 9],
    total: [8, 11],
    density: 3,
    rhythm: { focus: 3, hours: 3, oncall: 1, meetings: 5 },
    education: EDU_HW,
    majors: MAJORS_HW,
    experience: EXP_SENIOR,
    skills: ["量産計画", "サプライチェーン", "品質", "クロスファンクショナル"],
    summary: tr(
      "Coordinate hardware development across design, manufacturing, quality and software teams, protecting both schedule and product quality.",
      "协调设计、制造、质量与软件团队的硬件开发，同时守住进度与产品质量。",
      "Coordonner le développement matériel entre conception, fabrication, qualité et logiciel, en protégeant délais et qualité.",
      "設計、製造、品質、ソフトウェアの各チームを調整し、スケジュールと製品品質の両方を守ります。"
    ),
    path: tr(
      "Common route: hardware engineering or supply-chain program management, with a product ramp from prototype to launch.",
      "常见路径：硬件工程或供应链项目管理，并有产品从原型到上市的经历。",
      "Parcours courant : ingénierie matériel ou gestion de programme supply chain, avec un lancement du prototype à la production.",
      "ハードウェア工学またはサプライチェーンPMの経験と、試作から上市までの立ち上げ実績が典型です。"
    ),
    screening: tr(
      "Expect risk registers, supplier scenarios, quality trade-offs and cross-team conflict resolution.",
      "预计考察风险清单、供应商场景、质量权衡与跨团队冲突处理。",
      "Attendez registres de risques, scénarios fournisseurs, compromis qualité et résolution de conflits.",
      "リスク管理表、サプライヤシナリオ、品質トレードオフ、チーム間コンフリクトの解決が問われます。"
    ),
    sourceIds: ["nintendoCareers", "openwork", "glassdoor"]
  },
  {
    id: "rakuten-backend",
    companyId: "rakuten",
    title: tr("Backend Engineer", "后端工程师", "Ingénieur backend", "バックエンドエンジニア"),
    track: "engineering",
    level: "Senior",
    location: "東京 / 大阪",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [7, 10],
    total: [9, 13],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 3, meetings: 3 },
    education: EDU_TECH,
    majors: MAJORS_TECH,
    experience: EXP_SENIOR,
    skills: ["Java / Go", "マイクロサービス", "Kubernetes", "決済"],
    summary: tr(
      "Design and operate services behind commerce, payments or identity systems that serve large transaction volumes across multiple markets.",
      "设计并运营支撑电商、支付或身份系统的服务，服务多市场的大规模交易量。",
      "Concevoir et exploiter des services commerce, paiement ou identité à fort volume sur plusieurs marchés.",
      "複数市場の大規模取引を支えるコマース、決済、ID基盤のサービスを設計・運用します。"
    ),
    path: tr(
      "Common route: distributed systems, database depth and ownership of a high-traffic service.",
      "常见路径：分布式系统、数据库深度与高流量服务主导经验。",
      "Parcours courant : systèmes distribués, bases de données et ownership d'un service à fort trafic.",
      "分散システム、データベースの深さ、高トラフィックサービスの責任経験が典型です。"
    ),
    screening: tr(
      "Expect coding, API and data-model design, failure handling and English communication.",
      "预计考察编码、API 与数据模型设计、故障处理与英语沟通。",
      "Attendez code, conception API et modèle de données, gestion des pannes et communication en anglais.",
      "コーディング、API・データモデル設計、障害対応、英語コミュニケーションが確認されます。"
    ),
    sourceIds: ["rakutenCareers", "levels", "openwork"]
  },
  {
    id: "rakuten-data-scientist",
    companyId: "rakuten",
    title: tr("Data Scientist", "数据科学家", "Data scientist", "データサイエンティスト"),
    track: "data",
    level: "Senior",
    location: "東京",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [6.5, 9],
    total: [8, 12],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 1, meetings: 4 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["因果推論", "SQL", "Python", "A/Bテスト"],
    summary: tr(
      "Turn marketplace, payments or advertising data into decisions, with experiments and models that survive real commercial constraints.",
      "把市场、支付或广告数据转化为决策，用能经受真实商业约束的实验与模型。",
      "Transformer les données marketplace, paiement ou publicité en décisions, avec des expériences et modèles robustes aux contraintes commerciales.",
      "マーケットプレイス、決済、広告データを意思決定に変える仕事。実際の事業制約に耐える実験とモデルが求められます。"
    ),
    path: tr(
      "Common route: statistics or ML, strong SQL, and a measurable product or business experiment.",
      "常见路径：统计或 ML、强 SQL，以及可量化的产品或业务实验。",
      "Parcours courant : statistiques ou ML, SQL solide et expérience produit ou business mesurable.",
      "統計・ML、強固なSQL、測定可能なプロダクト・事業実験の実績が典型です。"
    ),
    screening: tr(
      "Expect experiment design, causal reasoning, SQL/Python and a business case.",
      "预计考察实验设计、因果推理、SQL/Python 与商业案例。",
      "Attendez conception d'expérience, raisonnement causal, SQL/Python et cas business.",
      "実験設計、因果推論、SQL/Python、ビジネスケースが問われます。"
    ),
    sourceIds: ["rakutenCareers", "levels", "openwork"]
  },
  {
    id: "rakuten-product-manager",
    companyId: "rakuten",
    title: tr("Product Manager", "产品经理", "Chef de produit", "プロダクトマネージャー"),
    track: "product",
    level: "Senior",
    location: "東京",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [7, 10],
    total: [9, 13],
    density: 3,
    rhythm: { focus: 3, hours: 3, oncall: 1, meetings: 5 },
    education: EDU_PRODUCT,
    majors: MAJORS_TECH,
    experience: EXP_PRODUCT,
    skills: ["プロダクト戦略", "データ分析", "決済", "英日バイリンガル"],
    summary: tr(
      "Own a commerce, fintech or membership product across Japanese and global stakeholders, from discovery through measurable adoption.",
      "负责电商、金融科技或会员产品，协调日本与全球利益相关者，从发现走到可量化采用。",
      "Piloter un produit commerce, fintech ou fidélité avec des parties prenantes japonaises et mondiales, de la découverte à l'adoption mesurable.",
      "EC、フィンテック、会員サービスのプロダクトを担当し、日本とグローバルの関係者を結び、発見から採用指標まで導きます。"
    ),
    path: tr(
      "Common route: product ownership in internet services, plus bilingual delivery across engineering and business.",
      "常见路径：互联网服务产品主导，并有跨工程与业务的双语交付经验。",
      "Parcours courant : ownership produit internet et livraison bilingue entre ingénierie et business.",
      "インターネットサービスのプロダクト責任と、エンジニアリング・事業間のバイリンガル遂行経験が典型です。"
    ),
    screening: tr(
      "Expect product discovery, metrics, prioritization and a cross-market stakeholder case.",
      "预计考察产品发现、指标、优先级与跨市场利益相关者案例。",
      "Attendez découverte produit, métriques, priorisation et cas multi-marchés.",
      "プロダクト発見、指標、優先順位づけ、複数市場のステークホルダーケースが問われます。"
    ),
    sourceIds: ["rakutenCareers", "levels", "openwork"]
  },
  {
    id: "pfn-ml-research",
    companyId: "pfn",
    title: tr("Machine Learning Research Engineer", "机器学习研究工程师", "Ingénieur chercheur ML", "機械学習研究エンジニア"),
    track: "ai",
    level: "Senior",
    location: "東京 / つくば",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [9, 14],
    total: [12, 20],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 1, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["深層学習", "PyTorch", "分散学習", "論文実装"],
    summary: tr(
      "Advance foundation models, vision or generative methods and turn research into systems that run at industrial scale.",
      "推进基础模型、视觉或生成方法研究，并把研究转化为可工业规模运行的系统。",
      "Faire progresser les modèles de fondation, la vision ou les méthodes génératives, et transformer la recherche en systèmes à l'échelle industrielle.",
      "基盤モデル、ビジョン、生成手法を進展させ、研究成果を産業規模で動くシステムへ落とし込みます。"
    ),
    path: tr(
      "Common route: strong ML research with reproducible code, plus experience training or deploying large models.",
      "常见路径：扎实的 ML 研究、可复现代码，以及训练或部署大模型的经验。",
      "Parcours courant : recherche ML solide avec code reproductible et expérience d'entraînement ou déploiement de grands modèles.",
      "再現可能なコードを伴うML研究と、大規模モデルの学習・展開経験が典型です。"
    ),
    screening: tr(
      "Expect paper-level depth, implementation ability, experiment design and compute-aware trade-offs.",
      "预计考察论文级深度、实现能力、实验设计与算力感知权衡。",
      "Attendez profondeur niveau article, capacité d'implémentation, conception d'expériences et compromis de calcul.",
      "論文レベルの深さ、実装力、実験設計、計算資源を意識したトレードオフが問われます。"
    ),
    sourceIds: ["pfnCareers", "levels", "openwork"]
  },
  {
    id: "pfn-ml-infra",
    companyId: "pfn",
    title: tr("ML Infrastructure Engineer", "机器学习基础设施工程师", "Ingénieur infrastructure ML", "MLインフラエンジニア"),
    track: "engineering",
    level: "Senior",
    location: "東京",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [8, 12],
    total: [10, 16],
    density: 4,
    rhythm: { focus: 5, hours: 4, oncall: 2, meetings: 3 },
    education: EDU_TECH,
    majors: MAJORS_TECH,
    experience: EXP_SENIOR,
    skills: ["分散学習", "GPU", "コンパイラ", "Kubernetes"],
    summary: tr(
      "Build the compute, scheduling and tooling layer that lets research teams train and serve large models efficiently.",
      "构建计算、调度与工具层，让研究团队高效训练和服务大模型。",
      "Construire la couche de calcul, d'ordonnancement et d'outillage permettant d'entraîner et servir efficacement de grands modèles.",
      "研究チームが大規模モデルを効率的に学習・提供できるよう、計算、スケジューリング、ツール層を構築します。"
    ),
    path: tr(
      "Common route: distributed systems or HPC, GPU performance and production ML platform ownership.",
      "常见路径：分布式系统或 HPC、GPU 性能与生产 ML 平台主导经验。",
      "Parcours courant : systèmes distribués ou HPC, performance GPU et ownership de plateforme ML en production.",
      "分散システムまたはHPC、GPU性能、本番ML基盤の責任経験が典型です。"
    ),
    screening: tr(
      "Expect systems design, profiling, failure recovery and cluster-efficiency scenarios.",
      "预计考察系统设计、性能剖析、故障恢复与集群效率场景。",
      "Attendez conception système, profilage, reprise après panne et efficacité de cluster.",
      "システム設計、プロファイリング、障害復旧、クラスタ効率のシナリオが問われます。"
    ),
    sourceIds: ["pfnCareers", "levels", "openwork"]
  },
  {
    id: "pfn-robotics",
    companyId: "pfn",
    title: tr("Robotics Perception Engineer", "机器人感知工程师", "Ingénieur perception robotique", "ロボティクス知覚エンジニア"),
    track: "ai",
    level: "Senior",
    location: "東京 / つくば",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [7, 10],
    total: [9, 14],
    density: 4,
    rhythm: { focus: 4, hours: 4, oncall: 2, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["SLAM", "3Dビジョン", "ROS", "センサフュージョン"],
    summary: tr(
      "Build perception systems that let robots understand space, objects and uncertainty in real industrial environments.",
      "构建让机器人在真实工业环境中理解空间、物体与不确定性的感知系统。",
      "Construire des systèmes de perception permettant aux robots de comprendre l'espace, les objets et l'incertitude en environnement industriel.",
      "実産業環境でロボットが空間、物体、不確実性を理解するための知覚システムを構築します。"
    ),
    path: tr(
      "Common route: computer vision or robotics, sensor calibration and a system tested outside the lab.",
      "常见路径：计算机视觉或机器人、传感器标定，以及在实验室外测试过的系统。",
      "Parcours courant : vision ou robotique, calibration de capteurs et système testé hors laboratoire.",
      "コンピュータビジョンまたはロボティクス、センサキャリブレーション、実環境での検証経験が典型です。"
    ),
    screening: tr(
      "Expect geometry, probabilistic reasoning, sensor failure cases and a practical perception task.",
      "预计考察几何、概率推理、传感器故障案例与感知实操。",
      "Attendez géométrie, raisonnement probabiliste, défaillances capteurs et exercice de perception.",
      "幾何学、確率推論、センサ故障ケース、知覚の実技課題が想定されます。"
    ),
    sourceIds: ["pfnCareers", "levels", "openwork"]
  },
  {
    id: "cyberagent-llm",
    companyId: "cyberagent",
    title: tr("LLM Application Engineer", "大模型应用工程师", "Ingénieur applications LLM", "LLMアプリケーションエンジニア"),
    track: "ai",
    level: "Senior",
    location: "東京",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [7, 11],
    total: [9, 15],
    density: 4,
    rhythm: { focus: 4, hours: 4, oncall: 2, meetings: 3 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["LLM", "RAG", "評価設計", "Agent"],
    summary: tr(
      "Ship LLM-powered products for advertising, media or games, with evaluation, latency and safety treated as product requirements.",
      "为广告、媒体或游戏交付 LLM 产品，把评估、延迟与安全视为产品要求。",
      "Livrer des produits LLM pour la publicité, les médias ou les jeux, en traitant évaluation, latence et sécurité comme des exigences produit.",
      "広告、メディア、ゲーム向けのLLMプロダクトを届け、評価、遅延、安全性をプロダクト要件として扱います。"
    ),
    path: tr(
      "Common route: applied ML or backend engineering, plus evidence of an LLM feature that reached real users.",
      "常见路径：应用 ML 或后端工程，并有 LLM 功能触达真实用户的证据。",
      "Parcours courant : ML appliqué ou backend, avec preuve d'une fonctionnalité LLM arrivée à de vrais utilisateurs.",
      "応用MLまたはバックエンドに加え、実ユーザーに届いたLLM機能の実績が典型です。"
    ),
    screening: tr(
      "Expect retrieval design, evaluation methodology, failure handling and product trade-offs.",
      "预计考察检索设计、评估方法、故障处理与产品权衡。",
      "Attendez conception de retrieval, méthodologie d'évaluation, gestion des échecs et compromis produit.",
      "検索拡張設計、評価手法、失敗時の処理、プロダクトトレードオフが問われます。"
    ),
    sourceIds: ["cyberagentCareers", "openwork", "glassdoor"]
  },
  {
    id: "cyberagent-backend",
    companyId: "cyberagent",
    title: tr("Backend Engineer", "后端工程师", "Ingénieur backend", "バックエンドエンジニア"),
    track: "engineering",
    level: "Mid",
    location: "東京",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [6, 9],
    total: [8, 12],
    density: 4,
    rhythm: { focus: 4, hours: 4, oncall: 3, meetings: 3 },
    education: EDU_TECH,
    majors: MAJORS_TECH,
    experience: EXP_SENIOR,
    skills: ["Go", "データベース", "広告配信", "可用性"],
    summary: tr(
      "Build high-throughput services for advertising, media or games, with fast release cycles and direct product feedback.",
      "为广告、媒体或游戏构建高吞吐服务，保持快速发布与直接产品反馈。",
      "Construire des services à fort débit pour la publicité, les médias ou les jeux, avec des cycles rapides et un retour produit direct.",
      "広告、メディア、ゲーム向けの高スループットサービスを開発。短いリリースサイクルと直接的なプロダクトフィードバックが特徴です。"
    ),
    path: tr(
      "Common route: backend engineering in consumer internet, with performance and incident ownership.",
      "常见路径：消费互联网后端工程，并有性能与事故处理主导经验。",
      "Parcours courant : backend internet grand public, avec ownership performance et incidents.",
      "コンシューマーインターネットのバックエンド経験と、性能・インシデント対応の責任実績が典型です。"
    ),
    screening: tr(
      "Expect coding, database design, traffic spikes and a debugging exercise.",
      "预计考察编码、数据库设计、流量峰值与调试练习。",
      "Attendez code, conception de base de données, pics de trafic et exercice de débogage.",
      "コーディング、データベース設計、トラフィックスパイク、デバッグ課題が想定されます。"
    ),
    sourceIds: ["cyberagentCareers", "openwork", "glassdoor"]
  },
  {
    id: "softbank-cloud-engineer",
    companyId: "softbank",
    title: tr("Cloud Infrastructure Engineer", "云基础设施工程师", "Ingénieur infrastructure cloud", "クラウド基盤エンジニア"),
    track: "engineering",
    level: "Senior",
    location: "東京 / 大阪",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [7, 10],
    total: [9, 13],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 3, meetings: 3 },
    education: EDU_TECH,
    majors: MAJORS_TECH,
    experience: EXP_SENIOR,
    skills: ["Kubernetes", "ネットワーク", "可観測性", "セキュリティ"],
    summary: tr(
      "Design and operate cloud or AI infrastructure with carrier-grade availability, cost discipline and strong security boundaries.",
      "设计并运营具备运营商级可用性、成本纪律与强安全边界的云或 AI 基础设施。",
      "Concevoir et exploiter une infrastructure cloud ou IA à disponibilité opérateur, avec discipline de coût et frontières de sécurité fortes.",
      "キャリア級の可用性、コスト規律、強固なセキュリティ境界を備えたクラウド・AI基盤を設計・運用します。"
    ),
    path: tr(
      "Common route: cloud platform, network or SRE experience at meaningful scale.",
      "常见路径：有规模意义的云平台、网络或 SRE 经验。",
      "Parcours courant : plateforme cloud, réseau ou SRE à échelle significative.",
      "一定規模のクラウド基盤、ネットワーク、SRE経験が典型です。"
    ),
    screening: tr(
      "Expect architecture, incident response, capacity and security trade-offs.",
      "预计考察架构、事故响应、容量与安全权衡。",
      "Attendez architecture, réponse à incident, capacité et compromis de sécurité.",
      "アーキテクチャ、インシデント対応、容量、セキュリティのトレードオフが問われます。"
    ),
    sourceIds: ["softbankCareers", "levels", "openwork"]
  },
  {
    id: "softbank-ai-product",
    companyId: "softbank",
    title: tr("AI Product Manager", "AI 产品经理", "Chef de produit IA", "AIプロダクトマネージャー"),
    track: "product",
    level: "Senior",
    location: "東京",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [7, 10],
    total: [9, 14],
    density: 3,
    rhythm: { focus: 3, hours: 3, oncall: 1, meetings: 5 },
    education: EDU_PRODUCT,
    majors: MAJORS_TECH,
    experience: EXP_PRODUCT,
    skills: ["AIプロダクト", "法人DX", "評価", "事業設計"],
    summary: tr(
      "Turn AI capability into enterprise or consumer products, aligning model limits, operations and commercial outcomes.",
      "把 AI 能力转化为企业或消费产品，协调模型边界、运营与商业结果。",
      "Transformer les capacités IA en produits entreprise ou grand public, en alignant limites des modèles, opérations et résultats commerciaux.",
      "AIの能力を法人・コンシューマー向けプロダクトへ変え、モデルの限界、運用、事業成果を整合させます。"
    ),
    path: tr(
      "Common route: product ownership plus enough technical depth to challenge model and infrastructure trade-offs.",
      "常见路径：产品主导经验，加上足以挑战模型与基础设施权衡的技术深度。",
      "Parcours courant : ownership produit et profondeur technique suffisante pour challenger les compromis modèles/infrastructure.",
      "プロダクト責任経験に加え、モデル・基盤のトレードオフを議論できる技術的深さが典型です。"
    ),
    screening: tr(
      "Expect AI use-case selection, evaluation, adoption metrics and risk controls.",
      "预计考察 AI 场景选择、评估、采用指标与风险控制。",
      "Attendez sélection de cas d'usage IA, évaluation, métriques d'adoption et contrôles de risque.",
      "AIユースケース選定、評価、採用指標、リスク管理が問われます。"
    ),
    sourceIds: ["softbankCareers", "levels", "openwork"]
  },
  {
    id: "hitachi-industrial-ai",
    companyId: "hitachi",
    title: tr("Industrial AI Engineer", "工业 AI 工程师", "Ingénieur IA industrielle", "産業AIエンジニア"),
    track: "ai",
    level: "Senior",
    location: "東京 / 横浜",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [6, 8.5],
    total: [7.5, 11],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 2, meetings: 4 },
    education: EDU_AI,
    majors: MAJORS_AI,
    experience: EXP_AI,
    skills: ["異常検知", "時系列", "OTデータ", "MLOps"],
    summary: tr(
      "Apply machine learning to energy, rail or manufacturing systems where data is noisy, downtime is expensive and safety is non-negotiable.",
      "把机器学习应用到能源、铁路或制造系统，那里数据噪声大、停机成本高且安全不可妥协。",
      "Appliquer le machine learning à l'énergie, au rail ou à la fabrication, où les données sont bruitées, l'arrêt coûteux et la sécurité non négociable.",
      "ノイズの多いデータ、高い停止コスト、妥協できない安全性を持つエネルギー、鉄道、製造システムへ機械学習を適用します。"
    ),
    path: tr(
      "Common route: applied ML plus domain exposure to industrial sensors, control systems or maintenance.",
      "常见路径：应用 ML，加上工业传感器、控制系统或维护领域的暴露。",
      "Parcours courant : ML appliqué et exposition aux capteurs industriels, systèmes de contrôle ou maintenance.",
      "応用MLに加え、産業センサー、制御システム、保全領域の経験が典型です。"
    ),
    screening: tr(
      "Expect time-series modeling, data quality, deployment constraints and safety cases.",
      "预计考察时序建模、数据质量、部署约束与安全案例。",
      "Attendez modélisation temporelle, qualité des données, contraintes de déploiement et cas de sécurité.",
      "時系列モデリング、データ品質、展開制約、安全ケースが問われます。"
    ),
    sourceIds: ["hitachiCareers", "openwork", "glassdoor"]
  },
  {
    id: "hitachi-embedded",
    companyId: "hitachi",
    title: tr("Embedded Systems Engineer", "嵌入式系统工程师", "Ingénieur systèmes embarqués", "組込みシステムエンジニア"),
    track: "hardware",
    level: "Mid",
    location: "東京 / 日立",
    region: "JP",
    currency: "JPY",
    unit: "m",
    base: [5.5, 8],
    total: [7, 10],
    density: 3,
    rhythm: { focus: 4, hours: 3, oncall: 2, meetings: 3 },
    education: EDU_HW,
    majors: MAJORS_HW,
    experience: EXP_SENIOR,
    skills: ["C / C++", "RTOS", "制御", "機能安全"],
    summary: tr(
      "Develop embedded control and monitoring systems for rail, energy or industrial equipment with long service lives.",
      "为具有长服务周期的铁路、能源或工业设备开发嵌入式控制与监测系统。",
      "Développer des systèmes embarqués de contrôle et surveillance pour le rail, l'énergie ou l'équipement industriel à longue durée de vie.",
      "長い運用期間を持つ鉄道、エネルギー、産業機器向けの組込み制御・監視システムを開発します。"
    ),
    path: tr(
      "Common route: embedded C/C++, control systems, and debugging on real hardware.",
      "常见路径：嵌入式 C/C++、控制系统与真实硬件调试。",
      "Parcours courant : C/C++ embarqué, systèmes de contrôle et débogage sur matériel réel.",
      "組込みC/C++、制御システム、実機デバッグの経験が典型です。"
    ),
    screening: tr(
      "Expect concurrency, memory, hardware debugging and functional-safety thinking.",
      "预计考察并发、内存、硬件调试与功能安全思维。",
      "Attendez concurrence, mémoire, débogage matériel et pensée fonctionnelle de sécurité.",
      "並行処理、メモリ、ハードウェアデバッグ、機能安全の考え方が問われます。"
    ),
    sourceIds: ["hitachiCareers", "openwork", "glassdoor"]
  }
];

export const JA_ROLE_TITLES = {
  "google-senior-swe": "シニアソフトウェアエンジニア",
  "google-staff-ml": "スタッフ機械学習エンジニア",
  "google-senior-pm": "シニアプロダクトマネージャー",
  "google-data-scientist": "データサイエンティスト",
  "meta-senior-swe": "シニアソフトウェアエンジニア",
  "meta-data-scientist": "データサイエンティスト",
  "meta-product-designer": "プロダクトデザイナー",
  "amazon-sde-ii": "ソフトウェア開発エンジニア II",
  "amazon-applied-scientist": "応用科学者",
  "amazon-tpm-iii": "テクニカルプログラムマネージャー III",
  "amazon-data-engineer": "データエンジニア",
  "microsoft-senior-swe": "シニアソフトウェアエンジニア",
  "microsoft-cloud-architect": "クラウドソリューションアーキテクト",
  "microsoft-program-manager": "プログラムマネージャー",
  "apple-swe-ict4": "ソフトウェアエンジニア（ICT4）",
  "apple-silicon": "シリコン設計エンジニア",
  "apple-ml-engineer": "機械学習エンジニア",
  "netflix-senior-swe": "シニアソフトウェアエンジニア",
  "netflix-senior-ds": "シニアデータサイエンティスト",
  "netflix-product-manager": "プロダクトマネージャー",
  "nvidia-systems-swe": "システムソフトウェアエンジニア",
  "nvidia-dl-engineer": "深層学習エンジニア",
  "nvidia-asic": "ASIC設計エンジニア",
  "nvidia-compiler-engineer": "コンパイラエンジニア",
  "openai-research-engineer": "研究エンジニア",
  "openai-ml-engineer": "機械学習エンジニア",
  "openai-product-manager": "プロダクトマネージャー",
  "openai-research-scientist": "研究科学者",
  "anthropic-research-engineer": "研究エンジニア",
  "anthropic-safety-researcher": "安全性研究者",
  "anthropic-product-manager": "プロダクトマネージャー",
  "anthropic-product-engineer": "プロダクトエンジニア",
  "bytedance-backend": "バックエンドエンジニア",
  "bytedance-algorithm": "推薦アルゴリズムエンジニア",
  "bytedance-product": "プロダクトマネージャー",
  "bytedance-data-scientist": "データサイエンティスト",
  "tencent-backend": "バックエンドエンジニア",
  "tencent-game-engine": "ゲームエンジンエンジニア",
  "tencent-product-manager": "プロダクトマネージャー",
  "alibaba-cloud": "クラウドエンジニア",
  "alibaba-algorithm": "アルゴリズムエンジニア",
  "alibaba-data-scientist": "データサイエンティスト",
  "huawei-cloud-swe": "クラウドソフトウェアエンジニア",
  "huawei-ai-algorithm": "AIアルゴリズムエンジニア",
  "huawei-ic-design": "IC設計エンジニア",
  "huawei-product-manager": "プロダクトマネージャー",
  "xiaomi-android": "Androidエンジニア",
  "xiaomi-autonomous": "自動運転エンジニア",
  "xiaomi-product-manager": "プロダクトマネージャー",
  "baidu-llm": "大規模言語モデル研究員",
  "baidu-cloud-architect": "クラウドアーキテクト",
  "baidu-data-scientist": "データサイエンティスト",
  "jd-backend": "バックエンドエンジニア",
  "jd-supply-algo": "サプライチェーンアルゴリズムエンジニア",
  "jd-product-manager": "プロダクトマネージャー",
  "meituan-recommendation": "推薦システムエンジニア",
  "meituan-product": "プロダクトマネージャー",
  "meituan-data-scientist": "データサイエンティスト",
  "netease-game-engine": "ゲームエンジンエンジニア",
  "netease-data": "データアナリスト",
  "netease-product-manager": "プロダクトマネージャー",
  "dji-embedded": "組込みエンジニア",
  "dji-computer-vision": "コンピュータビジョンエンジニア",
  "dji-hardware-pm": "ハードウェアPM",
  "sensetime-cv": "コンピュータビジョン研究員",
  "sensetime-llm": "大規模モデル研究員",
  "sensetime-product-manager": "プロダクトマネージャー",
  "hkex-trading-engineer": "取引システムエンジニア",
  "hkex-market-data-pm": "マーケットデータPM",
  "hkex-data-scientist": "データサイエンティスト",
  "cathay-digital-pm": "デジタルプロダクトマネージャー",
  "cathay-operations-research": "オペレーションズリサーチアナリスト",
  "cathay-data-engineer": "データエンジニア",
  "mtr-asset-data": "資産データアナリスト",
  "mtr-digital-pm": "デジタルプロダクトマネージャー",
  "mtr-cybersecurity": "サイバーセキュリティエンジニア",
  "hangseng-mobile-engineer": "モバイルエンジニア",
  "hangseng-risk-ds": "リスクデータサイエンティスト",
  "hangseng-product-manager": "プロダクトマネージャー"
};
