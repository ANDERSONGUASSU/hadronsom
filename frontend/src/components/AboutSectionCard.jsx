import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AboutSectionCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="card">
        <div className="card-body card-bordered rounded-lg border-base-200 shadow-xl m-4">
          <div className="avatar">
            <div className="w-20 rounded-full bg-base-100 hover:bg-primary relative flex items-center justify-center  text-primary hover:text-base-100">
              <Icon className=" text-3xl absolute inset-0 m-auto hover:scale-105" />
            </div>
          </div>
          <div className="card-title">{title}</div>
          <div className="">{description}</div>
        </div>
      </div>
    </motion.div>
  );
};
AboutSectionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutSectionCard;
