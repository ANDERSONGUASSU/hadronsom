import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import routes from "routes/routes";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary-content text-base-content rounded lg:p-10  ssm:p-2 mt-auto">
      <nav className="grid grid-flow-col gap-4 text-base-100">
        <Link to={routes.home} className="link link-hover">
          Home
        </Link>
        <Link to={routes.productsServicesPage} className="link link-hover">
          Produtos & Serviços
        </Link>
        <Link to={routes.packages} className="link link-hover">
          Nossos pacotes
        </Link>
        <Link to={routes.aboutPage} className="link link-hover">
          Sobre nós
        </Link>
        <Link to={routes.contactPage} className="link link-hover">
          Contato
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href={routes.facebook} className="text-2xl" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-base-100" />
          </a>
          <a href={routes.instagram} className="text-2xl" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-base-100" />
          </a>
          <a href={routes.whatsapp} target="_blank" rel="noopener noreferrer" className="text-2xl">
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
