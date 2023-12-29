import React from 'react';
import Header from './Header';
import '../styles/App.css'; // Adjust the path as necessary to point to your CSS file

function App() {
  return (
    <div className="App">
      <Header />
      {/* Temporarily comment out other components to isolate the issue */}
      {/* <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer /> */}
    </div>
  );
}

export default App;
