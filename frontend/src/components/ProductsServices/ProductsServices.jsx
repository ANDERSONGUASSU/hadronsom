import React, { useState } from "react";
import SectionTitle from "components/SectionTitle";
import Sidebar from "./SideBar";
import Cards from "./Cards";
import List from "./List";
import Search from "./SearchSection";
import productsServices from "data/productsServicesData";
import { Link } from "react-router-dom";

const ProductsServices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("default");

  const filteredProducts = productsServices
    .filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((item) => selectedCategory === "all" || item.category === selectedCategory)
    .sort((a, b) => {
      if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

  return (
    <div className="container mx-auto py-8 flex">
      <Sidebar setSelectedCategory={setSelectedCategory} />

      <div className="flex-grow container mt-14 ">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Protutos & Serviços</Link>
            </li>
          </ul>
        </div>
        <SectionTitle title="Produtos" subtitle="" />

        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          viewMode={viewMode}
          setViewMode={setViewMode}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <div
          className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
        >
          {filteredProducts.map((product) =>
            viewMode === "grid" ? (
              <Cards key={product.id} product={product} />
            ) : (
              <List key={product.id} product={product} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsServices;
