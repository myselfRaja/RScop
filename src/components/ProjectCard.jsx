import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Removed local image imports

const projects = [
  {
    title: 'Fitness Website',
    description: 'This is a project I worked on, focused on building a responsive fitness website.',
    imageUrl: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveLink: 'https://fitness-zone-kappa.vercel.app/',
    githubLink: 'https://github.com/myselfRaja/fitnessZone'
  },
  {
    title: 'Salon Website',
    description: 'A Salon Website application built with React and Node.js.',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveLink: 'https://salon-frontend-cwz0.onrender.com/',
    githubLink: 'https://github.com/myselfRaja/salon-mern'
  },
  {
    title: 'Resort',
    description: 'A personal portfolio website with modern UI/UX design.',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveLink: 'https://seaskydelux.vercel.app/',
    githubLink: 'https://github.com/myselfRaja/seaskydelux'
  }
];

const ProjectCard = () => {
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
              loading="lazy"
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

export default ProjectCard;
