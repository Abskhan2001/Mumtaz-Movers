import React from 'react'
import HeroSection from '../../components/herosection/HeroSection'
import ServicesSection from '../../components/servicessection/ServicesSection'
import AboutUsSection from '../../components/aboutussection/AboutUsSection'
import ContactSection from '../../components/contactsection/ContactSection'
import { Helmet } from 'react-helmet';
import EmployeesSection from '../../components/EmployeesSection/EmployeesSection'
function Home() {
  return (
    <>
       <Helmet>
      <title>Mumtaz Movers</title>
      <meta name="description"
      content="Mumtaz Movers Your Relocation Experts in the UAE"
      />
       <meta name="keywords" content="Moving, Mumtaz movers, Mumtaz movers packers, Moving in UAE, Moving UAE, Local Moving in UAE, Moving Services, Packing & Unpacking Services, Packing, Unpacking, Packing in UAE, Unpacking in UAE,   "/>
    </Helmet>
<HeroSection/>
<ServicesSection/>
<AboutUsSection/>
<EmployeesSection/>
<ContactSection/>
    </>
  )
}

export default Home
