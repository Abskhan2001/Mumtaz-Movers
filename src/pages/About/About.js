import React from 'react';
import AboutUsSection from '../../components/aboutussection/AboutUsSection';
import ContactSection from '../../components/contactsection/ContactSection';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import EmployeesSection from '../../components/EmployeesSection/EmployeesSection';
function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, []);
  return (
    <>
      <Helmet>
        <title>Mumtaz Movers - Your Relocation Experts in the UAE</title>
        <meta
          name="description"
          content="Mumtaz Movers is your trusted partner for local and international relocation services, packing, and unpacking in the UAE."
        />
        <meta
          name="keywords"
          content="Mumtaz Movers, relocation services, local moving, international moving, packing, unpacking, UAE movers"
        />
        {/* Add more SEO-related meta tags as needed */}
      </Helmet>
      <AboutUsSection />
      <EmployeesSection/>
      <script type="application/ld+json">
  {`
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Mumtaz Movers",
    "description": "Trusted moving and packing company in the UAE",
    "url": "https://www.mumtazmovers.com",
    "logo": "https://www.mumtazmovers.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Dubai",
      "addressRegion": "DXB",
      "postalCode": "12345",
      "addressCountry": "UAE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971524484031",
      "contactType": "Customer service"
    }
    `}
</script>

      <ContactSection />
    </>
  );
}

export default About;
