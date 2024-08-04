import React from "react";
import PropTypes from "prop-types";
import Rating from "components/ProductDetail/Ratings";
import WhatsAppButton from "components/WhatsAppButton";

const List = ({ product }) => {
  return (
    <div className="flex list-group-item justify-around shadow-md rounded-lg overflow-hidden p-4">
      <img
        src={product.images[0]}
        alt={product.title}
        className="md:w-96 md:h-64 ssm:w-40 ssm:h-28 object-cover object-center mr-4"
      />
      <div className="flex flex-col justify-around md:text-center">
        <h2 className="md:text-xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 font-light mb-4">{product.description}</p>
        <p className="text-sm font-light text-gray-500">{product.category}</p>
        <div className="p-4 flex justify-between gap-4">
          <div>
            <Rating rating={product.rating} reviews={product.reviews} productId={product.id} />
          </div>
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
