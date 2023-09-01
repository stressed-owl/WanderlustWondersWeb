import React from "react";
import Carousel from "better-react-carousel";
import "./CityDetailsCarousel.css";

const CityDetaislCarousel = ({ images }) => {
  return (
    <Carousel cols={1} rows={1} gap={10} loop>
      {images.map((image, id) => (
        <Carousel.Item key={id}>
          <img className="city-details-carousel-image" src={image} alt="City img" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CityDetaislCarousel;
