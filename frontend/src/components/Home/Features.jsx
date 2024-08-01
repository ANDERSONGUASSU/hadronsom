import React from "react";
import AboutSection from "./AboutSection";
import ProductsServicesSection from "./ProductsServicesSection";
import PackagesSection from "./PackagesSection";

const Features = () => {
  return (
    <section className="py-5 -mt-36 relative z-20">
      <div className="md:container ssm:container-lg mx-auto shadow-slate-600 shadow-md bg-base-100 rounded-lg">
        <AboutSection />
        <ProductsServicesSection />
        <PackagesSection />
      </div>
    </section>
  );
};

export default Features;
