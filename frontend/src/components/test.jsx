import React from "react";
import { Card } from "./Home/Card"; // Importe seu componente Card aqui
import { FeatureItem } from "./Home/FeatureItem"; // Importe seu componente FeatureItem aqui
import caixasDeSom from "../assets/img/caixasDeSom.png";
import pacotes from "../assets/img/pacotes.png";

const MyComponent = ({ featureItems1, featureItems2 }) => {
  return (
    <section className="py-5 -mt-36 relative z-50">
      <div className="container mx-auto shadow-slate-600 shadow-md bg-base-100 rounded-lg">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-red-500">Conheça a Hádron</h3>
          <p className="text-lg">
            Conheça os serviços e produtos que a <strong>Hádron</strong> oferece para transformar o
            seu ambiente.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
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
          <Card title="Caixas de som" imageSrc={caixasDeSom} backgroundText="EQUIPAMENTOS" />
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
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
