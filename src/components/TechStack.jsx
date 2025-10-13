import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaGitAlt,
  FaPhp,
  FaLaravel,
  FaFigma
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiDjango,
  SiFlask,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { RiJavascriptLine } from "react-icons/ri";

const FrameworksToolsSection = () => {
  // Custom purple color palette
  const purpleTheme = {
    primary: "#320062",
    light: "#f5f0fa",
    hover: "#4a0092",
    glow: "rgba(50, 0, 98, 0.2)",
  };

  const tools = [
    { icon: <FaHtml5 size={40} />, name: "HTML" },
    { icon: <FaCss3 size={40} />, name: "CSS" },
    { icon: <RiJavascriptLine size={40} />, name: "JavaScript" },
    { icon: <FaReact size={40} />, name: "React" },
    { icon: <FaPhp size={40} />, name: "Php" },
    { icon: <FaLaravel size={40} />, name: "Laravel" },
    { icon: <FaVuejs size={40} />, name: "Vue" },
    { icon: <FaNodeJs size={40} />, name: "Node.js" },
    { icon: <FaBootstrap size={40} />, name: "Bootstrap" },
    { icon: <SiTailwindcss size={40} />, name: "Tailwind" },
    { icon: <VscVscodeInsiders size={40} />, name: "VSCode" },
    { icon: <FaGitAlt size={40} />, name: "Git" },
    { icon: <FaFigma size={40} />, name: "Figma" }
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          {/* <h2 className="h3" style={{ color: purpleTheme.primary }}>
            Powering your favorite frameworks and tools
          </h2> */}
        </Col>
      </Row>
      <Row className="justify-content-center">
        {tools.map((tool, index) => (
          <Col key={index} xs={4} sm={3} md={2} className="text-center mb-4">
            <div
              className="p-3 bg-white rounded position-relative"
              style={{
                border: `1px solid ${purpleTheme.primary}`,
                transition: "all 0.3s ease",
                height: "100%",
                cursor: "pointer",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 15px ${purpleTheme.glow}`;
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = purpleTheme.hover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = purpleTheme.primary;
              }}
            >
              <div style={{ color: purpleTheme.primary }}>{tool.icon}</div>
              <p
                className="mt-2 mb-0 small"
                style={{ color: purpleTheme.primary }}
              >
                {tool.name}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FrameworksToolsSection;
