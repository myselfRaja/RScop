import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ServiceCard.css';

export default function ServiceCard() {
  const plans = [
    {
      name: 'Basic',
      price: '₹9,999',
      tagline: 'Perfect for small business owners',
      features: [
        'Mobile-Friendly Design',
        '1 Page Website',
        'Contact Form',
        'Basic SEO',
        'Free Hosting (1st Year)',
      ],
    },
    {
      name: 'Standard',
      price: '₹29,999',
      tagline: 'Great for growing local brands',
      features: [
        'Up to 3 Pages',
        'Image Gallery',
        'Service Listing',
        'Testimonials Section',
        'Inquiry/Leads Form',
        'On-Page SEO',
        'Google Search Submission',
        'Hosting + Domain Included',
        '1 Week Free Maintenance',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '₹59,999',
      tagline: 'Built for serious scaling & automation',
      features: [
        '5+ Pages Website',
        'Online Appointment Booking',
        'Package Tracker System',
        'Admin Panel Access',
        'Lead Collection (Auto WhatsApp)',
        'Payment Integration',
        'Advanced SEO + Analytics',
        'Priority Support',
        'Custom Domain + Pro Hosting (1 Year)',
      ],
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to build my website?',
      answer:
        'It usually takes 3-7 days depending on your package and content availability.',
    },
    {
      question: 'Can I upgrade later from Basic to Premium?',
      answer: 'Yes, you can upgrade anytime. You’ll only pay the difference.',
    },
    {
      question: 'Do I get full control of my website?',
      answer:
        'Yes, we provide access to manage your website and full admin control (in Premium plan).',
    },
    {
      question: 'Will my site rank on Google?',
      answer:
        'Yes. We apply SEO best practices. Standard and Premium plans include advanced optimization.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="services-page">
      <motion.section
        className="plans-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Choose Your Plan</h2>
        <div className="plans-container">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`plan-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {plan.popular && <div className="popular-tag">Most Popular</div>}
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p className="tagline">{plan.tagline}</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="faq-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Build Your Website?</h2>
        <p>Let’s make your business stand out online — starting today!</p>
        <a href="https://wa.me/91XXXXXXXXXX" className="glow-button">
          Book a Free Consultation
        </a>
      </motion.section>
    </div>
  );
}
