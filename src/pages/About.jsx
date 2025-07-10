import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

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
      <Container fluid>
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
            <h1 className="display-4 fw-bold accent-text">My Capabilities</h1>
          </Col>
          <Col xs={12} md={8} className="text-md-start">
            <p className="capabilities-description mb-4">
              {capabilities.description}
            </p>

            <div className="skills-container">
              {capabilities.skills.map((skillRow, rowIndex) => (
                <div key={rowIndex} className="skills-row mb-3">
                  {skillRow.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
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
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  {index < experiences.length - 1 && (
                    <div className="experience-divider"></div>
                  )}
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
