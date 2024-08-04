const productsServices = [
  {
    id: 1,
    rating: 0,
    reviews: 0,
    title: "Mesa de Som Profissional",
    description: "Mesa de som profissional para estúdios e eventos.",
    category: "mesa-de-som",
    images: [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=2",
      "https://picsum.photos/600/400?random=3",
    ],
    detailedDescription: "Esta é uma descrição detalhada do produto.",
    specifications: [
      "Material: Alumínio",
      "Capacidade: 500GB",
      "Voltagem: 110V/220V",
      "Consumo de Energia: 50W",
      "Resolução: 1920x1080",
    ],
    technicalDetails: {
      brand: "Marca Exemplo",
      model: "Modelo Exemplo",
      serialNumber: "123456789",
      warranty: "1 ano",
      manufactureDate: "2023-01-01",
      originCountry: "Brasil",
      weight: "1kg",
      dimensions: "10x20x30cm",
    },
  },
  {
    id: 2,
    rating: 4,
    reviews: 6,
    title: "Caixas de Som Profissionais",
    description: "Caixas de som potentes para ambientes grandes.",
    category: "caixas-de-som",
    images: ["https://picsum.photos/600/400?random=4", "https://picsum.photos/600/400?random=5"],
  },
  {
    id: 3,
    rating: 4,
    reviews: 6,
    title: "Subwoofers",
    description: "Subwoofers para graves profundos e potentes.",
    category: "subwoofers",
    images: ["https://picsum.photos/600/400?random=6", "https://picsum.photos/600/400?random=7"],
  },
];

export default productsServices;
