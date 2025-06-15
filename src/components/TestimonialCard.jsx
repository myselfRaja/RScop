import React from 'react';

const TestimonialCard = ({ clientName, testimonial }) => {
  return (
    <div style={styles.card}>
      <h3>{clientName}</h3>
      <p>{testimonial}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#f9f9f9',
  },
};

export default TestimonialCard;
