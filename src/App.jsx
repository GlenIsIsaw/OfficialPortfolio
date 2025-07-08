import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";

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
      <section id="home" style={{ height: "100vh", paddingTop: "100px" }}>
        <h1>Home Section</h1>
      </section>
      <section id="about" style={{ height: "100vh", paddingTop: "100px" }}>
        <h1>About Section</h1>
      </section>
      <section id="projects" style={{ height: "100vh", paddingTop: "100px" }}>
        <h1>Projects Section</h1>
      </section>
      <section id="contact" style={{ height: "100vh", paddingTop: "100px" }}>
        <h1>Contact Section</h1>
      </section>
    </>
  );
}

export default App;
