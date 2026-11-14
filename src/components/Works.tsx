import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHead from "./SectionHead";
import WorkStatus from "./WorkStatus";
import { works } from "../data/works";

const Works = () => {
  const [active, setActive] = useState(0);
  const w = works[active];

  return (
    <section id="works">
      <SectionHead label="Works" count={works.length} />
      <div className="works">
        <div className="works-grid">
          {works.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              className={`card${i === active ? " is-active" : ""}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="card-top">
                <span className="glyph" aria-hidden="true" />
                <span className="name">{item.name}</span>
                <WorkStatus status={item.status} />
              </span>
              <span className="card-cat">{item.category}</span>
              <span className="card-desc">{item.summary}</span>
            </button>
          ))}
        </div>

        <aside className="works-detail" aria-live="polite">
          <span className="cat">{w.category}</span>
          <h3>{w.name}</h3>
          <p>{w.lead}</p>
          <dl className="kv">
            <div>
              <dt>STATUS</dt>
              <dd>{w.status.label}</dd>
            </div>
            <div>
              <dt>ROLE</dt>
              <dd>{w.role}</dd>
            </div>
          </dl>
          <div className="chips">
            {w.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
          <Link className="btn wide" to={`/works/${w.slug}`}>
            詳細を見る →
          </Link>
        </aside>
      </div>
    </section>
  );
};

export default Works;
