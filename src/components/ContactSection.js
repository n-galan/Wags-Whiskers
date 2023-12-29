import React from 'react';
import '../styles/ContactSection.css'; // Make sure to create this CSS file

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@petservices.com</p>
        {/* Placeholder for Google Map */}
        <div className="google-map">Google Map Embed</div>
      </div>
    </section>
  );
}

export default ContactSection;
