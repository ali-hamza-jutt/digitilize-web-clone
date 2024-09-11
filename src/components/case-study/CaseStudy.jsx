import React, { useState } from 'react';
import './CaseStudy.css';
import ukPropertiesLogo from '../../assets/UK-properties-logo-2-02-1.pngw3.webp';
import rightArrow from '../../assets/bi_arrow-right.png';
import xerusLaptopImage from '../../assets/XERUS-laptop.pngw3.webp';
import armaanLaptopImage from '../../assets/Armaan-laptop.pngw3.webp';
import veniceFastFoodImagge from '../../assets/venuslaptop.webp';
import LahoreChaiSaiLaptopImage from '../../assets/lahorichaishai-laptop.pngw3.webp';
import gondalLaptopImage from '../../assets/GQC-Laptop.pngw3.webp';
import myLifeScoreLaptopImage from '../../assets/my-life-goal-case-study-laptop.webp';
import ukPropertiesLaptopImage from '../../assets/uk-properties-laptop-1.pngw3.webp';
import starBuildingLaptopImage from '../../assets/star-building-construction-laptop.pngw3.webp';
import caspianPizzaLaptopImage from '../../assets/Caspainpizzza.pngw3.webp';
import GTSLaptopImage from '../../assets/GTS-laptop-1.pngw3.webp';
import totallySMELaptopImage from '../../assets/TotallySME-laptop.pngw3.webp';
import SkwLaptop from '../../assets/skwmockup.webp';
import JaibkLaptopImage from '../../assets/jaibk-case-study.webp';
import beautyWorldLaptopImage from '../../assets/beautyworld-mockup-4.pngw3.webp';
import xerusLogo from '../../assets/Logo-xeruscare.png';
import armaanLogo from '../../assets/Armaan-logo.pngw3.webp';
import veniceLogo from '../../assets/venicefastfoodlogo.png';
import LahoriLogo from '../../assets/Logo-LahoriChaishai.jpgw3.webp';
import gondalLogo from '../../assets/GQC-logo.pngw3.webp';
import myLifeLogo from '../../assets/my-life-score-log.webp';
import starContructionsLogo from '../../assets/star-building-logo.pngw3.webp';
import caspianLogo from '../../assets/WebsiteLogo.pngw3.webp';
import GTSLogo from '../../assets/gts-logo.png';
import SMELogo from '../../assets/totally-sme-logo.webp';
import JaibkLogo from '../../assets/jaibk-logo.webp';
import beautyWorldLogo from '../../assets/beauty-world-logo.webp';
import skwLogo from '../../assets/skw-distributions.png';


