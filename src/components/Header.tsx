import "./Header.css";
import logoImg from "../assets/NewMK_bold_transparent.png";
import slashImg from "../assets/slash.png";

const Header = () => {
  return (
    <div className="header-root">
      <div className="header-container flex justify-between items-center">
        <div className="flex items-center z-20">
          <a href="/home" className="flex items-center">
            <h1 className="md:text-3xl text-white mr-2 font-bold font-sans title">
              MK's room
            </h1>
            <img className="titlelogo w-10 h-10" src={logoImg} alt="MK" />
          </a>
        </div>
        <nav className="flex justify-end">
          <ul className="flex space-x-4 font-sans">
            <li>
              <a href="/home">HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default Header;
