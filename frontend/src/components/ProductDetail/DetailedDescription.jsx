import React from "react";
import PropTypes from "prop-types";

const DetailedDescription = ({ detailedDescription }) => {
  return (
    <div>
      <div className="bg-base-200 collapse mb-3 shadow-md shadow-base-300">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-base-100 peer-checked:bg-base-200 peer-checked:text-primary-content">
          <h4 className="text-lg">Descrição Detalhada</h4>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
          <p>{detailedDescription}</p>
        </div>
      </div>
    </div>
  );
};

DetailedDescription.propTypes = {
  detailedDescription: PropTypes.string.isRequired,
};

export default DetailedDescription;
