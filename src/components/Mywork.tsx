import { createSignal } from "solid-js";
import "./Mywork.css";

import IntegralAlarmImg from "../assets/IntegralAlarm.png";
import MKCodeEditorImg from "../assets/MKCodeEditor.png";
import ResonateImg from "../assets/Resonate.png";
import DotGameImg from "../assets/DotGame.gif";
import WeatherAppImg from "../assets/WeatherApp.png";
import Gazouhensyu1Img from "../assets/gazouhensyu1.png";
import Gazouhensyu2Img from "../assets/gazouhensyu2.png";
import Rensyu1Img from "../assets/rensyu1.jpg";
import Rsh12Img from "../assets/rsh12.jpg";
import Starrysky3Img from "../assets/starrysky3.jpg";
import KatanaGazouImg from "../assets/katana_gazou.png";

type Work = {
  title: string;
  image?: string;
  isSlideshow?: "gazouhensyu" | "cg";
  descriptions: string[];
  link?: string;
};

const Mywork = () => {
  const [currentCardIndex, setCurrentCardIndex] = createSignal(0);
  const [currentgazouhensyuImageIndex, setCurrentgazouhensyuImageIndex] =
    createSignal(0);
  const [currentcgImageIndex, setCurrentcgImageIndex] = createSignal(0);

  const gazouhensyuimages = [Gazouhensyu1Img, Gazouhensyu2Img, Rensyu1Img];
  const cgimages = [Rsh12Img, Starrysky3Img, KatanaGazouImg];

  const gazouhensyunextImage = () => {
    setCurrentgazouhensyuImageIndex(
      (prev) => (prev + 1) % gazouhensyuimages.length,
    );
  };

  const cgnextImage = () => {
    setCurrentcgImageIndex((prev) => (prev + 1) % cgimages.length);
  };

  const works: Work[] = [
    {
      title: "積分アラーム",
      image: IntegralAlarmImg,
      descriptions: [
        "IntegralAlarmは、Reactを使用した積分アラームアプリです。",
        "このアプリは私が所属しているサークル「デジクリ」の2025年後期の\n「PGおもちゃ企画」にて作成したアプリです。",
        "IntegralAlarmは，アラームを止めるために，用意された問題の中から積分の問題を解くというアプリです。",
      ],
      link: "https://integral-alarm.vercel.app/",
    },
    {
      title: "MKCodeEditor",
      image: MKCodeEditorImg,
      descriptions: [
        "MKCodeEditorは、Electronを使用したコードエディターです。",
        "このエディターは，C言語の授業でターミナルとエディターを行き来するのが\n面倒だったので，自分で作成しました。",
        "MKCodeEditorは，SSHクライアントを使用して，リモートサーバー上のファイルを編集することができます。",
      ],
    },
    {
      title: "Resonate",
      image: ResonateImg,
      descriptions: [
        "Resonateは，Electronを使用した音楽プレイヤーです。",
        "シンプルな音楽再生プレイヤーです。イコライザーで特定の周波数を強調することができます。",
        "今後他にも便利な機能を追加していく予定です。",
      ],
    },
    {
      title: "DotGame",
      image: DotGameImg,
      descriptions: [
        "DotGameは，.NETFrameworkを使用したシンプルな弾幕ゲームです。（現在開発中）",
        "このゲームは，C++で何かゲームを作りたいと思い，練習として作成しました。",
        "DotGameは，マウスで操作し，敵の弾幕を避けながら，敵を倒すことが目的です。",
      ],
    },
    {
      title: "WeatherApp",
      image: WeatherAppImg,
      descriptions: [
        "WeatherAppは，WPFを使用した天気情報アプリです。",
        "このアプリは，C#の勉強として作成しました。",
        "WeatherAppは，visualcrossingのAPIを使用して，天気情報を取得しています。",
        "また，設定画面から天気を取得したい地域を変更することができます。",
      ],
    },
    {
      title: "画像編集",
      isSlideshow: "gazouhensyu",
      descriptions: [
        "PhotoshopやPaint.netを使用した作品です。",
        "E-sportsチームに運営として所属していた頃に広報のために作った画像や\nデザインの練習として作った画像です。",
      ],
    },
    {
      title: "3DCG",
      isSlideshow: "cg",
      descriptions: [
        "Blender,SubstancePainterを使用した作品です。",
        "中学生の頃から3DCGに興味を持ち，何度かの挫折を繰り返しながらも\n独学で学習しています。",
        "現在は，大学のサークル活動の一環として3DCGに取り組んでいます。",
      ],
    },
  ];

  const prevCard = () =>
    setCurrentCardIndex((prev) => (prev - 1 + works.length) % works.length);
  const nextCard = () =>
    setCurrentCardIndex((prev) => (prev + 1) % works.length);

  const currentWork = () => works[currentCardIndex()];

  return (
    <div className="body-container relative flex items-center justify-center min-h-screen">
      <div
        className="bg-[url(./assets/NewMK_bold_transparent.png)] bg-cover bg-center fixed w-128 h-128 opacity-30"
        id="background"
      >
        <span className="invisible">
          This is a div aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </span>
      </div>
      <div className="grid-overlay"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen pt-24 pb-16 px-4">
        <div className="text-7xl mywork text-white mb-12 fadein">My Work</div>

        {/* カード */}
        <div className="work-card fadein">
          <div className="work-card-image">
            {currentWork().isSlideshow === "gazouhensyu" ? (
              <div
                className="relative w-full h-full flex justify-center items-center cursor-pointer"
                onClick={gazouhensyunextImage}
              >
                <img
                  src={gazouhensyuimages[currentgazouhensyuImageIndex()]}
                  alt="画像編集"
                  className="object-contain w-full h-full"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {currentgazouhensyuImageIndex() + 1} /{" "}
                  {gazouhensyuimages.length}
                </div>
              </div>
            ) : currentWork().isSlideshow === "cg" ? (
              <div
                className="relative w-full h-full flex justify-center items-center cursor-pointer"
                onClick={cgnextImage}
              >
                <img
                  src={cgimages[currentcgImageIndex()]}
                  alt="3DCG"
                  className="object-contain w-full h-full"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {currentcgImageIndex() + 1} / {cgimages.length}
                </div>
              </div>
            ) : (
              <img
                src={currentWork().image!}
                alt={currentWork().title}
                className="object-contain w-full h-full"
              />
            )}
          </div>

          <div className="work-card-desc">
            <p className="text-4xl text-center text-white mb-6 whitespace-pre-wrap">
              {currentWork().title}
            </p>
            {currentWork().descriptions.map((desc) => (
              <p className="text-lg text-white text-justify mb-3 whitespace-pre-wrap">
                {desc}
              </p>
            ))}
            {currentWork().link && (
              <a
                href={currentWork().link}
                className="text-blue-400 underline mt-4 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        </div>

        {/* ナビゲーション: ‹ ● ● ○ ○ › */}
        <div className="flex items-center gap-3 mt-8">
          <button className="nav-arrow" onClick={prevCard}>
            ‹
          </button>
          {works.map((_, i) => (
            <button
              className={`nav-dot${i === currentCardIndex() ? " nav-dot-active" : ""}`}
              onClick={() => setCurrentCardIndex(i)}
            />
          ))}
          <button className="nav-arrow" onClick={nextCard}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mywork;
