import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "components/SectionTitle";
import { BiMap, BiTime, BiPhone, BiEnvelope } from "react-icons/bi";

const ContactSection = () => {
  return (
    <section id="contact" className="contact section py-16">
      {/* Section Title */}
      <SectionTitle title="Contato" subtitle="" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="info-item flex flex-col justify-center items-center shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <BiMap className="text-4xl mb-4 text-primary" />
            <h3 className="text-xl font-semibold">Endereço</h3>
            <p className="text-gray-600 text-center">
              R. Joaquim Medeiros, 73 - Centro - Igaraçu do Tietê - SP CEP 17350-027
            </p>
          </motion.div>

          <motion.div
            className="info-item flex flex-col justify-center items-center shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <BiTime className="text-4xl mb-4 text-primary" />
            <h3 className="text-xl font-semibold">Horário de Funcionamento</h3>
            <p className="text-gray-600">09:00 às 18:00</p>
          </motion.div>

          <motion.div
            className="info-item flex flex-col justify-center items-center shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <BiPhone className="text-4xl mb-4 text-primary" />
            <h3 className="text-xl font-semibold">Telefones</h3>
            <p className="text-gray-600">+55 (14) 9 9816-3835</p>
          </motion.div>

          <motion.div
            className="info-item flex flex-col justify-center items-center shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <BiEnvelope className="text-4xl mb-4 text-primary" />
            <h3 className="text-xl font-semibold">E-mail</h3>
            <p className="text-gray-600">contato@hadronsom.com.br</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.80108666682!2d-48.559771601375175!3d-22.511645071099878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c745e327a9f76b%3A0xfbadb8b3d6b9726b!2sR.%20Joaquim%20Medeiros%2C%2073%2C%20Igara%C3%A7u%20do%20Tiet%C3%AA%20-%20SP%2C%2017350-027!5e0!3m2!1spt-PT!2sbr!4v1720769424083!5m2!1spt-PT!2sbr"
              style={{ border: 0, width: "100%", height: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <form action="forms/contact.php" method="post" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  className="form-control p-3 border rounded"
                  placeholder="Seu nome"
                  required
                />
                <input
                  type="email"
                  className="form-control p-3 border rounded"
                  name="email"
                  placeholder="Seu E-mail"
                  required
                />
              </div>
              <input
                type="text"
                className="form-control p-3 border rounded col-span-2 w-full"
                name="subject"
                placeholder="Assunto"
                required
              />
              <textarea
                className="form-control p-3 border rounded w-full"
                name="message"
                rows="6"
                placeholder="Message"
                required
              ></textarea>
              <div className="text-center">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Sua mensagem foi enviada. Obrigado!</div>
                <button type="submit" className="btn btn-primary text-base-100 py-2 px-4 rounded">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
