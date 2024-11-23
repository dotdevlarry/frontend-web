import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css"; // Import custom CSS for styling

const Contact = () => {
  // State for form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // Add form submission logic (e.g., send data to an API or email)
  };

  return (
    <div className="contact-container">
      <Container>
        <h1 className="section-title">Contact Me</h1>
        <Row>
          <Col md={6} className="contact-form">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message here"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="submit-button">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="contact-info">
            <h3>Get in Touch</h3>
            <p>If you have any questions or inquiries, feel free to reach out to me!</p>
            <ul>
              <li>Email: lbagobo@gbox.ncf.edu.ph</li>
              <li>Contact No: 09617111945</li>
              <li>Address: 39.P SANTOS ATENEO AVE Bag.Sur</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
