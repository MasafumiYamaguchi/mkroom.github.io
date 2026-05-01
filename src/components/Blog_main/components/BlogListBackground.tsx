import backgroundLogo from "../../../assets/NewMK_bold_transparent.png";

const BlogListBackground = () => {
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
    </>
  );
};

export default BlogListBackground;
