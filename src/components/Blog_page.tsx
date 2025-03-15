import { Component } from "solid-js";
import "./Blog_page.css";
import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";
import backgroundLogo from "../assets/NewMK_bold_transparent.png"; // 画像を直接インポート

const fetchArticle = async (id) => {
  try {
    const res = await fetch(
      `https://qy1xbd702u.microcms.io/api/v1/blogs/${id}`,
      {
        headers: {
          "X-API-KEY": "0ODwuxIMvPx84Gh8g9sIcjlCJBViDJZ7hUke",
        },
      }
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
  const [article] = createResource(() => params.id, fetchArticle);

  return (
    <div className="body-container relative items-center justify-center min-h-screen">
      <div
        className="absolute w-128 h-128 opacity-30 bg-cover bg-center"
        id="background"
        style={{ "background-image": `url(${backgroundLogo})` }}
      >
        <span className="invisible">Background element</span>
      </div>
      <div className="grid-overlay"></div>

      {article.loading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-white text-xl">Loading...</p>
        </div>
      ) : article.error ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-red-500 text-xl">記事の読み込みに失敗しました。</p>
        </div>
      ) : article() ? (
        <div className=" w-full px-4 py-16">
          <div className="blog-body-content bg-black bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg">
            <h1>{article().title}</h1>
            <p className="text-gray-400 mb-6">
              {new Date(article().publishedAt).toLocaleDateString("ja-JP")}
            </p>
            <div className="content" innerHTML={article().content}></div>
          </div>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-white text-xl">記事が見つかりません。</p>
        </div>
      )}
    </div>
  );
};

export default Blog_page;
