import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <p className="welcome-text">Hello, welcome to my website!</p>
        <p className="introduction-text">Hi, I am Lrry Jr., your future web developer.</p>
        <h1 className="cta-text">Feel free to explore my website and enjoy. Have a nice day!</h1>
      </div>
      <Container className="image-container">
        <Col xs={6} md={4}>
          <Image src="anime.jpg" rounded className="profile-image" />
        </Col>
      </Container>
    </div>
  );
};

export default Home;
