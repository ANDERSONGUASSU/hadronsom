import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/bundle";

const PackageCard = () => {
  const [packages, setPackages] = useState([]);
  const [currentFace, setCurrentFace] = useState(0);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("/api/v1/packages/");
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error("Erro ao buscar pacotes:", error);
      }
    };

    fetchPackages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prevFace) => (prevFace + 1) % 3); // Alterna entre as três faces
    }, 10000); // Intervalo de 5 segundos para alternar automaticamente

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, []);

  const handleFaceChange = (faceIndex) => {
    setCurrentFace(faceIndex); // Altera a face ao clicar
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {packages.map((packageData) => (
        <motion.div
          key={packageData.id}
          className="package-card rounded-lg shadow-lg overflow-hidden bg-primary"
          whileHover={{ scale: 1.05 }}
        >
          <div className="package-title font-bold text-xl p-4">{packageData.name}</div>

          {/* Carrossel de Imagens */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            className="w-full"
            navigation={true}
            pagination={{ clickable: true }}
          >
            {/* Exibe a imagem principal do pacote */}
            <SwiperSlide key={`package-image-${packageData.id}`}>
              <img
                src={packageData.image} // Exibe a imagem principal do pacote
                alt={packageData.name}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>

            {/* Exibe as imagens dos produtos */}
            {packageData.products.map((product) =>
              product.images.map((image, idx) => (
                <SwiperSlide key={`${product.id}-${idx}`}>
                  <img
                    src={image} // Exibe cada imagem dos produtos
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))
            )}
          </Swiper>

          {/* Card Flip */}
          <div className="flip-card-container relative h-96 perspective">
            {/* Face 1: Descrição e Área de Cobertura */}
            <motion.div
              className={`flip-card ${currentFace === 0 ? "show" : "hidden"} absolute w-full h-full bg-primary flex flex-col justify-center items-center p-4 cursor-pointer`}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: currentFace === 0 ? 0 : 180 }}
              transition={{ duration: 0.6 }}
              onClick={() => handleFaceChange(1)} // Clique para mudar de face
            >
              {packageData.has_sound_coverage && (
                <p>Área de Cobertura: {packageData.sound_coverage_area}m²</p>
              )}
              <p className="text-sm">{packageData.description}</p>
            </motion.div>

            {/* Face 2: Lista de Produtos */}
            <motion.div
              className={`flip-card ${currentFace === 1 ? "show" : "hidden"} absolute w-full h-full bg-primary flex flex-col justify-center items-center p-4 cursor-pointer`}
              initial={{ rotateY: 180 }}
              animate={{ rotateY: currentFace === 1 ? 0 : 180 }}
              transition={{ duration: 0.6 }}
              onClick={() => handleFaceChange(2)} // Clique para mudar de face
            >
              <ul className="text-sm">
                {packageData.products.map((product) => (
                  <li key={product.id}>
                    {product.name} x {product.quantidade}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Face 3: Preço */}
            <motion.div
              className={`flip-card ${currentFace === 2 ? "show" : "hidden"} absolute w-full h-full bg-primary flex flex-col justify-center items-center p-4 cursor-pointer`}
              initial={{ rotateY: 180 }}
              animate={{ rotateY: currentFace === 2 ? 0 : 180 }}
              transition={{ duration: 0.6 }}
              onClick={() => handleFaceChange(0)} // Clique para voltar à primeira face
            >
              {packageData.promotion_price ? (
                <>
                  <span className="original-price line-through text-gray-500">
                    R$ {packageData.price}
                  </span>
                  <span className="promotion-price text-lg font-bold text-red-500">
                    R$ {packageData.promotion_price}
                    <span className="promotion-tag bg-red-100 text-red-700 px-2 py-1 rounded-full ml-2 text-xs">
                      Promoção
                    </span>
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold">R$ {packageData.price}</span>
              )}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PackageCard;
