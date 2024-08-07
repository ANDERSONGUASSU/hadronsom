import React from "react";
import { useParams } from "react-router-dom";
import productsServices from "data/productsServicesData";
import SectionTitle from "components/SectionTitle";
import Carousel from "components/ProductDetail/carousel";
import { Link } from "react-router-dom";
import WhatsAppButton from "components/WhatsAppButton";
import Rating from "components/ProductDetail/Ratings";
import DetailedDescription from "components/ProductDetail/DetailedDescription";
import Specifications from "components/ProductDetail/Specifications";
import TechnicalDetails from "components/ProductDetail/TechnicalDetails";
import PackagesSection from "components/Home/PackagesSection";
import MostViewedProducts from "components/ProductDetail/MostViewedProducts";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = productsServices.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }
  const mostViewedProducts = productsServices
    .filter((p) => p.id !== product.id)
    .sort((a, b) => b.views - a.views)
    .slice(0, 4);

  return (
    <>
      <div className="mt-24 flex flex-col">
        <div className="ml-4 breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Protutos & Serviços</Link>
            </li>
            <li>
              <Link to={`/produtos/${product.id}`}>{product.title}</Link>
            </li>
          </ul>
        </div>
        <SectionTitle className="text-center" title="Detalhes do Produto" subtitle="" />
      </div>
      <div className="md:container mx-auto py-8 flex flex-col justify-center">
        <h1 className="md:text-3xl ssm:text-2xl font-bold mb-2 text-center">{product.title}</h1>
        <div className="flex">
          <div className="w-1/2 ssm:w-full">
            <Carousel images={product.images} />
          </div>
        </div>
        <div className="container p-4 flex md:justify-center ssm:flex-col ssm:items-center">
          <div className="md:w-1/2 ssm:w-3/4 flex md:flex-row ssm:flex-col md:justify-between ssm:items-center">
            <div className="md:w-1/2 ssm:w-full ssm:mb-4">
              <Rating rating={product.rating} reviews={product.reviews} productId={product.id} />
            </div>
            <div className="md:w-1/2 ssm:w-full">
              <WhatsAppButton phone="5514998163835" message="Olá, preciso de ajuda!" />
            </div>
          </div>
        </div>
        <div className="md:contanier p-4 flex flex-col justify-center">
          <p className="text-gray-600 mb-4 text-center">{product.description}</p>
          <DetailedDescription detailedDescription={product.detailedDescription} />
          <Specifications specifications={product.specifications} />
          <TechnicalDetails technicalDetails={product.technicalDetails} />
          <MostViewedProducts products={mostViewedProducts} />
          <PackagesSection />
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
