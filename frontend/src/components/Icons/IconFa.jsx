import React from "react";
import PropTypes from "prop-types";
import * as FaIcons from "react-icons/fa";

const IconFa = ({ iconName, ...props }) => {
  const IconComponent = FaIcons[iconName];

  if (!IconComponent) {
    console.error(`IconFa: Unknown icon name: ${iconName}`);
    return null;
  }

  return <IconComponent {...props} />;
};

IconFa.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default IconFa;
