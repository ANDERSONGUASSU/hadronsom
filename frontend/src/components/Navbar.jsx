import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaWhatsapp, FaBars } from "react-icons/fa";
import logo from "assets/img/logo.avif";
import { Link, useLocation } from "react-router-dom";
import routes from "routes/routes";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    setNavbarBg(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar top-0 w-svw fixed z-50 transition-all duration-300 ${
        navbarBg || location.pathname !== routes.home
          ? "bg-primary-content shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="navbar-start flex justify-between w-full">
        <DropdownMenu />
        <Link to={routes.home} className="btn btn-ghost text-xl text-color">
          <img className="h-16 -mt-2" src={logo} alt="logo" />
        </Link>
        <DesktopMenu />
        <SocialLinks />
      </div>
    </div>
  );
};

const DesktopMenu = memo(() => {
  return (
    <div className="hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-4">
        <Link className="text-base-100 focus:text-primary" to={routes.home}>
          Home
        </Link>
        <Link className="text-base-100 focus:text-primary" to={routes.productsPage}>
          Produtos
        </Link>
        <Link className="text-base-100 focus:text-primary" to={routes.packagesPage}>
          Nossos pacotes
        </Link>
        <Link className="text-base-100 focus:text-primary" to={routes.aboutPage}>
          Sobre nós
        </Link>
        <Link className="text-base-100 focus:text-primary" to={routes.contactPage}>
          Contato
        </Link>
      </ul>
    </div>
  );
});

const NavItem = ({ to, children }) => (
  <li>
    <Link to={to} className="focus:text-primary">
      {children}
    </Link>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const DropdownMenu = memo(() => {
  return (
    <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" aria-label="Menu" className="bg-transparent text-color">
        <FaBars size={24} />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-primary-content"
      >
        <NavItem to={routes.home}>Home</NavItem>
        <NavItem to={routes.productsPage}>Produtos</NavItem>
        <NavItem to={routes.packagesPage}>Nossos pacotes</NavItem>
        <NavItem to={routes.aboutPage}>Sobre nós</NavItem>
        <NavItem to={routes.contactPage}>Contato</NavItem>
      </ul>
    </div>
  );
});

const SocialLinks = memo(() => {
  return (
    <div className="flex gap-4 text-base-100 mr-4">
      <SocialLink href={routes.facebook} ariaLabel="Facebook">
        <FaFacebook />
      </SocialLink>
      <SocialLink href={routes.instagram} ariaLabel="Instagram">
        <FaInstagram />
      </SocialLink>
      <SocialLink href={routes.whatsapp} ariaLabel="WhatsApp">
        <FaWhatsapp />
      </SocialLink>
    </div>
  );
});

const SocialLink = ({ href, ariaLabel, children }) => (
  <a
    href={href}
    className="text-2xl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Navbar;
