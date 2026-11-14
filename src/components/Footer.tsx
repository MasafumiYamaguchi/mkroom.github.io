import s from "./Footer.module.css";
import ui from "../styles/ui.module.css";

const Footer = () => (
  <footer className={s.footer}>
    <div className={`${ui.shell} ${s.inner}`}>
      <span>© 2026 Masafumi Yamaguchi</span>
      <span>This site is built with Gridra UI</span>
    </div>
  </footer>
);

export default Footer;
