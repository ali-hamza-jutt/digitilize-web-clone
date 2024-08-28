import React, { useEffect } from 'react';
import './Services.css';

export default function Services() {
  const services = [
    'Web Design and Development',
    'Mobile Applications',
    'E-Commerce Solutions',
    'Website Maintenance',
    'Digital Marketing',
    'Hire A Resource'
  ];

  // Masonry effect logic
  useEffect(() => {
    const grid = document.querySelector('.services-cards');
    const gridItems = document.querySelectorAll('.service-card');
    
    const resizeMasonryItem = (item) => {
      const grid = document.querySelector('.services-cards');
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      const rowSpan = Math.ceil((item.querySelector('.service-card-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
      item.style.gridRowEnd = 'span ' + rowSpan;
    };

    const resizeAllMasonryItems = () => {
      gridItems.forEach(item => resizeMasonryItem(item));
    };

    window.addEventListener('load', resizeAllMasonryItems);
    window.addEventListener('resize', resizeAllMasonryItems);

    return () => {
      window.removeEventListener('load', resizeAllMasonryItems);
      window.removeEventListener('resize', resizeAllMasonryItems);
    };
  }, []);

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
              <img src="https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/02/Frame-1-2.pngw3.webp" alt="Service Icon" className="service-card-icon" />
              <p className="service-card-title">{service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
