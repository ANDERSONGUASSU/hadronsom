import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8 section-title py-8">
      <motion.h2
        className="text-3xl font-bold text-primary-content m-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node.isRequired,
};

export default SectionTitle;
