// frontend/src/components/AboutSection.jsx

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SectionTitle from "../SectionTitle";
import AboutSectionCard from "./AboutSectionCard";
import AboutSectionInfo from "./AboutSectionInfo";
import axios from "axios";
import IconFa from "components/Icons/IconFa";
import AboutSectionSkeleton from "./AboutSectionSkeleton";
import { setIsLoading } from "../../features/homeSlice";

const AboutSection = () => {
  const [aboutData, setAboutData] = useState(null);

  const isLoading = useSelector((state) => state.home.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/v1/about-section/")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setAboutData(response.data[0]);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <AboutSectionSkeleton />
      ) : aboutData ? (
        <section className="bg-base-100">
          <SectionTitle
            title="Conheça a Hádron"
            subtitle={
              <>
                Conheça os serviços e produtos que a{" "}
                <strong className="text-primary">Hádron</strong> oferece para transformar o seu
                ambiente.
              </>
            }
          />
          <div className="container grid md:grid-cols-3">
            <AboutSectionInfo
              title={aboutData.title_info}
              description={aboutData.description_info}
            />
            <div className="col-span-2 grid md:grid-cols-2 gap-4">
              <div className="col-1">
                {aboutData.cards &&
                  aboutData.cards
                    .slice(0, 2)
                    .map((card, index) => (
                      <AboutSectionCard
                        key={index}
                        icon={<IconFa iconName={card.icon} />}
                        title={card.title}
                        description={card.description}
                      />
                    ))}
              </div>
              <div className="col-2 -mt-10">
                {aboutData.cards &&
                  aboutData.cards
                    .slice(2)
                    .map((card, index) => (
                      <AboutSectionCard
                        key={index}
                        icon={<IconFa iconName={card.icon} />}
                        title={card.title}
                        description={card.description}
                      />
                    ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};

export default AboutSection;
