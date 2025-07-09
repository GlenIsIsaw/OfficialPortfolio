import React from "react";
import backgroundImage from "../assets/trianglify-lowres.png";

const Cover = () => {
  return (
    <div
      className="hero-banner position-relative text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      ></div>
    </div>
  );
};

export default Cover;
