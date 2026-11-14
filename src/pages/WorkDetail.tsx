import { Link, useParams } from "react-router-dom";
import WorkStatus from "../components/WorkStatus";
import { works } from "../data/works";
import ui from "../styles/ui.module.css";
import s from "./WorkDetail.module.css";

const toWorks = { pathname: "/", hash: "#works" };

const WorkDetail = () => {
  const { slug } = useParams();
  const w = works.find((x) => x.slug === slug);

  if (!w) {
    return (
      <main className={`${ui.shell} ${ui.main} ${s.page}`}>
        <p className={s.crumbs}>
          <Link to={toWorks}>Works</Link> / <b>Not found</b>
        </p>
        <div className={s.hero}>
          <h1>Not found</h1>
          <p className={s.lead}>指定された Work は見つかりませんでした。</p>
        </div>
        <Link className={`${ui.btn} ${s.back}`} to={toWorks}>
          ← Works 一覧へ
        </Link>
      </main>
    );
  }

  const props = [
    { label: "ROLE", value: w.role },
    { label: "PERIOD", value: w.period },
    { label: "STACK", value: w.stack.join(" / ") },
    ...(w.extra ?? []),
  ];

  return (
    <main className={`${ui.shell} ${ui.main} ${s.page}`}>
      <p className={s.crumbs}>
        <Link to={toWorks}>Works</Link> / <b>{w.name}</b>
      </p>

      <header className={s.hero}>
        <div className={s.tagRow}>
          <span className={s.tag}>{w.category.split(" / ")[0]}</span>
          <WorkStatus status={w.status} large />
        </div>
        <h1>{w.name}</h1>
        <p className={s.lead}>{w.lead}</p>
      </header>

      <div className={s.body}>
        <div className={s.main}>
          <div className={`${ui.ph} ${s.media}`}>
            [スクリーンショット / デモ動画]
          </div>
          {w.sections.map((sec, i) => (
            <section key={sec.title} className={s.section}>
              <h2>
                {String(i + 1).padStart(2, "0")} / {sec.title}
              </h2>
              {sec.body && <p>{sec.body}</p>}
              {sec.packages && (
                <div className={s.pkgs}>
                  {sec.packages.map((p) => (
                    <div key={p.name} className={s.pkg}>
                      <span className={s.pkgName}>{p.name}</span>
                      <span className={s.pkgDesc}>{p.desc}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
          <Link className={`${ui.btn} ${s.back}`} to={toWorks}>
            ← Works 一覧へ
          </Link>
        </div>

        <aside className={s.props}>
          <div className={s.propsHead}>PROPERTIES</div>
          <dl>
            {props.map((p) => (
              <div key={p.label}>
                <dt>{p.label}</dt>
                <dd>{p.value}</dd>
              </div>
            ))}
          </dl>
          {w.links.length > 0 && (
            <div className={s.links}>
              {w.links.map((l) => (
                <a
                  key={l.label}
                  className={`${ui.btn} ${s.link}${l.href ? "" : ` ${s.off}`}`}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!l.href}
                >
                  {l.label}
                  <span>{l.href ? "↗" : "[URL]"}</span>
                </a>
              ))}
            </div>
          )}
        </aside>
      </div>
    </main>
  );
};

export default WorkDetail;
