import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer-content ">
        <p className="footer-section">&nbsp</p>
        <p className="footer-section">© 2025 Masafumi Yamaguchi</p>
        <nav className="footer-section">
          <ul className="flex space-x-4">
            <li>
              <a href="https://x.com/markun4649_">
                <img src="src\assets\x.png" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ymgc_games">
                <img src="src\assets\instagram.png" />
              </a>
            </li>
            <li>
              <a href="https://github.com/MasafumiYamaguchi">
                <img src="src\assets\github.png" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
