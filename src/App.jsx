import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Education from "./Education.jsx";
import Hobbies from "./Hobbies.jsx";
import Contact from "./Contact.jsx";

// Placeholder components for missing pages
//const About = () => <div>About Page Coming Soon!</div>;
//const Education = () => <div>Education Page Coming Soon!</div>;
//const Hobbies = () => <div>Hobbies Page Coming Soon!</div>;
//const Contact = () => <div>Contact Page Coming Soon!</div>;

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is displayed across all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
