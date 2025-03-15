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
    <div className="body-container relative items-center justify-center min-h-screen">
      <div
        className="bg-[url(./assets/NewMK_bold_transparent.png)] bg-cover bg-center absolute w-128 h-128 opacity-30"
        id="background"
      >
        <span className="invisible">
          This is a div aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </span>
      </div>
      <div className="grid-overlay"></div>
      <div className="body-content absolute grid grid-cols-9 grid-rows-7 gap-4 p-0">
        <div className=" flex justify-center items-center col-span-9 text-7xl pt-10">
          Blog
        </div>
        <div className="bloglist col-start-3 col-span-5 row-start-2 row-span-6 pt-20">
          <hr />
          <ul>
            {articles()?.map((article) => (
              <li key={article.id}>
                <a href={`/blog_list/${article.id}`}>
                  <h2 className="text-4xl text-left text-white">
                    {article.title}
                  </h2>
                </a>
                <p className="text-lg text-left text-white">
                  {article.publishedAt}
                </p>
                <hr />
              </li>
            )) || <p>Loading...</p>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog_main;
