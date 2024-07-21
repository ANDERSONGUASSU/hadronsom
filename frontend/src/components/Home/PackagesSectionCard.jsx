import React from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

import { BiSolidRightArrowAlt } from "react-icons/bi";

const PackagesSectionCard = ({ title, description, features }) => {
  return (
    <div className="card bg-base-200 shadow-xl p-4 m-4 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl card-title font-bold">{title}</h3>
        <p className="text-lg card-body">{description}</p>
        <ul className="pl-5 mt-3 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center card-">
              <FaCheck className="text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <a role="button" className="btn btn-primary text-base-100 mt-4 self-start">
        Saiba mais <BiSolidRightArrowAlt className="text-xl ml-2" />
      </a>
    </div>
  );
};

PackagesSectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PackagesSectionCard;
