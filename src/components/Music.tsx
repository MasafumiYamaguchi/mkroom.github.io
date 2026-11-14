import SectionHead from "./SectionHead";
import { favorites, nowPlaying as np } from "../data/site";

const Music = () => (
  <section id="music">
    <SectionHead label="Music" />
    <div className="music">
      <div className="now">
        <div className="ph">[JACKET]</div>
        <span className="now-label">再生中の音楽</span>
        <h3>{np.title}</h3>
        <p className="artist">
          {np.artist} — {np.album}
        </p>
        <div className="progress" aria-hidden="true">
          <i style={{ width: `${np.progress * 100}%` }} />
        </div>
        <div className="times">
          <span>{np.elapsed}</span>
          <span>{np.total}</span>
        </div>
        <a
          className="link-u"
          href={np.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Spotify ↗
        </a>
      </div>
      <div className="favs">
        <p className="favs-label">FAVORITES — {favorites.length} TRACKS</p>
        <ol
          className="fav-grid"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          {favorites.map((f, i) => (
            <li key={i} className="fav">
              <span className="no">{String(i + 1).padStart(2, "0")}</span>
              <div className="ph" />
              <div>
                <strong>{f.title}</strong>
                <span>{f.artist}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Music;
