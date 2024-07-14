import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const DropdownMenu = () => {
  return (
    <>
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost rounded-btn text-base-100 lg:hidden ssm:text-2xl"
        >
          <FaBars style={{ width: "24px", height: "24px" }} className="ssm:text-2xl" />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to="/">Home</Link>
            <Link to="/produtos">Produto & Serviços</Link>
            <Link to="/pacotes">Nossos pacotes</Link>
            <Link to="/sobre-nos">Sobre nós</Link>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
