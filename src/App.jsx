import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container } from "react-bootstrap";
import * as bootstrap from "bootstrap";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import HeroSection from "./pages/HeroSection";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

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
      <section id="home" className="">
        <HeroSection />
        <Container fluid>
          <Home />
          {/*  <Cover />  */}
        </Container>
      </section>
      <section id="about" className="py-3">
        <About />
      </section>
      <section id="projects" className="">
        <Project />
      </section>
      <section id="contact" className="">
        <Contact />
      </section>
    </>
  );
}

export default App;
