import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductsCarousel.css"; // Include your custom styles here

const ProductsCarousel = () => {
  const [slider, setSlider] = useState(null);
  const images = [
    "https://www.digitilizeweb.com/wp-content/uploads/2024/02/Logo-care24midlands.png",
    "https://www.digitilizeweb.com/wp-content/uploads/2024/02/venicefastfood.png",
    "https://www.digitilizeweb.com/wp-content/uploads/2024/02/skw-distributions.png",
    "https://www.digitilizeweb.com/wp-content/uploads/2023/11/11.png",
    "https://www.digitilizeweb.com/wp-content/w3-webp/uploads/2024/01/WebsiteLogo.pngw3.webp",
    "https://www.digitilizeweb.com/wp-content/uploads/2024/02/Logo-055.png",
    "https://www.digitilizeweb.com/wp-content/uploads/2024/02/Logo-xeruscare.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider) {
        slider.slickNext();
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [slider]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Default for larger screens
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 4, // Show 4 slides on medium screens
        },
      },
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 2, // Show 2 slides on small screens
        },
      },
    ],
  };

  return (
    <div className="product-carousel-container">
      <Slider ref={(c) => setSlider(c)} {...settings}>
        {images.map((img, index) => (
          <div key={index} className="product-carousel-item">
            <img src={img} alt={`carousel-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductsCarousel;
