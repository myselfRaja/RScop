import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="home-wrapper">
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><ProjectCard /></section>
      <section id="services"><ServiceCard /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
