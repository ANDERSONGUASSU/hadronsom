import React from "react";
import igrejaImage from "../assets/img/igreja.jpg";

const BannerContact = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-dark bg-opacity-50"
      style={{ backgroundImage: `url(${igrejaImage})`, backgroundAttachment: "fixed" }}
    >
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          For being a bright color. For standing out. But the time is now to be okay to be the
          greatest you.
        </h2>
        <div className="mt-8">
          <button
            type="button"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"
          >
            Start Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerContact;
