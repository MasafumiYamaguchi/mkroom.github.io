import "./Footer.css";

import xImg from "../assets/x.png";
import instagramImg from "../assets/instagram.png";
import githubImg from "../assets/github.png";
import slashImg from "../assets/slash.png";

const Footer = () => {
  return (
    <div className="footer-root">
      <div className="slash-container z-10 absolute flex left-0 self-start w-full h-full overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <img
            key={i}
            src={slashImg}
            alt="Slash"
            className="h-full w-full opacity-8 object-cover"
          />
        ))}
      </div>

      <div className="footer-container">
        <hr />

        <div className="footer-content">
          <p className="footer-section">&nbsp;</p>
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
    </div>
  );
};

export default Footer;
