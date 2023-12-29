import React from 'react';
import '../styles/Footer.css'; // Make sure to create this CSS file

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>About PetServices</p>
        {/* Replace these # with actual paths */}
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div className="social-links">
        {/* Replace these # with actual links */}
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
