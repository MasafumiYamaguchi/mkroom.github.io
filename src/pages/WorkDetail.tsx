import { Link, useParams } from "react-router-dom";
import WorkStatus from "../components/WorkStatus";
import { works } from "../data/works";

const toWorks = { pathname: "/", hash: "#works" };

const WorkDetail = () => {
  const { slug } = useParams();
  const w = works.find((x) => x.slug === slug);

  if (!w) {
    return (
      <main className="shell work-page">
        <p className="crumbs">
          <Link to={toWorks}>Works</Link> / <b>Not found</b>
        </p>
        <div className="work-hero">
          <h1>Not found</h1>
          <p className="lead">指定された Work は見つかりませんでした。</p>
        </div>
        <Link className="btn back" to={toWorks}>
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
    <main className="shell work-page">
      <p className="crumbs">
        <Link to={toWorks}>Works</Link> / <b>{w.name}</b>
      </p>

      <header className="work-hero">
        <div className="tag-row">
          <span className="tag">{w.category.split(" / ")[0]}</span>
          <WorkStatus status={w.status} />
        </div>
        <h1>{w.name}</h1>
        <p className="lead">{w.lead}</p>
      </header>

      <div className="work-body">
        <div className="work-main">
          <div className="ph">[スクリーンショット / デモ動画]</div>
          {w.sections.map((s, i) => (
            <section key={s.title} className="wsec">
              <h2>
                {String(i + 1).padStart(2, "0")} / {s.title}
              </h2>
              {s.body && <p>{s.body}</p>}
              {s.packages && (
                <div className="pkgs">
                  {s.packages.map((p) => (
                    <div key={p.name} className="pkg">
                      <b>{p.name}</b>
                      <span>{p.desc}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
          <Link className="btn back" to={toWorks}>
            ← Works 一覧へ
          </Link>
        </div>

        <aside className="props">
          <div className="props-head">PROPERTIES</div>
          <dl>
            {props.map((p) => (
              <div key={p.label}>
                <dt>{p.label}</dt>
                <dd>{p.value}</dd>
              </div>
            ))}
          </dl>
          {w.links.length > 0 && (
            <div className="props-links">
              {w.links.map((l) => (
                <a
                  key={l.label}
                  className={`btn${l.href ? "" : " off"}`}
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
