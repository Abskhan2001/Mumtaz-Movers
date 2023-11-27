import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa'; // Import the FaPhone icon
import './whatsapp.css'; // Import your CSS file for styling

function WhatsApp() {
  const phoneNumber = '+971524484031';
  const message = encodeURIComponent("Hello! I'm interested in your products.");

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <div className="container">
      <a className="whatsapp-link" href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="whatsapp-icon" />
        WhatsApp
      </a>
      <a className="phone-link" href={`tel:${phoneNumber}`}>
        <FaPhone className="phone-icon" />
        Call
      </a>
    </div>
  );
}

export default WhatsApp;