import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import routes from "routes/routes";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary-content text-base-content lg:p-10  ssm:p-2 mt-auto">
      <nav className="grid grid-flow-col gap-4 text-base-100">
        <Link to={routes.home} className="hover:text-primary">
          Home
        </Link>
        <Link to={routes.productsPage} className="hover:text-primary">
          Produtos
        </Link>
        <Link to={routes.packagesPage} className="hover:text-primary">
          Nossos pacotes
        </Link>
        <Link to={routes.aboutPage} className="hover:text-primary">
          Sobre nós
        </Link>
        <Link to={routes.contactPage} className="hover:text-primary">
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
