import React, { useState } from "react";

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

  const filteredProducts = productsServices
    .filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((item) => selectedCategory === "all" || item.category === selectedCategory);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Produtos & Serviços</h1>

      {/* Filtro por pesquisa e categoria */}
      <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-2 sm:mb-0">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="px-3 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">Todas as categorias</option>
            <option value="mesa-de-som">Mesa de Som</option>
            <option value="caixas-de-som">Caixas de Som</option>
            <option value="subwoofers">Subwoofers</option>
            {/* Adicione mais opções de categorias conforme necessário */}
          </select>
        </div>
      </div>

      {/* Listagem dos produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Carousel de imagens */}
            <div className="relative h-64">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 right-0 m-4">
                {/* Botão para abrir o carousel */}
                <button className="text-white bg-gray-900 px-2 py-1 rounded-md hover:bg-gray-700 transition duration-300">
                  Ver mais fotos
                </button>
              </div>
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
  );
};

export default ProductsServicesPage;
