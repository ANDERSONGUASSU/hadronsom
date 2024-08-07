import React from "react";
import SectionTitle from "../SectionTitle";
import PackagesSectionCard from "./PackagesSectionCard";
import pacotes from "assets/img/pacotes.png";

const PackagesSection = () => {
  const packages = [
    {
      img: pacotes,
      title: "Pacote 1",
      coverage: "240m²",
      description:
        "Aprimora a potência, amplia a clareza sonora e assegura uma cobertura ideal para bandas completas, incluindo vozes, violão, guitarra e bateria elétrica.",
    },
    {
      img: pacotes,
      title: "Pacote 2",
      coverage: "480m²",
      description:
        "Aprimora a potência, amplia a clareza sonora e garante uma cobertura ideal para bandas completas, abrangendo vozes, violão, bateria elétrica. Além disso, a divisão das caixas proporcionam uma difusão ampliada do som.",
    },
    {
      img: pacotes,
      title: "Pacote 3",
      coverage: "480m²",
      description:
        "A divisão das caixas proporciona uma difusão ampliada do som. É ideal para vozes em igrejas",
    },
    {
      img: pacotes,
      title: "Pacote 4",
      coverage: "320m²",
      description: ["Ideal para uso em lojas e mercados."],
    },
  ];

  return (
    <div className="py-8">
      <SectionTitle
        title="Nossos pacotes"
        subtitle={<>Temos os melhores pacotes para atender suas necessidades.</>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {packages.map((pkg, index) => (
          <PackagesSectionCard
            key={index}
            img={pkg.img}
            title={pkg.title}
            coverage={pkg.coverage}
            description={pkg.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PackagesSection;
