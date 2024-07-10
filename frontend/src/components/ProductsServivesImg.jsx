import React, { useState } from "react";
import { motion } from "framer-motion";
import caixasDeSom from "assets/img/caixas.jpg";
import mesa from "assets/img/mesa.jpg";

const ProductsServicesImg = () => {
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
      <div className="col-span-1 flex justify-center items-center ssm:mt-16">
        <div className="flex space-x-4">
          <img
            src={mesa}
            alt="Manutenção"
            className={`w-full max-w-xs md:max-w-sm lg:max-w-md shadow-lg border-4 border-white rounded-lg transition-transform duration-300 ${
              isFirstImageFront
                ? "z-20 transform"
                : "transform md:translate-x-16 smm: translate-x-16 -translate-y-14 z-10"
            }`}
            onClick={handleImageClick}
          />
          <img
            src={caixasDeSom}
            alt="Caixas de Som"
            className={`w-full max-w-xs md:max-w-sm lg:max-w-md md:-translate-x-52 ssm:-translate-x-72  -translate-y-14 shadow-lg border-4 border-white rounded-lg transition-transform duration-300 ${
              isFirstImageFront
                ? "transform z-10"
                : "transform md:-translate-x-72 sm: -translate-x-94  smm: translate-y-3 z-20"
            }`}
            onClick={handleImageClick}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsServicesImg;
