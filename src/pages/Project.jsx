import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Carousel, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../assets/2026-02-04 142840.png";
import project2 from "../assets/2026-02-04 143026.png";
import project3 from "../assets/2026-02-04 145011.png";
import project4 from "../assets/2026-02-04 145159.png";
import project5 from "../assets/2026-02-04 145300.png";

const projects = [
  {
    title: "Promotional Architectural Website",
    description:
      "A modern architectural promotion website designed to showcase projects, services, and design concepts with a clean and professional layout. It features a built-in emailing system that allows clients to easily send inquiries and project details directly through the site. The platform enhances communication while presenting architectural works in a visually engaging and organized manner.",
    year: "2025",
    role: "Full Stack Developer",
    img: project1,
    tag: "Client Project",
    link: "https://www.jcroblesdesignandbuild.com",
  },
  {
    title: "E - Tuklas Historical and Informational Website",
    description:
      "Informational website dedicated to the history of Capalonga’s Hesus Nazareno, highlighting its cultural, religious, and historical significance. The site presents documented stories, images, and milestones to educate visitors and preserve local heritage. It also serves as a digital platform to promote awareness and appreciation of the devotion within and beyond the community.",
    year: "2025",
    role: "Front-End Developer",
    img: project2,
    tag: "Client Project",
    link: "https://www.e-tuklas.net",
  },
  {
    title: "DILG iGoals - Digital Library",
    description:
      "A digital library system developed for a government agency to securely archive, organize, and manage files and official records. The platform improves document accessibility while maintaining proper record classification and storage. It supports efficient retrieval and long-term preservation of important government documents.",
    year: "2023",
    role: "Front-End Developer",
    img: project3,
    tag: "Internship Project",
    link: "/",
  },
  {
    title: "Facilities Reservation and Information Portal",
    description:
      "A Facilities Reservation and Information Portal designed for a barangay to support its transition toward digitalization at the grassroots level. The system allows residents to view facility information, check availability, and submit reservation requests online. It promotes efficient resource management while improving accessibility and transparency in local government services.",
    year: "2023",
    role: "Front-End Developer",
    img: project4,
    tag: "Personal Project",
    link: "/",
  },
  {
    title: "CNSC - Learning and Management Web App",
    description:
      "A web-based learning and management system designed exclusively for a university to support a fully digital academic environment. The platform streamlines learning delivery, faculty management, and administrative processes for professors and academic staff. It enables a smooth transition toward a more efficient, centralized, and digitally driven university system.",
    year: "2023",
    role: "Front-End Developer",
    img: project5,
    tag: "Capstone Project",
    link: "/",
  },
];

// Animation variants for the project cards
const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.8,
    },
  },
};

const ProjectSection = ({ project, index }) => (
  <motion.div
    variants={projectCardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{
      y: -8,
      transition: { duration: 0.3 },
    }}
    custom={index}
  >
    <div className="project-section rounded-4 p-4 mb-4">
      <Row className="align-items-center g-4">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge bg="violet" className="custom-badge mb-2">
              {project.tag}
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="img-fluid rounded-4 w-100 project-img"
            />
          </motion.div>
        </Col>
        <Col md={6} className="text-white">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="fw-bold">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h6 className="mt-4">PROJECT INFO</h6>
            <hr className="opacity-25" />
            <div className="d-flex justify-content-between">
              <span>Year</span>
              <span>{project.year}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Role</span>
              <span>{project.role}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="violet-button mt-3"
            >
              See it live
            </Button>
          </motion.div>
        </Col>
      </Row>
    </div>
  </motion.div>
);

const FeaturedProjects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="featured-projects-section py-5" id="projects">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white fw-bold text-start">Featured Projects</h2>
          <p className="text-light mb-4 text-start">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </motion.div>

        {isMobile ? (
          <Carousel className="py-5" interval={6000} indicators controls fade>
            {projects.map((project, idx) => (
              <Carousel.Item key={idx}>
                <ProjectSection project={project} index={idx} />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          projects.map((project, idx) => (
            <ProjectSection key={idx} project={project} index={idx} />
          ))
        )}
      </Container>
    </section>
  );
};

export default FeaturedProjects;
