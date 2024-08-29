import React, { useEffect, useRef, useState } from "react";
import "./FactsAtAGlance.css";
import clientRetentionLogo from '../../assets/Frame-6-1.pngw3.webp';
import satisfiedClientsLogo from '../../assets/satisfied-clients.webp';
import yearOfServiceLogo from '../../assets/years-of-service.webp';
import professionalLogo from '../../assets/professionals.webp';

const FactsAtAGlance = () => {
  const facts = [
    { percentage: "97%", description: "Client Retention", img: clientRetentionLogo },
    { percentage: "99%", description: "Satisfied Clients", img: satisfiedClientsLogo },
    { percentage: "12+", description: "Years of Service", img: yearOfServiceLogo },
    { percentage: "80+", description: "Professionals", img: professionalLogo },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const factsGridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (factsGridRef.current) {
      observer.observe(factsGridRef.current);
    }

    return () => {
      if (factsGridRef.current) {
        observer.unobserve(factsGridRef.current);
      }
    };
  }, []);

  return (
    <div className="facts-container">
      <p className="facts-secondary-heading">Stats</p>
      <h2 className="facts-primary-heading">Facts At A Glance</h2>
      <div
        className={`facts-grid ${isVisible ? 'animate' : ''}`}
        ref={factsGridRef}
      >
        {facts.map((fact, index) => (
          <div key={index} className="fact-item">
            <div><img className="fact-icon" src={fact.img} alt="fact-icon" /></div>
            <div className="fact-percentage">
              {isVisible ? <CountUp end={parseInt(fact.percentage)} /> : fact.percentage}
            </div>
            <div className="fact-description">{fact.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// CountUp component to handle counting animation
const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end <= 0) return; // If end is not positive, skip animation

    setCount(0); // Reset count when end changes

    const duration = 2000; // Duration in ms
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      setCount((prev) => {
        const nextCount = prev + 1;
        if (nextCount > end) {
          clearInterval(timer);
          return end; // Ensure the final count matches the end value
        }
        return nextCount;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
};

export default FactsAtAGlance;
