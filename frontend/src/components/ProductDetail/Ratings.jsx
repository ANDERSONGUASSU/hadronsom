import React from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Rating = ({ rating, reviews, productId }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filled = index < rating;
    return (
      <span key={index} className={filled ? "text-yellow-500" : "text-gray-300"}>
        <FaStar />
      </span>
    );
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        {stars}
        <span className="ml-2 text-gray-600">({reviews} avaliações)</span>
      </div>
      <Link to={`/produtos/${productId}/avaliar`} className="mt-2 hover:text-blue-500">
        Avalie este produto
      </Link>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
};

export default Rating;
