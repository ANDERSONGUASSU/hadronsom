import React, { useEffect } from "react";
import Typed from "typed.js";
import igrejaImage from "../../assets/img/igreja.jpg";

const Hero = () => {
  useEffect(() => {
    if (document.getElementById("typed")) {
      new Typed("#typed", {
        stringsElement: "#typed-strings",
        startDelay: 2000,
        showCursor: false,
        typeSpeed: 70,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 500,
        loop: false,
      });
    }
  }, []);
  return (
    <div className="hero w-full min-h-screen" style={{ backgroundImage: `url(${igrejaImage})` }}>
      <div className="hero-overlay bg-gradient-to-b from-transparent to-primary-content opacity-100"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="text-base-100 text-5xl font-bold">
            A solução para o seu som é <br></br>
            <span className="text-base-100 text-5xl font-bold" id="typed"></span>
            <br></br>
          </h1>
          <div id="typed-strings" className="hidden">
            <h1>qualidade sonora?</h1>
            <h1>inovação?</h1>
            <h1>Hádron Som!</h1>
          </div>
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
