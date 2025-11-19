import React from "react";
import TechStack from "../components/TechStack";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaLightbulb,
  FaLaptopCode,
  FaClock,
  FaUserTie,
  FaHeadset,
  FaGraduationCap,
  FaDesktop,
  FaCogs,
  FaPaintBrush,
  FaNetworkWired,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";

const About = () => {
  const capabilities = {
    description:
      "I’m still continuously learning and improving my skills, but my current tech stack includes HTML5, CSS3, and JavaScript for building responsive web interfaces, with React for dynamic frontend development. I use PHP and Laravel for backend development, along with Node.js for server-side tasks. For styling, I work with Bootstrap and Tailwind CSS, and I use Git for version control. I also use Figma for UI/UX design and interface editing.",
    skills: [
      ["HTML", "CSS", "JAVASCRIPT", "PHP"],
      ["FIGMA", "BOOTSTRAP", "TAILWIND CSS", "REACT"],
    ],
  };

  const experiences = [
    {
      title: "Administrative Aide - IT Personnel",
      period: "May 2024 – Present",
      description:
        "As an administrative aide specializing in graphics reporting, document management, and web applications, my responsibilities include creating precise and visually appealing graphical reports, organizing and safeguarding essential documents, and designing or overseeing online applications to make operations more efficient. Your responsibilities include generating data visualizations, ensuring the accessibility and integrity of documents, and using digital technologies to enhance productivity and communication in the organization. My skills in web development, document management, and graphic design are essential for improving workflow and supporting administrative duties.",
      icon: "user-tie", // Administrative role
      tags: [
        "Web Development",
        "Graphics",
        "Document Management",
        "IT Support",
      ],
      type: "Full-time",
    },
    {
      title: "IT & Technical Support Specialist",
      period: "May 2019 – Jul 2024",
      description:
        "As an IT Support Specialist on the House of Representatives Camarines Norte, I play a crucial role in ensuring the smooth operation of the organization's technological infrastructure and providing technical assistance to its members and staff. My responsibilities encompass a wide range of tasks related to information technology, networking, and computer systems.",
      icon: "headset", // Support role
      tags: [
        "IT Support",
        "Networking",
        "System Maintenance",
        "Technical Assistance",
        "Data Entry Specialist",
      ],
      type: "Full-time",
    },
    {
      title: "Information Technology Intern",
      period: "Feb 2023 – May 2023",
      description:
        "I work as UI/UX and Web Front End Developer Intern at DILG - Provincial Office Camarines Norte.",
      icon: "laptop-code", // Development internship
      tags: ["UI/UX Design", "Frontend Development", "React", "Web Design"],
      type: "Internship",
    },
    {
      title: "Computer System Servicing (Intern)",
      period: "Jan 2019 – Mar 2019",
      description:
        "Ullamco labors nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: "cogs", // Hardware/technical role
      tags: ["Hardware", "System Repair", "Technical Support", "Maintenance"],
      type: "Internship",
    },
  ];

  // Icon mapping function
  const getExperienceIcon = (iconName, size = 14) => {
    const iconProps = { size };

    const iconMap = {
      code: <FaCode {...iconProps} />,
      rocket: <FaRocket {...iconProps} />,
      lightbulb: <FaLightbulb {...iconProps} />,
      "laptop-code": <FaLaptopCode {...iconProps} />,
      "user-tie": <FaUserTie {...iconProps} />,
      headset: <FaHeadset {...iconProps} />,
      "graduation-cap": <FaGraduationCap {...iconProps} />,
      desktop: <FaDesktop {...iconProps} />,
      cogs: <FaCogs {...iconProps} />,
      "paint-brush": <FaPaintBrush {...iconProps} />,
      "network-wired": <FaNetworkWired {...iconProps} />,
      database: <FaDatabase {...iconProps} />,
      "mobile-alt": <FaMobileAlt {...iconProps} />,
    };

    return iconMap[iconName] || <FaLaptopCode {...iconProps} />;
  };

  // Get icon for stats based on experience type
  const getStatIcon = (type) => {
    switch (type.toLowerCase()) {
      case "internship":
        return <FaGraduationCap size={14} />;
      case "full-time":
        return <FaClock size={14} />;
      case "part-time":
        return <FaClock size={14} />;
      default:
        return <FaClock size={14} />;
    }
  };

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
            <motion.h1
              className="display-4 fw-bold accent-text"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                duration: 0.8,
              }}
            >
              About me
            </motion.h1>
          </Col>
          <Col xs={12} md={8} className="text-md-start text-center">
            <h2 className="fw-bold mb-3 accent-text">
              I am a front-end developer based in Philippines. <br />
              With Information Technology background.
            </h2>
            <p className="mb-4 text-muted">
              I am a front-end developer based in Camarines Norte looking for
              exciting opportunities. I have a background in Information
              Technology. I focus on accessibility while developing, am
              passionate about solving problems, and am currently exploring
              React.js and system design. When not programming, I enjoy
              designing and editing photos. I am committed to continuous
              improvement to enhance my skills.
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
            <motion.h1
              className="display-4 fw-bold accent-text"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                duration: 0.8,
              }}
            >
              Tech Stacks{" "}
            </motion.h1>
          </Col>
          <Col xs={12} md={8} className="text-md-start">
            <p className="capabilities-description">
              {capabilities.description}
            </p>
            <TechStack />
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
            <motion.h1
              className="display-4 fw-bold accent-text"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                duration: 0.8,
              }}
            >
              My Experience{" "}
            </motion.h1>
          </Col>
          <Col xs={12} md={8} className="text-md-start">
            <div className="experience-grid">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-card-header">
                    <div className="experience-icon">
                      <div className="icon-circle-small">
                        {getExperienceIcon(exp.icon)}
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
                      {exp.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="experience-footer">
                    <div className="experience-stats">
                      <span className="stat-item">
                        {getExperienceIcon(exp.icon)}
                        {exp.tags[0]} {/* Show first tag as main skill */}
                      </span>
                      <span className="stat-item">
                        {getStatIcon(exp.type)}
                        {exp.type}
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
