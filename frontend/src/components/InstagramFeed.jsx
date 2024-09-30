import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaImage, FaImages, FaVideo, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/bundle";
import SectionTitle from "./SectionTitle";

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/api/v1/instagram-posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Erro ao buscar posts do Instagram:", error));
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SectionTitle
        title="Nosso Instagram"
        subtitle={
          <>
            <h5>Siga-nos no Instagram para mais novidades! </h5>
            <div className="flex gap-4 justify-center items-center" role="group">
              <a
                href="https://www.instagram.com/hadronsom/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-content"
              >
                <FaInstagram className="text-3xl" />
              </a>
            </div>
          </>
        }
      />
      <div className="container mx-auto p-4">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={30} // Espaçamento entre os slides
          slidesPerView={3} // Número de slides visíveis por vez
          centeredSlides={true} // Centraliza o slide ativo
          loop={true} // Ativa o loop infinito
          autoplay={{ delay: 5000 }} // Alterna os slides a cada 5 segundos
          navigation={true} // Ativa os botões de navegação
          pagination={{ clickable: true }} // Ativa a paginação clicável
          className="mt-12" // Adiciona uma margem superior
          breakpoints={{
            // Configurações responsivas
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div
                className="relative cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => openModal(post)}
              >
                {post.media_type === "VIDEO" ? (
                  <video src={post.media_url} className="w-full max-h-80 object-cover" />
                ) : (
                  <img
                    src={post.media_url}
                    alt={post.caption}
                    className="w-full max-h-80 object-cover"
                  />
                )}
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2">
                  {post.media_type === "VIDEO" ? (
                    <FaVideo className="text-white" /> // Ícone de vídeo
                  ) : post.children && post.children.data.length > 1 ? (
                    <FaImages className="text-white" /> // Ícone de imagens
                  ) : (
                    <FaImage className="text-white" /> // Ícone de imagem
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg p-4 md:max-w-3xl ssm:max-w-xs max-h-full overflow-auto"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                {selectedPost.media_type === "VIDEO" ? (
                  <video
                    src={selectedPost.media_url}
                    controls
                    className="w-full h-auto max-h-[80vh]"
                  />
                ) : selectedPost.children && selectedPost.children.data.length > 1 ? (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={false}
                    className="w-full h-auto max-h-[80vh]"
                  >
                    {selectedPost.children.data.map((item) => (
                      <SwiperSlide key={item.id}>
                        <img
                          src={item.media_url}
                          alt={selectedPost.caption}
                          className="w-full h-auto max-h-[96vh]"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <img
                    src={selectedPost.media_url}
                    alt={selectedPost.caption}
                    className="w-full h-auto max-h-[80vh]"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default InstagramFeed;
