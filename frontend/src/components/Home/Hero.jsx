import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import axios from "axios";

const Hero = () => {
  const [texts, setTexts] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get("/api/v1/hero/")
      .then((response) => {
        const data = response.data;
        setTexts([data.hero_text_1, data.hero_text_2, data.hero_text_3]);
        setBackgroundImage(data.hero_bg_img);
        setTitle(data.hero_title);
        setDescription(data.hero_description);
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
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-base-100 text-5xl font-bold">
            {title}
            <br />
            <span className="text-base-100 text-5xl font-bold" id="typed"></span>
            <br />
          </h1>
          <p className="text-base-100 mt-4 text-xl font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
