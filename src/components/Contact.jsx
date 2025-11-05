import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:rajaprofessional181261@gmail.com?subject=${encodeURIComponent(
      formData.subject || "New Inquiry"
    )}&body=${encodeURIComponent(
      `Hi, my name is ${formData.name} (${formData.email}).\n\n${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section className="contact-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let’s <span>Connect</span>
      </motion.h2>

      <motion.p
        className="contact-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Have a project in mind or want to collaborate? Drop me a message — I’d
        love to hear from you!
      </motion.p>

      <div className="contact-container">
        {/* === CONTACT FORM === */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="glow-button">
            Send Message ✉️
          </button>
        </motion.form>

        {/* === CONTACT INFO === */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4>Contact Info</h4>

          <p><strong>Email:</strong> rajaprofessional181261@gmail.com</p>
          <p><strong>Phone:</strong> +91 9038459931</p>
          <p><strong>Location:</strong> New Market Area, Dharamtala, Kolkata 700100</p>
          <p><strong>Hours:</strong> Mon - Sat, 9AM - 8PM</p>

          <p
            style={{
              marginTop: "20px",
              fontStyle: "italic",
              color: "#a3b1cc",
              lineHeight: "1.6",
            }}
          >
            “Let’s connect and create something amazing together.<br />
            Whether you’re a startup looking for an online identity, a salon
            owner aiming to boost customer reach, or a hotel wanting more
            visibility — I can help you go digital the right way.<br />
            Let’s discuss your ideas, your goals, and how we can make your
            business stand out online.”
          </p>

          <div className="social-links">
            <a
              href="https://linkedin.com/in/md-ahmad-raja"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/919038459931"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/rscop_official"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
