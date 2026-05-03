import { useState } from "react";

import DotGameImg from "../../../assets/DotGame.gif";
import Gazouhensyu1Img from "../../../assets/gazouhensyu1.png";
import Gazouhensyu2Img from "../../../assets/gazouhensyu2.png";
import IntegralAlarmImg from "../../../assets/IntegralAlarm.png";
import KatanaGazouImg from "../../../assets/katana_gazou.png";
import MKCodeEditorImg from "../../../assets/MKCodeEditor.png";
import Rensyu1Img from "../../../assets/rensyu1.jpg";
import ResonateImg from "../../../assets/Resonate.png";
import Rsh12Img from "../../../assets/rsh12.jpg";
import Starrysky3Img from "../../../assets/starrysky3.jpg";
import WeatherAppImg from "../../../assets/WeatherApp.png";
import NagaraImg from "../../../assets/nagara.png";

type Work = {
  title: string;
  image?: string;
  isSlideshow?: "gazouhensyu" | "cg";
  descriptions: string[];
  link?: string;
};

const works: Work[] = [
  {
    title: "Nagara",
    image: NagaraImg,
    descriptions: [
      "Nagaraは、React Nativeを用いた作業通話アプリです。",
      "このアプリは、作業通話に特化した機能を提供することを目的としています。",
      "Nagaraは、作業通話中に集中力を高めるためのBGM再生機能や、リアクション機能を備えています。",
    ],
    link: "https://github.com/MasafumiYamaguchi/Nagara",
  },
  {
    title: "積分アラーム",
    image: IntegralAlarmImg,
    descriptions: [
      "IntegralAlarmは、Reactを使用した積分アラームアプリです。",
      "このアプリは私が所属しているサークル「デジクリ」の2025年前期PGおもちゃ企画にて作成したアプリです。",
      "IntegralAlarmは、アラームを止めるために用意された問題の中から積分の問題を解くというアプリです。",
    ],
    link: "https://integral-alarm.vercel.app/",
  },
  {
    title: "MKCodeEditor",
    image: MKCodeEditorImg,
    descriptions: [
      "MKCodeEditorは、Electronを使用したコードエディターです。",
      "このエディターは、C言語の授業でターミナルとエディターを行き来するのが面倒だったので、自分で作成しました。",
      "MKCodeEditorは、SSHクライアントを使用して、リモートサーバー上のファイルを編集することができます。",
    ],
    link: "https://github.com/MasafumiYamaguchi/MKCodeEditor",
  },
  {
    title: "Resonate",
    image: ResonateImg,
    descriptions: [
      "Resonateは、Electronを使用した音楽プレイヤーです。",
      "シンプルな音楽再生プレイヤーです。イコライザーで特定の周波数を強調することができます。",
      "今後他にも便利な機能を追加していく予定です。",
    ],
    link: "https://github.com/MasafumiYamaguchi/Resonate",
  },
  {
    title: "DotGame",
    image: DotGameImg,
    descriptions: [
      "DotGameは、.NETFrameworkを使用したシンプルな弾幕ゲームです。",
      "このゲームは、C++で何かゲームを作りたいと思い、練習として作成しました。",
      "DotGameは、マウスで操作し、敵の弾幕を避けながら、敵を倒すことが目的です。",
    ],
  },
  {
    title: "WeatherApp",
    image: WeatherAppImg,
    descriptions: [
      "WeatherAppは、WPFを使用した天気情報アプリです。",
      "このアプリは、C#の勉強として作成しました。",
      "WeatherAppは、visualcrossingのAPIを使用して、天気情報を取得しています。",
      "また、設定画面から天気を取得したい地域を変更することができます。",
    ],
    link: "https://github.com/MasafumiYamaguchi/WeatherApp",
  },
  {
    title: "画像編集",
    isSlideshow: "gazouhensyu",
    descriptions: [
      "PhotoshopやPaint.netを使用した作品です。",
      "E-sportsチームに運営として所属していた頃に広報のために作った画像やデザインの練習として作った画像です。",
    ],
  },
  {
    title: "3DCG",
    isSlideshow: "cg",
    descriptions: [
      "Blender,SubstancePainterを使用した作品です。",
      "中学生の頃から3DCGに興味を持ち、何度かの挫折を繰り返しながらも独学で学習しています。",
      "現在は、大学のサークル活動の一環として3DCGに取り組んでいます。",
    ],
  },
];

