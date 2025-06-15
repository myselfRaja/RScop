'use client';
import React from 'react';
import Slider from 'react-slick';
import './Client.css';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Client() {
  const clients = [
    {
      name: "FitMax Gym",
      rating: 4.9,
      feedback: "Amazing website! Our client inquiries doubled within a week!",
      location: "Pune",
      avatar: "https://ui-avatars.com/api/?name=FitMax+Gym&background=random",
      service: "Custom gym website with inquiry system",
      duration: "3 months",
    },
    {
      name: "IronBody Fitness",
      rating: 5.0,
      feedback: "The online booking system saved us so much time. Highly recommended!",
      location: "Delhi",
      avatar: "https://ui-avatars.com/api/?name=IronBody+Fitness&background=random",
      service: "Online booking integration + SEO",
      duration: "2 months",
    },
    {
      name: "Muscle Hub",
      rating: 4.8,
      feedback: "Professional design and easy to manage. Clients love it.",
      location: "Mumbai",
      avatar: "https://ui-avatars.com/api/?name=Muscle+Hub&background=random",
      service: "Website redesign + admin dashboard",
      duration: "2.5 months",
    },
    {
      name: "ShredZone Gym",
      rating: 5.0,
      feedback: "We finally have a digital presence. Looks premium and works smoothly!",
      location: "Nagpur",
      avatar: "https://ui-avatars.com/api/?name=ShredZone+Gym&background=random",
      service: "Landing page + blog setup",
      duration: "1.5 months",
    },
    {
      name: "PowerPlay Fitness",
      rating: 4.7,
      feedback: "Easy appointment system and SEO helped us reach new clients.",
      location: "Hyderabad",
      avatar: "https://ui-avatars.com/api/?name=PowerPlay+Fitness&background=random",
      service: "SEO + appointment scheduler",
      duration: "2 months",
    },
    {
      name: "Beast Mode Gym",
      rating: 5.0,
      feedback: "Great experience working with you. Everything was super fast and clean!",
      location: "Bangalore",
      avatar: "https://ui-avatars.com/api/?name=Beast+Mode+Gym&background=random",
      service: "Full-stack gym website + user panel",
      duration: "4 months",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="client-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <Slider {...settings} className="client-slider">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="client-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={client.avatar} alt={client.name} className="client-avatar" />
            <h3>{client.name}</h3>
            <p className="client-location">{client.location}</p>
            <div className="client-rating">
              {[...Array(Math.round(client.rating))].map((_, i) => (
                <FaStar key={i} color="gold" />
              ))}
              <span className="rating-value">{client.rating}/5</span>
            </div>
            <p className="client-feedback">“{client.feedback}”</p>
            <p className="client-service">{client.service}</p>
            <p className="client-duration">📆 {client.duration}</p>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}
