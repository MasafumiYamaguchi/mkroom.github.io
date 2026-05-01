import { useEffect, useState } from "react";
import "./Blog_page.css";
import { useParams } from "react-router-dom";
import ArticleContent from "./components/ArticleContent";
import ArticleStatus from "./components/ArticleStatus";
import BlogPageBackground from "./components/BlogPageBackground";

const fetchArticle = async (id) => {
  try {
    const res = await fetch(
      `https://qy1xbd702u.microcms.io/api/v1/blogs/${id}`,
      {
        headers: {
          "X-API-KEY": "0ODwuxIMvPx84Gh8g9sIcjlCJBViDJZ7hUke",
        },
      },
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
};

const Blog_page = () => {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!params.id) return;

    setLoading(true);
    setError(null);

    fetchArticle(params.id)
      .then(setArticle)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [params.id]);

  return (
    <div className="body-container relative items-center justify-center min-h-screen">
      <BlogPageBackground />
      {loading ? (
        <ArticleStatus kind="loading" />
      ) : error ? (
        <ArticleStatus kind="error" />
      ) : article ? (
        <ArticleContent article={article} />
      ) : (
        <ArticleStatus kind="notFound" />
      )}
    </div>
  );
};

export default Blog_page;