const gazouhensyuImages = [Gazouhensyu1Img, Gazouhensyu2Img, Rensyu1Img];
const cgImages = [Rsh12Img, Starrysky3Img, KatanaGazouImg];

const WorkPreview = () => {
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [currentGazouhensyuImageIndex, setCurrentGazouhensyuImageIndex] =
    useState(0);
  const [currentCgImageIndex, setCurrentCgImageIndex] = useState(0);

  const currentWork = works[currentWorkIndex];

  const prevWork = () =>
    setCurrentWorkIndex((prev) => (prev - 1 + works.length) % works.length);
  const nextWork = () =>
    setCurrentWorkIndex((prev) => (prev + 1) % works.length);

  const nextGazouhensyuImage = () =>
    setCurrentGazouhensyuImageIndex(
      (prev) => (prev + 1) % gazouhensyuImages.length,
    );
  const nextCgImage = () =>
    setCurrentCgImageIndex((prev) => (prev + 1) % cgImages.length);

  const imageCounter =
    currentWork.isSlideshow === "gazouhensyu"
      ? `${currentGazouhensyuImageIndex + 1} / ${gazouhensyuImages.length}`
      : currentWork.isSlideshow === "cg"
        ? `${currentCgImageIndex + 1} / ${cgImages.length}`
        : null;

  return (
    <div className="relative z-10 w-full min-h-screen bg-linear-to-l from-black via-black to-clear">
      <div className="work-preview-layout fadein">
        <section className="work-preview-detail">
          <p className="work-preview-heading text-5xl font-bold">MY WORK</p>
          <h2 className="work-preview-title text-3xl font-bold text-white">
            {currentWork.title}
          </h2>
          <div className="work-preview-description">
            {currentWork.descriptions.map((desc) => (
              <p
                key={desc}
                className="text-lg text-white text-justify mb-3 whitespace-pre-wrap"
              >
                {desc}
              </p>
            ))}
          </div>
          {currentWork.link && (
            <a
              href={currentWork.link}
              className="work-preview-link text-blue-400 underline text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
          <div className="work-preview-controls mt-4">
            <div className="work-preview-dots">
              {works.map((work, index) => (
                <button
                  key={work.title}
                  className={`nav-dot${index === currentWorkIndex ? " nav-dot-active" : ""}`}
                  onClick={() => setCurrentWorkIndex(index)}
                  aria-label={`${work.title}を表示`}
                />
              ))}
            </div>
            <div className="work-preview-arrows space-x-12">
              <button className="nav-arrow" onClick={prevWork}>
                &lt;
              </button>
              <button className="nav-arrow" onClick={nextWork}>
                &gt;
              </button>
            </div>
          </div>
        </section>

        <section className="work-preview-image-field">
          {currentWork.isSlideshow === "gazouhensyu" ? (
            <button
              className="work-preview-image-button"
              onClick={nextGazouhensyuImage}
            >
              <img
                src={gazouhensyuImages[currentGazouhensyuImageIndex]}
                alt={currentWork.title}
                className="work-preview-image"
              />
            </button>
          ) : currentWork.isSlideshow === "cg" ? (
            <button className="work-preview-image-button" onClick={nextCgImage}>
              <img
                src={cgImages[currentCgImageIndex]}
                alt={currentWork.title}
                className="work-preview-image rounded-lg"
              />
            </button>
          ) : (
            <img
              src={currentWork.image}
              alt={currentWork.title}
              className="work-preview-image rounded-lg"
            />
          )}
          {imageCounter && (
            <span className="work-preview-image-counter">{imageCounter}</span>
          )}
        </section>
      </div>
    </div>
  );
};

export default WorkPreview;
