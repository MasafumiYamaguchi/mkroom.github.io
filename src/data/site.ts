export const GITHUB_URL = "https://github.com/MasafumiYamaguchi";
export const X_URL = "https://x.com/markun4649_";

export const profile = {
  rows: [
    { label: "NAME", value: "山口 真史 / Masafumi Yamaguchi" },
    { label: "HANDLE", value: "markun4649" },
    {
      label: "SCHOOL",
      value: "芝浦工業大学 工学部 情報通信工学課程 情報工学コース 3年",
    },
    { label: "FOCUS", value: "Web / AI エージェント / UI ライブラリ" },
    { label: "LIKES", value: "なにかをつくること [趣味]" },
  ],
  body: [
    "小さい頃から、割り箸ゴム銃を巨大化したり、マインクラフトで建築したりと、ものづくりばかりしていました。",
    "受験期にゲームを作ったことでプログラミングにのめり込み、情報系へ。",
    "大学では「公開すればすぐ誰にでも使ってもらえる」Web に惹かれ、いまは Web と AI エージェント開発を軸にしています。",
    "目標は、強みとなる技術領域を持ち、チームの中で安心してタスクを任せてもらえるエンジニアになることです。",
  ],
};

export type Activity = {
  date: string;
  title: string;
  summary: string;
  body: string;
};

export const activities: Activity[] = [
  {
    date: "2026.02",
    title: "技育祭に参加",
    summary: "学生エンジニアのイベントに参加するきっかけに",
    body: "学生エンジニアと話す楽しさを知ったイベント。ここから学生向けのエンジニアイベントに積極的に参加するようになりました。[印象に残ったこと]",
  },
  {
    date: "2026.06",
    title: "長期インターン開始",
    summary: "プロダクト開発部署で AI エージェント開発を担当",
    body: "プロダクト開発部署で AI エージェント開発を担当しています。[担当している内容・学んでいること]",
  },
  {
    date: "2026",
    title: "セキュリティ・キャンプ 2026 専門B",
    summary: "ツール周りの権限問題などを扱う",
    body: "ツール周りの権限問題などを扱いました。[印象に残ったこと・学んだこと]",
  },
  {
    date: "2026.10",
    title: "esp-html-ui を公開",
    summary: "GitHub で公開し X で告知",
    body: "esp-html-ui を GitHub で公開し、X で告知しました。[反響・振り返り]",
  },
  {
    date: "[日付]",
    title: "LT 登壇",
    summary: "[イベント名・スライドへのリンク]",
    body: "[イベント名・発表内容・スライドへのリンク]",
  },
];

export const nowPlaying = {
  title: "[曲名]",
  artist: "[アーティスト名]",
  album: "[アルバム名]",
  elapsed: "1:24",
  total: "3:41",
  progress: 0.38,
  href: "https://open.spotify.com/",
};

export const favorites = Array.from({ length: 8 }, () => ({
  title: "[曲名]",
  artist: "[アーティスト名]",
}));

export const contacts = [
  { label: "GITHUB", value: "MasafumiYamaguchi", href: GITHUB_URL },
  { label: "X", value: "@markun4649_", href: X_URL },
  { label: "MAIL", value: "[メールアドレス]", href: undefined as string | undefined },
];
