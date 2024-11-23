import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap"; // For using Image component
import "./Education.css"; // Import the CSS file for styling

const Education = () => {
  return (
    <div className="education-container">
      <Container>
        <h1 className="section-title">My Education</h1>

        {/* Education 1: Bachelor of Computer Science */}
        <Row className="education-item">
          <Col md={3} className="education-year">
            <h3>2024 - 2025</h3>
          </Col>
          <Col md={9} className="education-details">
            {/* School Logo */}
            <div className="school-logo">
              <Image
                src="ncf.jpg" // Replace with actual logo URL for Naga College Foundation
                alt="Naga College Foundation Logo"
                roundedCircle
              />
            </div>
            <h3>Bachelor of Computer Science</h3>
            <p>Naga College Foundation, INC.</p>
            <p>
              Computer Science can be a fascinating and rewarding field, but
              like any great adventure, it comes with its own set of challenges.
              As you dive deeper into coding, algorithms, data structures, and
              software development, you will inevitably face moments that seem
              difficult or frustrating. But remember, these challenges are what
              make the journey worthwhile.
            </p>
          </Col>
        </Row>

        {/* Education 2: TVL, ICT */}
        <Row className="education-item">
          <Col md={3} className="education-year">
            <h3>2021 - 2022</h3>
          </Col>
          <Col md={9} className="education-details">
            {/* School Logo */}
            <div className="school-logo">
              <Image
                src="camhi.jpg" // Replace with actual logo URL for Camrines Sur National High School
                alt="Camrines Sur National High School Logo"
                roundedCircle
              />
            </div>
            <h3>TVL, Technical-Vocational-Livelihood, ICT</h3>
            <p>CAMRINES SUR NATIONAL HIGH SCHOOL</p>
            <p>
              As we wrap up our time in the ICT course, it’s a great opportunity
              to reflect on all that we’ve gained. Over the years, we’ve explored
              the vast and ever-evolving world of technology, learning not just
              how to use tools, but how to understand and innovate with them.
            </p>
          </Col>
        </Row>

        {/* Education 3: Elementary School */}
        <Row className="education-item">
          <Col md={3} className="education-year">
            <h3>2015 - 2016</h3>
          </Col>
          <Col md={9} className="education-details">
            {/* School Logo */}
            <div className="school-logo">
              <Image
                src="abc.jpg" // Replace with actual logo URL for Elementary School
                alt="Elementary School Logo"
                roundedCircle
              />
            </div>
            <h3>Elementary School</h3>
            <p>Dr. Domingo G. ABCEDE</p>
            <p>
              This is an exciting achievement and a testament to all your hard
              work, dedication, and growth over the years. You’ve learned so much
              and faced every challenge with determination and a smile. Whether it
              was math, science, reading, or making new friends, you’ve made it
              through and are now ready to take on even bigger adventures!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Education;
