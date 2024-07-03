import React from "react";
import PropTypes from "prop-types";

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start">
    <Icon className="text-blue-500 text-3xl" />
    <div className="ml-4">
      <h4 className="text-xl font-bold">{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

FeatureItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureItem;
