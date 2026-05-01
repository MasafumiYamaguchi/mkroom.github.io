import backgroundLogo from "../../../assets/NewMK_bold_transparent.png";

const BackgroundLayer = () => {
  return (
    <>
      <div
        className="bg-cover bg-center fixed w-128 h-128 opacity-30"
        id="background"
        style={{ backgroundImage: `url(${backgroundLogo})` }}
      >
        <span className="invisible">
          This is a div aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </span>
      </div>
      <div className="grid-overlay"></div>

      <p className="bgtext left-128 top-0">MK'S ROOM</p>
      <p className="bgtext left-384 top-128">GO FOR BROKE</p>
      <p className="bgtext left-160 top-256">乾坤一擲</p>
      <p className="bgtext left-384 top-384">TypeScript</p>
    </>
  );
};

export default BackgroundLayer;
