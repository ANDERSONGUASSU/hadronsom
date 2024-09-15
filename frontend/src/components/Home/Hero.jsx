import React, { useEffect } from "react";
import Typed from "typed.js";
import { useSelector } from "react-redux";
import { fetchHeroData } from "../../features/homeSlice";
import HeroSkeleton from "./HeroSkeleton";
import { useDispatch } from "react-redux";

const Hero = () => {
  const dispath = useDispatch();
  const { isLoading, texts, backgroundImage, title, description } = useSelector(
    (state) => state.home
  );

  useEffect(() => {
    dispath(fetchHeroData());
  }, [dispath]);

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
    <>
      {isLoading ? (
        <HeroSkeleton />
      ) : (
        <div
          className="hero w-svw min-h-screen"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
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
      )}
    </>
  );
};

export default Hero;
