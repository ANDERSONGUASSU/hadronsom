import React, { useState, useEffect } from "react";
import axios from "axios";
import SectionTitle from "../SectionTitle";
import PackagesSectionCard from "./PackagesSectionCard";

const PackagesSection = () => {
  // State para armazenar os pacotes da API
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true); // Para indicar carregamento
  const [error, setError] = useState(null); // Para tratar erros

  // useEffect para buscar os pacotes quando o componente for montado
  useEffect(() => {
    // Função para buscar os pacotes da API
    const fetchPackages = async () => {
      try {
        const response = await axios.get("/api/v1/packages/"); // Atualize a URL conforme necessário
        setPackages(response.data); // Define os pacotes retornados
      } catch (error) {
        setError("Erro ao carregar pacotes."); // Define a mensagem de erro se falhar
      } finally {
        setLoading(false); // Para parar o indicador de carregamento
      }
    };

    fetchPackages(); // Chama a função de fetch
  }, []);

  if (loading) {
    return <div>Carregando pacotes...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="py-8">
      <SectionTitle
        title="Nossos pacotes"
        subtitle={<>Temos os melhores pacotes para atender suas necessidades.</>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {packages.map((pkg) => (
          <PackagesSectionCard
            key={pkg.id}
            img={pkg.image}
            title={pkg.name}
            coverage={`${pkg.sound_coverage_area}m²`}
            description={pkg.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PackagesSection;
