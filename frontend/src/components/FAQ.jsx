import React from "react";

const FAQSection = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold">Perguntas frequentes</h3>
          <p className="text-xl">
            This is the paragraph where you can write more details about your projects. Keep your
            user engaged by providing meaningful information.
          </p>
        </div>
        <div className="bg-base-200 collapse mb-3 shadow-md shadow-base-300">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-base-100 peer-checked:bg-base-200 peer-checked:text-primary-content">
            <h4 className="text-lg">Como ligar e desligar o som</h4>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
            <p>hello</p>
          </div>
        </div>
        <div className="bg-base-200 collapse mb-3 shadow-md shadow-base-300">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-base-100 peer-checked:bg-base-200 peer-checked:text-primary-content">
            <h4 className="text-lg">Como ligar e desligar o som</h4>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
            <p>hello</p>
          </div>
        </div>
        <div className="bg-base-200 collapse mb-3 shadow-md shadow-base-300">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-base-100 peer-checked:bg-base-200 peer-checked:text-primary-content">
            <h4 className="text-lg">Como ligar e desligar o som</h4>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
