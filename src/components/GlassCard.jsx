import React from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const GlassCard = ({ title, text, buttonText, onButtonClick, imgSrc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="h-100" // Ensure motion div takes full height
    >
      <Card className="violet-card text-white text-center h-100 px-4 py-4 d-flex flex-column">
        {imgSrc && (
          <div className="flex-shrink-0">
            {" "}
            {/* Prevent image from affecting height */}
            <Card.Img variant="top" src={imgSrc} alt={title} />
          </div>
        )}

        <Card.Body className="text-start d-flex flex-column flex-grow-1">
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text className="text-justify flex-grow-1">{text}</Card.Text>
        </Card.Body>

        <Card.Footer className="border-0 text-start mt-auto">
          {" "}
          {/* Push footer to bottom */}
          {buttonText && (
            <Button
              variant="light"
              className="rounded-pill mt-2"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </Card.Footer>
      </Card>
    </motion.div>
  );
};

export default GlassCard;
