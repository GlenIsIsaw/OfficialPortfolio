import React, { useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import * as bootstrap from "bootstrap";

const PortfolioNavbar = () => {
  useEffect(() => {
    // Initialize scrollspy when component mounts
    if (typeof window !== "undefined") {
      const dataSpyList = [].slice.call(
        document.querySelectorAll('[data-bs-spy="scroll"]')
      );
      dataSpyList.forEach((dataSpyEl) => {
        bootstrap.ScrollSpy.getInstance(dataSpyEl)?.dispose();
        new bootstrap.ScrollSpy(document.body, {
          target: "#portfolio-navbar",
          offset: 100, // Adjust this based on your navbar height
        });
      });
    }
  }, []);

  return (
    <Navbar
      id="portfolio-navbar"
      expand="lg"
      sticky="top"
      className="py-4 px-2 custom-navbar"
    >
      <Container
        fluid
        className="position-relative d-flex justify-content-between align-items-center"
      >
        <Navbar.Brand className="fw-bold fs-4 text-white" href="#home">
          Glen Pabico
        </Navbar.Brand>

        <div className="d-none d-lg-block position-absolute start-50 translate-middle-x">
          <div className="nav-pill-container">
            <Nav className="nav-pills">
              <Nav.Link href="#home" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link href="#projects" className="nav-link-custom">
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom">
                Contact
              </Nav.Link>
            </Nav>
          </div>
        </div>

        <div className="d-none d-lg-flex social-icons gap-2">
          <a href="#" className="icon-circle">
            <FaFacebookF />
          </a>
          <a href="#" className="icon-circle">
            <FaInstagram />
          </a>
          <a href="#" className="icon-circle">
            <FaLinkedinIn />
          </a>
          <a href="#" className="icon-circle">
            <FaGithub />
          </a>
        </div>

        {/* Offcanvas for Mobile */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="d-lg-none border-0 text-body-secondary"
          style={{ filter: "invert(1)" }}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="custom-offcanvas d-lg-none"
        >
          <Offcanvas.Header closeButton closeVariant="dark">
            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-dark">
              Glen Pabico
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column text-center">
              <Nav.Link href="#home" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link href="#projects" className="nav-link-custom">
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom">
                Contact
              </Nav.Link>
            </Nav>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <a href="#" className="icon-circle">
                <FaFacebookF />
              </a>
              <a href="#" className="icon-circle">
                <FaInstagram />
              </a>
              <a href="#" className="icon-circle">
                <FaLinkedinIn />
              </a>
              <a href="#" className="icon-circle">
                <FaGithub />
              </a>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
