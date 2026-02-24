import React from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

// Image imports with fallback handling
import hotelImg from "../assets/s5.png";
import salonImg from "../assets/s1.png";
import saasImg from "../assets/s3.png";
import gymImg from "../assets/s4.png";
import resortImg from "../assets/resort.png";
import agencyImg from "../assets/agency.png";


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
    title: "Shinefix Salon",
    type: "Salon Business Website",
    desc: "Built a digital presence for a salon brand with Google Business integration and WhatsApp booking feature (upgrade ready for live slot system).",
    result: "GMB verification and +35% customer interaction growth.",
    tech: ["React", "Node.js", "GMB Integration"],
    img: salonImg,
    link: "https://shinefix-salon.vercel.app/",
  },
  {
    id: 3,
    title: "Future Ad Summit – Digital Marketing Agency Website",
    type: "Business Website (Client Project)",
    desc: "Designed and developed a high-performance website for a digital marketing agency to showcase services, build credibility, and generate client leads. Focused on clean UI, fast loading performance, SEO optimization, and mobile responsiveness to improve user engagement and conversions.",
    result: "Increased client inquiries and improved online presence with 40% faster load times.",
    tech: ["React", "Node.js", "SEO Optimization", "Responsive Design"],
    img: agencyImg,
    link: "https://futureadsummit.com/",
  },
];

const moreProjects = [
  {
    id: 4,
    title: "Onligro Salon SaaS (Live Multi-Tenant System)",
    type: "Full Stack SaaS Product",
    desc: "A real-time multi-tenant Salon Management SaaS currently used by 5 active salons. Features include appointment scheduling with double-booking prevention, live slot updates using Socket.IO, customer CRM, staff performance tracking, email confirmations, and revenue analytics dashboard.",
    img: saasImg,
    link: "http://onligro.com",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB"], // Added tech array
    result: "5 active salons with 2000+ appointments processed", // Added result
  },
  {
    id: 5,
    title: "Gym Management System",
    type: "Fitness CRM Platform",
    desc: "Custom-built web app for managing gym memberships, daily attendance tracking, trainer assignments, and automated renewals with real-time analytics dashboard.",
    img: gymImg,
    link: "https://fitness-zone-kappa.vercel.app/",
    tech: ["React", "Node.js", "Express", "PostgreSQL"], // Added tech array
    result: "300+ active members and 95% retention rate", // Added result
  },
  {
    id: 6,
    title: "SeaSky Deluxe – Resort Website",
    type: "Luxury Hospitality Website",
    desc: "Designed and developed a modern resort website with immersive hero section, room showcase, image gallery, and direct booking call-to-action. Focused on premium UI design, fast performance, and mobile responsiveness.",
    img: resortImg,
    link: "https://seaskydelux.vercel.app/",
    tech: ["React", "CSS3", "Framer Motion", "Vercel"], // Added tech array
    result: "35% increase in direct bookings within first month", // Added result
  },
];

// Image error handler component
const ProjectImage = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallbackImg)}
      loading="lazy"
    />
  );
};

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
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="projects-title">
          Recent <span>Clients</span>
        </h2>
        <p className="projects-subtext">
          Real businesses we've helped go digital — from hotels to salons.
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
                <ProjectImage src={p.img} alt={p.title} />
              </div>

              <div className="project-body">
                <div className="project-header">
                  <h3>{p.title}</h3>
                  <span className="project-type">{p.type}</span>
                </div>

                <p className="project-desc">{p.desc}</p>
                
                {p.result && (
                  <p className="project-result">
                    <strong>Result:</strong> {p.result}
                  </p>
                )}

                {p.tech && p.tech.length > 0 && (
                  <div className="project-tech">
                    {p.tech.map((tech, i) => (
                      <span key={tech + i}>{tech}</span>
                    ))}
                  </div>
                )}

                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-view"
                >
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
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
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
                <ProjectImage src={p.img} alt={p.title} />
              </div>

              <div className="project-body">
                <div className="project-header">
                  <h3>{p.title}</h3>
                  <span className="project-type">{p.type}</span>
                </div>

                <p className="project-desc">{p.desc}</p>

                {p.result && (
                  <p className="project-result">
                    <strong>Result:</strong> {p.result}
                  </p>
                )}

                {p.tech && p.tech.length > 0 && (
                  <div className="project-tech">
                    {p.tech.map((tech, i) => (
                      <span key={tech + i}>{tech}</span>
                    ))}
                  </div>
                )}

                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-view"
                >
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