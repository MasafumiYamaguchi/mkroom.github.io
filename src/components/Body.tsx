import { onMount } from "solid-js";
import "./Body.css";

import MKCodeEditorImg from "../assets/MKCodeEditor.png";
import CoffeeImg from "../assets/coffee.jpg";
import XImg from "../assets/x.png";
import InstagramImg from "../assets/instagram.png";
import SpotifyImg from "../assets/spotify.png";
import GitHubImg from "../assets/github.png";
import jigazouImg from "../assets/jigazou.jpg";

const Body = () => {
  onMount(() => {
    const fadeinElements = document.querySelectorAll(".fadein");
    fadeinElements.forEach((element) => {
      element.classList.add("fade-in");
    });
  });

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

      <div className="home-body-content grid grid-cols-20 grid-rows-3 justify-center mt-30 pb-22 z-10">
        <div className="fadein card transition-transform duration-500 hover:scale-105 bg-black row-span-3 col-start-4 col-span-4 rounded-lg drop-shadow-lg flex justify-center items-center">
          <a
            href="/mywork"
            className="flex justify-center items-center w-full h-full transition-transform duration-500 hover:scale-110"
          >
            <img
              src={MKCodeEditorImg}
              alt="MyWork"
              className="responsive-img"
            />
            <h2 className="text-4xl text-center text-white absolute maincontents">
              MyWork
            </h2>
          </a>
        </div>
        <div className="fadein card transition duration-500 hover:scale-105 bg-black row-span-3 col-start-9 col-span-4 rounded-lg drop-shadow-lg flex justify-center items-center">
          <a
            href="/Blog_list"
            className="flex justify-center items-center w-full h-full transition-transform duration-500 hover:scale-110"
          >
            <img src={CoffeeImg} alt="About" className="responsive-img" />
            <h2 className="text-4xl text-center text-white absolute maincontents">
              Blog
            </h2>
          </a>
        </div>
        <div className="snsbar row-span-4 col-start-14 col-span-4  flex flex-col justify-around items-center">
          <a
            href="https://x.com/markun4649_"
            className="fadein transition-transform duration-500 hover:scale-105 flex justify-center items-center w-full p-3 bg-black rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="object-contain w-8 h-8 mr-3" src={XImg} />
            <span className="text-white text-xl">X</span>
          </a>

          <a
            href="https://www.instagram.com/ymgc_games"
            className="fadein transition-transform duration-500 hover:scale-110 flex justify-center items-center w-full p-3 bg-gradient-to-bl from-blue-600 via-red-400 to-yellow-600 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="object-contain w-8 h-8 mr-3" src={InstagramImg} />
            <span className="text-white text-xl">Instagram</span>
          </a>

          <a
            href="https://open.spotify.com/user/32056ochmj613rzj1npdufqya?si=c77631d76fa94400"
            className="fadein transition-transform duration-500 hover:scale-110 flex justify-center items-center w-full p-3 bg-green-500 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="object-contain w-8 h-8 mr-3" src={SpotifyImg} />
            <span className="text-black text-xl">Spotify</span>
          </a>

          <a
            href="https://github.com/MasafumiYamaguchi"
            className="fadein transition-transform hover:scale-110 flex justify-center items-center w-full p-3 bg-white rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-contain w-8 h-8 mr-3 invert"
              src={GitHubImg}
            />
            <span className="text-black text-xl">GitHub</span>
          </a>
        </div>
      </div>
      <div className="about-section grid grid-cols-10 grid-rows-7 gap-4 p-0">
        <div className="mypicture col-start-3 col-span-2 row-start-2 row-span-4 bg-white rounded-lg drop-shadow-lg">
          <img className="sepia-50 object-cover rounded-lg" src={jigazouImg} />
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
        {/* SNSリンクの行スパンを増やし、上下のpaddingを追加 */}
        <div className="SNSlink col-start-6 col-span-4 row-start-5 row-span-2 flex items-center py-4 z-10 relative">
          <div className="text-lg text-left text-white flex gap-4">
            <a
              href="https://x.com/markun4649_"
              className="p-3 block cursor-pointer hover:scale-110 transition-transform"
            >
              <img className="object-contain w-8 h-8" src={XImg} />
            </a>
            <div className="border-l border-white h-10 self-center"></div>
            <a
              href="https://www.instagram.com/ymgc_games"
              className="p-3 block cursor-pointer hover:scale-110 transition-transform"
            >
              <img className="object-contain w-8 h-8" src={InstagramImg} />
            </a>
            <div className="border-l border-white h-10 self-center"></div>
            <a
              href="https://github.com/MasafumiYamaguchi"
              className="p-3 block cursor-pointer hover:scale-110 transition-transform"
            >
              <img className="object-contain w-8 h-8" src={GitHubImg} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
