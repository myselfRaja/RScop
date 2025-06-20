import React from 'react';
import { motion } from 'framer-motion';
import './Project.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';

const projects = [
  {
    title: 'Fitness Website',
    description: 'This is a project I worked on, focused on building a responsive fitness website.',
    imageUrl: p3,
    liveLink: 'https://fitness-zone-kappa.vercel.app/',
    githubLink: 'https://github.com/myselfRaja/fitnessZone'
  },
  {
    title: 'Salon Website',
    description: 'An e-commerce application built with React and Node.js.',
    imageUrl: p2,
    liveLink: 'https://salon-frontend-cwz0.onrender.com/',
    githubLink: 'https://github.com/your-username/ecommerce-app'
  },
  {
    title: 'Portfolio Website',
    description: 'Built a modern, responsive resort site with WhatsApp & call integration for direct bookings. Optimized for mobile and smooth user experience.',
    imageUrl: p1,
    liveLink: 'https://your-portfolio.vercel.app/',
    githubLink: 'https://github.com/your-username/portfolio-site'
  }
];

const Projects = () => {
  return (
    <motion.section
      className="projects-container"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">My Recent Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <LazyLoadImage
              src={project.imageUrl}
              alt={project.title}
              effect="blur"
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.liveLink}
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live
              </a>
              <a
                href={project.githubLink}
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
