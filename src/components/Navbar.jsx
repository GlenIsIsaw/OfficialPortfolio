import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const PortfolioNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollY = window.pageYOffset + 100; // Offset for navbar height

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Fallback for home section
      if (scrollY < 100) {
        setActiveSection('home');
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    handleCloseOffcanvas();
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const NavLink = ({ section, isMobile = false }) => (
    <Nav.Link
      href={`#${section}`}
      className={`nav-link-custom ${activeSection === section ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        handleLinkClick(section);
      }}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </Nav.Link>
  );

  return (
    <Navbar
      id="portfolio-navbar"
      expand="lg"
      fixed="top"
      className="py-4 custom-navbar"
    >
      <Container fluid>
        <Navbar.Brand 
          className="fw-bold fs-4 text-white" 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
        >
          Glen Pabico
        </Navbar.Brand>

        {isMobile && (
          <>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className="border-0"
              style={{ 
                filter: "invert(1)",
                border: "none"
              }}
              onClick={handleShowOffcanvas}
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              className="custom-offcanvas"
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
            >
              <Offcanvas.Header closeButton className="text-white">
                <Offcanvas.Title
                  id="offcanvasNavbarLabel"
                  className="navbar-brand text-black"
                >
                  Glen Pabico
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column text-center nav-pills">
                  {["home", "about", "projects", "contact"].map((section) => (
                    <NavLink key={section} section={section} isMobile={true} />
                  ))}
                </Nav>
                <div className="d-flex justify-content-center gap-3 mt-4">
                  <a
                    href="https://www.facebook.com/glen.pabico/"
                    className="icon-circle"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/glen-pabico/"
                    className="icon-circle"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/GlenIsIsaw"
                    className="icon-circle"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </>
        )}

        {/* Centered pills on desktop */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center d-none d-lg-flex"
        >
          <Nav className="nav-pills nav-pill-container px-4 py-2">
            {["home", "about", "projects", "contact"].map((section) => (
              <NavLink key={section} section={section} />
            ))}
          </Nav>
        </Navbar.Collapse>

        <div className="d-none d-lg-flex social-icons gap-2">
          <a
            href="https://www.facebook.com/glen.pabico/"
            className="icon-circle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/glen-pabico/"
            className="icon-circle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/GlenIsIsaw"
            className="icon-circle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;