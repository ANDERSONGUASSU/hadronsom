import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "assets/img/logo.avif";
import { Link, useLocation } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar top-0 w-full fixed z-50 transition-all duration-300 ${
        navbarBg
          ? "bg-primary-content shadow-lg"
          : location.pathname != "/"
            ? "bg-primary-content"
            : "bg-transparent z-50"
      }`}
    >
      <div className="navbar-start">
        <DropdownMenu />
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="h-16 -mt-2" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-base-100 focus:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/produtos" className="text-base-100 focus:text-primary">
              Produto & Serviços
            </Link>
          </li>
          <li>
            <Link to="/pacotes" className="text-base-100 focus:text-primary">
              Nossos pacotes
            </Link>
          </li>
          <li>
            <Link to="/sobre-nos" className="text-base-100 focus:text-primary">
              Sobre nós
            </Link>
          </li>
          <li>
            <Link to="/contato" className="text-base-100 focus:text-primary">
              Contato
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4 md:mr-0 ssm:mr-10">
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
    </div>
  );
};

export default Navbar;
