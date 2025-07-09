import React from "react";
import { ReactTyped } from "react-typed";
// import ProfileImg from "../assets/PABICO, GLEN S SFTG CNSC _ 7212 (1).png";

const HeroSection = () => {
  return (
    <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center text-white">
      <h2>Hello! I'm Glen</h2>
       <p className="lead">
        <ReactTyped
          strings={[
            "Front - End Web Developer",
            "Web Designer",
            "UI/UX Designer",
            "IT and Technical Support"
          ]}
          typeSpeed={60}
          backSpeed={30}
          loop
        />
      </p>
      <h1 className="fw-bold display-5">
        Crafting Tomorrow's <br /> Solutions, Today
      </h1>
      <p className="mt-3 mx-auto w-75">
        Welcome to the crossroads where creativity meets technology. I'm a
        software developer dedicated to turning complex problems into elegant
        solutions.
      </p>
     <div className="mt-4 d-flex gap-3 flex-wrap justify-content-center">
  <a href="#contact" className="violet-button">
    Let's Talk
  </a>
  <a href="#about" className="violet-button light">
    Learn More
  </a>
</div>

      
    </section>
  );
};

export default HeroSection;
