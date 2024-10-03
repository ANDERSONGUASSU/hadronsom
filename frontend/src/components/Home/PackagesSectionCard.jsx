import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { BiSolidRightArrowAlt } from "react-icons/bi";

const PackagesSectionCard = ({ img, title, coverage, description }) => {
  return (
    <div className="card shadow-xl shadow-primary p-4 m-4 flex flex-col justify-center items-center bg-primary text-base-100">
      <img src={img} alt={title} className="rounded-lg mb-6 w-full" />
      <h3 className="md:text-4xl ssm:text-3xl font-mono uppercase card-title font-bold mb-10 py-4 text-center">
        {title}
      </h3>
      <div>
        <h2 className="lg:text-2xl ssm:text-xl text-center">Cobertura sonora de até:</h2>
        <h2 className="md:text-3xl ssm:text-2xl font-bold text-center">{coverage}</h2>
      </div>
      <p className="text-lg card-body text-center">{description}</p>
      <Link to="/pacotes" role="button" className="btn btn-primary text-base-100 mt-4 self-start">
        Saiba mais <BiSolidRightArrowAlt className="text-xl ml-2" />
      </Link>
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
