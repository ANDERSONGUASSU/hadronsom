import React, { useState } from "react";
import PropTypes from "prop-types";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel w-full">
      <div className="relative w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item relative w-full ${index === currentSlide ? "block" : "hidden"}`}
          >
            <img src={image} className="w-full h-full" alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentSlide ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
