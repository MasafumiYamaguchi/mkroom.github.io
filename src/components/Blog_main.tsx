import "./Blog_main.css";
import { createResource } from "solid-js";

const fetchArticles = async () => {
  try {
    const res = await fetch("https://qy1xbd702u.microcms.io/api/v1/blogs", {
      headers: {
        "X-API-KEY": "0ODwuxIMvPx84Gh8g9sIcjlCJBViDJZ7hUke",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("Fetched articles:", data);
    return data.contents;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};

const Blog_main = () => {
  const [articles] = createResource(fetchArticles);

  return (
    <div className="body-container relative flex flex-col items-center justify-start min-h-screen">
      <div
        className="bg-[url(./assets/NewMK_bold_transparent.png)] bg-cover bg-center fixed w-128 h-128 opacity-30"
        id="background"
      >
        <span className="invisible">
          This is a div aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </span>
      </div>
      <div className="grid-overlay"></div>

      {/* タイトル部分 */}
      <div className="w-full flex justify-center items-center mt-10 mb-4">
        <h1 className="text-7xl md:text-7xl sm:text-5xl text-white">Blog</h1>
      </div>

      {/* コンテンツ部分 - absoluteを削除し、フレックスボックスに変更 */}
      <div className="body-content w-full md:w-4/5 lg:w-3/5 px-4 sm:px-6 mt-2 md:mt-10">
        <div className="bloglist w-full">
          <hr />
          <ul>
            {articles()?.map((article) => (
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
            )) || <p className="text-white text-center py-4">Loading...</p>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog_main;
