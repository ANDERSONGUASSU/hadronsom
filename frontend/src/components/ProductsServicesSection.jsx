import React from "react";
import SectionTitle from "./SectionTitle";
import ProductsServicesImg from "./ProductsServivesImg";
import ProductsServicesInfo from "./ProductsServicesInfo";

const ProductsServicesSection = () => {
  return (
    <>
      <SectionTitle
        title="Produtos & Serviços"
        subtitle={<>Os melhores produtos e serviços que a Hádrom tem a oferecer.</>}
      />
      <div className="container grid md:grid-cols-3">
        <ProductsServicesInfo title="" description="" />
        <ProductsServicesImg />
      </div>
    </>
  );
};

export default ProductsServicesSection;