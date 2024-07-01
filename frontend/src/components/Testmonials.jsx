import React, { useEffect, useRef } from "react";
import { ImQuotesRight } from "react-icons/im";
import cl1 from "../assets/img/cliente-1.jpg";
import cl2 from "../assets/img/cliente-2.png";

const testimonials = [
  {
    name: "Pe. Tarcísio",
    username: "Santuário Santa Teresinha - Cerqueira César - SP",
    image: `${cl1}`,
    text: "Som funcionando bem, com a graça de Deus.",
  },
  {
    name: "Pe. Armandinho",
    username: "Paróquia Santo Antônio - Jaú - SP",
    image: `${cl2}`,
    text: "Ficou tudo excelente, tudo muito, muito bom, temos só a agradecer.",
  },
  {
    name: "Pe. Tarcísio",
    username: "Santuário Santa Teresinha - Cerqueira César - SP",
    image: `${cl1}`,
    text: "Som funcionando bem, com a graça de Deus.",
  },
  {
    name: "Pe. Armandinho",
    username: "Paróquia Santo Antônio - Jaú - SP",
    image: `${cl2}`,
    text: "Ficou tudo excelente, tudo muito, muito bom, temos só a agradecer.",
  },
  {
    name: "Pe. Tarcísio",
    username: "Santuário Santa Teresinha - Cerqueira César - SP",
    image: `${cl1}`,
    text: "Som funcionando bem, com a graça de Deus.",
  },
  {
    name: "Pe. Armandinho",
    username: "Paróquia Santo Antônio - Jaú - SP",
    image: `${cl2}`,
    text: "Ficou tudo excelente, tudo muito, muito bom, temos só a agradecer.",
  },
];

const Testimonials = () => {
  const carouselRef = useRef(null);
  const indexRef = useRef(0);

  const scrollRight = () => {
    if (carouselRef.current) {
      const nextIndex = (indexRef.current + 1) % testimonials.length;
      const nextItem = carouselRef.current.children[nextIndex];

      if (nextItem) {
        const carousel = carouselRef.current;
        const nextItemOffset = nextItem.offsetLeft - carousel.scrollLeft;
        carousel.scrollBy({ left: nextItemOffset, behavior: "smooth" });
        indexRef.current = nextIndex;
      }
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const prevIndex = (indexRef.current - 1 + testimonials.length) % testimonials.length;
      const prevItem = carouselRef.current.children[prevIndex];

      if (prevItem) {
        const carousel = carouselRef.current;
        const prevItemOffset = prevItem.offsetLeft - carousel.scrollLeft;
        carousel.scrollBy({ left: prevItemOffset, behavior: "smooth" });
        indexRef.current = prevIndex;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(scrollRight, 5000); // Move to the right every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-red-600 to-black relative overflow-hidden">
      <img
        src="../../assets/img/shapes/pattern-lines.svg"
        className="absolute opacity-20 h-full top-0 hidden md:block"
        alt=""
      />
      <div className="container mx-auto pt-12 pb-10 relative z-10">
        <div className="text-center">
          <span className="badge badge-lg text-gray-900 mb-4 text-2xl">Depoimentos</span>
          <h2 className="text-white mb-3 text-4xl">O que nossos clientes dizem</h2>
          <h5 className="text-white font-light">
            Nossa missão é proporcionar a melhor experiência de som para todos os nossos clientes.
            Confira o que alguns deles têm a dizer sobre nós.
          </h5>
        </div>
        <div ref={carouselRef} className="carousel w-full mt-12 flex overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="carousel-item flex-none w-1/3">
              <div className="card bg-base-100 shadow-xl mx-2 w-full">
                <div className="flex justify-center mt-8 z-10">
                  <div className="relative">
                    <div className="avatar placeholder rounded-full w-32 h-32 bg-gray-300">
                      <img
                        className="w-full h-full rounded-full shadow-lg"
                        src={testimonial.image}
                        alt="avatar"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body text-center mt-8">
                  <h4 className="card-title flex justify-center mb-0">{testimonial.name}</h4>
                  <p>{testimonial.username}</p>
                  <p className="mt-2 max-w-30">{testimonial.text}</p>
                </div>
                <div className="card-footer">
                  <div className="flex justify-center">
                    <ImQuotesRight className="text-red-600 text-9xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button className="btn btn-circle" onClick={scrollLeft}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={scrollRight}>
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
