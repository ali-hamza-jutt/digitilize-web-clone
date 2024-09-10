import React, { useEffect } from 'react';
import './Services.css';

export default function Services() {
  const services = [
    { name: 'Web Design and Development',image:'https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/02/Frame-1-2.pngw3.webp' },
    { name: 'Mobile Applications',image:'https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/02/Frame-10.pngw3.webp' },
    { name: 'E-Commerce Solutions',image:'https://www.digitilizeweb.com/wp-content/uploads/2022/02/Frame-11.png' },
    { name: 'Website Maintenance',image:'https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/02/Frame-13.pngw3.webp' },
    { name: 'Digital Marketing',image:'https://www.digitilizeweb.com/wp-content/uploads/2022/02/Frame-12.png' },
    { name: 'Hire A Resource',image:'https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/02/Frame-14.pngw3.webp' }
  ];


  

  return (
    <div className="services-container">
      <div className="services-header">
        <p className="services-secondary-heading">Digitilize Web</p>
        <p className="services-primary-heading">Our Services</p>
        <p className="services-paragraph">
          Welcome to DigitilizeWeb, the premier <span className='services-paragraph-highlight-text'>web design agency uk</span>. With the help of our talented group of designers and developers, we construct attractive websites, enticing user experiences, powerful logos and branding, scalable online solutions, <span className='services-paragraph-highlight-text'>mobile applications</span>, dependable hosting, efficient SEO methods, and social media management. DigitilizeWeb can help you transform your online presence and grow your business. Call us right away!
        </p>
      </div>
      <div className="services-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-content">
              <img src={service.image} alt="Service Icon" className="service-card-icon" />
              <p className="service-card-title">{service.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
