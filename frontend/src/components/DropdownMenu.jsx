import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa6";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // Função para fechar o dropdown quando clicar fora dele
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Efeito para adicionar evento de clique fora do dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Dropdown show={isOpen} onClick={() => setIsOpen(!isOpen)} ref={ref}>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className="lg:hidden btn-ghost text-base-100"
      >
        <FaBars className="text-2xl" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="drop w-56 bg-base-100 mt-2 p-2 shadow-lg">
        <Dropdown.Item as={Link} to="/" className="block py-2 px-4">
          Home
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/produtos" className="block py-2 px-4">
          Produto & Serviços
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/pacotes" className="block py-2 px-4">
          Nossos pacotes
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/sobre-nos" className="block py-2 px-4">
          Sobre nós
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/contato" className="block py-2 px-4">
          Contato
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
