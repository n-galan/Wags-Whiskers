import React from 'react';
import '../styles/GallerySection.css'; // Make sure to create this CSS file

function GallerySection() {
  // Placeholder for your images
  const images = ['/path-to-pet1.jpg', '/path-to-pet2.jpg'];

  return (
    <section className="gallery-section">
      <h2>Our Happy Clients</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt="Happy pet" />
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
