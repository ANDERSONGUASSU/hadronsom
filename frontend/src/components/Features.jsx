import React from "react";
import { FaCheckCircle, FaUserCog, FaSyncAlt, FaUsers, FaShareAlt, FaPhone } from "react-icons/fa";
import caixasDeSom from "assets/img/caixasDeSom.png";
import pacotes from "assets/img/pacotes.png";
import { motion } from "framer-motion";
import Card from "./Card";
import FeatureItem from "./FeatureItem";

const Features = () => {
  const featureItems1 = [
    {
      icon: FaPhone,
      title: "Listen to Social Conversations",
      description:
        "Gain access to the demographics, psychographics, and location of unique people who talk about your brand.",
    },
    {
      icon: FaCheckCircle,
      title: "Performance Analyze",
      description:
        "Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.",
    },
    {
      icon: FaUserCog,
      title: "Social Conversions",
      description:
        "Track actions taken on your website that originated from social, and understand the impact on your bottom line.",
    },
  ];

  const featureItems2 = [
    {
      icon: FaSyncAlt,
      title: "Always In Sync",
      description: "No matter where you are, Trello stays in sync across all of your devices.",
    },
    {
      icon: FaUsers,
      title: "Work With Any Team",
      description:
        "Whether it’s for work or even the next family vacation, Trello helps your team.",
    },
    {
      icon: FaShareAlt,
      title: "A Productivity Platform",
      description: "Integrate the apps your team already uses directly into your workflow.",
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
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
