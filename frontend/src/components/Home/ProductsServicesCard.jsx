import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProductsServicesCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="m-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="card card-bordered rounded-lg border-base-200 shadow-xl">
        <div className="card-body">
          <div className="flex items-center mb-4">
            <div className="avatar mr-4">
              <div className="w-12 h-12 rounded-full bg-base-100 hover:bg-primary relative flex items-center justify-center text-primary hover:text-base-100">
                <div className="text-3xl absolute inset-2 m-auto hover:scale-105">{icon}</div>
              </div>
            </div>
            <h2 className="card-title">{title}</h2>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

ProductsServicesCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductsServicesCard;
