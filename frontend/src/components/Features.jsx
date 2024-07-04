import React from "react";
import {
  FaVolumeUp,
  FaPaintBrush,
  FaCog,
  FaMusic,
  FaSlidersH,
  FaVolumeDown,
  FaTools,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaBoxOpen,
  FaCut,
  FaVolumeMute,
} from "react-icons/fa";
import caixasDeSom from "assets/img/caixasDeSom.png";
import pacotes from "assets/img/pacotes.png";
import manutencao from "assets/img/manutencao.png";
import fabricacao from "assets/img/fabricacao.png";
import { motion } from "framer-motion";
import Card from "./Card";
import FeatureItem from "./FeatureItem";

const Features = () => {
  const featureItems1 = [
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
  ];

  const featureItems2 = [
    {
      icon: FaMusic,
      title: "Qualidade Sonora",
      description:
        "Nossos kits de sonorização oferecem caixas de som de alta qualidade, proporcionando uma experiência auditiva imersiva.",
    },
    {
      icon: FaSlidersH,
      title: "Controle Total",
      description:
        "Inclui uma mesa de som avançada que permite ajustes precisos para atender a qualquer necessidade de som.",
    },
    {
      icon: FaVolumeDown,
      title: "Potência de Subwoofer",
      description:
        "Equipado com subwoofers poderosos, nossos kits garantem graves profundos e impactantes para qualquer evento.",
    },
  ];
  const featureItems3 = [
    {
      icon: FaTools,
      title: "Equipe Qualificada",
      description:
        "Nossa equipe de manutenção é altamente qualificada, garantindo serviços de reparo e otimização com excelência.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Visita Técnica",
      description:
        "Oferecemos visita técnica em todos os municípios do estado de São Paulo, proporcionando conveniência e suporte local.",
    },
    {
      icon: FaShieldAlt,
      title: "Serviço Confiável",
      description:
        "Nossos serviços de manutenção são confiáveis e garantem o melhor desempenho de seus equipamentos de som.",
    },
  ];

  const featureItems4 = [
    {
      icon: FaBoxOpen,
      title: "Fabricação de Caixas de Som",
      description:
        "Produzimos caixas de som de alta qualidade, personalizadas para atender às suas necessidades específicas.",
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

  return (
    <section className="py-5 -mt-36 relative z-20">
      <div className="container mx-auto shadow-slate-600 shadow-md bg-base-100 rounded-lg">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-red-500">Conheça a Hádron</h3>
          <p className="text-lg">
            Conheça os serviços e produtos que a <strong>Hádron</strong> oferece para transformar o
            seu ambiente.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-4 mt-5 ml-2 mr-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <Card title="Caixas de som" imageSrc={caixasDeSom} backgroundText="EQUIPAMENTOS" />
          <div className="p-4 flex flex-col justify-center space-y-6">
            {featureItems1.map((item, index) => (
              <FeatureItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="p-4 flex flex-col justify-center space-y-6">
            {featureItems2.map((item, index) => (
              <FeatureItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <Card title="Kit sonorização" imageSrc={pacotes} backgroundText="KIT SONORIZAÇÃO" />

          <Card title="Manutenção" imageSrc={manutencao} backgroundText="MANUTENÇAO" />
          <div className="p-4 flex flex-col justify-center space-y-6">
            {featureItems3.map((item, index) => (
              <FeatureItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="p-4 flex flex-col justify-center space-y-6">
            {featureItems4.map((item, index) => (
              <FeatureItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <Card
            title="Fabricação & serviços"
            imageSrc={fabricacao}
            backgroundText="FABRICAÇÃO & SERVIÇOS"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
