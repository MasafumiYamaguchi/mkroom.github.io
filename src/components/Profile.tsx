import SectionHead from "./SectionHead";
import { profile } from "../data/site";
import s from "./Profile.module.css";
import ui from "../styles/ui.module.css";

const Profile = () => (
  <section id="profile" className={ui.section}>
    <SectionHead label="Profile" />
    <div className={`${ui.fill} ${s.profile}`}>
      <dl className={s.aside}>
        {profile.rows.map((r) => (
          <div key={r.label}>
            <dt>{r.label}</dt>
            <dd>{r.value}</dd>
          </div>
        ))}
      </dl>
      <div className={s.body}>
        {profile.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  </section>
);

export default Profile;
