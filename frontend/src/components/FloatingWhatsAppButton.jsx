import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FloatingWhatsAppButton = () => {
  return (
    <Link
      to="https://api.whatsapp.com/send/?phone=5514998163835&text&type=phone_number&app_absent=0"
      target="_blank"
    >
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
          y: [0, -10, 0], // Valores para mover para cima e para baixo
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
    </Link>
  );
};

export default FloatingWhatsAppButton;
