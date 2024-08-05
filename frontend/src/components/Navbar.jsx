import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaBars } from "react-icons/fa";
import logo from "assets/img/logo.avif";
import { Link, useLocation } from "react-router-dom";
import routes from "routes/routes";
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
          : location.pathname !== routes.home
            ? "bg-primary-content"
            : "bg-transparent z-50"
      }`}
    >
      <div className="navbar-start">
        <DropdownMenu />
        <Link to={routes.home} className="btn btn-ghost text-xl text-color">
          <img className="h-16 -mt-2" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={routes.home} className="text-base-100 focus:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to={routes.productsServicesPage} className="text-base-100 focus:text-primary">
              Produto & Serviços
            </Link>
          </li>
          <li>
            <Link to={routes.packages} className="text-base-100 focus:text-primary">
              Nossos pacotes
            </Link>
          </li>
          <li>
            <Link to={routes.aboutPage} className="text-base-100 focus:text-primary">
              Sobre nós
            </Link>
          </li>
          <li>
            <Link to={routes.contactPage} className="text-base-100 focus:text-primary">
              Contato
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4 md:mr-0 ssm:mr-10">
        <a href={routes.facebook} className="text-2xl" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-color" />
        </a>
        <a href={routes.instagram} className="text-2xl" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-color" />
        </a>
        <a href={routes.whatsapp} className="text-2xl" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-color" />
        </a>
      </div>
    </div>
  );
};

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="bg-transparent text-color lg:hidden">
        <FaBars size={24} />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link to={routes.home}>Home</Link>
          <Link to={routes.productsServicesPage}>Produto & Serviços</Link>
          <Link to={routes.packages}>Nossos pacotes</Link>
          <Link to={routes.aboutPage}>Sobre nós</Link>
          <Link to={routes.contactPage}>Contato</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
