type ArticleContentProps = {
  article: {
    content: string;
    publishedAt: string;
    title: string;
  };
};

const ArticleContent = ({ article }: ArticleContentProps) => {
  return (
    <div className=" w-full px-4 py-16">
      <div className="blog-body-content glass-panel-dark rounded-lg">
        <h1>{article.title}</h1>
        <p className="text-gray-400 mb-6">
          {new Date(article.publishedAt).toLocaleDateString("ja-JP")}
        </p>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      </div>
    </div>
  );
};

export default ArticleContent;
