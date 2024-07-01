import BannerContact from "components/BannerContact";
import FAQSection from "components/FAQ";
import Features from "components/Features";
import Testmonials from "components/Testmonials";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Features />
      <BannerContact />
      <FAQSection />
      <Testmonials />
    </>
  );
};

export default HomePage;
