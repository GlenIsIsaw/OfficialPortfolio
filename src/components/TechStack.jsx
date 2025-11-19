import React, { useState } from "react";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaGitAlt,
  FaPhp,
  FaLaravel,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";

const FrameworksToolsSection = () => {
  const [isPaused, setIsPaused] = useState(false); // 👈 animation control

  const tools = [
    { icon: <FaHtml5 size={50} />, name: "HTML" },
    { icon: <FaCss3 size={50} />, name: "CSS" },
    { icon: <RiJavascriptLine size={50} />, name: "JavaScript" },
    { icon: <FaReact size={50} />, name: "React" },
    { icon: <FaPhp size={50} />, name: "PHP" },
    { icon: <FaLaravel size={50} />, name: "Laravel" },
    //{ icon: <FaVuejs size={50} />, name: "Vue" },
    { icon: <FaNodeJs size={50} />, name: "Node.js" },
    { icon: <FaBootstrap size={50} />, name: "Bootstrap" },
    { icon: <SiTailwindcss size={50} />, name: "Tailwind" },
    //{ icon: <FaPython size={50} />, name: "Python" },
    //{ icon: <SiNextdotjs size={50} />, name: "Next.js" },
    { icon: <FaFigma size={50} />, name: "Figma" },
    { icon: <FaGitAlt size={50} />, name: "Git" },
  ];

  return (
    <div className="tech-marquee">
      <div
        className="tech-track"
        style={{
          animationPlayState: isPaused ? "paused" : "running", // 👈 control animation
        }}
      >
        {[...tools, ...tools].map((tool, index) => (
          <div
            className="tech-item"
            key={index}
            onMouseEnter={() => setIsPaused(true)}   // 👈 pause on hover (desktop)
            onMouseLeave={() => setIsPaused(false)}  // 👈 resume on hover out
            onClick={() => setIsPaused(!isPaused)}   // 👈 toggle pause on mobile tap
          >
            <div className="tech-icon">{tool.icon}</div>
            <p className="tech-name">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameworksToolsSection;
