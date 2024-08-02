import React from "react";
import { useParams } from "react-router-dom";
import productsServices from "data/productsServicesData";
import SectionTitle from "components/SectionTitle";
import Carousel from "components/ProductDetail/carousel";
import { Link } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = productsServices.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <>
      <div className="container mt-24">
        <div className="breadcrumbs text-sm">
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
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <div className="flex">
          <div className="w-1/2">
            <Carousel images={product.images} />
          </div>
          <div className="w-1/2 p-4">
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
