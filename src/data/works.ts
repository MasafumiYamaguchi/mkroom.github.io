export type Tone = "green" | "blue" | "yellow";

export type WorkSection = {
  title: string;
  body?: string;
  packages?: { name: string; desc: string }[];
};

export type Work = {
  slug: string;
  name: string;
  /** 一覧カード・詳細ページのタグ表示 */
  category: string;
  status: { label: string; tone: Tone };
  /** 一覧カードの説明文 */
  summary: string;
  /** 詳細パネル・詳細ページのリード文 */
  lead: string;
  role: string;
  period: string;
  stack: string[];
  /** PROPERTIES に追加で出す行 */
  extra?: { label: string; value: string }[];
  links: { label: string; href?: string }[];
  sections: WorkSection[];
};

export const works: Work[] = [
  {
    slug: "gridra-ui",
    name: "Gridra UI",
    category: "LIBRARY",
    status: { label: "公開・開発中", tone: "green" },
    summary: "高密度でパネル中心の UI を作る React コンポーネントライブラリ。",
    lead: "高密度でパネル中心のインターフェースを作るための、React ファーストなコンポーネントライブラリ。テーマは CSS 変数トークンで切り替え可能。このサイト自体も Gridra UI で組んでいます。",
    role: "設計・実装・ドキュメント",
    period: "[開始時期] -",
    stack: ["React", "TypeScript", "CSS Variables", "npm"],
    extra: [{ label: "THEMES", value: "5 プリセット" }],
    links: [
      { label: "GITHUB" },
      { label: "NPM" },
      { label: "DOCS" },
    ],
    sections: [
      {
        title: "なぜ作ったか",
        body: "[作り始めたきっかけ、既存ライブラリに感じていた不満、目指したデザインの方向性]",
      },
      {
        title: "構成",
        body: "依存方向は react → headless → core。見た目と DOM の組み立て、状態・操作・アクセシビリティ、フレームワーク非依存のヘルパーを層ごとに分けています。",
        packages: [
          {
            name: "@gridra-ui/react",
            desc: "コンポーネントとインタラクション層",
          },
          {
            name: "@gridra-ui/headless",
            desc: "状態・操作 Hook、ARIA 属性、イベントと ref の合成",
          },
          {
            name: "@gridra-ui/core",
            desc: "フレームワーク非依存の ID・ジオメトリ型・状態ヘルパー",
          },
          {
            name: "@gridra-ui/theme",
            desc: "CSS 変数トークンと 5 つのテーマプリセット",
          },
        ],
      },
      {
        title: "工夫した点",
        body: "[headless 層の分離、CSS 変数によるテーマ切替、キャンバス操作の Hook 設計など、技術的に推したいポイント]",
      },
      {
        title: "苦労した点・学んだこと",
        body: "[API 設計の見直しや移行対応など、詰まったところとどう乗り越えたか]",
      },
    ],
  },
  {
    slug: "esp-html-ui",
    name: "esp-html-ui",
    category: "LIBRARY / EMBEDDED",
    status: { label: "公開", tone: "green" },
    summary: "HTML/CSS から T-Display S3 向けの LVGL UI を生成。",
    lead: "HTML/CSS で書いた UI を、T-Display S3 向けの LVGL UI に変換して生成するライブラリ。",
    role: "[役割]",
    period: "[開始時期] -",
    stack: ["HTML", "CSS", "LVGL"],
    links: [{ label: "GITHUB" }],
    sections: [
      { title: "なぜ作ったか", body: "[作り始めたきっかけ]" },
      { title: "工夫した点", body: "[技術的に推したいポイント]" },
      { title: "苦労した点・学んだこと", body: "[詰まったところとどう乗り越えたか]" },
    ],
  },
  {
    slug: "skyary",
    name: "Skyary",
    category: "WEB APP",
    status: { label: "開発中", tone: "blue" },
    summary: "Next.js で作っている SNS。ページごとに描画方式を使い分け。",
    lead: "Next.js で作っている SNS。ページごとに描画方式(SSR / SSG / CSR)を使い分けています。",
    role: "[役割]",
    period: "[開始時期] -",
    stack: ["Next.js", "TypeScript"],
    links: [{ label: "GITHUB" }, { label: "DEMO" }],
    sections: [
      { title: "なぜ作ったか", body: "[作り始めたきっかけ]" },
      { title: "工夫した点", body: "[描画方式の使い分けの方針など]" },
      { title: "苦労した点・学んだこと", body: "[詰まったところとどう乗り越えたか]" },
    ],
  },
  {
    slug: "ukibori",
    name: "Ukibori",
    category: "LIBRARY / GRAPHICS",
    status: { label: "PoC", tone: "yellow" },
    summary: "DOM はそのままに、見た目の「物理層」だけを担う UI ライブラリ。",
    lead: "DOM はそのままに、見た目の「物理層」だけを担う UI ライブラリ。",
    role: "[役割]",
    period: "[開始時期] -",
    stack: ["[技術スタック]"],
    links: [{ label: "GITHUB" }],
    sections: [
      { title: "なぜ作ったか", body: "[作り始めたきっかけ]" },
      { title: "工夫した点", body: "[技術的に推したいポイント]" },
      { title: "苦労した点・学んだこと", body: "[詰まったところとどう乗り越えたか]" },
    ],
  },
  {
    slug: "exdots",
    name: "Exdots",
    category: "INFRA / AGENT",
    status: { label: "PoC", tone: "yellow" },
    summary: "軽量 VM とデスクトップ VM を管理する基盤の設計と PoC。",
    lead: "軽量 VM とデスクトップ VM を管理する基盤の設計と PoC。",
    role: "設計・PoC 実装",
    period: "[開始時期] -",
    stack: ["[技術スタック]"],
    links: [{ label: "GITHUB" }],
    sections: [
      { title: "なぜ作ったか", body: "[作り始めたきっかけ]" },
      { title: "工夫した点", body: "[技術的に推したいポイント]" },
      { title: "苦労した点・学んだこと", body: "[詰まったところとどう乗り越えたか]" },
    ],
  },
  {
    slug: "the-other-internet",
    name: "The Other Internet",
    category: "HARDWARE",
    status: { label: "構想中", tone: "yellow" },
    summary: "マイコンを並べて、インターネットの階層構造を物理で再現する。",
    lead: "マイコンを並べて、インターネットの階層構造を物理で再現する。",
    role: "[役割]",
    period: "[開始時期] -",
    stack: ["[技術スタック]"],
    links: [],
    sections: [
      { title: "なぜ作ったか", body: "[作り始めたきっかけ]" },
      { title: "構想", body: "[どんなものを作りたいか]" },
    ],
  },
  {
    slug: "saikyo-kotoba-ranking",
    name: "最強言葉ランキング",
    category: "TEAM / GAME",
    status: { label: "完成", tone: "green" },
    summary: "大学授業の 5 人チームで作った、AI を使ったゲーム。",
    lead: "大学授業の 5 人チームで作った、AI を使ったゲーム。",
    role: "[担当箇所]",
    period: "[開発期間]",
    stack: ["[技術スタック]"],
    extra: [{ label: "TEAM", value: "5 人" }],
    links: [{ label: "GITHUB" }],
    sections: [
      { title: "なぜ作ったか", body: "[授業の概要・テーマ]" },
      { title: "工夫した点", body: "[担当箇所で工夫した点]" },
      { title: "苦労した点・学んだこと", body: "[チーム開発で学んだこと]" },
    ],
  },
];
