import SectionHead from "./SectionHead";
import { contacts } from "../data/site";

const Contact = () => (
  <section id="contact">
    <SectionHead label="Contact" />
    <div className="contact">
      {contacts.map((c) => {
        const inner = (
          <>
            <span className="label">{c.label}</span>
            <span className="value">{c.value}</span>
          </>
        );
        return c.href ? (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {inner}
          </a>
        ) : (
          <div key={c.label}>{inner}</div>
        );
      })}
    </div>
  </section>
);

export default Contact;
