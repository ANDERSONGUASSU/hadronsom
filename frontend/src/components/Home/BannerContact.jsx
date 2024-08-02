import React from "react";
import bannerImg from "../../assets/img/bannerContact.jpg";

const BannerContact = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-dark bg-opacity-50 bg-cover h-96 "
      style={{ backgroundImage: `url(${bannerImg})`, backgroundAttachment: "fixed" }}
    >
      <div className="container grid grid-cols-1 content-center mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center text-white h-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Temos o som de qualidade para transformar seu ambiente.
        </h2>
        <div className="mt-8">
          <a
            href="https://api.whatsapp.com/send/?phone=5514998163835&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerContact;
