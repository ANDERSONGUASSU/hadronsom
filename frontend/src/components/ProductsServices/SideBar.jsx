import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const categories = [
  { id: "all", label: "Todas as categorias" },
  { id: "mesa-de-som", label: "Mesa de Som" },
  { id: "caixas-de-som", label: "Caixas de Som" },
  { id: "subwoofers", label: "Subwoofers" },
];

const Sidebar = ({ setSelectedCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed top-14 left-0 w-64 h-3/5 bg-base-200 shadow-lg transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-64"
      } transition-transform duration-300 z-40`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Categorias</h2>
        <button onClick={toggleMenu} className="text-gray-600">
          {isMenuOpen ? (
            <FaAngleDoubleLeft size={24} />
          ) : (
            <FaAngleDoubleRight
              size={24}
              className="translate-x-10 ssm:translate-y-5 md:translate-y-0"
            />
          )}
        </button>
      </div>
      <div className="p-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:text-primary"
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
};

export default Sidebar;
