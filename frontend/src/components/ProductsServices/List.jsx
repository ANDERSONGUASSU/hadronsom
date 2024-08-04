import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "components/ProductDetail/Ratings";
import WhatsAppButton from "components/WhatsAppButton";

const List = ({ product }) => {
  return (
    <div className="shadow-md rounded-lg overflow-hidden p-4">
      <Link to={`/produtos/${product.id}`} className="flex justify-around">
        <img
          src={product.images[0]}
          alt={product.title}
          className="md:w-96 md:h-64 ssm:w-40 ssm:h-28 object-cover object-center mr-4 rounded-lg"
        />
        <div className="flex flex-col justify-around md:text-center">
          <h2 className="md:text-xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 font-light mb-4">{product.description}</p>
          <p className="text-sm font-light text-gray-500">{product.category}</p>
        </div>
      </Link>
      <div className="p-4 flex flex-col items-center gap-4">
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

List.propTypes = {
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

export default List;
