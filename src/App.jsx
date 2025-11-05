import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './components/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import InvoiceForm from './components/Invoice';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/invoice" element={<InvoiceForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
