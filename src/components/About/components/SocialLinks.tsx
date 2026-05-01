import githubImg from "../../../assets/github.png";
import instagramImg from "../../../assets/instagram.png";
import xImg from "../../../assets/x.png";

const SocialLinks = () => {
  return (
    <div className="SNSlink col-start-6 col-span-4 row-start-5 row-span-2 flex items-center py-4 z-10 relative">
      <div className="text-lg text-left text-white flex gap-4">
        <a
          href="https://x.com/markun4649_"
          className="p-3 block cursor-pointer hover:scale-110 transition-transform"
        >
          <img className="object-contain w-8 h-8" src={xImg} />
        </a>
        <div className="border-l border-white h-10 self-center"></div>
        <a
          href="https://www.instagram.com/ymgc_games"
          className="p-3 block cursor-pointer hover:scale-110 transition-transform"
        >
          <img className="object-contain w-8 h-8" src={instagramImg} />
        </a>
        <div className="border-l border-white h-10 self-center"></div>
        <a
          href="https://github.com/MasafumiYamaguchi"
          className="p-3 block cursor-pointer hover:scale-110 transition-transform"
        >
          <img className="object-contain w-8 h-8" src={githubImg} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
