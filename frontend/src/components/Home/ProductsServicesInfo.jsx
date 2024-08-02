import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductsServicesInfo = ({ title, description }) => {
  return (
    <motion.div
      className="col-span-1 px-10 flex flex-col justify-center items-start"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <h2 className="text-primary-content text-2xl font-semibold w-3/4">{title}</h2>
      <p className="font-light mb-4">{description}</p>
      <Link to="/produtos" role="button" className="btn btn-primary text-base-100">
        Saiba mais <BiSolidRightArrowAlt className="text-xl" />
      </Link>
    </motion.div>
  );
};
ProductsServicesInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default ProductsServicesInfo;
