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
          Onligro is a customer-first SaaS platform built to solve one simple but
          serious problem — <b>wasted time due to waiting</b>.
          <br /><br />
          We are building smart appointment and scheduling systems for salons
          and local service businesses, so customers can book in advance and
          arrive on time — without crowding, confusion, or long queues.
        </p>

        <div className="about-grid">
          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>⏱️ Customer Time First</h3>
            <p>
              Onligro is designed for people who value their time — students,
              working professionals, and anyone who doesn’t want to waste
              30–60 minutes waiting at a salon.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>📅 Smart Appointments</h3>
            <p>
              We help local salons move from walk-in chaos to time-based
              appointments, giving owners better control and customers a
              predictable, stress-free experience.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>🌱 Built for Local Businesses</h3>
            <p>
              Onligro is built ground-up for real local salons — simple to use,
              affordable, and focused on daily operational problems instead of
              unnecessary complexity.
            </p>
          </motion.div>
        </div>

        <p className="about-text" style={{ marginTop: "2rem", fontSize: "0.95rem", opacity: 0.85 }}>
          Founded by <b>Ahmad Raja</b> with <b>Azam Nuri</b> as Co-Founder,
          Onligro is an ongoing effort to bring big-brand efficiency to small,
          local businesses.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
