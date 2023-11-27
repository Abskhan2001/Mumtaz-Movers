import React, { useState } from 'react';
import './scrolltotopbutton.css';
import {BiSolidUpArrowAlt} from 'react-icons/bi'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className={`scroll-to-top-button ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <i className="fa fa-arrow-up" aria-hidden="true"><BiSolidUpArrowAlt/> </i>
    </button>
  );
};

export default ScrollToTopButton;