import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container } from "react-bootstrap";
import * as bootstrap from "bootstrap";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    document.body.setAttribute("data-bs-spy", "scroll");
    document.body.setAttribute("data-bs-target", "#portfolio-navbar");
    document.body.setAttribute("data-bs-offset", "100");
    document.body.setAttribute("tabindex", "0");
    document.body.style.position = "relative";

    const initScrollSpy = () => {
      const scrollSpy = bootstrap.ScrollSpy.getInstance(document.body);
      if (scrollSpy) {
        scrollSpy.refresh();
      } else {
        new bootstrap.ScrollSpy(document.body, {
          target: "#portfolio-navbar",
          offset: 100,
        });
      }
    };

    setTimeout(initScrollSpy, 100); // delay for DOM readiness
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Container fluid>
        <section id="home" className="py-5">
          <Home />
        </section>
        <section id="about" className="py-5">
          <h1>About Section</h1>
        </section>
        <section id="projects" className="py-5">
          <h1>Projects Section</h1>
        </section>
        <section id="contact" className="py-5">
          <h1>Contact Section</h1>
        </section>
      </Container>
    </>
  );
}

export default App;
