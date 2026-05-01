import "./About.css";
import AboutBackground from "./components/AboutBackground";
import AboutProfile from "./components/AboutProfile";

const About = () => {
  return (
    <div className="body-container relative">
      <AboutBackground />
      <AboutProfile />
    </div>
  );
};

export default About;
