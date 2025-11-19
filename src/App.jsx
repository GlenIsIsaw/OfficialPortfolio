import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import HeroSection from "./pages/HeroSection";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

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
