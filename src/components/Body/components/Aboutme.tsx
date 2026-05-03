import jigazou from "../../../assets/jigazou.jpg";
import "../Body.css";

const Aboutme = () => {
  return (
    <div className="profile-section relative z-10 w-full h-screen bg-linear-to-r from-black via-black to-clear">
      <div className="profile-layout grid grid-cols-2 h-full w-full">
        <div className="profile-photo photo-container items-center gap-8 h-screen w-full justify-center flex flex-col">
          <div className="flex items-center justify-center flex-col gap-6">
            <img
              src={jigazou}
              alt="自画像"
              className="w-3/6 h-auto rounded-xl object-cover"
            />
            <p className="text-white text-lg text-center">photo by gest613</p>
          </div>
        </div>
        <div className="profile-content aboutme flex items-center gap-8 h-screen w-full fadein flex-col justify-center">
          <div className="profile-copy flex items-center justify-center flex-col gap-6 ml-20">
            <h2 className="text-4xl font-bold text-white self-start">
              PROFILE
            </h2>
            <p className="text-xl font-bold text-white text-left leading-10">
              2005年4月20日生まれ。千葉県在住。
              <br />
              芝浦工業大学工学部情報工学コース在学。
              <br />
              Web領域を中心に、様々な技術に興味を持っています。
              <br />
              Frontend: React、SolidJS、ReactNative
              <br />
              Backend: Node.js、Express、Hono
              <br />
              Interests：CI/CD、セキュリティ、IaC、クラウドインフラ（AWS/GCP）
            </p>
          </div>
          <div className="sns items-start justify-start flex gap-4">
            <label
              className="hover:scale-110 transition-transform"
              htmlFor="github"
            >
              <a href="https://github.com/MasafumiYamaguchi">
                <img
                  className="w-15"
                  src="../../../assets/github.png"
                  alt="github"
                  id="github"
                />
              </a>
            </label>
            <div className="border-l border-white h-10 self-center"></div>
            <label className="hover:scale-110 transition-transform" htmlFor="X">
              <a href="https://x.com/markun4649_">
                <img
                  className="w-15"
                  src="../../../assets/x.png"
                  alt="X"
                  id="X"
                />
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
