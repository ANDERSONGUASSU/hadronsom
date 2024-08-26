import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import ProductsServicesImg from "./ProductsServicesImg";
import ProductsServicesInfo from "./ProductsServicesInfo";
import ProductsServicesCard from "./ProductsServicesCard";
import axios from "axios";
import IconFa from "components/Icons/IconFa";

const ProductsServicesSection = () => {
  const [productsServicesData, setProductsServicesData] = useState(null);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");

  useEffect(() => {
    axios
      .get("/api/v1/products-services-section/")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const data = response.data[0];
          setProductsServicesData(data);
          setImg1(data.image1);
          setImg2(data.image2);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  if (!productsServicesData) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <SectionTitle
        title="Produtos & Serviços"
        subtitle={<>Os melhores produtos e serviços que a Hadron tem a oferecer.</>}
      />
      <div className="container grid md:grid-cols-3 gap-6">
        {productsServicesData.cards.map((card, index) => (
          <ProductsServicesCard
            key={index}
            icon={<IconFa iconName={card.icon} />}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="container grid md:grid-cols-3">
        <ProductsServicesInfo
          title={productsServicesData.title_info}
          description={productsServicesData.description_info}
        />
        <ProductsServicesImg
          img1={img1}
          img2={img2}
          alt1={productsServicesData.alt_text1}
          alt2={productsServicesData.alt_text2}
        />
      </div>
    </>
  );
};

export default ProductsServicesSection;
