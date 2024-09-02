import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import axios from "axios";

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get("/api/v1/faq-section");
        setFaqs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <section className="py-4">
      <div className="md:container">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Encontre abaixo respostas para as perguntas mais comuns sobre nossos serviços."
        />
        {faqs.map((faq, index) => (
          <div key={index} className="bg-base-200 collapse mb-3 shadow-md shadow-base-300">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-base-100 peer-checked:bg-base-200 peer-checked:text-primary-content">
              <h4 className="text-lg">{faq.question}</h4>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
              {faq.answer.split("\r\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
