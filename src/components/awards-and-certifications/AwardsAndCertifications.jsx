import React, { useEffect, useRef, useState } from 'react';
import './AwardsAndCertifications.css';
import award1 from '../../assets/short-award-1.webp';
import award2 from '../../assets/short-award-2.webp';
import award3 from '../../assets/short-award-3.webp';
import award4 from '../../assets/short-award-4.webp';
import award5 from '../../assets/short-award-5.webp';
import award6 from '../../assets/short-award-6.webp';

import certification1 from '../../assets/large-award-1.webp';
import certification2 from '../../assets/large-award-2.webp';
import certification3 from '../../assets/large-award-3.webp';

const AwardsAndCertifications = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer && containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="awards-certifications-container">
      <p className={`primary-heading ${isVisible ? 'slide-in' : ''}`}>
        Awards & Recognition
      </p>
      <div className={`awards-section ${isVisible ? 'slide-in' : ''}`}>
        <a href="https://www.sortlist.co.uk/agency/digitilizeweb" target="_blank" rel="noopener noreferrer">
          <img src={award1} alt="Award 1" />
        </a>
        <a href="https://www.designrush.com/agency/profile/digitilizeweb" target="_blank" rel="noopener noreferrer">
          <img src={award2} alt="Award 2" />
        </a>
        <a href="https://www.goodfirms.co/company/digitilize-web" target="_blank" rel="noopener noreferrer">
          <img src={award3} alt="Award 3" />
        </a>
        <a href="https://uk.trustpilot.com/review/digitilizeweb.com" target="_blank" rel="noopener noreferrer">
          <img src={award4} alt="Award 4" />
        </a>
        <a href="https://www.topdevelopers.co/profile/digitilize-web-ltd" target="_blank" rel="noopener noreferrer">
          <img src={award5} alt="Award 5" />
        </a>
        <a href="https://clutch.co/profile/digitilize-web#highlights" target="_blank" rel="noopener noreferrer">
          <img src={award6} alt="Award 6" />
        </a>
      </div>
      <p className={`primary-heading ${isVisible ? 'slide-in' : ''}`}>
        Certifications and Quality Assurance
      </p>
      <div className={`certifications-section ${isVisible ? 'slide-in' : ''}`}>
        <a href="https://www.digitilizeweb.com/iso-9001-certified-company-uk/" target="_blank" rel="noopener noreferrer">
          <img src={certification1} alt="Certification 1" />
        </a>
        <a href="https://www.digitilizeweb.com/iso-27001-certified-company-uk/" target="_blank" rel="noopener noreferrer">
          <img src={certification2} alt="Certification 2" />
        </a>
        <a href="https://www.digitilizeweb.com/iso-20000-certified-company-uk/" target="_blank" rel="noopener noreferrer">
          <img src={certification3} alt="Certification 3" />
        </a>
      </div>
    </div>
  );
};

export default AwardsAndCertifications;
