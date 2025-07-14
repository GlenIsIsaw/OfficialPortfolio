import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Carousel, Badge } from "react-bootstrap";
import project1 from "../assets/trianglify-lowres.png";
import project2 from "../assets/trianglify-lowres.png";
import project3 from "../assets/trianglify-lowres.png";

const projects = [
  {
    title: "Promotional Landing Page",
    description: "Teamed up with a designer to create a promotional webpage for Adventure Time. Fully responsive with dynamic content and newsletter integration.",
    year: "2023",
    role: "Front-end Developer",
    img: project1,
    tag: "Conceptual Work",
    link: "#"
  },
  {
    title: "E-commerce Dashboard",
    description: "Developed a sleek, responsive e-commerce dashboard with live analytics, product management, and clean interface.",
    year: "2024",
    role: "Front-end Developer",
    img: project2,
    tag: "Client Project",
    link: "#"
  },
  {
    title: "Portfolio Redesign",
    description: "Created a modern, accessible portfolio site using React and Bootstrap, focusing on clean layout and smooth animations.",
    year: "2024",
    role: "Full Stack Developer",
    img: project3,
    tag: "Personal Project",
    link: "#"
  }
];

const ProjectSection = ({ project }) => (
  <div className="project-section rounded-4 p-4 mb-4">
    <Row className="align-items-center g-4">
      <Col md={6}>
        <Badge bg="violet" className="custom-badge mb-2">{project.tag}</Badge>
        <img src={project.img} alt={project.title} className="img-fluid rounded-4 w-100 project-img" />
      </Col>
      <Col md={6} className="text-white">
        <h3 className="fw-bold">{project.title}</h3>
        <p>{project.description}</p>
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
        <Button href={project.link} target="_blank" rel="noopener noreferrer" className="violet-button mt-3">
          See it live
        </Button>
      </Col>
    </Row>
  </div>
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
        <h2 className="text-white fw-bold text-start">Featured Projects</h2>
        <p className="text-light mb-4 text-start">
          Here are some of the selected projects that showcase my passion for front-end development.
        </p>

        {isMobile ? (
          <Carousel interval={6000} indicators controls fade>
            {projects.map((project, idx) => (
              <Carousel.Item key={idx}>
                <ProjectSection project={project} />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          projects.map((project, idx) => (
            <ProjectSection key={idx} project={project} />
          ))
        )}
      </Container>
    </section>
  );
};

export default FeaturedProjects;
