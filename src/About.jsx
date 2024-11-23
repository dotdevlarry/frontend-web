import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css"; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <Container>
        <Row>
          <Col md={6} className="about-text">
            <h1>About Me</h1>
            <p>
              Hello! I’m a passionate <span className="highlight">gamer</span> and <span className="highlight">programmer</span>. 
              My journey into the world of gaming ignited my creativity and problem-solving skills, which naturally led me into programming. 
            </p>
            <p>
              As a programmer, I specialize in building immersive applications, solving challenging problems, 
              and constantly learning new technologies. In the gaming world, I enjoy exploring captivating storylines, 
              mastering competitive games, and connecting with fellow gamers. 
            </p>
            <p>
              Whether it's writing clean code or leveling up in the latest RPG, I'm driven by passion, curiosity, and a love for challenges.
            </p>
          </Col>
          <Col md={6} className="about-image">
            <img 
              src="img10.jpg" 
              alt="Gamer and Programmer" 
              className="profile-photo" 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
