import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="contact-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Have a project in mind or want to collaborate? Drop a message!
      </motion.p>

      <div className="contact-container">
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </motion.form>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4>Contact Info</h4>
          <p><strong>Email:</strong> rajaprofessional181261@gmail.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Location:</strong> Science City, Kolkata 700100</p>
          <p><strong>Hours:</strong> Mon - Sat, 9AM - 8PM</p>

          <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#aaa' }}>
            “Let’s connect and create something amazing.”
          </p>

          <div className="social-links" style={{ marginTop: '20px' }}>
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
