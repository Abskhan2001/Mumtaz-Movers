import './herosection.css';
import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import pic1 from '../../assets/home1.jpeg';
import pic2 from '../../assets/home2.jpeg';
import pic3 from '../../assets/home3.jpeg';
import pic4 from '../../assets/WhatsApp Image 2023-09-26 at 7.21.02 PM.jpeg';
import pic5 from '../../assets/WhatsApp Image 2023-09-26 at 7.21.04 PM (1).jpeg';
import pic6 from '../../assets/WhatsApp Image 2023-09-26 at 7.21.04 PM.jpeg';
import pic7 from '../../assets/WhatsApp Image 2023-09-26 at 7.21.05 PM (1).jpeg';
import pic8 from '../../assets/WhatsApp Image 2023-09-26 at 7.21.05 PM.jpeg';

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
     <Helmet>
        {/* Meta Tags for SEO */}
        <meta name="description" content="Mumtaz Movers - Your trusted partner for professional relocation services in the UAE. Offering local and international moving solutions." />
        <meta name="keywords" content="Mumtaz Movers, Movers, Movers in uae, movers, Packers" />
        <meta name="image" content={images[currentImageIndex]} />

        {/* Structured Data (Schema.org) for the Website */}
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "Mumtaz Movers",
            "url": "https://www.mumtazmovers.com",
            "description": "Your trusted partner for professional relocation services in the UAE."
          }
        `}</script>
      </Helmet>
      <section className="hero-section">
        <div className="hero-content">
          <img src={images[currentImageIndex]} alt="Mumtaz Movers - Professional Relocation Services" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
