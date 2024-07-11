import React from "react";
import SectionTitle from "./SectionTitle";
import PackagesSectionCard from "./PackagesSectionCard";

const PackagesSection = () => {
  const packages = [
    {
      title: "Kit Básico",
      description: "Cobertura de 240m²",
      features: ["2 cx de som RA8", "2 sub", "1 Processador digital PRO8", "2 Suportes"],
    },
    {
      title: "Kit Intermediário",
      description: "Cobertura de 300m²",
      features: ["4 cx de som RA8", "4 sub", "1 Processador digital PRO16", "4 Suportes"],
    },
    {
      title: "Kit Avançado",
      description: "Cobertura de 500m²",
      features: ["8 cx de som RA8", "8 sub", "2 Processadores digitais PRO16", "8 Suportes"],
    },
    {
      title: "Kit Profissional",
      description: "Cobertura de 1000m²",
      features: ["16 cx de som RA8", "16 sub", "4 Processadores digitais PRO32", "16 Suportes"],
    },
  ];

  return (
    <div className="py-8">
      <SectionTitle
        title="Conheça nossos pacotes"
        subtitle={<>Temos os melhores pacotes para atender suas necessidades.</>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {packages.map((pkg, index) => (
          <PackagesSectionCard
            key={index}
            title={pkg.title}
            description={pkg.description}
            features={pkg.features}
          />
        ))}
      </div>
    </div>
  );
};

export default PackagesSection;
