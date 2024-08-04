import React from "react";
import PropTypes from "prop-types";

const TechnicalDetails = ({ technicalDetails }) => {
  return (
    <div className="bg-base-200 collapse mb-3 shadow-md shadow-base-300">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-base-100 peer-checked:bg-base-200 peer-checked:text-primary-content">
        <h4 className="text-lg">Ficha Técnica</h4>
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {technicalDetails.map((technical, index) => (
            <li key={index}>{technical}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

TechnicalDetails.propTypes = {
  technicalDetails: PropTypes.string.isRequired,
};

export default TechnicalDetails;
