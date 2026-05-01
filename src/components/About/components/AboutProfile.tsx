import jigazouImg from "../../../assets/jigazou.jpg";
import SocialLinks from "./SocialLinks";

const AboutProfile = () => {
  return (
    <div className="about-section md:grid grid-cols-10 grid-rows-7 gap-4 p-0 pt-40 flex flex-col px-4 sm:px-6">
      <div className="mypicture col-start-3 col-span-2 row-start-2 row-span-4 bg-white rounded-lg drop-shadow-lg">
        <img
          className="sepia-50 object-cover rounded-lg w-full h-full"
          src={jigazouImg}
        />
      </div>
      <div className="name col-start-3 col-span-2 row-start-6 row-span-2">
        <p className="text-sm text-right text-white">photo by gest613</p>
      </div>
      <div className="aboutme col-start-6 col-span-4 row-start-2 row-span-2">
        <p className="text-4xl text-left text-white font-bold">ABOUT ME</p>
        <br />
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
        <SocialLinks />
      </div>
    </div>
  );
};

export default AboutProfile;
