import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-bg"></div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">
          About <span>Onligro</span>
        </h2>

        <p className="about-text">
          Onligro is a modern digital studio helping brands and startups grow
          through technology. We design and develop fast, scalable, and
          conversion-focused websites and web applications that deliver real
          business results.
        </p>

        <div className="about-grid">
          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>💻 Web Development</h3>
            <p>
              From sleek portfolios to complex booking systems, we build custom
              web solutions with modern technologies like React, Node.js, and
              MongoDB.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>🎨 Design & Branding</h3>
            <p>
              We create interfaces that look beautiful and perform beautifully.
              Every design is crafted to make your brand stand out online.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>🚀 Growth & Strategy</h3>
            <p>
              Our goal isn’t just to build — it’s to help you grow. We combine
              design, technology, and marketing to boost your business impact.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
