import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GlassCard from "../components/GlassCard";
// import sampleImage from "../assets/PABICO, GLEN S SFTG CNSC _ 7212 (1).png";

const Home = () => {
  return (
    <Container fluid className="my-5">
      <Row className="g-4 justify-content-center">
        <Col xs={12} sm={10} md={10} lg={4}>
          <GlassCard
            title="Web Development"
            text="I have developed several projects in web development, ranging from basic to intermediate, allowing me to build functional and visually appealing websites. Alongside these projects, I also take on web development side jobs, which help me apply and strengthen my skills in real-world settings. I am committed to continuously improving and adapting to meet the needs of each project I handle."
            buttonText="View More"
            onButtonClick={() => (window.location.href = "#projects")}
            // imgSrc={sampleImage} // optional, can be removed
          />
        </Col>
        <Col xs={12} sm={10} md={10} lg={4}>
          <GlassCard
            title="Designing"
            text="I started designing web and system applications in 2023, allowing me to build a strong foundation in system design and user-centered interfaces. I focus on creating structured, intuitive, and scalable designs that align with project goals and user needs. Through each project, I continue to refine my skills to deliver clear and effective system solutions."
            buttonText="View More"
            onButtonClick={() => (window.location.href = "#projects")}
          />
        </Col>
        <Col xs={12} sm={10} md={10} lg={4}>
          <GlassCard
            title="Technical Skills"
            text="I have experience in IT and technical support from my previous jobs, handling computer maintenance, repairs, and basic networking tasks. I am also skilled in technical writing and proficient in Microsoft Office, allowing me to complete various office-related tasks efficiently. These experiences have strengthened my ability to provide reliable technical support and maintain smooth operations in different work environments."
            buttonText="View More"
            onButtonClick={() => (window.location.href = "#projects")}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
