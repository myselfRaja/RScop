import React, { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

import "./Hero.css";

const Hero = () => {
  const fireRingRef = useRef(null);

  useEffect(() => {
    const fireRing = fireRingRef.current;
    if (!fireRing) return;

    fireRing.innerHTML = "";
    for (let i = 0; i < 24; i++) {
      const particle = document.createElement("div");
      particle.className = "fire-particle";
      particle.style.setProperty("--i", i);
      fireRing.appendChild(particle);
    }

    return () => (fireRing.innerHTML = "");
  }, []);

  return (
    <div className="home-container">
      <div className="background-gradient"></div>

      <div className="home-content">
        <div className="profile-container">
          <div className="fire-ring" ref={fireRingRef}></div>
          <div className="profile-glow"></div>
        <img 
  src={profileImage}
  alt="Mohammed Raza"
  className="profile-img"
/>

        </div>

        <h1>
          Hi, I'm <span className="highlight">Mohammed Raza</span>
        </h1>

        <div className="typed-container">
<ReactTyped
  strings={[
    "MERN Stack Developer",
    "Full Stack Engineer",
    "React Specialist",
    "Node.js Backend Developer",
    "Freelancer",
  ]}
  typeSpeed={40}
  backSpeed={30}
  loop
  className="typed-text"
/>

        </div>

        <p className="tagline">
          I build <span className="highlight">responsive</span>,
          <span className="highlight"> modern</span>, and
          <span className="highlight"> scalable</span> web applications.
        </p>

        <div className="button-container">
          <a href="/resume.pdf" download className="glow-button">
            <span>Download Resume</span>
            <div className="glow"></div>
          </a>
        </div>

        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/md-ahmad-raja/
" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/rscop_official
" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Hero;
