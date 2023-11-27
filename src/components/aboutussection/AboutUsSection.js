import React, { useEffect } from 'react';
import './aboutussection.css';
import { Helmet } from 'react-helmet';

function AboutUsSection() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, []);

  return (
    <section className="about-us-section">
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
            "description": "Trusted moving and packing company in the UAE",
            "url": "https://www.Mumtazmovers.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "United Arab Emirates",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "postalCode": "00000",
              "addressCountry": "United Arab Emirates UAE"
            },
            "telephone": "+971524484031"
          }
        `}</script>
      </Helmet>
      <div className="about-us-content">
        <h1>About Mumtaz Movers</h1>
        <p>
          Welcome to Mumtaz Movers, your trusted moving and packing company with years of experience serving the UAE community. Our commitment to excellence, dedication, and reliability has made us a top choice for individuals and businesses alike.
        </p>

        <h2>Why Choose Us</h2>
        <ul>
          <li>
            <strong>Expertise:</strong> With our years of experience, we possess the expertise to handle both local and international moves seamlessly.
          </li>
          <li>
            <strong>Dedicated Team:</strong> Our skilled and dedicated team is always ready to serve you, ensuring a smooth transition to your new location.
          </li>
          <li>
            <strong>24/7 Service:</strong> We work around the clock to provide you with the best packing and moving services, ensuring your convenience.
          </li>
          <li>
            <strong>Reliable & Honest:</strong> Your belongings are precious to us, and we handle them with care and honesty throughout the entire process.
          </li>
        </ul>

        <p>
          At Mumtaz Movers, we believe in collaboration, creativity, and continuous learning. We are committed to our roots and strive to bring together tech talent and the tech industry to create something extraordinary.
        </p>

        <p>
          <strong>Contact us today for all your moving and packing needs.</strong> Our dedicated team is here to make your relocation a seamless and stress-free experience.
        </p>
  
      </div>
    </section>
  );
}

export default AboutUsSection;
