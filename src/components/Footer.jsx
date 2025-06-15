import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        {/* About */}
        <div className="footer-about">
          <h4>About Me</h4>
          <p>
            I'm Mohammed Raza, a MERN Stack Developer passionate about creating modern,
            responsive web apps that solve real-world problems.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><FaMapMarkerAlt /> Science City, Kolkata, India</p>
          <p><FaPhoneAlt /> +91-8103389961</p>
          <p><FaEnvelope />rajaprofessional181261@gmail.com</p>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="footer-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:youremail@example.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mohammed Raza. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
