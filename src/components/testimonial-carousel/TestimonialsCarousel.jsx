import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import  arrowLeft from '../../assets/bi_arrow-left-1.png';
import  arrowRight from '../../assets/bi_arrow-right.png';


import "./TestimonialsCarousel.css";

const testimonials = [
  {
    id: 1,
    name: "Benjamin Johnson ,",
    title: "",
    image: "https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/04/benjamin.jpgw3.webp",
    text: "They recognized my concept and made it a beautiful, user-friendly website. I heartily endorse their web design services uk to anyone seeking premium quality.",
  },
  {
    id: 2,
    name: "Meryl Neiman",
    title: "PlaydatePlanet",
    image: "https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/04/mayrel.jpgw3.webp",
    text: "Digitilize Web worked for my online start-up company as a dedicated off-shore coder for many months. Digitilize Web was working with VTeams at the time. Digitilize Web far exceeded our expectations with both dedication and abilities. In addition to providing the work that we asked for (significantly re-coding our website in response to updated design, among other things), he was pro-active about suggesting changes that might be beneficial to our company and our members. Highly recommend!",
  },
  {
    id: 3,
    name: "Bettina S. Lindner Lippisch ",
    title: "Produce Universe",
    image: "https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/04/betina.jpgw3.webp",
    text: "Digitilize Web was my primary contact on a B2B app/website launch as part of our off-shore developer group from VTeams. Digitilize Web was very reliable and thorough and completed all tasks on time. Team was also very pleasant to talk to and always brought questions and ideas quickly to my attention. I can highly recommend Digitilize Web.",
  },
  {
    id: 4,
    name: "Bhavni Unadkat",
    title: "ACCL International",
    image: "https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/04/bhavni.jpgw3.webp",
    text: "Digitilize Web was responsible for the redevelopment of our website. Digitilize Web exceeded our expectations. Captured all our requirements without having to go into too much detail, and instructed his design team whom clearly implemented these requirements without any issues. Digitilize Web is highly attentive; attends to any queries and provides a solution without any delay and goes above and beyond to ensure his clients are satisfied.",
  },
  {
    id: 5,
    name: "Sara Alhussaini",
    title: "Bundl Designs",
    image: "https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/03/1572562585577173660.jpgw3.webp",
    text: "I had the pleasure of working with Digitilize Web on a project. Before Digitilize Web started working on the project, we had many troubles communicating with the account manager. At multiple times, my partner and I wanted to drop the agency and move to another one. However when Digitilize Web joined, they made things much easier, they genuinely cared about us as clients, and they tried their best to fix the mistakes that the previous employees have done. I would highly recommend working with Digitilize Web to anyone who needs a great project as Digitilize Web has very good attention to details, very proactive in coming up with solutions to make the processes easier, and will ALWAYS try the best to keep their clients comfortable and happy.",
  },
  {
    id: 6,
    name: "Hala Alhussaini",
    title: "Bundl Designs",
    image: "https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/04/hala.jpgw3.webp",
    text: "The team at DigitilizeWeb epitomizes teamwork, successfully bridging the gap between our organization and its area of expertise. They invested the time to fully comprehend our objectives, specifications, and vision, ensuring that every facet of the project aligned with them. Trust me; this can be your go-to web design agency uk.",
  },
  {
    id: 7,
    name: "Florin Sirbu",
    title: "Football connector",
    image: "https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/04/florin.jpgw3.webp",
    text: "Digitilize Web is a dedicated, enthusiastic and a highly qualified Company. Digitilize Web can code and decode your ideas and then assembly all the elements together to create a functional and modern website. My website, www.footballconnector.com is an unique and very complex e-commerce platform and Digitilize Web has ingeniously contributed by leading his team, engineering and developing its functionality. Digitilize Web spent days and hours, working on it, communicating with me, updating and finding solutions to make the website user friendly, smoothly accessible and highly responsive.",
  },
  {
    id: 8,
    name: "Yaz Hormazd",
    title: "Mazuzee",
    image: "https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/04/istockphoto-1278978817-612x612-1.jpgw3.webp",
    text: "Digitilize Web made sure that our unique criteria were precisely addressed in addition to delivering high-quality outcomes. Without a doubt, I thoroughly advise any company to use DigitilizeWeb for website redesign services.",
  },
  {
    id: 9,
    name: "Jomana Abou El Ella",
    title: "The Beauty World",
    image: "https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2022/04/jomana.jpgw3.webp",
    text: "After having a terrible experience with other developers I was really worries about creating a whole new website from scratch andDigitilize Web helped me come to the most beneficial and efficient decision to make a new website from scratch. This has truly been the best decision and my website is now much more efficient, faster, and (as this relates to my field) also much more beautiful! Besides the main development Digitilize Web is always there to provide me with support in order to ensure the business overall is a success. I highly highly recommend Digitilize Web for all your development needs and beyond.",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // State to track direction
  const [animating, setAnimating] = useState(false); // State to prevent quick consecutive animations
  const [openModal, setOpenModal] = useState(false); // State to handle modal visibility

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Automatically change slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  // Reset animation after a slide transition
  useEffect(() => {
    if (animating) {
      const timeout = setTimeout(() => {
        setAnimating(false);
        setDirection(""); // Reset direction to allow re-triggering
      }, 600); // Match this duration to the animation duration in CSS (0.6s)
  
      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [animating]);
  

  // Function to truncate text to 7-8 words
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <div className="carousel-container">
      <p className="carousel-container-secondary-heading">Testimonials</p>
      <h2 className="carousel-container-primary-heading">People who trust us</h2>
      <div className={`testimonial-container ${direction}`}>
        <div className="carousel-content">
          <div className="carousel-item">
            <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="carousel-image" />
            <Box
              sx={{
                '& > legend': { mt: 3 },
                '.MuiRating-iconEmpty': {
                  color: '#f2f2f2',
                },
                '.MuiRating-iconFilled': {
                  color: '#ee884c',
                },
              }}
            >
              <Rating
                name="read-only"
                value={parseFloat(5)}
                readOnly
                precision={0.1}
              />
            </Box>
            <div className="carousel-text">
              <p>{truncateText(testimonials[currentIndex].text, 8)} <a onClick={handleOpenModal} className="read-more-button">Read More</a></p>
              <div className="testimonee-info">
                <p className="testimonee-name">{testimonials[currentIndex].name},</p>
                <p className="testimonee-title">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="testimonee-image" src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-control-left">
          <img className="testimonial-controls-arrow-image testimonial-controls-arrow-left" src={arrowLeft} alt="arrow-left" />
        </button>
        <span className="carousel-index">
          <span className="carousel-index-secondary-color">{currentIndex + 1} / </span>
          {testimonials.length}
        </span>
        <button onClick={handleNext} className="carousel-control-right">
          <img className="testimonial-controls-arrow-image testimonial-controls-arrow-right" src={arrowRight} alt="arrow-right" />
        </button>
      </div>

      {/* Modal for showing full testimonial */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>Testimonial</h2>
            <button onClick={handleCloseModal} className="modal-close-button">✖</button>
          </div>
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="modal-image" />
          <Box
            sx={{
              '& > legend': { mt: 3 },
              '.MuiRating-iconEmpty': {
                color: '#f2f2f2',
              },
              '.MuiRating-iconFilled': {
                color: '#ee884c',
              },
            }}
            className="modal-rating"
          >
            <Rating
              name="read-only"
              value={parseFloat(4)}
              readOnly
              precision={0.1}
            />
          </Box>
          <div className="modal-text">
            <p id="modal-description">{testimonials[currentIndex].text}</p>
          </div>
          <h3 className="modal-author">{testimonials[currentIndex].name}</h3>
          <h4 className="modal-title">{testimonials[currentIndex].title}</h4>
        </div>
      </Modal>
    </div>
  );
};

export default TestimonialsCarousel;