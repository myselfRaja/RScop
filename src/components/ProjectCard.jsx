import React from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

// Image imports
import hotelImg from "../assets/s5.png";
import salonImg from "../assets/s1.png";
import saasImg from "../assets/s3.png";
import gymImg from "../assets/s4.png";
import makeupImg from "../assets/s2.png";

const recentClients = [
  {
    id: 1,
    title: "Simna Guest House",
    type: "Hotel Website",
    desc: "Developed a responsive booking website for Simna Guest House with image gallery, contact form, and Google Map integration.",
    result: "+50% increase in online inquiries after launch.",
    tech: ["React", "CSS3", "Vercel"],
    img: hotelImg,
    link: "https://simna-guest-house.vercel.app/",
  },
  {
    id: 2,
    title: "StyleX Salon",
    type: "Salon Business Website",
    desc: "Built a digital presence for a salon brand with Google Business integration and WhatsApp booking feature (upgrade ready for live slot system).",
    result: "GMB verification and +35% customer interaction growth.",
    tech: ["React", "Node.js", "GMB Integration"],
    img: salonImg,
    link: "https://shinefix-salon.vercel.app/",
  },
];

const moreProjects = [
  {
    id: 3,
    title: "Onligro Mini SaaS Suite",
    type: "Enterprise Web App",
    desc: "A full SaaS system for Resort, Gym, and Salon — including billing, analytics, CRM, and report generation.",
    img: saasImg,
    link: "http://salon-frontend-cwz0.onrender.com/",
  },
  {
    id: 4,
    title: "Gym Management System",
    type: "Fitness CRM Platform",
    desc: "Custom-built web app for managing gym memberships, daily attendance tracking, trainer assignments, and automated renewals with real-time analytics dashboard.",
    img: gymImg,
    link: "https://fitness-zone-kappa.vercel.app/",
  },
  {
    id: 5,
    title: "Makeup Artist Portfolio",
    type: "Creative Website",
    desc: "A portfolio website with smooth animations, responsive design, and gallery slider for a makeup artist client.",
    img: makeupImg,
    link: "https://makeup-two-eta.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-bg"></div>

      {/* --- Recent Clients Section --- */}
      <motion.div
        className="projects-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="projects-title">
          Recent <span>Clients</span>
        </h2>
        <p className="projects-subtext">
          Real businesses we’ve helped go digital — from hotels to salons.
        </p>

        <div className="project-grid">
          {recentClients.map((p) => (
            <motion.div
              className="project-card"
              key={p.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <div className="project-img">
                <img src={p.img} alt={p.title} />
              </div>

              <div className="project-body">
                <div className="project-header">
                  <h3>{p.title}</h3>
                  <span>{p.type}</span>
                </div>

                <p className="project-desc">{p.desc}</p>
                <p className="project-result">{p.result}</p>

                <div className="project-tech">
                  {p.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                <a href={p.link} target="_blank" rel="noreferrer" className="btn-view">
                  View Website →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- More Projects Section --- */}
      <motion.div
        className="projects-content more-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="projects-title">
          More <span>Projects</span>
        </h2>
        <p className="projects-subtext">
          Ongoing & concept projects that showcase our technical capabilities.
        </p>

        <div className="project-grid">
          {moreProjects.map((p) => (
            <motion.div
              className="project-card"
              key={p.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <div className="project-img">
                <img src={p.img} alt={p.title} />
              </div>

              <div className="project-body">
                <div className="project-header">
                  <h3>{p.title}</h3>
                  <span>{p.type}</span>
                </div>

                <p className="project-desc">{p.desc}</p>

                <a href={p.link} target="_blank" rel="noreferrer" className="btn-view">
                  View Website →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
