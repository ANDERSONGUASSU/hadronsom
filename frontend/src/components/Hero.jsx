import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen hero-img">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">A solução para o seu som</h1>
          <p className="mb-5 text-xl">
            Transforme qualquer espaço com as caixas de som Hádron - a combinação perfeita entre
            estilo e qualidade sonora que se adapta a todos os ambientes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
