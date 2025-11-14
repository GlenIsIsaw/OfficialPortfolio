import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Carousel, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../assets/trianglify-lowres.png";
import project2 from "../assets/trianglify-lowres.png";
import project3 from "../assets/trianglify-lowres.png";

const projects = [
  {
    title: "Promotional Landing Page",
    description:
      "Teamed up with a designer to create a promotional webpage for Adventure Time. Fully responsive with dynamic content and newsletter integration.",
    year: "2023",
    role: "Front-end Developer",
    img: project1,
    tag: "Conceptual Work",
    link: "#",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Developed a sleek, responsive e-commerce dashboard with live analytics, product management, and clean interface.",
    year: "2024",
    role: "Front-end Developer",
    img: project2,
    tag: "Client Project",
    link: "#",
  },
  {
    title: "Portfolio Redesign",
    description:
      "Created a modern, accessible portfolio site using React and Bootstrap, focusing on clean layout and smooth animations.",
    year: "2024",
    role: "Full Stack Developer",
    img: project3,
    tag: "Personal Project",
    link: "#",
  },
  {
    title: "Portfolio Redesign",
    description:
      "Created a modern, accessible portfolio site using React and Bootstrap, focusing on clean layout and smooth animations.",
    year: "2024",
    role: "Full Stack Developer",
    img: project3,
    tag: "Personal Project",
    link: "#",
  },
  {
    title: "Portfolio Redesign",
    description:
      "Created a modern, accessible portfolio site using React and Bootstrap, focusing on clean layout and smooth animations.",
    year: "2024",
    role: "Full Stack Developer",
    img: project3,
    tag: "Personal Project",
    link: "#",
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
