import "./Footer.css";

import xImg from "../assets/x.png";
import instagramImg from "../assets/instagram.png";
import githubImg from "../assets/github.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer-content ">
        <p className="footer-section">&nbsp</p>
        <p className="footer-section copyright">© 2026 Masafumi Yamaguchi</p>
        <nav className="footer-section">
          <ul className="flex space-x-4">
            <li>
              <a href="https://x.com/markun4649_">
                <img src={xImg} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ymgc_games">
                <img src={instagramImg} />
              </a>
            </li>
            <li>
              <a href="https://github.com/MasafumiYamaguchi">
                <img src={githubImg} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
