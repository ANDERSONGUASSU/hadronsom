import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como posso ligar e desligar o som?",
      answer:
        "Para ligar o som, siga estas etapas: 1. Ligue o filtro de linha, régua de tomada ou no-break. 2. Ligue a mesa de som, equalizador, bases de microfones sem fio, processadores e todos os outros periféricos. 3. Ligue os amplificadores de potência e as caixas ativas. Para desligar, siga exatamente a ordem inversa.",
    },
    {
      question: "Como ajustar as configurações de audio?",
      answer:
        "Para ajustar as configurações de audio, acesse o menu de configurações no canto superior direito.",
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
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold">Perguntas Frequentes</h3>
          <p className="text-xl">
            Encontre abaixo respostas para as perguntas mais comuns sobre nossos serviços.
          </p>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="bg-base-200 collapse mb-3 shadow-md shadow-base-300">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-base-100 peer-checked:bg-base-200 peer-checked:text-primary-content">
              <h4 className="text-lg">{faq.question}</h4>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
