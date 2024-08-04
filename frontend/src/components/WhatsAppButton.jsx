import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const WhatsAppButton = ({ phone, message }) => {
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

  return (
    <Link to={whatsappUrl} target="_blank">
      <motion.div
        className="flex items-center justify-center bg-green-500 rounded-full w-56 h-14 cursor-pointer shadow-md"
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <FaWhatsapp className="text-base-100 w-7 h-7" size="30px" />
        <p className="font-bold text-base-100 text-lg m-2">Entre em contato</p>
      </motion.div>
    </Link>
  );
};

WhatsAppButton.propTypes = {
  phone: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};
export default WhatsAppButton;
