import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const aboutUsOptions = ['Why Us', 'Testimonials', 'Awards & Recognition', 'Partners & Clients', 'Our Values'];
  const packagesOptions = ['Social Media Marketing', 'Email Marketing', 'Optimization Packages', 'SEO Pricing', 'Brand Identity'];
  const servicesOptions = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Web Hosting'];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo">
          <img
            src="https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2023/11/DigitilizeWeblogo.pngw3.webp"
            alt="Digitilize Logo"
          />
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li className="dropdown">
            <a href="#">Services <FontAwesomeIcon icon={faAngleDown} /></a>
            <ul className="dropdown-menu">
              {servicesOptions.map((option, index) => (
                <li key={index}><a href="#">{option}</a></li>
              ))}
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Case Studies</a>
          </li>
          <li className="dropdown">
            <a href="#">About Us <FontAwesomeIcon icon={faAngleDown}/></a>
            <ul className="dropdown-menu">
              {aboutUsOptions.map((option, index) => (
                <li key={index}><a href="#">{option}</a></li>
              ))}
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Packages <FontAwesomeIcon icon={faAngleDown}/></a>
            <ul className="dropdown-menu">
              {packagesOptions.map((option, index) => (
                <li key={index}><a href="#">{option}</a></li>
              ))}
            </ul>
          </li>
          <li><a href="#">Contact Us</a></li>
          <li className="contact-info">
            <a href="#"><FontAwesomeIcon icon={faPhone} className="fa-icon" /> +44 7947 430 685</a>
          </li>
          <li>
            <a href="#" className="quote-button">Get Free Quote</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
