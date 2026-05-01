import "./Blog_main.css";
import { useEffect, useState } from "react";
import { fetchArticles } from "../function/articles";
import BlogList from "./components/BlogList";
import BlogListBackground from "./components/BlogListBackground";

const Blog_main = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <div className="body-container relative flex flex-col items-center justify-start min-h-screen">
      <BlogListBackground />
      <div className="w-full flex justify-center items-center mt-10 mb-4">
        <h1 className="text-7xl md:text-7xl sm:text-5xl text-white">Blog</h1>
      </div>
      <BlogList articles={articles} />
    </div>
  );
};

export default Blog_main;
