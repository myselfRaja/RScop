import React from "react";
import { motion } from "framer-motion";
import "./Project.css";

const recentClients = [
  {
    id: 1,
    title: "Simna Guest House",
    type: "Hotel Website",
    desc: "Designed and developed a responsive website for Simna Guest House with photo gallery, booking info, and Google Maps integration.",
    result: "Increased booking inquiries by 50% within the first month.",
    tech: ["React", "CSS3", "Vercel"],
    link: "https://simnaguesthouse.vercel.app",
  },
  {
    id: 2,
    title: "StyleX Salon",
    type: "Salon Business Website",
    desc: "Created a professional web presence for a salon brand with Google Business integration and WhatsApp-based appointment booking (upgrade path for online slots & payments ready).",
    result: "Helped the salon gain a verified digital identity and improve customer engagement.",
    tech: ["React", "Node.js", "GMB Integration"],
    link: "https://razasahebstudio.vercel.app",
  },
];

const moreProjects = [
  {
    id: 3,
    title: "Onligro Mini SaaS Suite",
    type: "Enterprise Web App",
    desc: "Multi-module SaaS platform covering Resort, Gym, and Salon management with billing, analytics, and sales reporting.",
    tech: ["React", "Express", "MongoDB", "JWT", "Cloud"],
  },
  {
    id: 4,
    title: "Makeup Artist Portfolio",
    type: "Creative Portfolio Site",
    desc: "Animated showcase site with smooth scroll and 3D image transitions.",
    tech: ["React", "Framer Motion", "CSS"],
  },
  {
    id: 5,
    title: "Airbnb Clone Concept",
    type: "Full-Stack Practice Project",
    desc: "Authentication, property listing, and booking flow built as a functional clone of Airbnb UI/UX.",
    tech: ["Next.js", "MongoDB", "Auth.js"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-bg"></div>

      {/* Recent Clients Section */}
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* More Projects Section */}
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
          Ongoing and concept projects showcasing our technical depth and design approach.
        </p>

        <div className="project-grid">
          {moreProjects.map((p) => (
            <motion.div
              className="project-card"
              key={p.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <div className="project-header">
                <h3>{p.title}</h3>
                <span>{p.type}</span>
              </div>

              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
