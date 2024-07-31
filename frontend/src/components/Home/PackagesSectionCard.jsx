import React from "react";
import PropTypes from "prop-types";

import { BiSolidRightArrowAlt } from "react-icons/bi";

const PackagesSectionCard = ({ img, title, coverage, description }) => {
  return (
    <div className="card shadow-xl p-4 m-4 flex flex-col justify-between bg-primary text-base-100">
      <img src={img} alt={title} className="rounded-lg mb-6" />
      <h3 className="sm:text-6xl ssm:text-5xl font-mono uppercase card-title font-bold mb-10 py-4">
        {title}
      </h3>
      <div>
        <h2 className="lg:text-xl sm:text-2xl">Cobertura sonora de até:</h2>
        <h2 className="text-6xl text-end">{coverage}</h2>
      </div>
      <p className="text-lg card-body text-center">{description}</p>
      <a role="button" className="btn btn-primary text-base-100 mt-4 self-start">
        Saiba mais <BiSolidRightArrowAlt className="text-xl ml-2" />
      </a>
    </div>
  );
};

PackagesSectionCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coverage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PackagesSectionCard;
