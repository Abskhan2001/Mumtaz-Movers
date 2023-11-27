import React, { useState } from 'react';
import './contactsection.css';
import emailjs from 'emailjs-com'; // Import EmailJS library
import { Helmet } from 'react-helmet';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    user_email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Use the EmailJS API to send the email
      await emailjs.sendForm('service_7ruqiig', 'template_wftpouq', event.target, 'y-WPPfktMbKQqKqdJ');
      // Clear form after successful submission
      setFormData({ name: '', user_email: '', message: '' });

      // Display success alert
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      // Display error alert
      alert('An error occurred while sending the email.');
    }
  }

  return (
    
    <section className="contact-section">
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
      <h2>Contact Mumtaz Movers</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us. We're here to help.</p>
      <div className="contact">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
          <input type="email" name="user_email" placeholder="Your Email" value={formData.user_email} onChange={handleInputChange} />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange}></textarea>
          <button className='contact-button' type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
