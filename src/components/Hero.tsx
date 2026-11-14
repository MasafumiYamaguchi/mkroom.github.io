import { Link } from "react-router-dom";
import DotWave from "./DotWave";
import { GITHUB_URL } from "../data/site";

const Hero = () => (
  <section className="hero">
    <DotWave />
    <div className="hero-copy">
      <h1>
        Masafumi
        <br />
        Yamaguchi
      </h1>
      <p className="hero-sub">Web, AI agent Engineer</p>
      <div className="hero-actions">
        <Link className="btn primary" to={{ pathname: "/", hash: "#works" }}>
          View Works
        </Link>
        <a
          className="btn"
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
