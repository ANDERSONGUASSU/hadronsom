import Hero from "components/Home/Hero";
import Features from "components/Home/Features";
import BannerContact from "components/Home/BannerContact";
import FAQSection from "components/Home/FAQ";
import InstagramFeed from "components/InstagramFeed";
import Testmonials from "components/Home/Testmonials";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <BannerContact />
      <FAQSection />
      <InstagramFeed />
      <Testmonials />
    </>
  );
};

export default HomePage;
