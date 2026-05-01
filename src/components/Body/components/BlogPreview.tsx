export type Article = {
  id: string;
  title: string;
  publishedAt: string;
};

type BlogPreviewProps = {
  articles: Article[];
};

const BlogPreview = ({ articles }: BlogPreviewProps) => {
  return (
    <div className="fadein home-section">
      <div className="home-section-title">
        <a href="/blog_list" className="home-section-link">
          BLOG
        </a>
      </div>

      <div className="home-section-card">
        <div className="bloglist w-full">
          <hr />
          <ul>
            {articles.map((article) => (
              <li key={article.id} className="my-4">
                <a href={`/blog_list/${article.id}`}>
                  <h2 className="text-4xl text-left text-white">
                    {article.title}
                  </h2>
                </a>
                <p className="text-lg text-left text-white">
                  {article.publishedAt}
                </p>
                <hr className="mt-4" />
              </li>
            ))}
            {articles.length === 0 && (
              <p className="text-white text-center py-4">Loading...</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
