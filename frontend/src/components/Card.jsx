import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const Card = ({ title, imageSrc, backgroundText }) => {
  return (
    <motion.div
      className="card relative text-center shadow-lg bg-gradient-to-b from-red-600 to-red-200 p-4"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex">
        <div className="w-1/6 flex flex-col justify-between text-white opacity-10">
          <div className="flex-1 flex items-center justify-center">
            <span className="text-6xl vertical-text">{backgroundText}</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between items-center relative z-10 text-white py-9">
          <h2 className="text-4xl">{title}</h2>
          <div className="flex-1 flex items-center justify-center">
            <img src={imageSrc} alt={title} className="w-96 h-96" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  backgroundText: PropTypes.string.isRequired,
};

export default Card;
