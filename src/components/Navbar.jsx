import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      {/* LOGO */}
      <div className="logo">Onligro</div>

      {/* MENU ICON (Mobile) */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* NAV LINKS */}
      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
<a
  href="https://wa.me/919038459931?text=Hi%20Raza!%20I%20just%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
  target="_blank"
  rel="noreferrer"
  className="btn-primary"
>
  Let’s Talk 💬
</a>

      </nav>
    </header>
  );
};

export default Navbar;
