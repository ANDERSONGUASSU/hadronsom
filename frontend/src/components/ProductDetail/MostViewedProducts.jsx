import React from "react";
import PropTypes from "prop-types";
import Cards from "components/ProductsServices/Cards";
import SectionTitle from "components/SectionTitle";

const MostViewedProducts = ({ products }) => {
  return (
    <div className="md:container mx-auto py-8">
      <SectionTitle title="Clientes também viram" subtitle="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

MostViewedProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      reviews: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default MostViewedProducts;
