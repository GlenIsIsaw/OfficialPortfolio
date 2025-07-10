import React from "react";
import backgroundImage from "../assets/trianglify-lowres.png";

const Cover = () => {
  return (
    <div
      className="hero-banner position-relative text-white rounded-5 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "auto", // fill the container
        backgroundPosition: "center",
        height: "50vh",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
      ></div>

      {/* Centered content */}
      <div
        className="position-absolute top-50 start-50 translate-middle text-center px-3"
      >
        <h1 className="fw-bold display-5">Welcome to My Portfolio</h1>
        <p className="lead">
          Turning Ideas into Functional and Beautiful Solutions
        </p>
      </div>
    </div>
  );
};

export default Cover;
