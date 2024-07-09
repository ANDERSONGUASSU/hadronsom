import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { BiSolidRightArrowAlt } from "react-icons/bi";

const AboutSectionInfo = ({ title, description }) => {
  return (
    <motion.div
      className="col-span-1 px-10 flex flex-col justify-center items-start"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="bg-base-200 rounded-lg inline-block mb-2">
        <h3 className="text-primary p-2 font-light font-mono">Sobre nós</h3>
      </div>
      <h2 className="text-primary-content text-2xl font-semibold w-3/4">{title}</h2>
      <p className="font-light mb-4">{description}</p>
      <a role="button" className="btn btn-primary text-base-100">
        Saiba mais <BiSolidRightArrowAlt className="text-xl" />
      </a>
    </motion.div>
  );
};
AboutSectionInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default AboutSectionInfo;
