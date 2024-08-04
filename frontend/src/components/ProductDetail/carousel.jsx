import React, { useState } from "react";
import PropTypes from "prop-types";

const Carousel = ({ images }) => {
  const [magnifyStyle, setMagnifyStyle] = useState({ backgroundImage: `url(${images[0]})` });
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    const xPercentage = (offsetX / offsetWidth) * 100;
    const yPercentage = (offsetY / offsetHeight) * 100;

    setMagnifyStyle((prev) => ({
      ...prev,
      display: "block",
      top: `${offsetY - 100}px`,
      left: `${offsetX - 100}px`,
      backgroundPosition: `${xPercentage}% ${yPercentage}%`,
    }));
  };
  const handleMouseLeave = () => {
    setMagnifyStyle((prev) => ({ ...prev, display: "none" }));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setMagnifyStyle({ backgroundImage: `url(${images[index]})` });
  };

  return (
    <>
      <div className="container w-svw">
        <div className="carousel w-full">
          <div className="relative w-full flex justify-center items-center">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item relative md:w-6/12 ssm:w-full h-full ${index === currentSlide ? "block" : "hidden"}`}
              >
                <img
                  src={image}
                  className="w-full h-full md:cursor-none rounded-xl"
                  alt={`Slide ${index + 1}`}
                  draggable={false}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  style={{ position: "relative" }}
                />
                <div className="magnify hidden rounded-full" style={magnifyStyle}></div>
              </div>
            ))}
          </div>
        </div>
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
    </>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
