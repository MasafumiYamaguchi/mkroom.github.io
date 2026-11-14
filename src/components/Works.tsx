import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHead from "./SectionHead";
import WorkStatus from "./WorkStatus";
import { works } from "../data/works";
import s from "./Works.module.css";
import ui from "../styles/ui.module.css";

const Works = () => {
  const [active, setActive] = useState(0);
  const w = works[active];

  return (
    <section id="works" className={ui.section}>
      <SectionHead label="Works" count={works.length} />
      <div className={`${ui.fill} ${s.works}`}>
        <div className={s.grid}>
          {works.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              className={`${s.card}${i === active ? ` ${s.active}` : ""}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className={s.top}>
                <span className={s.glyph} aria-hidden="true" />
                <span className={s.name}>{item.name}</span>
                <WorkStatus status={item.status} />
              </span>
              <span className={s.category}>{item.category}</span>
              <span className={s.desc}>{item.summary}</span>
            </button>
          ))}
        </div>

        <aside className={s.detail} aria-live="polite">
          <span className={s.cat}>{w.category}</span>
          <h3>{w.name}</h3>
          <p>{w.lead}</p>
          <dl className={s.kv}>
            <div>
              <dt>STATUS</dt>
              <dd>{w.status.label}</dd>
            </div>
            <div>
              <dt>ROLE</dt>
              <dd>{w.role}</dd>
            </div>
          </dl>
          <div className={s.chips}>
            {w.stack.map((tech) => (
              <span key={tech} className={s.chip}>
                {tech}
              </span>
            ))}
          </div>
          <Link className={`${ui.btn} ${ui.wide}`} to={`/works/${w.slug}`}>
            詳細を見る →
          </Link>
        </aside>
      </div>
    </section>
  );
};

export default Works;
