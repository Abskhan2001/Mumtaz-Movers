import React from 'react';
import './footer.css';
import WhatsApp from '../whatsapp/WhatsApp';
import { Helmet } from 'react-helmet';

function Footer() {
  return (
    <footer className="footer">
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
      <div className="footer-content">
        <div className='footerLogo'>
          <h3>Mumtaz Movers - Your Relocation Experts in the UAE</h3>
          <p>
            Mumtaz Movers is a top-rated moving and packing company in the UAE. We offer local and international moving services, packing & unpacking, and more. Contact us for a smooth relocation experience.
          </p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@mumtazmovers.com">info@mumtazmovers.com</a></p>
          <p>Phone: <a href="tel:+971524484031">0524484031</a></p>
          <p>Address: UNITED ARAB EMIRATES</p>
        </div>
        <div className="footer-social">
          <WhatsApp />
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Mumtaz Movers. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
