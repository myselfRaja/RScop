import React from "react";

const GlowButton = ({ text, link }) => {
  return (
    <a href={link} className="glow-button mt-4" download>
      {text}
    </a>
  );
};

export default GlowButton;
