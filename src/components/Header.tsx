import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/home" className="flex items-center">
            <h1 className="text-3xl text-white mr-2 font-bold font-sans">
              MK's room
            </h1>
            <img
              className="w-10 h-10"
              src="src/assets/NewMK_bold_transparent.png"
              alt="MK"
            />
          </a>
        </div>
        <nav className="flex justify-end">
          <ul className="flex space-x-4 font-sans">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default Header;
