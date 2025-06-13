import React, { useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import * as bootstrap from "bootstrap";

const PortfolioNavbar = () => {
  useEffect(() => {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: "#portfolio-navbar",
      offset: 70,
    });

    return () => scrollSpy.dispose();
  }, []);

  return (
    <Navbar id="portfolio-navbar" bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">MyPortfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              MyPortfolio
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 nav-pills">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
