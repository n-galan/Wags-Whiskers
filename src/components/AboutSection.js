import React from 'react';
import '../styles/AboutSection.css'; // Make sure to create this CSS file

function AboutSection() {
  return (
    <section className="about-section">
      <p>Welcome to our pet care service where we love your pets as much as you do!</p>
      <div className="service-icons">
        {/* Replace these with actual images/icons */}
        <img src="/path-to-dog-walking-icon.png" alt="Dog Walking" />
        <img src="/path-to-cat-sitting-icon.png" alt="Cat Sitting" />
        <img src="/path-to-boarding-icon.png" alt="Boarding" />
      </div>
    </section>
  );
}

export default AboutSection;
