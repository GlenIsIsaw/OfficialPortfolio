import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const PortfolioNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap 'lg' breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const handleLinkClick = (section) => {
    handleCloseOffcanvas();
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar
      id="portfolio-navbar"
      expand="lg"
      sticky="top"
      className="py-4 px-2 custom-navbar"
    >
      <Container fluid>
        <Navbar.Brand className="fw-bold fs-4 text-white" href="#home">
          Glen Pabico
        </Navbar.Brand>

        {isMobile && (
          <>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className="border-0 text-body-secondary"
              style={{ filter: "invert(1)" }}
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
              <Offcanvas.Header closeButton closeVariant="dark">
                <Offcanvas.Title id="offcanvasNavbarLabel" className="text-dark">
                  Glen Pabico
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column text-center nav-pills">
                  {["home", "about", "projects", "contact"].map((section) => (
                    <Nav.Link
                      key={section}
                      href={`#${section}`}
                      className="nav-link-custom"
                      onClick={() => handleLinkClick(section)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Nav.Link>
                  ))}
                </Nav>
                <div className="d-flex justify-content-center gap-3 mt-4">
                  <a href="#" className="icon-circle"><FaFacebookF /></a>
                  <a href="#" className="icon-circle"><FaInstagram /></a>
                  <a href="#" className="icon-circle"><FaLinkedinIn /></a>
                  <a href="#" className="icon-circle"><FaGithub /></a>
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
          <Nav className="nav-pills nav-pill-container">
            {["home", "about", "projects", "contact"].map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                className="nav-link-custom"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>

        <div className="d-none d-lg-flex social-icons gap-2">
          <a href="#" className="icon-circle"><FaFacebookF /></a>
          <a href="#" className="icon-circle"><FaInstagram /></a>
          <a href="#" className="icon-circle"><FaLinkedinIn /></a>
          <a href="#" className="icon-circle"><FaGithub /></a>
        </div>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
