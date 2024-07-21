import React, { useState } from "react";
import SectionTitle from "components/SectionTitle";
import Sidebar from "./SideBar";
import Cards from "./Cards";
import List from "./List";
import Search from "./SearchSection";

const productsServices = [
  {
    id: 1,
    title: "Mesa de Som Profissional",
    description: "Mesa de som profissional para estúdios e eventos.",
    category: "mesa-de-som",
    images: [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=2",
      "https://picsum.photos/600/400?random=3",
    ],
  },
  {
    id: 2,
    title: "Caixas de Som Profissionais",
    description: "Caixas de som potentes para ambientes grandes.",
    category: "caixas-de-som",
    images: ["https://picsum.photos/600/400?random=4", "https://picsum.photos/600/400?random=5"],
  },
  {
    id: 3,
    title: "Subwoofers",
    description: "Subwoofers para graves profundos e potentes.",
    category: "subwoofers",
    images: ["https://picsum.photos/600/400?random=6", "https://picsum.photos/600/400?random=7"],
  },
  // Adicione mais produtos e serviços conforme necessário
];

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

      <div className="flex-grow container mt-14 ssm:ml-10 sm:ml-16 lg:ml-0">
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
          className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
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
