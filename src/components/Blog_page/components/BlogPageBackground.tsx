import backgroundLogo from "../../../assets/NewMK_bold_transparent.png";

const BlogPageBackground = () => {
  return (
    <>
      <div
        className="absolute w-128 h-128 opacity-30 bg-cover bg-center"
        id="background"
        style={{ backgroundImage: `url(${backgroundLogo})` }}
      >
        <span className="invisible">Background element</span>
      </div>
      <div className="grid-overlay"></div>
    </>
  );
};

export default BlogPageBackground;
