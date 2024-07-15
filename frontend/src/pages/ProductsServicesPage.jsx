import SectionTitle from "components/SectionTitle";
import React, { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const productsServices = [
  {
    id: 1,
    title: "Mesa de Som Profissional",
    description: "Mesa de som profissional para estúdios e eventos.",
    category: "mesa-de-som",
    images: [
      "https://example.com/mesa-de-som-1.jpg",
      "https://example.com/mesa-de-som-2.jpg",
      "https://example.com/mesa-de-som-3.jpg",
    ],
  },
  {
    id: 2,
    title: "Caixas de Som Profissionais",
    description: "Caixas de som potentes para ambientes grandes.",
    category: "caixas-de-som",
    images: ["https://example.com/caixas-de-som-1.jpg", "https://example.com/caixas-de-som-2.jpg"],
  },
  {
    id: 3,
    title: "Subwoofers",
    description: "Subwoofers para graves profundos e potentes.",
    category: "subwoofers",
    images: ["https://example.com/subwoofer-1.jpg", "https://example.com/subwoofer-2.jpg"],
  },
  // Adicione mais produtos e serviços conforme necessário
];

const ProductsServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts = productsServices
    .filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((item) => selectedCategory === "all" || item.category === selectedCategory);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto py-8 flex">
      {/* Menu lateral */}
      <div
        className={`fixed top-14 left-0 w-64 h-3/5 bg-base-200 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-48"
        } transition-transform duration-300 z-40`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Categorias</h2>
          <button onClick={toggleMenu} className="text-gray-600">
            {isMenuOpen ? <FaAngleDoubleLeft size={24} /> : <FaAngleDoubleRight size={24} />}
          </button>
        </div>
        <div className="p-4">
          <button
            onClick={() => setSelectedCategory("all")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Todas as categorias
          </button>
          <button
            onClick={() => setSelectedCategory("mesa-de-som")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Mesa de Som
          </button>
          <button
            onClick={() => setSelectedCategory("caixas-de-som")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Caixas de Som
          </button>
          <button
            onClick={() => setSelectedCategory("subwoofers")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Subwoofers
          </button>
          {/* Adicione mais opções de categorias conforme necessário */}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-grow container mt-14 ssm:ml-10 sm:ml-16 lg:ml-0">
        <SectionTitle title="Produtos" subtitle="" />

        {/* Filtro por pesquisa */}
        <div className="mb-4 flex items-center">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="px-3 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Listagem dos produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card shadow-md rounded-lg overflow-hidden">
              {/* Carousel de imagens */}
              <div className="h-64">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsServicesPage;
