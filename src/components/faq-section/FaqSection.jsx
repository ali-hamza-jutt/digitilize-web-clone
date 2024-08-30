import React, { useState } from 'react';
import './FaqSection.css'; // Ensure you link the CSS file

const FaqSection = () => {
  const [openFaqIndexLeft, setOpenFaqIndexLeft] = useState(null);
  const [openFaqIndexRight, setOpenFaqIndexRight] = useState(null);

  const toggleFaqLeft = (index) => {
    setOpenFaqIndexLeft((prevIndex) => {
      const newIndex = prevIndex === index ? null : index;
      updateFaqHeight('left', newIndex);
      return newIndex;
    });
  };

  const toggleFaqRight = (index) => {
    setOpenFaqIndexRight((prevIndex) => {
      const newIndex = prevIndex === index ? null : index;
      updateFaqHeight('right', newIndex);
      return newIndex;
    });
  };

  const updateFaqHeight = (side, index) => {
    const faqs = document.querySelectorAll(`.faq-${side}`);
    faqs.forEach((faq, i) => {
      const answer = faq.querySelector('.faq-answer');
      const question = faq.querySelector('.faq-question');
      if (answer) {
        if (i === index) {
          answer.style.maxHeight = `${answer.scrollHeight}px`;
          answer.classList.add('open');
          question.classList.add('open');
        } else {
          answer.style.maxHeight = '0px';
          answer.classList.remove('open');
          question.classList.remove('open');
        }
      }
    });
  };

  const faqsLeft = [
    { question: "Can DigitilizeWeb assist me in improving my website’s search engine optimization (SEO) and generating organic traffic?", answer: "Definitely! DigitilizeWeb offers complete SEO services to increase your website's visibility in search engine results. We use potent techniques like keyword research, on-page optimization, and so on to boost search engine rankings and increase organic traffic to your website." },
    { question: "What are the prices for your website design services?", answer: "We provide reasonable pricing that is catered to each client's particular demands. The scope and complexity of the project determine the price of our website design services. Please get in touch for the quotes!" },
    { question: "How can I review your work sample?", answer: "As website designers uk appreciate your interest in looking through our work examples. We know how critical it is to review our prior work to judge our aptitude. You can visit our website and check the case study section to examine examples of our work. Also, contact us to review more successful projects." },
    { question: "Can I edit and update the information on my website?", answer: "Definitely! At DigitilizeWeb, we highly value customer empowerment as one of the best web design agencies uk. Therefore, we may utilize a content management system (CMS) to construct your website that is simple for you to update and control the material on." },
    { question: "Do you provide continuing website upkeep?", answer: "Yes, we offer ongoing website maintenance and support services." },
  ];

  const faqsRight = [
    { question: "How do you build a website?", answer: "We utilize various technologies to create your website from the ground up. The initial design is done in tools and then transferred to the WordPress website. Check out our services page to learn more!" },
    { question: "Why does every company require a website?", answer: "A website may be helpful for any company to improve its online exposure, branding, and presence. In addition, a website may also assist your business in generating more leads and attracting new clients. Every business needs a website because of these reasons. Hire us for your next website design, as we are the best web design Manchester uk." },
    { question: "How long do you take to build a website?", answer: "It depends on the project’s complexity, as we don’t compromise on the quality. However, we appreciate your urgency." },
    { question: "Does your cost of hosting sufficient for the services?", answer: "Yes! Our more expensive hosting plans include advanced security measures, frequent backups, scalability options, and premium customer service. These features are all intended to improve the hosting experience and guarantee the most outstanding performance for your website." },
    { question: "What is your payment pattern?", answer: "When work starts, 50% of the entire project cost is required. The remaining 25% is charged upon project completion, before deployment, and an extra 25% is needed before the programming process starts. Our payment method differs slightly for large or custom web application projects: 35% of the total project cost is required when construction begins. Then, at a mutually agreed-upon intermediate milestone, usually during the development phase, an extra 35% is needed. Then, before the finished application is deployed, the remaining 30% is charged when the project is finished. For more details, contact us!" },
  ];

  return (
    <div className="faq-section">
      <p className="faq-secondary-heading">FAQ</p>
      <p className='faq-primary-heading'>Frequently Asked Questions</p>
      <div className="faq-columns">
        {/* Left Column */}
        <div className="faq-column">
          {faqsLeft.map((faq, index) => (
            <div className="faq faq-left" key={index}>
              <div className="faq-question" onClick={() => toggleFaqLeft(index)}>
                <p>{faq.question}</p>
                <span className="faq-icon">{openFaqIndexLeft === index ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="faq-column">
          {faqsRight.map((faq, index) => (
            <div className="faq faq-right" key={index}>
              <div className="faq-question" onClick={() => toggleFaqRight(index)}>
                <p>{faq.question}</p>
                <span className="faq-icon">{openFaqIndexRight === index ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
