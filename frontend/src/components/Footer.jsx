import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-slate-900 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4 text-base-100">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Produtos & Serviços</a>
        <a className="link link-hover">Nossos pacotes</a>
        <a className="link link-hover">Sobre nós</a>
        <a className="link link-hover">Contato</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://facebook.com" className="text-2xl">
            <FaFacebook className="text-base-100" />
          </a>
          <a href="https://instagram.com" className="text-2xl">
            <FaInstagram className="text-base-100" />
          </a>
          <a href="https://whatsapp.com" className="text-2xl">
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
