import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import routes from "routes/routes";

const FloatingWhatsAppButton = () => {
  return (
    <a href={routes.whatsapp} target="_blank" rel="noopener noreferrer">
      <motion.div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}
        whileHover={{ scale: 1.1 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        title="Entre em contato"
      >
        <FaWhatsapp color="white" size="30px" />
      </motion.div>
    </a>
  );
};

export default FloatingWhatsAppButton;
