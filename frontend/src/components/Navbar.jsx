import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent top-0 w-full fixed">
      <div className="navbar-start">
        <DropdownMenu />
        <a className="btn btn-ghost text-xl text-color">Hádron</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-color">Home</a>
          </li>
          <li>
            <a className="text-color">Produto & Serviços</a>
          </li>
          <li>
            <a className="text-color">Nossos pacotes</a>
          </li>
          <li>
            <a className="text-color">Sobre nós</a>
          </li>
          <li>
            <a className="text-color">Contato</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <a href="https://facebook.com" className="text-2xl">
          <FaFacebook className="text-color" />
        </a>
        <a href="https://instagram.com" className="text-2xl">
          <FaInstagram className="text-color" />
        </a>
        <a href="https://whatsapp.com" className="text-2xl">
          <FaWhatsapp className="text-color" />
        </a>
      </div>
    </div>
  );
};

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost text-color lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <a>Home</a>
          <a>Produto & Serviços</a>
          <a>Nossos pacotes</a>
          <a>Sobre nós</a>
          <a>Sobre nós</a>
          <a>Contato</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