const webContentData = [
  {
    id: 'uk-properties',
    title: 'UK Properties Case Study',
    description: 'Read the UK Properties case study DigitilizeWeb, to see how we have helped them to get the best online presence. We discovered that in order to expedite property searches and boost engagement, we needed a contemporary, user-friendly website throughout the discovery process. By doing extensive research, looking for insights, and comparing against industry norms, we were able to gain a comprehensive grasp of UK Property\'s target market. Offered a free one-year maintenance service to UK Properties to guarantee the website\'s continuous up...',
    expertise: ['Website Design and Development', 'SEO', 'Website Maintenance'],
    imageUrl: ukPropertiesLaptopImage,
    logoImage:ukPropertiesLogo
  },
  {
    id: 'armaan-collection',
    title: 'Armaan Collection',
    description: 'Check our full Armaan Collection Case Study DigitilizeWeb! Armaan Collection, a prominent player in the fashion industry, approached DigitilizeWeb intending to transform their online presence and enhance their brand identity. As a retailer specializing in clothing, Armaan Collection sought a comprehensive solution that encompassed ecommerce website development. Also brand identity enhancement, website support, reliable web hosting, and effective email marketing. Explore our user-friendly interface, showcasing the latest trends and tim...',
    expertise: ['Logo Design', 'Website Design & Development', 'Emails & Hosting'],
    imageUrl:armaanLaptopImage,
    logoImage:armaanLogo
  },
  {
    id: 'lahori-chai-shai',
    title: 'Lahori Chai Shai',
    description: 'See how Explore the transformation of Lahori Chai Shai\'s online presence through our comprehensive Lahori Chai Shai Case Study DigitilizeWeb. Beginning with in-depth research and insight hunting, we identified key elements for website design and brand identity, ensuring alignment with the restaurant\'s vision. From strategic SEO implementation to optimizing load times, our team enhanced visibility and user experiences. We seamlessly integrated lead generation chat plugins, providing a personalized engagement experience.... Chai Shai expanded their brand presence online with a unique and modern website...',
    expertise: ['Logo Design', 'Wordpress', 'Website Maintenance'],
    imageUrl: LahoreChaiSaiLaptopImage,
    logoImage:LahoriLogo
  },
  {
    id: 'star-building-construction',
    title: 'Star Building Construction',
    description: 'Welcome to the Case Study on Star Building Construction. To improve Star Building Construction\'s online visibility and user experience, we teamed up with them. We enhanced their WordPress website design and development to increase search engine exposure and draw in more organic visitors by putting efficient SEO strategies into practice. By concentrating on improving loading times, we made sure that users could obtain information more quickly, which increased interaction and decreased bounce rates. Additionally, we provided a compli...',
    expertise: ['Website Maintenance', 'Wordpress', 'Logo Design'],
    imageUrl: starBuildingLaptopImage,
    logoImage:starContructionsLogo
  },
  {
    id: 'gondal-quality-care',
    title: 'Gondal Qualtity Care',
    description: 'In the Gondal Quality Care case study, DigitilizeWeb embarked on a comprehensive digital transformation journey to enhance their online presence and user engagement. They have problem with their online presence, they wanted to reach wider audiences, that\'s why they choose us. As we are affordable web development service provider, so we decided to help out.  A wide range of services were provided for this project, such as WordPress web design and development, logo creation, web hosting setup, continuing maintenance, search engine opti...',
    expertise: ['Wordpress', 'PHP', 'Web Design and Development'],
    imageUrl: gondalLaptopImage,
    logoImage:gondalLogo
  },
  {
    id: 'my-life-score',
    title: 'My Life Score Case Study',
    description: 'Let’s read out our My Life Score Case Study DigitilizeWeb! Our client came to with for web design and development, logo design services along with social media marketing and 24*7 support. Our goal was to make My Life Score\'s web presence a shining example of usability and accessibility. At every stage of the project, we carefully consider that the design of My Life Score\'s website was match with their objective. We created strategic solutions to meet several aspects of My Life Score\'s digital demands via careful planning and impl...',
    expertise: ['Web Design and Development', 'Mobile App Development', 'eCommerce App Development'],
    imageUrl: myLifeScoreLaptopImage,
    logoImage:myLifeLogo
  },
  {
    id: 'caspian-pizza',
    title: 'Caspian Pizza',
    description: 'Explore our Caspian Pizza case study DigitilizeWeb! We embarked on a comprehensive digital transformation project, enlisting our expertise in web design and development, logo creation, email marketing, and web hosting to elevate their online presence. Our journey began with a meticulous Discover Phase, delving into Caspian Pizza\'s brand identity, vision, and values. Through in-depth consultations, we gained valuable insights into their target audience. Also market positioning, laying the foundation for a tailored solu...',
    expertise: ['Social Media Compaign', 'Wordpress', 'PHP'],
    imageUrl: caspianPizzaLaptopImage,
    logoImage:caspianLogo
  },
  {
    id: 'xerus-care',
    title: 'Xerus Care',
    description: 'Explore the XerusCare Case Study DigitilizeWeb! Xeruscare Health Service\'s online presence is characterised by a seamlessly designed and highly functional website. Offering a user-friendly interface with optimized load times, our platform ensures an immersive experience for visitors. Expert SEO methods drive increased visibility, while integrated chat plugins facilitate real-time engagement and lead generation. Visitors can explore our comprehensive services through intuitive user flows, supported by high-fidelity wireframes and inte...',
    expertise: ['Wordpress', 'PHP', 'Website Design'],
    imageUrl: xerusLaptopImage,
    logoImage:xerusLogo
  },
  {
    id: 'gts',
    title: 'GTS',
    description: 'Explore our GTS Case Study DigitilizeWeb! GTS is revolutionising the gaming industry; its core mission is to provide a place for gamers of every caliber to earn income from their gaming abilities and pursue pro career. The platform specialises in gamified skill-based online games allowing to purchase token. Also battle Creator feature to challenge friends and compete with them. So, to develop their web based gaming ecosystem and create a better gaming environment, DigitilizeWeb collaborated with GTS League. Because of this, we were br...',
    expertise: ['PHP', 'Wordpress', 'Logo Design'],
    imageUrl: GTSLaptopImage,
    logoImage:GTSLogo
  },
  {
    id: 'totally-sme',
    title: 'Totally SME',
    description: 'Discover Totally SME Case Study DigitilizeWeb! In the initial phase, we addressed the challenges hindering your digital prominence, employing comprehensive strategies that encompassed ecommerce website construction, SEO optimisation, and rigorous quality testing. Our meticulous approach guided the project seamlessly through key stages, ensuring alignment with objectives and milestones. We identified and surmounted specific hurdles, conducted in-depth research, and hunted valuable insights to refine user experiences and funct...',
    expertise: ['Social Media Compaign', 'Wordpress', 'Logo Design'],
    imageUrl: totallySMELaptopImage,
    logoImage:SMELogo
  },
  // {
  //   id: '',
  //   title: '',
  //   description: ' ',
  //   expertise: ['', '', ''],
  //   imageUrl: '',
  // },
];


