import React, { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProductsServicesImg = ({ img1, img2, alt1, alt2 }) => {
  const [isFirstImageFront, setIsFirstImageFront] = useState(true);

  const handleImageClick = () => {
    setIsFirstImageFront(!isFirstImageFront);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="hover:cursor-pointer col-span-1 flex justify-center items-center ssm:mt-16">
        <div className="flex space-x-4">
          <img
            src={img1}
            alt={alt1}
            className={`w-full max-w-xs md:max-w-sm lg:max-w-md shadow-lg border-4 border-white rounded-lg transition-transform duration-300 ${
              isFirstImageFront
                ? "z-20 transform translate-x-0 translate-y-0"
                : "transform -translate-y-14 ssm:translate-x-20 sm:translate-x-32 lg:translate-x-40 z-10"
            }`}
            onClick={handleImageClick}
          />
          <img
            src={img2}
            alt={alt2}
            className={`w-full max-w-xs md:max-w-sm lg:max-w-md shadow-lg border-4 border-white rounded-lg transition-transform duration-300 ${
              isFirstImageFront
                ? "transform -translate-y-14 ssm:-translate-x-64 sm:-translate-x-52 lg:-translate-x-80 z-10"
                : "transform ssm:-translate-x-80 sm:-translate-x-80 md:-translate-x-64 lg:-translate-x-96 z-20"
            }`}
            onClick={handleImageClick}
          />
        </div>
      </div>
    </motion.div>
  );
};
ProductsServicesImg.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  alt1: PropTypes.string.isRequired,
  alt2: PropTypes.string.isRequired,
};

export default ProductsServicesImg;
