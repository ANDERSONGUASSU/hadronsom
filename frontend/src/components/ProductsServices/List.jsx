import React from "react";
import PropTypes from "prop-types";

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
      </div>
    </div>
  );
};

List.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default List;
