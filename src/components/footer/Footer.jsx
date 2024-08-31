import React from 'react';
import './Footer.css';
import optimisePerformanceImage from '../../assets/How-to-Optimise-Your-iOS-App-for-Better-Performance-1-150x150.pngw3.webp';
import securingAppImage from '../../assets/Copy-of-How-Much-Does-It-Cost-To-Develop-An-iOS-App-In-UK-1-150x150.pngw3.webp';
import ukCostImage from '../../assets/How-Much-Does-It-Cost-To-Develop-An-iOS-App-In-UK-1-150x150.pngw3.webp';
import integrateGPTImage from '../../assets/How-To-Integrate-Chatgpt-Into-Your-App-1-150x150.pngw3.webp';
import seamlesslyIntegrateImage from '../../assets/Copy-of-Seamlessly-Integrate-Tripletex-into-Your-Application-A-Step-by-Step-Guide-150x150.pngw3.webp';
import addressMarkerLine from '../../assets/clarity_map-marker-line-4.png';
import MobileIcon from '../../assets/smartphone.png';
import clockIcon from '../../assets/clarity_clock-line-3.png';
import emailIcon from '../../assets/clarity_email-line-3.png';
import phoneIcon from '../../assets/clarity_phone-handset-line-1.png';
import footerBackgroundImage from '../../assets/footabcbck.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter, faLinkedinIn, faYoutube, faPinterestP, faBehance, faMediumM } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className='footer-background-image-container'>
        <div className='footer-background-image-content'>
          <p className='footer-background-image-content-heading'>
          We’re interested in talking about your business
          </p>
          <button className='footer-background-image-button'>Enquire Now</button>
        </div>
      <img src={footerBackgroundImage} alt="" className="footer-background-image" />
      </div>
      
      <div className="footer-container">
        <div className="footer-column">
          <img 
            src="https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/02/footer-logo-300x92.pngw3.webp"
            alt="Digitilize Logo" 
            className="footer-logo"
          />
          <div className='address-section address-detail-container'>
            <div className="contact-detail-column">
              <img className='contact-detail-sectoin-icon' src={addressMarkerLine} alt="" />
            </div>
            <div className="contact-detail-column">
            <p className="footer-address-heading"> Address:</p>
            <p className="footer-address-details">Office 327 Broadstone Mill Broadstone Road Stockport, England SK5 7DL</p>
            </div>

          </div>
          <div className="mobile-no-section address-detail-container">
            <div className="contact-detail-column">
              <img className='contact-detail-sectoin-icon' src={MobileIcon} alt="" />
            </div>
            <div className="contact-detail-column">
            <p className="footer-address-heading">Mobile No:</p>
            <p className="footer-address-details">+44 7947 430 685</p>
            </div>

          </div>
          <div className="office-telephone-section address-detail-container">
            <div className="contact-detail-column">
              <img className='contact-detail-sectoin-icon' src={phoneIcon} alt="" />
            </div>
            <div className="contact-detail-column">
            <p className="footer-address-heading">Office Telephone:</p>
            <p className="footer-address-details">+44 161 706 2485</p>
            </div>

          </div>
          <div className="email-section address-detail-container">
            <div className="contact-detail-column">
              <img className='contact-detail-sectoin-icon' src={emailIcon} alt="" />
            </div>
            <div className="contact-detail-column">
            <p className="footer-address-heading">Email:</p>
            <p className="footer-address-details">info@digitilizeweb.com</p>
            </div>

          </div>
          <div className="office-hour-section address-detail-container">
            <div className="contact-detail-column">
              <img className='contact-detail-sectoin-icon' src={clockIcon} alt="" />
            </div>
            <div className="contact-detail-column address-detail-container">
            <p className="footer-address-heading">Office Hours:</p>
            <p className="footer-address-details">Mon - Fri / 9:00 AM - 5:00 PM</p>
            </div>

          </div>
        </div>
        <div className="footer-column">
          <h3 className='footer-primary-heading'>Latest from Blog</h3>
          <p><a className='footer-secondary-heading' href="/">View Our Blog</a></p>
          {blogPosts.map((post, index) => (
            <div className="footer-blog-post" key={index}>
              <img 
                src={post.image} 
                alt="Blog Post" 
                className="footer-blog-image"
              />
              <a href="/">{post.title}</a>
            </div>
          ))}
        </div>
        <div className="footer-column">
          <h3 className='footer-primary-heading'>Most Recent Clients</h3>
          <ul>
            {clients.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom-links">
    <div className="footer-bottom-heading-section">
        <ul>
            <li className="footer-bottom-heading">WEB DESIGN UK</li>
            <li className="footer-bottom-heading">E-COMMERCE UK</li>
            <li className="footer-bottom-heading">APP DEVELOPMENT UK</li>
            <li className="footer-bottom-heading">SEO UK</li>
            <li className="footer-bottom-heading">LOGO DESIGN UK</li>
        </ul>
    </div>
    <div className="footer-bottom-location-section">
        <ul>
            <li className="footer-bottom-location">Manchester</li>
            <li className="footer-bottom-location">Birmingham</li>
            <li className="footer-bottom-location">Bradford</li>
            <li className="footer-bottom-location">Glasgow</li>
            <li className="footer-bottom-location">Liverpool</li>
            <li className="footer-bottom-location">London</li>
            <li className="footer-bottom-location">Sheffield</li>
        </ul>
    </div>
</div>



    </footer>
<div className="footer-social-container">


<div className="footer-social-section-left">
        <a>© 2024 All Rights Reserved. <a href="https://digitizeweb.com">digitizeweb.com</a></a>
          <a href="/terms-and-conditions">Terms & Conditions</a> | 
          <a href="/privacy-policy"> Privacy Policy</a> | 
          <a href="/disclaimer"> Disclaimer</a>

      </div>
      <div className="footer-social-section-right">
        <a href="https://instagram.com" className="footer-social-section-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://facebook.com" className="footer-social-section-icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com" className="footer-social-section-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://linkedin.com" className="footer-social-section-icon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://youtube.com" className="footer-social-section-icon">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://pinterest.com" className="footer-social-section-icon">
          <FontAwesomeIcon icon={faPinterestP} />
        </a>
        <a href="https://behance.net" className="footer-social-section-icon">
          <FontAwesomeIcon icon={faBehance} />
        </a>
        <a href="https://medium.com" className="footer-social-section-icon">
          <FontAwesomeIcon icon={faMediumM} />
        </a>
      </div>
      </div>
      </>

  );
};

const blogPosts = [
  {
    title: 'How to Optimise Your iOS App for Better Performance',
    image: optimisePerformanceImage
  },
  {
    title: 'Securing Mobile Apps: Best Practices for Developers',
    image: securingAppImage
  },
  {
    title: 'How Much Does It Cost To Develop An iOS App In UK?',
    image: ukCostImage
  },
  {
    title: 'How To Integrate Chatgpt Into Your App',
    image: integrateGPTImage
  },
  {
    title: 'How Much Does Property Management Software Cost',
    image:seamlesslyIntegrateImage
  }
];

const clients = [
  'SKW Distribution LTD', 
  'Armaan Collection', 
  'Lahori Chai Shai', 
  'Elf Care Services',
  'Venice Fast Food',
  'GTS',
  'Telco Solutions',
  'Totally SME',
  'AR Education Group',
  'Auto Automation',
  'Khan Immigration Advisor'
];

const webDesignLinks = ['Manchester', 'Birmingham'];
const ecommerceLinks = ['Bradford'];
const appDevelopmentLinks = ['Glasgow'];
const seoLinks = ['Liverpool'];
const logoDesignLinks = ['London', 'Sheffield'];

export default Footer;
