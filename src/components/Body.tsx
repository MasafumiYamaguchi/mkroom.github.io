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

  const tools = [
    { name: "VSCode", icon: "vscode.png" },
    { name: "GitHub", icon: GitHubImg },
    { name: "Spotify", icon: SpotifyImg },
    { name: "Instagram", icon: InstagramImg },
    { name: "X (Twitter)", icon: XImg },
    { name: "Coffee", icon: CoffeeImg },
  ];

  return (
    <div className="body-container relative flex-col items-center justify-center">
      {/* 背景画像とグリッドオーバーレイ */}
      <div
        className="bg-[url(./assets/NewMK_bold_transparent.png)] bg-cover bg-center fixed w-128 h-128 opacity-30"
        id="background"
      >
        <span className="invisible">
          This is a div aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </span>
      </div>
      <div className="grid-overlay z-0"></div>

      {/* 背景装飾テキスト */}
      <p className="bgtext left-128 top-0">MK'S ROOM</p>
      <p className="bgtext left-384 top-128">GO FOR BROKE</p>
      <p className="bgtext left-160 top-256">乾坤一擲</p>

      {/*コンテンツ*/}
      <div className="fadein z-10 pb-8 pt-12">
        <h1 className="text-4xl font-bold mb-6">ABOUT ME</h1>

        <div className="mx-auto w-full max-w-8xl rounded-2xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-24">
            <div className="flex flex-col gap-3">
              <img
                src={jigazouImg}
                alt="Profile"
                className="w-72 h-72 md:w-96 md:h-96 rounded-xl object-cover"
              />
              <p className="text-md ml-6">photo by gest613</p>
            </div>
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <p className="text-lg text-white font-bold leading-8">
                  2005年4月20日生まれ。千葉県在住。
                  <br />
                  芝浦工業大学工学部情報工学コース在学。
                  <br />
                  2024年から本格的にプログラミングを始め、Web開発を中心に勉強中。
                  <br />
                  <br />
                  得意分野：Web開発、アプリ開発、3DCG
                  <br />
                  勉強中の技術：React・Next.js、SolidJS、ReactNative、Node.js、Electron
                  <br />
                  興味のある技術：CI/CD、セキュリティ、IaC、クラウドインフラ（AWS/GCP）
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-white/20 bg-black/20 p-4">
                <h3 className="text-xl font-bold mb-3 text-white">Skills</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex justify-between gap-6">
                    <span>React / Next.js</span>
                    <span className="text-yellow-400">★★★★☆</span>
                  </li>
                  <li className="flex justify-between gap-6">
                    <span>React Native</span>
                    <span className="text-yellow-400">★★★★☆</span>
                  </li>
                  <li className="flex justify-between gap-6">
                    <span>Node.js</span>
                    <span className="text-yellow-400">★★★★☆</span>
                  </li>
                  <li className="flex justify-between gap-6">
                    <span>SolidJS</span>
                    <span className="text-yellow-400">★★★☆☆</span>
                  </li>
                  <li className="flex justify-between gap-6">
                    <span>Electron</span>
                    <span className="text-yellow-400">★★★☆☆</span>
                  </li>
                  <li className="flex justify-between gap-6">
                    <span>C/C++</span>
                    <span className="text-yellow-400">★★★☆☆</span>
                  </li>
                  <li className="flex justify-between gap-6">
                    <span>Python</span>
                    <span className="text-yellow-400">★☆☆☆☆</span>
                  </li>
                  <li className="flex justify-between gap-6">
                    <span>Java</span>
                    <span className="text-yellow-400">★☆☆☆☆</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6 pt-12">MY WORK</h1>

        <div className="mx-auto w-full max-w-8xl rounded-2xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex flex-col gap-3 w-full md:w-auto max-w-xl">
              <img
                src={MKCodeEditorImg}
                alt="MK Code Editor"
                className="w-full h-auto max-w-[24rem] md:max-w-lg rounded-xl object-contain"
              />
              <p className="text-md ml-6 text-end mr-3">MK Code Editor</p>
            </div>
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-4">
                <p className="text-lg text-white font-bold leading-8">
                  私が今までに作った作品やプロジェクトを紹介します。
                  <br />
                  自分が興味を持った技術やアイデアを形にすることが好きで、様々
                  <br />
                  なプロジェクトに取り組んできました。
                  <br />
                  <br />
                  右の作品：MK Code Editor（Electron製のコードエディタ）
                  <br />
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 mb-4">
                <p className="text-2xl font-bold text-white">よく使うツール</p>
                <div className="grid grid-cols-4 grid-rows-3 gap-4 mt-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-12 h-12"
                      />
                      <span className="text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
