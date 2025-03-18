import "./About.css";

import jigazouImg from "../assets/jigazou.jpg";
import xImg from "../assets/x.png";
import instagramImg from "../assets/instagram.png";
import githubImg from "../assets/github.png";

const About = () => {
  return (
    <div className="body-container relative">
      <div
        className="bg-[url(./assets/NewMK_bold_transparent.png)] bg-cover bg-center fixed w-128 h-128 opacity-30 flex justify-center items-center"
        id="background"
      >
        <span className="invisible">
          This is a div aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </span>
      </div>
      <div className="grid-overlay"></div>
      <div className="about-section md:grid grid-cols-10 grid-rows-7 gap-4 p-0 pt-40 flex flex-col px-4 sm:px-6">
        <div className="mypicture col-start-3 col-span-2 row-start-2 row-span-4 bg-white rounded-lg drop-shadow-lg">
          <img
            className="sepia-50 object-cover rounded-lg w-full h-full"
            src={jigazouImg}
          />
        </div>
        <div className="name col-start-3 col-span-2 row-start-6 row-span-2">
          <p className="text-medium text-right text-white underline">
            photo by 午後の紅茶
          </p>
        </div>
        <div className="aboutme col-start-6 col-span-4 row-start-2 row-span-2">
          <p className="text-4xl text-left text-white">About me</p>
          <br />
          <p className="text-lg text-left text-white">
            2005年4月20日生まれ.千葉県市川市在住.
          </p>
          <p className="text-lg text-left text-white">
            芝浦工業大学工学部情報工学コース在学. &nbsp;
            2024年から本格的にプログラミングを始める.
          </p>
          <p className="text-lg text-left text-white">
            Webフロントエンド(SolidJS,React)を中心に学習中.
          </p>
          <br />
          <p className="text-lg text-left text-white">
            得意分野 : フロントエンド開発,画像デザイン(提供実績有)
          </p>
          <p className="text-lg text-left text-white">
            学習中の言語 : JavaScript,TypeScript,HTML,CSS,C,C#,C++
          </p>
          <p className="text-lg text-left text-white">
            フレームワーク : React,Next.js,SolidJS,Electron,.NETFramework
          </p>
          <p className="text-lg text-left text-white">
            その他 : ゲーム開発,3DCG,画像編集,動画編集
          </p>
        </div>
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
      </div>
    </div>
  );
};

export default About;
