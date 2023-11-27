import React from 'react'
import ContactSection from '../../components/contactsection/ContactSection'
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, []);
  return (
    <>
       <Helmet>
      <title>Mumtaz Movers</title>
      <meta name="description"
      content="Mumtaz Movers Your Relocation Experts in the UAE"
      />
       <meta name="keywords" content="Moving, Mumtaz movers, Mumtaz movers packers, Moving in UAE, Moving UAE, Local Moving in UAE, Moving Services, Packing & Unpacking Services, Packing, Unpacking, Packing in UAE, Unpacking in UAE,   "/>
    </Helmet>
  
      <ContactSection/>
      
    </>
  )
}

export default ContactUs
