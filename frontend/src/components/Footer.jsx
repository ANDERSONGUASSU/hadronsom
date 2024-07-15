import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary-content text-base-content rounded lg:p-10  ssm:p-2 mt-auto">
      <nav className="grid grid-flow-col gap-4 text-base-100">
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/produtos" className="link link-hover">
          Produtos & Serviços
        </Link>
        <Link to="/pacotes" className="link link-hover">
          Nossos pacotes
        </Link>
        <Link to="/sobre-nos" className="link link-hover">
          Sobre nós
        </Link>
        <Link to="/contato" className="link link-hover">
          Contato
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://facebook.com/hadrondivisaodeaudio" className="text-2xl">
            <FaFacebook className="text-base-100" />
          </a>
          <a href="https://instagram.com/hadronsom/" className="text-2xl">
            <FaInstagram className="text-base-100" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5514998163835&text&type=phone_number&app_absent=0"
            className="text-2xl"
          >
            <FaWhatsapp className="text-base-100" />
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-base-100">
          Copyright © {new Date().getFullYear()} - Todos os direitos reservados pela Hádron Ltda
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
