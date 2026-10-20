const ja = (title, prompt, context, probe, framework) => ({
  title: { ja: title },
  prompt: { ja: prompt },
  context: { ja: context },
  probe: { ja: probe },
  framework: { ja: framework }
});

export const JA_PROMPTS = [
  {
    id: "ja-b-uncertain-decision",
    locale: "ja",
    category: "behavioral",
    track: "behavioral",
    companies: ["sony", "rakuten", "softbank", "hitachi"],
    difficulty: "core",
    minutes: 4,
    ...ja(
      "情報が不完全な中の意思決定",
      "情報が不完全な状態で決断した経験を教えてください。何を決め、どの証拠が判断を変えましたか？",
      "面接官は、完璧な情報を待つ姿勢ではなく、不確実性下の判断と学習速度を見ています。",
      "判断を誤った場合のコストは何でしたか？どのシグナルが出たら方針を変えますか？",
      "欠けている情報 → 可逆/不可逆の利害 → 判断基準 → 実行結果 → 方針を変えるシグナル、の順で答える。"
    ),
    sourceIds: ["sonyCareers", "rakutenCareers", "techInterviewHandbook"]
  },
  {
    id: "ja-b-quality-deadline",
    locale: "ja",
    category: "behavioral",
    track: "behavioral",
    companies: ["nintendo", "sony", "hitachi"],
    difficulty: "core",
    minutes: 4,
    ...ja(
      "品質と納期が衝突したとき",
      "品質基準と納期が衝突した経験を教えてください。何を守り、何を削り、関係者にどう説明しましたか？",
      "任天堂やソニーのような製品企業では、単に納期を守る力ではなく、品質を守るために範囲を設計する力が問われます。",
      "削った範囲は誰に影響しましたか？その判断を後から検証できる証拠は何でしたか？",
      "制約 → 守る品質基準 → 削る範囲 → 関係者との合意 → 検証結果 → 次回の再発防止。"
    ),
    sourceIds: ["nintendoCareers", "sonyCareers", "openwork"]
  },
  {
    id: "ja-b-cross-team",
    locale: "ja",
    category: "behavioral",
    track: "behavioral",
    companies: ["sony", "softbank", "rakuten"],
    difficulty: "stretch",
    minutes: 5,
    ...ja(
      "権限なしでチームを動かす",
      "正式な権限がない状態で、複数チームの方向を変えた経験を教えてください。抵抗は何で、どう納得させましたか？",
      "大企業では、職位ではなく証拠と信頼で合意を作る力が重要です。",
      "最も反対した人は誰で、その異議から何を学びましたか？",
      "関係者整理 → 当初の立場 → 証拠/試作 → 譲歩と修正 → 合意 → 採用指標。"
    ),
    sourceIds: ["sonyCareers", "softbankCareers", "techInterviewHandbook"]
  },
  {
    id: "ja-b-customer-discovery",
    locale: "ja",
    category: "behavioral",
    track: "behavioral",
    companies: ["rakuten", "cyberagent", "softbank"],
    difficulty: "core",
    minutes: 4,
    ...ja(
      "顧客の本当の課題を見つけた経験",
      "ユーザーインタビューやデータから、当初の想定と異なる課題を発見した経験を教えてください。どう検証しましたか？",
      "プロダクト職では、要望をそのまま作るのではなく、行動と文脈から課題を再定義できるかが見られます。",
      "最初の仮説は何で、どの証拠がそれを否定しましたか？",
      "仮説 → 観察/インタビュー → 矛盾する証拠 → 課題の再定義 → 小さな検証 → 事業指標。"
    ),
    sourceIds: ["rakutenCareers", "cyberagentCareers", "techInterviewHandbook"]
  },
  {
    id: "ja-t-high-traffic-api",
    locale: "ja",
    category: "technical",
    track: "technical",
    companies: ["rakuten", "softbank", "cyberagent"],
    difficulty: "core",
    minutes: 5,
    ...ja(
      "高トラフィックAPIの設計",
      "1秒あたり数万リクエストを受けるAPIを設計してください。可用性、整合性、レイテンシのトレードオフを説明してください。",
      "スケールの数字だけでなく、障害時の挙動とデータ整合性の境界を説明できるかを見ています。",
      "リージョン障害が起きたとき、どの操作を継続し、どれを止めますか？",
      "要件とSLO → API境界 → データモデル → キャッシュ/キュー → 障害分離 → 監視と切り戻し。"
    ),
    sourceIds: ["rakutenCareers", "systemDesignPrimer", "techInterviewHandbook"]
  },
  {
    id: "ja-t-recommendation-quality",
    locale: "ja",
    category: "technical",
    track: "technical",
    companies: ["rakuten", "cyberagent", "sony"],
    difficulty: "stretch",
    minutes: 5,
    ...ja(
      "推薦品質をどう測るか",
      "新しい推薦モデルを導入します。オフライン評価、オンライン実験、長期指標をどう組み合わせて判断しますか？",
      "CTRだけを最大化する罠を理解し、ユーザー価値と事業価値の両方を測れるかを見ています。",
      "新しいモデルがCTRを上げたが継続率を下げた場合、どう判断しますか？",
      "目的関数 → オフライン評価 → 実験設計 → ガードレール指標 → 長期影響 → ロールアウト判断。"
    ),
    sourceIds: ["rakutenCareers", "cyberagentCareers", "levels"]
  },
  {
    id: "ja-t-embedded-debug",
    locale: "ja",
    category: "technical",
    track: "technical",
    companies: ["nintendo", "hitachi", "sony"],
    difficulty: "core",
    minutes: 5,
    ...ja(
      "実機だけで再現する不具合",
      "実験室では再現せず、特定の実機環境だけで発生する不具合を調査した経験を説明してください。",
      "組込みでは、ソフト、ハード、環境の境界を切り分ける能力が重要です。",
      "設計、製造、環境のどの要因をどう切り分けましたか？",
      "症状 → 再現条件 → 計測 → 仮説分割 → 最小再現 → 根本原因 → 再発防止。"
    ),
    sourceIds: ["nintendoCareers", "hitachiCareers", "openwork"]
  },
  {
    id: "ja-s-payment-system",
    locale: "ja",
    category: "system",
    track: "system",
    companies: ["rakuten", "softbank"],
    difficulty: "core",
    minutes: 6,
    ...ja(
      "決済システムの整合性設計",
      "オンライン決済システムを設計してください。二重課金、障害時の不整合、監査証跡をどう扱いますか？",
      "決済では可用性だけでなく、監査可能性と冪等性が重要です。",
      "決済APIがタイムアウトしたとき、クライアントとサーバーはそれぞれ何をすべきですか？",
      "業務要件 → 状態遷移 → 冪等キー → トランザクション境界 → 補償処理 → 監査と監視。"
    ),
    sourceIds: ["rakutenCareers", "systemDesignPrimer", "levels"]
  },
  {
    id: "ja-s-ml-platform",
    locale: "ja",
    category: "system",
    track: "system",
    companies: ["pfn", "softbank", "cyberagent"],
    difficulty: "stretch",
    minutes: 6,
    ...ja(
      "大規模モデルの推論基盤",
      "大規模言語モデルの推論基盤を設計してください。レイテンシ、コスト、可用性、モデル更新をどう両立しますか？",
      "GPUの個別最適ではなく、キュー、バッチ、キャッシュ、監視を含むシステム全体を見られるかが焦点です。",
      "トラフィックが急増したとき、何を優先して落としますか？",
      "SLO → 推論経路 → バッチ/キャッシュ → オートスケール → モデル更新 → 障害時の縮退。"
    ),
    sourceIds: ["pfnCareers", "softbankCareers", "systemDesignPrimer"]
  },
  {
    id: "ja-s-industrial-iot",
    locale: "ja",
    category: "system",
    track: "system",
    companies: ["hitachi", "sony", "softbank"],
    difficulty: "stretch",
    minutes: 6,
    ...ja(
      "産業IoTのデータ基盤",
      "工場や鉄道から大量のセンサーデータが届く環境を想定してください。遅延、欠損、安全性をどう扱うデータ基盤を設計しますか？",
      "OTとITの境界、現場の制約、誤検知のコストを理解しているかを見ています。",
      "ネットワークが不安定な現場で、どの処理をエッジに残しますか？",
      "現場制約 → データ分類 → エッジ処理 → 取り込み → 品質監視 → 異常検知 → 運用と保守。"
    ),
    sourceIds: ["hitachiCareers", "sonyCareers", "openwork"]
  }
];
