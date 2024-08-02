import React from "react";
import SectionTitle from "../SectionTitle";
import CorporativeSectionCard from "./CorporativeSectionCard";
import { FaBusinessTime, FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      <div className="container mt-24">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre-nos">Sobre nós</Link>
            </li>
          </ul>
        </div>
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
