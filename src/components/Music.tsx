import SectionHead from "./SectionHead";
import { favorites, nowPlaying as np } from "../data/site";
import s from "./Music.module.css";
import ui from "../styles/ui.module.css";

const Music = () => (
  <section id="music" className={ui.section}>
    <SectionHead label="Music" />
    <div className={`${ui.fill} ${s.music}`}>
      <div className={s.now}>
        <div className={`${ui.ph} ${s.jacket}`}>[JACKET]</div>
        <span className={s.label}>再生中の音楽</span>
        <h3>{np.title}</h3>
        <p className={s.artist}>
          {np.artist} — {np.album}
        </p>
        <div className={s.progress} aria-hidden="true">
          <i style={{ width: `${np.progress * 100}%` }} />
        </div>
        <div className={s.times}>
          <span>{np.elapsed}</span>
          <span>{np.total}</span>
        </div>
        <a
          className={s.link}
          href={np.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Spotify ↗
        </a>
      </div>
      <div className={s.favs}>
        <p className={s.favsLabel}>FAVORITES — {favorites.length} TRACKS</p>
        <ol
          className={s.favGrid}>
          {favorites.map((f, i) => (
            <li key={i} className={s.fav}>
              <span className={s.no}>{String(i + 1).padStart(2, "0")}</span>
              <div className={`${ui.ph} ${s.cover}`} />
              <div>
                <strong className={s.favTitle}>{f.title}</strong>
                <span className={s.favArtist}>{f.artist}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Music;
