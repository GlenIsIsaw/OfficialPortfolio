import React from "react";
import { Card, Button } from "react-bootstrap";

const GlassCard = ({ title, text, buttonText, onButtonClick, imgSrc }) => {
  return (
    <Card className="violet-card text-white text-center px-4 py-4 h-100">
      {imgSrc && <Card.Img variant="top" src={imgSrc} alt={title} />}
      <Card.Body className="text-start">
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-justify">{text}</Card.Text>
      </Card.Body>
       <Card.Footer className="border-0 text-start">
        {buttonText && (
          <Button variant="light" className="rounded-pill mt-2" onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
        </Card.Footer>
    </Card>
  );
};

export default GlassCard;
