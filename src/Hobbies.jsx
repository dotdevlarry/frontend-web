import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Hobbies.css"; // Import custom CSS for styling

const Hobbies = () => {
  return (
    <div className="hobbies-container">
      <Container>
        <h1 className="section-title">My Hobbies</h1>
        <Row className="hobby-item">
          <Col md={4} className="hobby">
            <div className="hobby-image">
              <Image
                src="game.jpg" // Replace with hobby image (gaming, music, etc.)
                alt="Gaming"
                rounded
              />
            </div>
            <h3>Gaming</h3>
            <p>
              Gaming is one of my biggest passions. Whether it's single-player
              adventures or multiplayer games, I love immersing myself in virtual
              worlds and improving my skills. i love online game like mobile legends
            </p>
          </Col>
          <Col md={4} className="hobby">
            <div className="hobby-image">
              <Image
                src="img.jpg" // Replace with hobby image (coding, projects, etc.)
                alt="Programming"
                rounded
              />
            </div>
            <h3>Programming</h3>
            <p>
              I love solving problems through code. From building websites to
              developing apps, programming fuels my creativity and logical thinking.
            </p>
          </Col>
          <Col md={4} className="hobby">
            <div className="hobby-image">
              <Image
                src="mm.jpg" // Replace with hobby image (reading, sports, etc.)
                alt="Music"
                rounded
              />
            </div>
            <h3>Music</h3>
            <p>
              Whether it's listening to music or playing instruments, music has a
              way of connecting me to emotions and ideas that inspire me every day.
            </p>
          </Col>
        </Row>

        {/* Add more hobby items as needed */}
        <Row className="hobby-item">
          <Col md={4} className="hobby">
            <div className="hobby-image">
              <Image
                src="img22.jpg" // Replace with hobby image (travel, etc.)
                alt="Travel"
                rounded
              />
            </div>
            <h3>Traveling</h3>
            <p>
              Traveling allows me to explore new cultures, meet people, and
              experience different ways of life. It's a great way to broaden my
              horizons and learn about the world.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hobbies;
