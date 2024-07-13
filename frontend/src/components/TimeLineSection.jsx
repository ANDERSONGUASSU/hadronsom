import SectionTitle from "components/SectionTitle";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TimelineSection = () => {
  const timelineData = [
    {
      title: "First Macintosh computer",
      year: "1984",
      description:
        "The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer.",
    },
    {
      title: "iMac",
      year: "1998",
      description:
        "iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc.",
    },
    {
      title: "iPod",
      year: "2001",
      description:
        "The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc.",
    },
    {
      title: "iPhone",
      year: "2007",
      description:
        "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system.",
    },
    {
      title: "Apple Watch",
      year: "2015",
      description:
        "The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication.",
    },
  ];
  return (
    <>
      <div className="container mt-16">
        <SectionTitle title="Nossa História" subtitle="Conheça nossa história" />
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {timelineData.map((item, index) => (
            <li key={index}>
              <div className="timeline-middle">
                <FaCheckCircle className="text-black bg-white rounded-full h-5 w-4" />
              </div>
              <div
                className={
                  index % 2 === 0 ? "timeline-start mb-10 md:text-end" : "timeline-end mb-10"
                }
              >
                <time className="font-mono italic">{item.year}</time>
                <div className="text-lg font-black">{item.title}</div>
                {item.description}
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TimelineSection;
