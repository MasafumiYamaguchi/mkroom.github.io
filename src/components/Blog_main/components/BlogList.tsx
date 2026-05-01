type Article = {
  id: string;
  publishedAt: string;
  title: string;
};

type BlogListProps = {
  articles: Article[];
};

const BlogList = ({ articles }: BlogListProps) => {
  return (
    <div className="body-content relative z-10 w-full md:w-4/5 lg:w-3/5 px-4 sm:px-6 mt-2 md:mt-10">
      <div className="bloglist w-full glass-panel rounded-lg p-8">
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
  );
};

export default BlogList;
