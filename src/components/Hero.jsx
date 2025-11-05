import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Animated gradient background */}
      <div className="hero-bg"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering <span>Brands</span> with Digital Growth.
        </motion.h1>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We design and build high-performance websites, web apps, and digital
          systems that help businesses grow, scale, and succeed online.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
         <a
  href="https://wa.me/919038459931?text=Hi%20Raja!%20I%20just%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
  target="_blank"
  rel="noreferrer"
  className="btn-primary"
>
  Let’s Talk 💬
</a>

          <a href="#projects" className="btn-secondary">
            View Work
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle animated shapes (for premium look) */}
      <div className="floating-circle"></div>
      <div className="floating-ring"></div>
    </section>
  );
};

export default Hero;
