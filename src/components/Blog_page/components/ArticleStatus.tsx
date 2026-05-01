type ArticleStatusProps = {
  kind: "loading" | "error" | "notFound";
};

const messages = {
  error: "記事の読み込みに失敗しました。",
  loading: "Loading...",
  notFound: "記事が見つかりません。",
};

const ArticleStatus = ({ kind }: ArticleStatusProps) => {
  const colorClass = kind === "error" ? "text-red-500" : "text-white";

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p className={`${colorClass} text-xl`}>{messages[kind]}</p>
    </div>
  );
};

export default ArticleStatus;
