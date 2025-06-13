import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // has Popper + Bootstrap
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <section id="home" style={{ height: "100vh", paddingTop: "70px" }}>
        <h1>Home</h1>
      </section>
      <section id="about" style={{ height: "100vh", paddingTop: "70px" }}>
        <h1>About</h1>
      </section>
      <section id="projects" style={{ height: "100vh", paddingTop: "70px" }}>
        <h1>Projects</h1>
      </section>
      <section id="contact" style={{ height: "100vh", paddingTop: "70px" }}>
        <h1>Contact</h1>
      </section>
    </>
  );
}

export default App;
