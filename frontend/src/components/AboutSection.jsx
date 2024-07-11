import React from "react";
import { FaBoxOpen, FaTools, FaTruck, FaWrench } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import AboutSectionCard from "./AboutSectionCard";
import AboutSectionInfo from "./AboutSectionInfo";

const AboutSection = () => {
  const cards1 = [
    {
      icon: FaBoxOpen,
      title: "Fabricação de Caixas de Som",
      description:
        "Produzimos caixas de som de alta qualidade, personalizadas para atender às suas necessidades específicas.",
    },
    {
      icon: FaTools,
      title: "Instalações",
      description:
        "Instalamos sistemas de som em diversos tipos de ambientes, garantindo a melhor acústica possível.",
    },
  ];

  const cards2 = [
    {
      icon: FaTruck,
      title: "Visitas Técnicas",
      description:
        "Realizamos visitas técnicas grátis em todo o estado de São Paulo para avaliar suas necessidades de som.",
    },
    {
      icon: FaWrench,
      title: "Manutenção",
      description:
        "Oferecemos serviços completos de manutenção e reparo para todos os nossos produtos.",
    },
  ];
  return (
    <section className="bg-base-100">
      <SectionTitle
        title="Conheça a Hádron"
        subtitle={
          <>
            Conheça os serviços e produtos que a <strong className="text-primary">Hádron</strong>{" "}
            oferece para transformar o seu ambiente.
          </>
        }
      />

      <div className="container grid md:grid-cols-3">
        <AboutSectionInfo
          title="Somos uma empresa que faz o seu som"
          description="Há mais de 20 anos no mercado...."
        />
        <div className="col-span-1">
          {cards1.map((card, index) => (
            <AboutSectionCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="col-span-1 md:-mt-10">
          {cards2.map((card, index) => (
            <AboutSectionCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
