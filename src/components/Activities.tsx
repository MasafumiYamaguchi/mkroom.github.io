import { useState } from "react";
import SectionHead from "./SectionHead";
import { activities } from "../data/site";

const Activities = () => {
  const [active, setActive] = useState(0);
  const a = activities[active];

  return (
    <section id="activities">
      <SectionHead label="Activities" />
      <div className="activities">
        <ul className="timeline">
          {activities.map((item, i) => (
            <li key={item.title}>
              <button
                type="button"
                className={`tl-item${i === active ? " is-active" : ""}`}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                <span className="tl-date">{item.date}</span>
                <span className="tl-title">{item.title}</span>
                <span className="tl-sum">{item.summary}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="act-detail" aria-live="polite">
          <span className="date">{a.date}</span>
          <h3>{a.title}</h3>
          <p>{a.body}</p>
          <div className="ph">[写真 / スライド]</div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
