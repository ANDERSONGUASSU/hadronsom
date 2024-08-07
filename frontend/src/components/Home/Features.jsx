import React from "react";
import AboutSection from "./AboutSection";
import ProductsServicesSection from "./ProductsServicesSection";
import PackagesSection from "./PackagesSection";

const Features = () => {
  return (
    <section className="container -mt-36 relative z-20 w-svw">
      <div className="shadow-slate-600 shadow-md bg-base-100 rounded-lg">
        <AboutSection />
        <ProductsServicesSection />
        <PackagesSection />
      </div>
    </section>
  );
};

export default Features;
