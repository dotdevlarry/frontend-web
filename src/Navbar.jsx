import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <nav>
        {/* Logo */}
        <div className="navbar-brand">dotDev</div>

        {/* Hamburger Menu */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Menu Items */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <NavLink to="/" activeClassName="active" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" activeClassName="active" onClick={() => setMenuOpen(false)}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/hobbies" activeClassName="active" onClick={() => setMenuOpen(false)}>
              Hobbies
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
