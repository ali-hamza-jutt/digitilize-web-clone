import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const images = [
    'https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2023/03/Custom-UIUX-Design.pngw3.webp',
    'https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/03/E-Commerce-Solutions.pngw3.webp',
    'https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/03/MobileApplicationDevelopment-2.pngw3.webp',
    'https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/02/Custom-Software-Solutions.pngw3.webp',
    'https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2023/03/PremimumBusinessBranding.pngw3.webp',
    'https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/02/Digital-Marketing.pngw3.webp'
  ];

  const skillHeadings = [
    'Custom UI/UX & App Design Company',
    'Ecommerce & Marketplace Solutions',
    'Mobile App Development',
    'Custom Software Solutions',
    'Premium Business Branding',
    'Digital Marketing',
  ];

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Automatically change slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hero-carousel-container">
      <div className={`hero-carousel-slide`}>
        <div className="hero-carousel-text-container">
          <div className={`hero-carousel-text ${animate ? 'hero-text-enter' : ''}`}>
            <h2>We are highly skilled in</h2>
            <h1>{skillHeadings[currentIndex]}</h1>
          </div>
          <div className="hero-carousel-nav">
            <button onClick={prevSlide}> <FontAwesomeIcon icon={faArrowLeft} /></button>
            <span className='hero-carousel-nav-item hero-carousel-nav-active-index'>{currentIndex + 1}</span>
            <span className='hero-carousel-nav-item hero-carousel-nav-by-sign'>/</span>
            <span className='hero-carousel-nav-item'>{images.length}</span>
            <button onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
        <div className={`hero-carousel-image ${animate ? 'hero-image-enter' : ''}`}>
          <img src={images[currentIndex]} alt="Carousel" />
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
