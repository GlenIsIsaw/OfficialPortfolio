import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GlassCard from "../components/GlassCard";
import sampleImage from "../assets/PABICO, GLEN S SFTG CNSC _ 7212 (1).png"; // optional

const Home = () => {
  return (
    <Container className="my-5">
      <Row className="g-4 justify-content-center">
        <Col xs={12} md={6} lg={6} xl={5}>
          <GlassCard
            title="Web Development"
            text="A brief description of Project One showcasing skills and creativity."
            buttonText="View More"
            onButtonClick={() => window.location.href = "#projects"}
           // imgSrc={sampleImage} // optional, can be removed
          />
        </Col>
        <Col xs={12} md={6} lg={6} xl={5}>
          <GlassCard
            title="Technical Skills"
            text="A brief description of Project Two with additional learning."
            buttonText="View More"
            onButtonClick={() => window.location.href = "#projects"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
