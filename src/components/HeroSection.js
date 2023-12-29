import React from 'react';
import '../styles/HeroSection.css'; // Make sure to create this CSS file

function HeroSection() {
  // Placeholder for your image paths
  const images = ['/path-to-your-image1.jpg', '/path-to-your-image2.jpg'];

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${images[0]})` }}>
      <h1>Bringing Joy to Your Pet's Day!</h1>
      <button className="cta-button">Explore Services</button>
    </section>
  );
}

export default HeroSection;
