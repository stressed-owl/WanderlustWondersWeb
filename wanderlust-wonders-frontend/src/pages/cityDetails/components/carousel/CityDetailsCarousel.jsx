import { Skeleton } from "@mui/material";
import Carousel from "better-react-carousel";
import React from "react";
import "./CityDetailsCarousel.css";

const CityDetailsCarousel = ({ images }) => {
  return (
    <Carousel cols={1} rows={1} gap={10} loop>
      {images.map((image, id) => (
        <Carousel.Item key={id}>
          {image ? (
            <img
              className="city-details-carousel-image"
              src={image}
              alt="City img"
            />
          ) : (
            <Skeleton variant="rectangular" width="100%" height="96%" />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CityDetailsCarousel;
