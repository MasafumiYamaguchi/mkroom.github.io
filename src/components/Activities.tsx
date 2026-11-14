import { useState } from "react";
import SectionHead from "./SectionHead";
import { activities } from "../data/site";
import s from "./Activities.module.css";
import ui from "../styles/ui.module.css";

const Activities = () => {
  const [active, setActive] = useState(0);
  const a = activities[active];

  return (
    <section id="activities" className={ui.section}>
      <SectionHead label="Activities" />
      <div className={`${ui.fill} ${s.activities}`}>
        <ul className={s.timeline}>
          {activities.map((item, i) => (
            <li key={item.title}>
              <button
                type="button"
                className={`${s.item}${i === active ? ` ${s.active}` : ""}`}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                <span className={s.itemDate}>{item.date}</span>
                <span className={s.itemTitle}>{item.title}</span>
                <span className={s.itemSummary}>{item.summary}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className={s.detail} aria-live="polite">
          <span className={s.date}>{a.date}</span>
          <h3>{a.title}</h3>
          <p>{a.body}</p>
          <div className={`${ui.ph} ${s.photo}`}>[写真 / スライド]</div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
