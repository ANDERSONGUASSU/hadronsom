// frontend/src/components/About_us/CorporativeSection.jsx

import { useState, useEffect } from "react";
import SectionTitle from "../SectionTitle";
import CorporativeSectionCard from "./CorporativeSectionCard";
import { Link } from "react-router-dom";
import TimelineSection from "./TimeLineSection";
import TeamSection from "./TeamSection";
import axios from "axios";
import IconFa from "components/Icons/IconFa";
import CorporativeSkeleton from "./CorporativeSkeleton";

const CorporativeSection = () => {
  const [corporativeData, setCorporativeData] = useState({
    cards: [],
    timeline: [],
    team: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardsResponse = await axios.get("/api/v1/about/cards");
        const timelineResponse = await axios.get("/api/v1/about/timeline");
        const teamResponse = await axios.get("/api/v1/about/team");
        setCorporativeData({
          cards: cardsResponse.data,
          timeline: timelineResponse.data,
          team: teamResponse.data,
        });
      } catch (error) {
        console.error("Erro ao buscar dados da API");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container mt-24">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre-nos">Sobre nós</Link>
            </li>
          </ul>
        </div>
        <SectionTitle title="Identidade Corporativa" subtitle="Missão, Negócio, Valores e  Visão" />
        <div className="flex flex-wrap -mx-4">
          {corporativeData.cards.map((card, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <CorporativeSectionCard
                icon={<IconFa iconName={card.icon} />}
                title={card.title}
                description={card.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
      {isLoading ? (
        <CorporativeSkeleton />
      ) : (
        <>
          <TimelineSection timelineData={corporativeData.timeline} />
          <TeamSection teamMembers={corporativeData.team} />
        </>
      )}
    </>
  );
};

export default CorporativeSection;
