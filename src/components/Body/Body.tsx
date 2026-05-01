import { useEffect, useState } from "react";
import "./Body.css";
import Aboutme from "./components/Aboutme";
import BackgroundLayer from "./components/BackgroundLayer";
import BlogPreview, { type Article } from "./components/BlogPreview";
import WorkPreview from "./components/WorkPreview";

import { fetchArticles } from "../function/articles";

const Body = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fadeinElements = document.querySelectorAll(".fadein");
    fadeinElements.forEach((element) => {
      element.classList.add("fade-in");
    });
  });

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <div className="body-container relative flex-col items-center justify-center">
      <BackgroundLayer />
      <Aboutme />
      <WorkPreview />
      <BlogPreview articles={articles} />
    </div>
  );
};

export default Body;
