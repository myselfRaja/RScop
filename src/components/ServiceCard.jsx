import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import "./ServiceCard.css";

export default function ServiceCard() {
  const plans = [
    {
      name: "Basic",
      price: "₹9,999",
      tagline: "Perfect for small business owners",
      features: [
        "Mobile-Friendly Design",
        "1 Page Website",
        "Contact Form",
        "Basic SEO",
        "Free Hosting (1st Year)",
      ],
    },
    {
      name: "Standard",
      price: "₹29,999",
      tagline: "Great for growing local brands",
      features: [
        "Up to 3 Pages",
        "Image Gallery",
        "Service Listing",
        "Testimonials Section",
        "Inquiry/Leads Form",
        "On-Page SEO",
        "Google Search Submission",
        "Hosting + Domain Included",
        "1 Week Free Maintenance",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹59,999",
      tagline: "Built for serious scaling & automation",
      features: [
        "5+ Pages Website",
        "Online Appointment Booking",
        "Package Tracker System",
        "Admin Panel Access",
        "Lead Collection (Auto WhatsApp)",
        "Payment Integration",
        "Advanced SEO + Analytics",
        "Priority Support",
        "Custom Domain + Pro Hosting (1 Year)",
      ],
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build my website?",
      answer:
        "It usually takes 3-7 days depending on your package and content availability.",
    },
    {
      question: "Can I upgrade later from Basic to Premium?",
      answer: "Yes, you can upgrade anytime. You’ll only pay the difference.",
    },
    {
      question: "Do I get full control of my website?",
      answer:
        "Yes, you get full admin access and management rights in Premium plans.",
    },
    {
      question: "Will my site rank on Google?",
      answer:
        "We use SEO best practices. Standard and Premium plans include advanced optimization.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(index === activeIndex ? null : index);

  return (
    <div className="services-page">
      {/* Plans */}
      <motion.section
        className="plans-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Choose Your <span>Plan</span>
        </h2>

        <div className="plans-container">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {plan.popular && <div className="popular-tag">Most Popular</div>}
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p className="tagline">{plan.tagline}</p>

              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle className="icon" /> {feature}
                  </li>
                ))}
              </ul>

 <a
  href="https://wa.me/919038459931?text=Hi%20Raja!%20I%20just%20saw%20your%20website%20plans%20and%20want%20to%20discuss%20building%20my%20own%20site.%20Let%27s%20get%20started!"
  target="_blank"
  rel="noreferrer"
  className="plan-button"
>
  Get Started →
</a>



            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section
        className="faq-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Frequently <span>Asked Questions</span>
        </h2>

        <div className="faq-container">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${activeIndex === i ? "active" : ""}`}
              onClick={() => toggleFAQ(i)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <span>{activeIndex === i ? "−" : "+"}</span>
              </div>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
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

      {/* CTA */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>
          Ready to <span>Build</span> Your Website?
        </h2>
        <p>Let’s make your business stand out online — starting today!</p>
     <p>
  Let’s make your business stand out online — starting today!
</p>

<a
  href="https://wa.me/919038459931?text=Hi%20Raza!%20I%20want%20to%20book%20a%20free%20consultation%20for%20my%20business%20website.%20Can%20we%20discuss%20my%20requirements%3F"
  target="_blank"
  rel="noreferrer"
  className="glow-button"
>
  Book a Free Consultation 💬
</a>

      </motion.section>
    </div>
  );
}