const mobileAppContentData = [
  {
    id: 'gondal-quality-care',
    title: 'Gondal Qualtity Care',
    description: 'In the Gondal Quality Care case study, DigitilizeWeb embarked on a comprehensive digital transformation journey to enhance their online presence and user engagement. They have problem with their online presence, they wanted to reach wider audiences, that\'s why they choose us. As we are affordable web development service provider, so we decided to help out.  A wide range of services were provided for this project, such as WordPress web design and development, logo creation, web hosting setup, continuing maintenance, search engine opti...',
    expertise: ['Wordpress', 'PHP', 'Web Design and Development'],
    imageUrl: gondalLaptopImage,
    logoImage:gondalLogo
  },
  {
    id: 'my-life-score',
    title: 'My Life Score Case Study',
    description: 'Let’s read out our My Life Score Case Study DigitilizeWeb! Our client came to with for web design and development, logo design services along with social media marketing and 24*7 support. Our goal was to make My Life Score\'s web presence a shining example of usability and accessibility. At every stage of the project, we carefully consider that the design of My Life Score\'s website was match with their objective. We created strategic solutions to meet several aspects of My Life Score\'s digital demands via careful planning and impl...',
    expertise: ['Web Design and Development', 'Mobile App Development', 'eCommerce App Development'],
    imageUrl: myLifeScoreLaptopImage,
    logoImage:myLifeLogo
  },
  {
    id: 'skw',
    title: 'SKW Distribution Ltd',
    description: 'Read our SKW Distribution LTD Case Study DigitilizeWeb! In an innovative B2B mobile app development project, SKW Distribution LTD and DigitilizeWeb collaborated to improve their distribution procedures and client interaction. We looked closely at SKW\'s target market, distribution strategy, and competitive environment. The goal was to increase overall transaction management efficiency, optimise the ordering process, and facilitate better client-distributor communication. To find opportunities for improvement, we undertook a thorough ex...',
    expertise: ['Mobile App Development', 'React Native', 'eCommerce App Development'],
    imageUrl: SkwLaptop,
    logoImage:skwLogo
  },
  {
    id: 'caspian-pizza',
    title: 'Caspian Pizza',
    description: 'Explore our Caspian Pizza case study DigitilizeWeb! We embarked on a comprehensive digital transformation project, enlisting our expertise in web design and development, logo creation, email marketing, and web hosting to elevate their online presence. Our journey began with a meticulous Discover Phase, delving into Caspian Pizza\'s brand identity, vision, and values. Through in-depth consultations, we gained valuable insights into their target audience. Also market positioning, laying the foundation for a tailored solu...',
    expertise: ['Social Media Compaign', 'Wordpress', 'PHP'],
    imageUrl: caspianPizzaLaptopImage,
    logoImage:caspianLogo
  },
  {
    id: 'xerus-care',
    title: 'Xerus Care',
    description: 'Explore the XerusCare Case Study DigitilizeWeb! Xeruscare Health Service\'s online presence is characterised by a seamlessly designed and highly functional website. Offering a user-friendly interface with optimized load times, our platform ensures an immersive experience for visitors. Expert SEO methods drive increased visibility, while integrated chat plugins facilitate real-time engagement and lead generation. Visitors can explore our comprehensive services through intuitive user flows, supported by high-fidelity wireframes and inte...',
    expertise: ['Wordpress', 'PHP', 'Website Design'],
    imageUrl: xerusLaptopImage,
    logoImage:xerusLogo
  },
  {
    id: 'gts',
    title: 'GTS',
    description: 'Explore our GTS Case Study DigitilizeWeb! GTS is revolutionising the gaming industry; its core mission is to provide a place for gamers of every caliber to earn income from their gaming abilities and pursue pro career. The platform specialises in gamified skill-based online games allowing to purchase token. Also battle Creator feature to challenge friends and compete with them. So, to develop their web based gaming ecosystem and create a better gaming environment, DigitilizeWeb collaborated with GTS League. Because of this, we were br...',
    expertise: ['PHP', 'Wordpress', 'Logo Design'],
    imageUrl: GTSLaptopImage,
    logoImage:GTSLogo
  },
  {
    id: 'totally-sme',
    title: 'Totally SME',
    description: 'Discover Totally SME Case Study DigitilizeWeb! In the initial phase, we addressed the challenges hindering your digital prominence, employing comprehensive strategies that encompassed ecommerce website construction, SEO optimisation, and rigorous quality testing. Our meticulous approach guided the project seamlessly through key stages, ensuring alignment with objectives and milestones. We identified and surmounted specific hurdles, conducted in-depth research, and hunted valuable insights to refine user experiences and funct...',
    expertise: ['Social Media Compaign', 'Wordpress', 'Logo Design'],
    imageUrl: totallySMELaptopImage,
    logoImage:SMELogo
  },
  
  {
    id: 'venice-fast-food',
    title: 'Venice Fast Food',
    description: 'Explore our expert through this case study of Fast food social media marketing. Venice fast food is one of the quick fast-food delivery in Stockport. They recently got into the new feature, an online food order website, and want to expand the customer base and visibility. So, they hired DigitilizeWeb, a restaurant social media company known for its innovation strategies for fast food social media marketing. An il...',
    expertise: ['Social Media Compaign', 'Wordpress', 'Logo Design'],
    imageUrl: veniceFastFoodImagge,
    logoImage:veniceLogo
  },
  {
    id: 'jaibk',
    title: 'JaibK_Automotive',
    description: 'This case study is the perfect example of idea to excution. In partnership with the online auto parts supplier Jaibk, DigitilizeWeb created a website and mobile app. Jaibk has unveiled a cutting-edge application that is intend to significantly improve the user experience in addition to the website. With the help of this app, customers can quickly and securely browse through our large inventory, make purchases, and access a range of services designed to satisfy the various demands of car enthusiasts. This joint venture set out to trans...',
    expertise: ['PHP', 'MySQL', 'CodeIgnittor'],
    imageUrl: JaibkLaptopImage,
    logoImage:JaibkLogo
  },
  {
    id: 'beauty-world',
    title: 'The Beauty World',
    description: 'Famous cosmetics shop The Beauty World turned to DigitilizeWeb, a top web design and development firm, for advice. This case study of cosmetics ecommerce examines how The Beauty World\'s revolutionary e-commerce website and mobile app resulted from DigitilizeWeb\'s strategic approach and implementation. In our comprehensive analysis of The Beauty World, we delved deep into their goals, customer base, and the competitive landscape. To enhance the online experience, we metic...',
    expertise: ['PHP', 'MySQL', 'CodeIgnittor'],
    imageUrl: beautyWorldLaptopImage,
    logoImage:beautyWorldLogo
  },




];



