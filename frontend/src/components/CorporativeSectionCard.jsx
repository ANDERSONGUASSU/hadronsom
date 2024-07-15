import React, { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CorporativeSectionCard = ({ icon: Icon, title, description }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleCardClick = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <motion.div
      className=""
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="card" onClick={handleCardClick}>
        <div className="card-body card-bordered rounded-lg border-base-200 shadow-xl m-4">
          <div className="card-title flex items-center justify-between">
            <div className="flex items-center">
              <div className="avatar mr-4">
                <div className="w-12 h-12 rounded-full bg-base-100 hover:bg-primary relative flex items-center justify-center text-primary hover:text-base-100">
                  <Icon className="text-3xl absolute inset-0 m-auto hover:scale-105" />
                </div>
              </div>
              {title}
            </div>
            <span className="ml-2">
              {isDescriptionVisible ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {isDescriptionVisible && <div className="mt-2">{description}</div>}
        </div>
      </div>
    </motion.div>
  );
};

CorporativeSectionCard.propTypes = {
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CorporativeSectionCard;
