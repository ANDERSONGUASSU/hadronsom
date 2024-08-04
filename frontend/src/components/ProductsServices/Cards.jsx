import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import WhatsAppButton from "components/WhatsAppButton";
import Rating from "components/ProductDetail/Ratings";

const Cards = ({ product }) => {
  return (
    <div className="card shadow-md rounded-lg overflow-hidden">
      <Link to={`/produtos/${product.id}`}>
        <div className="h-64">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
      </Link>
      <div className="p-4 flex flex-col items-center">
        <div>
          <Rating rating={product.rating} reviews={product.reviews} productId={product.id} />
        </div>
        <div>
          <WhatsAppButton phone="5514998163835" message="Olá, preciso de ajuda!" />
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    reviews: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Cards;
