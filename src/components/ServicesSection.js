import React from 'react';
import '../styles/ServicesSection.css'; // Make sure to create this CSS file

function ServicesSection() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-list">
        {/* Replace with actual service details */}
        <div className="service">
          <h3>Dog Walking</h3>
          <p>Detail about dog walking service...</p>
          <p>Starting at $20</p>
        </div>
        <div className="service">
          <h3>Cat Sitting</h3>
          <p>Detail about cat sitting service...</p>
          <p>Starting at $15</p>
        </div>
        <div className="service">
          <h3>Boarding</h3>
          <p>Detail about boarding service...</p>
          <p>Starting at $30 per night</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
