import SectionTitle from "components/SectionTitle";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TimelineSection = () => {
  const timelineData = [
    {
      title: "Fundação da Hadron Som",
      year: "1994",
      description:
        "A Hadron Som foi fundada por Daniel Rosolin em 1994, com a visão de criar soluções inovadoras e de alta qualidade em som e eletrônica.",
    },
    {
      title: "Lançamento das Primeiras Caixas de Som",
      year: "1996",
      description:
        "Em 1996, a Hadron Som lançou suas primeiras caixas de som, ganhando rapidamente reconhecimento pela excelente qualidade de áudio e design robusto.",
    },
    {
      title: "Introdução ao Mercado de Eventos",
      year: "2000",
      description:
        "A partir de 2000, a Hadron Som expandiu seus serviços para o mercado de eventos, fornecendo sonorização para shows, conferências e outros eventos de grande porte.",
    },
    {
      title: "Primeira Linha de Produtos Residenciais",
      year: "2005",
      description:
        "Em 2005, a Hadron Som lançou sua primeira linha de produtos residenciais, incluindo sistemas de som para home theater e dispositivos de áudio portáteis.",
    },
    {
      title: "Parceria com Grandes Empresas",
      year: "2010",
      description:
        "Em 2010, a Hadron Som firmou parcerias com grandes empresas de tecnologia, ampliando seu alcance e integrando suas soluções de áudio em diversos dispositivos.",
    },
    {
      title: "Lançamento do Sistema de Áudio Inteligente",
      year: "2015",
      description:
        "Em 2015, a Hadron Som revolucionou o mercado com o lançamento de um sistema de áudio inteligente, que se conecta a dispositivos móveis e oferece uma experiência de som personalizada.",
    },
    {
      title: "Expansão Internacional",
      year: "2020",
      description:
        "Em 2020, a Hadron Som expandiu suas operações para o mercado internacional, levando suas soluções de áudio inovadoras para clientes em todo o mundo.",
    },
  ];
  return (
    <>
      <div className="container mt-16">
        <SectionTitle title="Nossa História" subtitle="Conheça nossa história" />
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {timelineData.map((item, index) => (
            <li key={index}>
              <div className="timeline-middle">
                <FaCheckCircle className="text-black bg-white rounded-full h-5 w-4" />
              </div>
              <div
                className={
                  index % 2 === 0 ? "timeline-start mb-10 md:text-end" : "timeline-end mb-10"
                }
              >
                <time className="font-mono italic">{item.year}</time>
                <div className="text-lg font-black">{item.title}</div>
                {item.description}
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TimelineSection;
