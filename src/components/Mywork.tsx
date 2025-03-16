import { onMount, createSignal, createEffect } from "solid-js";
import "./Mywork.css";

const Mywork = () => {
  const [currentgazouhensyuImageIndex, setCurrentgazouhensyuImageIndex] =
    createSignal(0);
  const gazouhensyuimages = [
    "src/assets/gazouhensyu1.png",
    "src/assets/gazouhensyu2.png",
    "src/assets/rensyu1.jpg",
  ];

  const [currentcgImageIndex, setCurrentcgImageIndex] = createSignal(0);
  const cgimages = [
    "src/assets/rsh12.jpg",
    "src/assets/starrysky3.jpg",
    "src/assets/katana_gazou.png",
  ];

  const gazouhensyunextImage = () => {
    setCurrentgazouhensyuImageIndex(
      (prev) => (prev + 1) % gazouhensyuimages.length
    );
  };

  const cgnextImage = () => {
    setCurrentcgImageIndex((prev) => (prev + 1) % cgimages.length);
  };

  onMount(() => {
    const fadeinElements = document.querySelectorAll(".fadein");
    fadeinElements.forEach((element) => {
      element.classList.add("fade-in");
    });
  });

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
      <div className="body-content grid grid-cols-7 grid-rows-5 justify-center pt-30 gap-30">
        <div className=" flex justify-center items-center col-span-7 text-7xl">
          My Work
        </div>
        {/* MKCodeEditorの場所 */}
        <div className="fadein bg-white col-start-2 col-span-2 rounded-lg drop-shadow-lg w-auto h-auto flex justify-center items-center">
          <img
            src="src/assets/MKCodeEditor.png"
            alt="MyWork"
            className="responsive-img"
          />
        </div>
        {/* MKCodeEditorの説明 */}
        <div className="fadein  col-start-5 col-span-2 rounded-lg drop-shadow-lg w-auto h-auto">
          <p className="text-4xl text-center text-white pt-10">MKCodeEditor</p>
          <br />
          <p className="text-lg text-justify text-white">
            MKCodeEditorは、Electronを使用したコードエディターです。
          </p>
          <p className="text-lg text-white text-justify">
            このエディターは，C言語の授業でターミナルとエディターを行き来するのが面倒だったので，自分で作成しました。
          </p>
          <p className="text-lg text-white text-justify">
            MKCodeEditorは，SSHクライアントを使用して，リモートサーバー上のファイルを編集することができます。
          </p>
        </div>
        {/* DotGameの場所 */}
        <div className="fadein bg-white col-start-2 col-span-2 rounded-lg drop-shadow-lg w-auto h-auto flex justify-center items-center">
          <img
            src="src/assets/DotGame.gif"
            alt="MyWork"
            className="responsive-img"
          />
        </div>
        {/* DotGameの説明 */}
        <div className="fadein col-start-5 col-span-2 rounded-lg drop-shadow-lg w-auto h-auto">
          <p className="text-4xl text-center text-white pt-10">DotGame</p>
          <br />
          <p className="text-lg text-justify text-white">
            DotGameは，.NETFrameworkを使用したシンプルな弾幕ゲームです。（現在開発中）
          </p>
          <p className="text-lg text-white text-justify">
            このゲームは，C++で何かゲームを作りたいと思い，練習として作成しました。
          </p>
          <p className="text-lg text-white text-justify">
            DotGameは，マウスで操作し，敵の弾幕を避けながら，敵を倒すことが目的です。
          </p>
        </div>
        {/* WeatherAppの場所 */}
        <div className="fadein bg-white col-start-2 col-span-2 rounded-lg drop-shadow-lg w-auto h-auto flex justify-center items-center">
          <img
            src="src/assets/WeatherApp.png"
            alt="MyWork"
            className="responsive-img"
          />
        </div>
        {/* WeatherAppの説明 */}
        <div className="fadein col-start-5 col-span-2 rounded-lg drop-shadow-lg w-auto h-auto">
          <p className="text-4xl text-center text-white pt-10">WeatherApp</p>
          <br />
          <p className="text-lg text-justify text-white">
            WeatherAppは，WPFを使用した天気情報アプリです。
          </p>
          <p className="text-lg text-white text-justify">
            このアプリは，C#の勉強として作成しました。
          </p>
          <p className="text-lg text-white text-justify">
            WeatherAppは，visualcrossingのAPIを使用して，天気情報を取得しています。
          </p>
          <p className="text-lg text-white text-justify">
            また，設定画面から天気を取得したい地域を変更することができます。
          </p>
        </div>
        {/* 画像編集 */}
        <div className="fadein col-start-2 col-span-2 rounded-lg drop-shadow-lg w-auto bg-black h-80">
          <div
            className="relative w-full h-full flex justify-center items-center cursor-pointer"
            onClick={gazouhensyunextImage}
          >
            <img
              src={gazouhensyuimages[currentgazouhensyuImageIndex()]}
              alt="画像編集"
              className="transition-opacity duration-300 object-contain w-full h-full rounded-lg"
            />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
              {currentgazouhensyuImageIndex() + 1} / {gazouhensyuimages.length}
            </div>
          </div>
        </div>
        {/* 画像編集の説明 */}
        <div className="fadein col-start-5 col-span-2 rounded-lg drop-shadow-lg w-auto h-auto">
          <p className="text-4xl text-center text-white pt-10">画像編集</p>
          <br />
          <p className="text-lg text-justify text-white">
            PhotoshopやPaint.netを使用した作品です。
          </p>
          <p className="text-lg text-white text-justify">
            E-sportsチームに運営として所属していた頃に広報のために作った画像やデザインの練習として作った画像です。
          </p>
        </div>
        {/* 3DCG */}
        <div className="fadein col-start-2 col-span-2 rounded-lg drop-shadow-lg w-auto bg-black h-80">
          <div
            className="relative w-full h-full flex justify-center items-center cursor-pointer"
            onClick={cgnextImage}
          >
            <img
              src={cgimages[currentcgImageIndex()]}
              alt="3DCG"
              className="transition-opacity duration-300 object-contain w-full h-full rounded-lg"
            />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
              {currentcgImageIndex() + 1} / {cgimages.length}
            </div>
          </div>
        </div>
        {/* 3DCGの説明 */}
        <div className="fadein col-start-5 col-span-2 rounded-lg drop-shadow-lg w-auto h-auto">
          <p className="text-4xl text-center text-white pt-10">3DCG</p>
          <br />
          <p className="text-lg text-justify text-white">
            Blender,SubstancePainterを使用した作品です。
          </p>
          <p className="text-lg text-white text-justify">
            中学生の頃から3DCGに興味を持ち，何度かの挫折を繰り返しながらも独学で学習しています。
          </p>
          <p className="text-lg text-white text-justify">
            現在は，大学のサークル活動の一環として3DCGに取り組んでいます。
          </p>
        </div>
        <div className="col-span-7"></div>
      </div>
    </div>
  );
};

export default Mywork;
