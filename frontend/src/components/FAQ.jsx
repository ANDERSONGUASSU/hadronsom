import React from "react";
import SectionTitle from "./SectionTitle";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como posso ligar e desligar o som?",
      answer: (
        <p>
          Para ligar o som, siga estas etapas:
          <br />
          1. Ligue o filtro de linha, régua de tomada ou no-break.
          <br />
          2. Ligue a mesa de som, equalizador, bases de microfones sem fio, processadores e todos os
          outros periféricos.
          <br />
          3. Ligue os amplificadores de potência e as caixas ativas.
          <br />
          4. Para desligar, siga exatamente a ordem inversa.
        </p>
      ),
    },
    {
      question: "Como ajustar as configurações de áudio?",
      answer:
        "Para ajustar as configurações de áudio, acesse o menu de configurações no canto superior direito.",
    },
    {
      question: "Como entrar em contato com o suporte?",
      answer:
        "Você pode entrar em contato com o suporte através da nossa página de contato ou enviando um email para contato@hadronsom.com.br",
    },
  ];

  return (
    <section className="py-4">
      <div className="container">
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
              {typeof faq.answer === "string" ? <p>{faq.answer}</p> : faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
