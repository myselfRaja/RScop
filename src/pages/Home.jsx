import React from 'react'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import ClientCard from '../components/CleintCard';
import Contact from '../components/Contact';

export default function Home() {
  return (
  
    <div>
  <Hero />
  <ProjectCard />
<ServiceCard />
<ClientCard />
<Contact />
    </div>
  )
}
