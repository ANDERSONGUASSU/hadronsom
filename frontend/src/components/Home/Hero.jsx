import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import axios from "axios";

const Hero = () => {
  const [texts, setTexts] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    axios
      .get("/api/v1/hero/")
      .then((response) => {
        const data = response.data;
        setTexts([data.hero_text_1, data.hero_text_2, data.hero_text_3]);
        setBackgroundImage(data.hero_bg_img);
      })
      .catch((error) => {
        console.error("API Request Error:", error);
      });
  }, []);

  useEffect(() => {
    if (texts.length > 0 && document.getElementById("typed")) {
      new Typed("#typed", {
        strings: texts,
        startDelay: 2000,
        showCursor: false,
        typeSpeed: 70,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 500,
        loop: false,
      });
    }
  }, [texts]);

  return (
    <div className="hero w-svw min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay bg-gradient-to-b from-transparent to-primary-content opacity-100"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="text-base-100 text-5xl font-bold">
            A solução para o seu som é <br />
            <span className="text-base-100 text-5xl font-bold" id="typed"></span>
            <br />
          </h1>
          <p className="text-base-100 mt-4 text-xl font-medium">
            Transforme qualquer espaço com as caixas de som Hádron. <br />A combinação perfeita
            entre estilo e qualidade sonora que se adapta a todos os ambientes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
