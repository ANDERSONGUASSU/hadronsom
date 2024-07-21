import React from "react";
import { FaTh, FaList } from "react-icons/fa";
import PropTypes from "prop-types";

const SearchInput = ({
  searchTerm,
  setSearchTerm,
  viewMode,
  setViewMode,
  sortOption,
  setSortOption,
}) => {
  return (
    <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        className="px-3 py-2 border focus:border-primary rounded-md mr-2 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex items-center gap-4 space-x-2">
        <p>
          Ordenar por:
          <select
            className="ssm:ml-0 md:ml-2 px-3 py-2 border focus:border-primary rounded-md outline-none"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Relevância</option>
            <option value="title">Nome</option>
            <option value="category">Categoria</option>
          </select>
        </p>
        <button onClick={() => setViewMode("grid")}>
          <FaTh size={24} className={`${viewMode === "grid" ? "text-primary" : "text-gray-600"}`} />
        </button>
        <button onClick={() => setViewMode("list")}>
          <FaList
            size={24}
            className={`${viewMode === "list" ? "text-primary" : "text-gray-600"}`}
          />
        </button>
      </div>
    </div>
  );
};
SearchInput.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
  viewMode: PropTypes.string.isRequired,
  setViewMode: PropTypes.string.isRequired,
  sortOption: PropTypes.string.isRequired,
  setSortOption: PropTypes.string.isRequired,
};
export default SearchInput;
