import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      {/* ✅ LOGO (clickable, redirects to Home) */}
      <Link
        to="/"
        className="logo"
        onClick={() => setIsOpen(false)} // close mobile menu when clicked
      >
        Onligro
      </Link>

      {/* MENU ICON (Mobile) */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* NAV LINKS */}
   <nav className={`nav-links ${isOpen ? "active" : ""}`}>
  {/* All links auto-close on click */}
  <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
  <a href="#about" onClick={() => setIsOpen(false)}>About</a>
  <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
  <a href="#projects" onClick={() => setIsOpen(false)}>Work</a>
  <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

  {/* Blog Route */}
  <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919038459931?text=Hi%20Raza!%20I%20just%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
    target="_blank"
    rel="noreferrer"
    className="btn-primary"
    onClick={() => setIsOpen(false)}
  >
    Let’s Talk 💬
  </a>
</nav>

    </header>
  );
};

export default Navbar;
