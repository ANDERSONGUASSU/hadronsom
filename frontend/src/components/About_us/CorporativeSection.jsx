import React from "react";
import SectionTitle from "../SectionTitle";
import CorporativeSectionCard from "./CorporativeSectionCard";
import { FaBusinessTime, FaBullseye, FaEye, FaHeart } from "react-icons/fa";

const CorporativeSection = () => {
  const cardsData = [
    {
      icon: FaBusinessTime,
      title: "Negócio",
      description:
        "Fornecer soluções de som de alta qualidade para igrejas, galpões e supermecados.",
    },
    {
      icon: FaBullseye,
      title: "Missão",
      description:
        "Proporcionar a melhor experiência sonora para nossos clientes através de produtos e serviços inovadores.",
    },
    {
      icon: FaEye,
      title: "Visão",
      description:
        "Ser a referência em soluções sonoras no mercado nacional, reconhecida pela excelência e inovação.",
    },
    {
      icon: FaHeart,
      title: "Valores",
      description:
        "Compromisso com a qualidade, inovação constante, ética profissional e respeito ao cliente.",
    },
  ];

  return (
    <>
      <div className="container mt-16">
        <SectionTitle title="Identidade Corporativa" subtitle="Negócio, Missão, Visão e Valores" />
        <div className="flex flex-wrap -mx-4">
          {cardsData.map((card, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <CorporativeSectionCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CorporativeSection;
