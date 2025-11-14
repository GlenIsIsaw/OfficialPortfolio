import React from "react";
import TechStack from "../components/TechStack";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const About = () => {
  const capabilities = {
    description:
      "I am always looking to add more skills Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.",
    skills: [
      ["HTML", "CSS", "JAVASCRIPT", "PHP"],
      ["FIGMA", "BOOTSTRAP", "TAILWIND CSS", "REACT"],
    ],
  };

  const experiences = [
    {
      title: "Freelance Developer",
      period: "Nov 2023 – Present",
      description:
        "Ullamco labors nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Front-End Intern",
      period: "Sep 2023 – Nov 2023",
      description:
        "Ullamco labors nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section className="about-section py-5">
      <Container>
        {/* About Me Section */}
        <Row className="align-items-center justify-content-center">
          <Col
            xs={12}
            md={4}
            className="text-md-start text-center mb-4 mb-md-0"
          >
            <h1 className="display-4 fw-bold accent-text">About me</h1>
          </Col>
          <Col xs={12} md={8} className="text-md-start text-center">
            <h2 className="fw-bold mb-3 accent-text">
              I am a front-end developer based in Philippines. <br />
              With Information Technology background.
            </h2>
            <p className="mb-4 text-muted">
              I am a front-end developer based in [Your City] looking for
              exciting opportunities. I have a background in [Your Background].
              I focus on accessibility while developing, am passionate about
              solving problems, and am currently exploring React.js and system
              design. When not programming, I enjoy [Your Hobbies]. I am
              committed to continuous improvement to enhance my skills.
            </p>
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start gap-3">
              <Button
                variant="primary"
                className="accent-button rounded-pill px-4 py-2"
                href="/your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD RESUME
              </Button>
              <a
                href="https://www.linkedin.com/in/glen-pabico/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-circle d-flex align-items-center justify-content-center"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://github.com/GlenIsIsaw"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-circle d-flex align-items-center justify-content-center"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </Col>
        </Row>

        <hr />

        {/* Capabilities Section */}
        <Row className="align-items-center justify-content-center">
          <Col
            xs={12}
            md={4}
            className="text-md-start text-center mb-4 mb-md-0"
          >
            <h1 className="display-4 fw-bold accent-text">Tech Stacks</h1>
          </Col>
          <Col xs={12} md={8} className="text-md-start">
            <p className="capabilities-description">
              {capabilities.description}
            </p>
             <TechStack/>
          </Col>
        </Row>
        <hr />

      {/* Experience Section */}
<Row className="align-items-center justify-content-center">
  <Col
    xs={12}
    md={4}
    className="text-md-start text-center mb-4 mb-md-0"
  >
    <h1 className="display-4 fw-bold accent-text">My Experience</h1>
  </Col>
  <Col xs={12} md={8} className="text-md-start">
    <div className="experience-grid">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <div className="experience-card-header">
            <div className="experience-icon">
              <div className="icon-circle-small">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
            </div>
            <div className="experience-title-wrapper">
              <h3 className="experience-title">{exp.title}</h3>
              <span className="experience-badge">{exp.period}</span>
            </div>
          </div>
          <div className="experience-content">
            <p className="experience-description">{exp.description}</p>
            <div className="experience-tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">HTML</span>
            </div>
          </div>
          <div className="experience-footer">
            <div className="experience-stats">
              <span className="stat-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Frontend Development
              </span>
              <span className="stat-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5c0 .414.336.75.75.75h2.5a.75.75 0 000-1.5H8.5V4.75z"/>
                </svg>
                Full-time
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Col>
</Row>
      </Container>
    </section>
  );
};

export default About;
