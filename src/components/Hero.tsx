import { Link } from "react-router-dom";
import DotWave from "./DotWave";
import { GITHUB_URL } from "../data/site";
import s from "./Hero.module.css";
import ui from "../styles/ui.module.css";

const Hero = () => (
  <section className={`${ui.section} ${s.hero}`}>
    <DotWave />
    <div className={s.copy}>
      <h1 className={s.title}>
        Masafumi
        <br />
        Yamaguchi
      </h1>
      <p className={s.sub}>Web, AI agent Engineer</p>
      <div className={s.actions}>
        <Link className={`${ui.btn} ${ui.primary}`} to={{ pathname: "/", hash: "#works" }}>
          View Works
        </Link>
        <a
          className={ui.btn}
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
