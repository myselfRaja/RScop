import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="RScop Logo" className="logo-image" />
      </div>
      <div
  className="hamburger"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? '✖' : '☰'}
</div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/" className="nav-link">Home</a></li>
        <li><a href="/projects" className="nav-link">Projects</a></li>
        <li><a href="/services" className="nav-link">Services</a></li>
        <li><a href="/clients" className="nav-link">Clients</a></li>
        <li><a href="/contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
