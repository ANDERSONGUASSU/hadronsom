import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Loading from "components/Loading";
import AboutPage from "pages/AboutPage";
import ProductsServicesPage from "pages/ProductsServicesPage";
import ProductDetailPage from "pages/ProductDetailPage";
import "./App.css";
import FloatingWhatsAppButton from "components/FloatingWhatsAppButton";
import ProductReviewPage from "pages/ProductReviewPage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<ProductsServicesPage />} />
            <Route path="/produtos/:id" element={<ProductDetailPage />} />
            <Route path="/produtos/:id/avaliar" element={<ProductReviewPage />} />
            <Route path="/sobre-nos" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <FloatingWhatsAppButton />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
