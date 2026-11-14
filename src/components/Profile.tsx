import SectionHead from "./SectionHead";
import { profile } from "../data/site";

const Profile = () => (
  <section id="profile">
    <SectionHead label="Profile" />
    <div className="profile">
      <dl className="profile-aside">
        {profile.rows.map((r) => (
          <div key={r.label}>
            <dt>{r.label}</dt>
            <dd>{r.value}</dd>
          </div>
        ))}
      </dl>
      <div className="profile-body">
        {profile.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  </section>
);

export default Profile;
