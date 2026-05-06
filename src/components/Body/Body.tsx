import { useEffect, useState } from "react";
import "./Body.css";
import Aboutme from "./components/Aboutme";
import BackgroundLayer from "./components/BackgroundLayer";
import BlogPreview, { type Article } from "./components/BlogPreview";
import WorkPreview from "./components/WorkPreview";

import {
  fetchArticles,
  fetchZennArticles,
  type ZennArticle,
} from "../function/articles";

const Body = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [zennArticles, setZennArticles] = useState<ZennArticle[]>([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
    fetchZennArticles().then(setZennArticles);
  }, []);

  return (
    <div className="body-container relative flex-col items-center justify-center">
      <BackgroundLayer />
      <Aboutme />
      <WorkPreview />
      <BlogPreview articles={articles} zennArticles={zennArticles} />
    </div>
  );
};

export default Body;
