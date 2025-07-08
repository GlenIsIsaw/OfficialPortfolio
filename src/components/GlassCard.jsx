import React from "react";
import { Card, Button } from "react-bootstrap";

const GlassCard = ({ title, text, buttonText, onButtonClick, imgSrc }) => {
  return (
    <Card className="violet-card text-white text-center px-5 py-3">
      {imgSrc && <Card.Img variant="top" src={imgSrc} alt={title} />}
      <Card.Body className="text-start">
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {buttonText && (
          <Button variant="light" className="rounded-pill mt-2" onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default GlassCard;
