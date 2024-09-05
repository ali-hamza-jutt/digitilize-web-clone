import React, { useState } from 'react';
import './CaseStudy.css';
import ukPropertiesLogo from '../../assets/UK-properties-logo-2-02-1.pngw3.webp';
import rightArrow from '../../assets/bi_arrow-right.png';

const contentData = [
  {
    id: 'totally-sme',
    title: 'Totally SME',
    description: 'Read the UK Properties case study DigitilizeWeb, to see how we have helped them to get the best online presence. We discovered that in order to expedite property searches and boost engagement, we needed a contemporary, user-friendly website throughout the discovery process. By doing extensive research, looking for insights, and comparing against industry norms, we were able to gain a comprehensive grasp of UK Property\'s target market. Offered a free one-year maintenance service to UK Properties to guarantee the website\'s continuous up...',
    expertise: ['Social Media Campaign', 'Wordpress', 'Logo Design'],
    imageUrl: 'https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2024/06/124.pngw3.webp',
  },
  // Add more objects for other links with different content
];

const CaseStudy = () => {
  const [selectedContent, setSelectedContent] = useState(contentData[0]);

  const handleLinkClick = (id) => {
    const content = contentData.find((item) => item.id === id);
    setSelectedContent(content);
  };

  return (
    <div className="case-study-container">
      <div className="main-content">
        <div className="left-section">
          <p className='case-study-left-section-title'>UK Properties Case Study | DigitilizeWeb</p>
          <img className="case-study-left-section-image" src={ukPropertiesLogo} alt="uk-properties" />
          <p className='case-study-left-section-sub-heading'>Our Expertise</p>
          <div className="case-study-left-section-button-container">
            {selectedContent.expertise.map((item, index) => (
              <button key={index} className="expertise-button">
                {item}
              </button>
            ))}
          </div>
          <p className='case-study-left-section-description'> {selectedContent.description}</p>
          <div className="case-study-link">
            <a href="#">View Case Study</a>
            <img src={rightArrow} alt="->" />
          </div>
        </div>

        <div className="mid-section">
          <div className="header-container">
            <div className="header">
              <button
                onClick={() => handleLinkClick('totally-sme')}
                className={selectedContent.id === 'totally-sme' ? 'active' : ''}
              >
                Web Design and Development
              </button>
              <button>Mobile Applications</button>
              <button>E-Commerce Solutions</button>
            </div>
          </div>
          <div className="image-container">
            <img src={selectedContent.imageUrl} alt="Laptop" className="laptop-image" />
          </div>
        </div>

        <div className="right-section">
          <ul className="link-list">

            {/* Add more <li> items here */}
            <li>UK Properties Case Study</li>
            <li>Armaan Collection</li>
            <li>Lahori Chai Shai</li>
            <li>Star Building Construction</li>
            <li>Gondal Quality Care</li>
            <li>My Life Score Case Study</li>
            <li>Caspian Pizza</li>
            <li>XerusCare</li>
            <li>GTS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
