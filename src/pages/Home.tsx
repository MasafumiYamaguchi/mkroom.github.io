import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Works from "../components/Works";
import Activities from "../components/Activities";
import Music from "../components/Music";
import Contact from "../components/Contact";
import ui from "../styles/ui.module.css";

const Home = () => (
  <main className={`${ui.shell} ${ui.main}`}>
    <Hero />
    <Profile />
    <Works />
    <Activities />
    <Music />
    <Contact />
  </main>
);

export default Home;
