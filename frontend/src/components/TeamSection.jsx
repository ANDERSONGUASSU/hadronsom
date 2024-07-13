import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import equipe1 from "../assets/img/daniel.jpg";

const teamMembers = [
  {
    name: "Daniel Rosolin",
    position: "Proprietário",
    image: `${equipe1}`,
    description:
      "Daniel é o proprietário da Hadron Som, liderando a empresa com visão e paixão pela excelência em soluções de som e eletrônica.",
  },
  {
    name: "Daniel Rosolin",
    position: "Engenheiro Elétrico",
    image: `${equipe1}`,
    description:
      "Lucas é responsável por projetar e desenvolver sistemas elétricos inovadores que garantem a máxima eficiência e segurança nos projetos da Hadron Som.",
  },
  {
    name: "Daniel Rosolin",
    position: "Gerente de Projetos",
    image: `${equipe1}`,
    description:
      "Mariana coordena todos os projetos da Hadron Som, garantindo que sejam entregues no prazo, dentro do orçamento e atendendo aos mais altos padrões de qualidade.",
  },
];

const TeamSection = () => {
  return (
    <>
      <section className="py-12">
        <SectionTitle title="Nossa Equipe" subtitle="Conheça nossa Equipe" />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              className="overflow-hidden"
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="avatar flex items-center justify-center relative">
                <div className="w-40 border-4 border-base-100 shadow-lg rounded-full relative">
                  <img src={member.image} className="rounded-full" alt={member.name} />
                  <div className="w-40 h-40 absolute -inset-1 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-full flex items-center justify-center gap-2">
                    <a href="#" className="text-base-100 text-xl">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-base-100 text-xl">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-base-100 text-xl">
                      <FaInstagram />
                    </a>
                    <a href="#" className="text-base-100 text-xl">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className="member-info p-6 text-center">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <span className="text-gray-500">{member.position}</span>
                <p className="mt-4 text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TeamSection;
