import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link for routing

const Footer = () => {
  return (
    <footer className="footer">
      {/* === Top Gradient Line === */}
      <div className="footer-gradient"></div>

      <div className="footer-container">
        {/* === Left Column: Brand Info === */}
        <div className="footer-brand">
          <h3 className="footer-logo">Onligro</h3>
          <p className="footer-tagline">
            Helping brands, salons, and businesses go online with
            impactful websites and scalable digital tools.
          </p>
          <div className="footer-social">
            <a
              href="https://github.com/md-ahmad-raja"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/md-ahmad-raja"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/rscop_official"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a href="mailto:rajaprofessional181261@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* === Middle Column: Quick Links === */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            {/* ✅ Added Terms link here too */}
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* === Right Column: Contact Info === */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            <FaMapMarkerAlt /> New Market Area, Kolkata, India
          </p>
          <p>
            <FaPhoneAlt /> +91 90384 59931
          </p>
          <p>
            <FaEnvelope /> rajaprofessional181261@gmail.com
          </p>
          <p className="footer-quote">
            “Let’s build something remarkable together — your growth,
            our technology.”
          </p>
        </div>
      </div>

      {/* === Bottom Section === */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <span>Ahmad Raja</span>. Crafted with ❤️ by{" "}
          <strong>Onligro.com</strong>.
        </p>

        {/* ✅ Added Legal Links below copyright */}
        <p style={{ marginTop: "0.5rem" }}>
          <Link to="/terms" style={{ color: "var(--gold)", textDecoration: "none" }}>
            Terms & Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