const eCommerceData = [
  {
    id: 'uk-properties',
    title: 'UK Properties Case Study',
    description: 'Read the UK Properties case study DigitilizeWeb, to see how we have helped them to get the best online presence. We discovered that in order to expedite property searches and boost engagement, we needed a contemporary, user-friendly website throughout the discovery process. By doing extensive research, looking for insights, and comparing against industry norms, we were able to gain a comprehensive grasp of UK Property\'s target market. Offered a free one-year maintenance service to UK Properties to guarantee the website\'s continuous up...',
    expertise: ['Website Design and Development', 'SEO', 'Website Maintenance'],
    imageUrl: ukPropertiesLaptopImage,
    logoImage:ukPropertiesLogo
  },
  {
    id: 'armaan-collection',
    title: 'Armaan Collection',
    description: 'Check our full Armaan Collection Case Study DigitilizeWeb! Armaan Collection, a prominent player in the fashion industry, approached DigitilizeWeb intending to transform their online presence and enhance their brand identity. As a retailer specializing in clothing, Armaan Collection sought a comprehensive solution that encompassed ecommerce website development. Also brand identity enhancement, website support, reliable web hosting, and effective email marketing. Explore our user-friendly interface, showcasing the latest trends and tim...',
    expertise: ['Logo Design', 'Website Design & Development', 'Emails & Hosting'],
    imageUrl:armaanLaptopImage,
    logoImage:armaanLogo
  },
  {
    id: 'star-building-construction',
    title: 'Star Building Construction',
    description: 'Welcome to the Case Study on Star Building Construction. To improve Star Building Construction\'s online visibility and user experience, we teamed up with them. We enhanced their WordPress website design and development to increase search engine exposure and draw in more organic visitors by putting efficient SEO strategies into practice. By concentrating on improving loading times, we made sure that users could obtain information more quickly, which increased interaction and decreased bounce rates. Additionally, we provided a compli...',
    expertise: ['Website Maintenance', 'Wordpress', 'Logo Design'],
    imageUrl: starBuildingLaptopImage,
    logoImage:starContructionsLogo
  },
  {
    id: 'gondal-quality-care',
    title: 'Gondal Qualtity Care',
    description: 'In the Gondal Quality Care case study, DigitilizeWeb embarked on a comprehensive digital transformation journey to enhance their online presence and user engagement. They have problem with their online presence, they wanted to reach wider audiences, that\'s why they choose us. As we are affordable web development service provider, so we decided to help out.  A wide range of services were provided for this project, such as WordPress web design and development, logo creation, web hosting setup, continuing maintenance, search engine opti...',
    expertise: ['Wordpress', 'PHP', 'Web Design and Development'],
    imageUrl: gondalLaptopImage,
    logoImage:gondalLogo
  },
  {
    id: 'skw',
    title: 'SKW Distribution Ltd',
    description: 'Read our SKW Distribution LTD Case Study DigitilizeWeb! In an innovative B2B mobile app development project, SKW Distribution LTD and DigitilizeWeb collaborated to improve their distribution procedures and client interaction. We looked closely at SKW\'s target market, distribution strategy, and competitive environment. The goal was to increase overall transaction management efficiency, optimise the ordering process, and facilitate better client-distributor communication. To find opportunities for improvement, we undertook a thorough ex...',
    expertise: ['Mobile App Development', 'React Native', 'eCommerce App Development'],
    imageUrl: SkwLaptop,
    logoImage:skwLogo
  },
  {
    id: 'caspian-pizza',
    title: 'Caspian Pizza',
    description: 'Explore our Caspian Pizza case study DigitilizeWeb! We embarked on a comprehensive digital transformation project, enlisting our expertise in web design and development, logo creation, email marketing, and web hosting to elevate their online presence. Our journey began with a meticulous Discover Phase, delving into Caspian Pizza\'s brand identity, vision, and values. Through in-depth consultations, we gained valuable insights into their target audience. Also market positioning, laying the foundation for a tailored solu...',
    expertise: ['Social Media Compaign', 'Wordpress', 'PHP'],
    imageUrl: caspianPizzaLaptopImage,
    logoImage:caspianLogo
  },


  {
    id: 'xerus-care',
    title: 'Xerus Care',
    description: 'Explore the XerusCare Case Study DigitilizeWeb! Xeruscare Health Service\'s online presence is characterised by a seamlessly designed and highly functional website. Offering a user-friendly interface with optimized load times, our platform ensures an immersive experience for visitors. Expert SEO methods drive increased visibility, while integrated chat plugins facilitate real-time engagement and lead generation. Visitors can explore our comprehensive services through intuitive user flows, supported by high-fidelity wireframes and inte...',
    expertise: ['Wordpress', 'PHP', 'Website Design'],
    imageUrl: xerusLaptopImage,
    logoImage:xerusLogo
  },
  {
    id: 'gts',
    title: 'GTS',
    description: 'Explore our GTS Case Study DigitilizeWeb! GTS is revolutionising the gaming industry; its core mission is to provide a place for gamers of every caliber to earn income from their gaming abilities and pursue pro career. The platform specialises in gamified skill-based online games allowing to purchase token. Also battle Creator feature to challenge friends and compete with them. So, to develop their web based gaming ecosystem and create a better gaming environment, DigitilizeWeb collaborated with GTS League. Because of this, we were br...',
    expertise: ['PHP', 'Wordpress', 'Logo Design'],
    imageUrl: GTSLaptopImage,
    logoImage:GTSLogo
  },
  {
    id: 'totally-sme',
    title: 'Totally SME',
    description: 'Discover Totally SME Case Study DigitilizeWeb! In the initial phase, we addressed the challenges hindering your digital prominence, employing comprehensive strategies that encompassed ecommerce website construction, SEO optimisation, and rigorous quality testing. Our meticulous approach guided the project seamlessly through key stages, ensuring alignment with objectives and milestones. We identified and surmounted specific hurdles, conducted in-depth research, and hunted valuable insights to refine user experiences and funct...',
    expertise: ['Social Media Compaign', 'Wordpress', 'Logo Design'],
    imageUrl: totallySMELaptopImage,
    logoImage:SMELogo
  },
  {
    id: 'venice-fast-food',
    title: 'Venice Fast Food',
    description: 'Explore our expert through this case study of Fast food social media marketing. Venice fast food is one of the quick fast-food delivery in Stockport. They recently got into the new feature, an online food order website, and want to expand the customer base and visibility. So, they hired DigitilizeWeb, a restaurant social media company known for its innovation strategies for fast food social media marketing. An il...',
    expertise: ['Social Media Compaign', 'Wordpress', 'Logo Design'],
    imageUrl: veniceFastFoodImagge,
    logoImage:veniceLogo
  },
  // {
  //   id: '',
  //   title: '',
  //   description: ' ',
  //   expertise: ['', '', ''],
  //   imageUrl: '',
  // },
];


