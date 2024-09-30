import React from "react";
import { motion } from "framer-motion";
import IconFa from "components/Icons/IconFa";
import PropType from "prop-types";

const ContactInfoItem = ({ title, icon, description, variants }) => (
  <motion.div
    className="info-item flex flex-col justify-center items-center shadow-lg py-4"
    variants={variants}
  >
    <IconFa iconName={icon} className="text-4xl mb-4 text-primary" />
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);
ContactInfoItem.propTypes = {
  title: PropType.string.isRequired,
  icon: PropType.string.isRequired,
  description: PropType.string.isRequired,
  variants: PropType.object.isRequired,
};
export default ContactInfoItem;
