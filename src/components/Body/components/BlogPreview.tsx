import backgroundLogo from "../../../assets/NewMK_bold_transparent.png";
import type { ZennArticle } from "../../function/articles";

export type Article = {
  id: string;
  title: string;
  publishedAt: string;
};

type BlogPreviewProps = {
  articles: Article[];
  zennArticles: ZennArticle[];
};

const BlogPreview = ({ articles, zennArticles }: BlogPreviewProps) => {
  return (
    <div className="blog-preview-section fadein">
      <img
        src={backgroundLogo}
        alt=""
        className="blog-preview-background-logo"
        aria-hidden="true"
      />
      <div className="title pb-10">
        <p className="text-5xl font-bold">BLOG</p>
      </div>

      <div className="blog-preview-list bloglist">
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
                {article.publishedAt.trim().split("T")[0]}
              </p>
              <hr className="mt-4" />
            </li>
          ))}
          {articles.length === 0 && (
            <p className="text-white text-center py-4">Loading...</p>
          )}
        </ul>
      </div>

      <div className="blog-preview-list mt-10">
        <div className="pb-6">
          <p className="text-4xl font-bold text-white text-left">Zenn</p>
        </div>
        <div className="zenn-card-grid">
          {zennArticles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="zenn-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="zenn-card-image"
              />
              <div className="zenn-card-body">
                <h2 className="zenn-card-title">{article.title}</h2>
                <p className="zenn-card-date">
                  {new Date(article.publishedAt).toLocaleDateString("ja-JP")}
                </p>
              </div>
            </a>
          ))}
          {zennArticles.length === 0 && (
            <p className="text-white text-center py-4">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
