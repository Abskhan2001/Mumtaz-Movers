import React from 'react';
import './servicessection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faTruckMoving, faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ServicesSection() {
  const services = [
    {
      title: 'Local Moving Services',
      description: "We provide efficient and affordable local moving services within the UAE. Whether you're relocating within the same city or to a nearby emirate, our expert team ensures a smooth transition.",
      icon: faTruckFast,
    },
    {
      title: 'International Moving',
      description: "Looking for a reliable partner for your international relocation? Mumtaz Movers offers top-notch international moving services to help you seamlessly transition to your new global destination. Our extensive network and expertise ensure a stress-free international move.",
      icon: faTruckMoving,
    },
    {
      title: "Packing & Unpacking",
      description: "Don't stress over the packing and unpacking process. At Mumtaz Movers, we provide comprehensive packing and unpacking services, ensuring the safety of your belongings during the entire move. Sit back and relax while we handle the details.",
      icon: faBoxesPacking,
    },
  ];

  return (
    <section className="services-section">
      <Helmet>
             {/* Meta Tags for SEO */}
      <meta name="description" content="Mumtaz Movers - Your trusted partner for professional relocation services in the UAE. Offering local and international moving solutions." />
        <meta name="keywords" content="Mumtaz Movers, Movers, Movers in uae, movers, Packers" />

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "name": "Mumtaz Movers",
          "description": "Contact us for all your moving and packing needs.",
        "url": "https://www.Mumtazmovers.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "United Arab Emirates",
              "addressLocality": "dubai",
              "addressRegion": "Dubai",
              "postalCode": "00000",
              "addressCountry": "United Arab Emirates UAE"
            },
            "telephone": "+971524484031"
          }
      `}</script>
      </Helmet>
      <h1>Welcome to Mumtaz Movers - Your Relocation Experts in the UAE</h1>
      <p className='cardTopP'>Your Reliable Moving and Packing Service Provider</p>

      <meta name="description" content="Mumtaz Movers - Your trusted partner for local and international moving services, packing, and unpacking in the UAE." />
      <meta name="keywords" content="Mumtaz Movers, relocation services, local moving, international moving, packing, unpacking, UAE movers" />
      <meta name="image" content="your-image-url.jpg" />
      <title>Mumtaz Movers - Relocation Services</title>

      <Link to="/service">
        <button className="cta-button">Contact Us</button>
      </Link>
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <i> <FontAwesomeIcon className='icon' icon={service.icon} /></i>
            <h3>{service.title}</h3>
            <p className="cardP">{service.description}</p>
            <a><Link to='/service' className='buttonLink'>Click For More</Link></a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
