import jigazouImg from "../../../assets/jigazou.jpg";
import { fetchSkills } from "../../function/skills";
import { useEffect, useState } from "react";

const Aboutme = () => {
  const [stacks, setStacks] = useState<
    { name: string; level: number; order: string }[]
  >([]);

  useEffect(() => {
    const getSkills = async () => {
      const skills = await fetchSkills();
      setStacks(skills.sort((a, b) => a.order.localeCompare(b.order)));
    };
    getSkills();
  }, []);

  return (
    <div className="fadein home-section">
      <div className="home-section-title">
        <a href="/about" className="home-section-link">
          ABOUT ME
        </a>
      </div>

      <div className="home-section-card">
        <div className="home-section-content">
          <div className="home-section-media flex flex-col gap-3">
            <img
              src={jigazouImg}
              alt="Profile"
              className="home-section-image home-profile-image"
            />
            <p className="text-md ml-6">photo by gest613</p>
          </div>
          <div className="home-section-copy">
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

            <div className="home-inner-card">
              <h3 className="text-xl font-bold mb-3 text-white">Skills</h3>
              <ul className="space-y-2 text-white">
                {stacks.map((stack, index) => (
                  <li className="flex justify-between gap-6" key={index}>
                    <span>{stack.name}</span>
                    <span className="text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          className={
                            i < stack.level
                              ? "text-yellow-400"
                              : "text-gray-500"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
