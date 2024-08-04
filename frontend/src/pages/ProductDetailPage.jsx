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

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = productsServices.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

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
      <div className="container mx-auto py-8 flex flex-col justify-center">
        <h1 className="md:text-3xl ssm:text-2xl font-bold mb-2 text-center">{product.title}</h1>
        <div className="flex">
          <div className="w-1/2">
            <Carousel images={product.images} />
          </div>
        </div>
        <div className="container p-4  flex md:justify-center ssm: justify-between">
          <div className="w-1/2 flex justify-between">
            <div className="w-1/2">
              <Rating rating={product.rating} reviews={product.reviews} productId={product.id} />
            </div>
            <WhatsAppButton phone="5514998163835" message="Olá, preciso de ajuda!" />
          </div>
        </div>
        <div className="contanier p-4 flex flex-col justify-center">
          <p className="text-gray-600 mb-4 text-center">{product.description}</p>
          <DetailedDescription detailedDescription={product.detailedDescription} />
          <Specifications specifications={product.specifications} />
          <TechnicalDetails technicalDetails={product.technicalDetails} />
          <PackagesSection />
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
