import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Loading from "components/Loading";
import AboutPage from "pages/AboutPage";
import ProductsPage from "pages/ProductsPage";
import ProductDetailPage from "pages/ProductDetailPage";
import "./App.css";
import FloatingWhatsAppButton from "components/FloatingWhatsAppButton";
import ProductReviewPage from "pages/ProductReviewPage";
import routes from "routes/routes";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
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
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.productsPage} element={<ProductsPage />} />
            <Route path={routes.productDetailPage} element={<ProductDetailPage />} />
            <Route path={routes.productReviewPage} element={<ProductReviewPage />} />
            <Route path={routes.aboutPage} element={<AboutPage />} />
            <Route path={routes.contactPage} element={<ContactPage />} />
          </Routes>
        </main>
        <FloatingWhatsAppButton />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
