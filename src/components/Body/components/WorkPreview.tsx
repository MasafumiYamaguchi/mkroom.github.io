import { fetchTools } from "../../function/tools";
import { useEffect, useState } from "react";

import MKCodeEditorImg from "../../../assets/MKCodeEditor.png";
import vscodeImg from "../../../assets/vscode.png";
import GitHubImg from "../../../assets/github.png";
import chromeImg from "../../../assets/chrome.png";
import blenderImg from "../../../assets/blender.png";
import gaeaImg from "../../../assets/gaea.png";
import geminiImg from "../../../assets/gemini.png";
import painterImg from "../../../assets/painter.png";
import photoshopImg from "../../../assets/photoshop.png";
import paintnetImg from "../../../assets/paintnet.png";

const WorkPreview = () => {
  type iconType = {
    url: string;
  };

  const [tools, setTools] = useState<
    { name: string; icon: iconType; order: number }[]
  >([]);

  useEffect(() => {
    const getTools = async () => {
      const tools = await fetchTools();
      setTools(tools.sort((a, b) => a.order - b.order));
    };
    getTools();
  }, []);

  return (
    <div className="fadein home-section">
      <div className="home-section-title home-section-title--wide">
        <a href="/mywork" className="home-section-link">
          MY WORK
        </a>
      </div>

      <div className="home-section-card">
        <div className="home-section-content home-section-content--reverse">
          <div className="home-section-media flex flex-col gap-3">
            <img
              src={MKCodeEditorImg}
              alt="MK Code Editor"
              className="home-section-image object-contain select-none stack"
            />
            <p className="text-md ml-6 text-end mr-3">MK Code Editor</p>
          </div>
          <div className="home-section-copy flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 mb-4">
              <p className="text-lg text-white font-bold leading-8">
                私が今までに作った作品やプロジェクトを紹介します。
                <br />
                自分が興味を持った技術やアイディアを形にすることが好きで、様々
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
                      src={tool.icon.url}
                      alt={tool.name}
                      className="w-12 h-12 stack select-none"
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
  );
};

export default WorkPreview;
