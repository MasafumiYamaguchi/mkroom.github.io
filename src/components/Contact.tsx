import SectionHead from "./SectionHead";
import { contacts } from "../data/site";
import s from "./Contact.module.css";
import ui from "../styles/ui.module.css";

const Contact = () => (
  <section id="contact" className={`${ui.section} ${s.contact}`}>
    <SectionHead label="Contact" />
    <div className={`${ui.fill} ${s.grid}`}>
      {contacts.map((c) => {
        const inner = (
          <>
            <span className={s.label}>{c.label}</span>
            <span className={s.value}>{c.value}</span>
          </>
        );
        return c.href ? (
          <a
            key={c.label}
            className={s.cell}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {inner}
          </a>
        ) : (
          <div key={c.label} className={s.cell}>{inner}</div>
        );
      })}
    </div>
  </section>
);

export default Contact;