const CaseStudy = () => {
  const [contentData, setContentData] = useState(webContentData);
  const [selectedContent, setSelectedContent] = useState(contentData[0]);

  const handleLinkClick = (id) => {
    const content = contentData.find((item) => item.id === id);
    if (content) {
      setSelectedContent(content);
    }
  };

  const handleCategoryClick = (category) => {
    switch (category) {
      case 'web':
        setContentData(webContentData);
        break;
      case 'mobile':
        setContentData(mobileAppContentData);
        break;
      case 'ecommerce':
        setContentData(eCommerceData);
        break;
      default:
        setContentData(webContentData);
    }
    setSelectedContent(contentData[0]); // Optionally reset to the first item
  };

  return (
    <div className="case-study-container">
      <div className="main-content">
        <div className="left-section">
          <p className='case-study-left-section-title'>{selectedContent.title}</p>
          <img className="case-study-left-section-image" src={selectedContent.logoImage} alt="logo" />
          <p className='case-study-left-section-sub-heading'>Our Expertise</p>
          <div className="case-study-left-section-button-container">
            {selectedContent.expertise.map((item, index) => (
              <button key={index} className="expertise-button">
                {item}
              </button>
            ))}
          </div>
          <p className='case-study-left-section-description'>{selectedContent.description}</p>
          <div className="case-study-link">
            <a href="#">View Case Study</a>
            <img src={rightArrow} alt="->" />
          </div>
        </div>

        <div className="mid-section">
          <div className="header-container">
            <div className="header">
              <button
                onClick={() => handleCategoryClick('web')}
                className={contentData === webContentData ? 'active' : ''}
              >
                Web Design and Development
              </button>
              <button
                onClick={() => handleCategoryClick('mobile')}
                className={contentData === mobileAppContentData ? 'active' : ''}
              >
                Mobile Applications
              </button>
              <button
                onClick={() => handleCategoryClick('ecommerce')}
                className={contentData === eCommerceData ? 'active' : ''}
              >
                E-Commerce Solutions
              </button>
            </div>
          </div>
          <div className="image-container">
            <img src={selectedContent.imageUrl} alt={selectedContent.title} className="laptop-image" />
          </div>
        </div>

        <div className="right-section">
          <ul className="link-list">
            {contentData.map((item) => (
              <li
                key={item.id}
                className={selectedContent.id === item.id ? 'active' : ''}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;