import React from "react";
import "./Authentication.css";
import Carousel from "better-react-carousel";

const AuthenticationCarousel = ({ images }) => {
  return (
    <Carousel
      cols={1}
      rows={1}
      gap={10}
      loop
      hideArrow={true}
      showDots={true}
      autoplay={2250}
      dotColorActive="#EDBFC6"
      dotColorInactive="#C48992"
    >
      {images.map((image, id) => (
        <Carousel.Item key={id}>
          <div className="carousel-item">
            <div className="carousel-item-wrapper">
              <img
                className="auth-carousel-img"
                src={image.imageurl}
                alt="City img"
              />
              <p className="auth-carousel-city-desc">
                {image.description}
              </p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AuthenticationCarousel;
