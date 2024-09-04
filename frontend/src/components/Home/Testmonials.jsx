import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { ImQuotesRight } from "react-icons/im";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/api/v1/testemonials-section/")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) => console.error("Erro ao buscar depoimentos:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-red-600 to-primary-content relative overflow-hidden">
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
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 5000 }}
          className="mt-12"
          breakpoints={{
            // Configurações responsivas
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className="swiper-slide mt-14 mb-14" key={index}>
              <div className="carousel-item flex-none w-full">
                <div className="card bg-base-100 shadow-xl mx-2 w-full">
                  <div className="flex justify-center mt-8 z-10">
                    <div className="relative">
                      <div className="avatar placeholder rounded-full w-32 h-32 bg-gray-300">
                        <img
                          className="w-full h-full rounded-full shadow-lg"
                          src={testimonial.avatar}
                          alt="avatar"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body text-center mt-8">
                    <h4 className="card-title flex justify-center mb-0">{testimonial.name}</h4>
                    <p>
                      {testimonial.location} - {testimonial.city} - {testimonial.state}
                    </p>
                    <p className="mt-2 max-w-30 min-h-12">{testimonial.testimonials}</p>
                  </div>
                  <div className="card-footer">
                    <div className="flex justify-center">
                      <ImQuotesRight className="text-red-600 text-9xl" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
