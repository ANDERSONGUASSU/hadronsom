import React from "react";
import SectionTitle from "../SectionTitle";
import ProductsServicesImg from "./ProductsServivesImg";
import ProductsServicesInfo from "./ProductsServicesInfo";
import { FaVolumeUp, FaPaintBrush, FaCog, FaUsersCog, FaCut, FaVolumeMute } from "react-icons/fa";
import ProductsServicesCard from "./ProductsServicesCard";

const featureItems = [
  {
    icon: FaVolumeUp,
    title: "Som Imersivo",
    description:
      "Desfrute de uma experiência sonora envolvente com a qualidade superior das nossas caixas de som Hádron, perfeitas para qualquer ambiente.",
  },
  {
    icon: FaPaintBrush,
    title: "Design Elegante",
    description:
      "Nossas caixas de som combinam um design moderno e sofisticado com uma acústica excepcional, se integrando harmoniosamente ao seu espaço.",
  },
  {
    icon: FaCog,
    title: "Tecnologia de Ponta",
    description:
      "Desfrute da mais avançada tecnologia sonora com nossas caixas de som, que oferecem clareza e potência para qualquer tipo de ambiente.",
  },
  {
    icon: FaUsersCog,
    title: "Equipe Qualificada",
    description:
      "Nossa equipe de manutenção é altamente qualificada, garantindo serviços de reparo e otimização com excelência.",
  },
  {
    icon: FaCut,
    title: "Recortes em MDF",
    description:
      "Oferecemos serviços de recorte em MDF, perfeitos para a construção de caixas de som e outros projetos acústicos.",
  },
  {
    icon: FaVolumeMute,
    title: "Isolamento Acústico",
    description:
      "Especializamos em isolamento acústico, garantindo um ambiente livre de ruídos indesejados e melhor qualidade sonora.",
  },
];
const ProductsServicesSection = () => {
  return (
    <>
      <SectionTitle
        title="Produtos & Serviços"
        subtitle={<>Os melhores produtos e serviços que a Hádrom tem a oferecer.</>}
      />
      <div className="container grid md:grid-cols-3 gap-6">
        {featureItems.map((item, index) => (
          <div key={index}>
            <ProductsServicesCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
      <div className="container grid md:grid-cols-3">
        <ProductsServicesInfo
          title="Conheça nossos produtos"
          description="Temos Caixas de som, equipamentos, móveis para seu som e muito mais"
        />
        <ProductsServicesImg />
      </div>
    </>
  );
};

export default ProductsServicesSection;
