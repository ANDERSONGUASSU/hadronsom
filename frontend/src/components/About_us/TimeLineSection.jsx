// frontend/src/components/TimelineSection.js
import SectionTitle from "components/SectionTitle";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Image } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const TimelineSection = ({ timelineData }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.5,
      },
    },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <>
      <div className="container mt-16">
        <SectionTitle title="Nossa História" subtitle="Conheça nossa história" />
        <motion.ul
          className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
          variants={containerVariants}
          initial="hidden"
          whileInView={["visible"]}
        >
          <AnimatePresence>
            {timelineData.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <motion.div className="timeline-middle" variants={iconVariants}>
                  <FaCheckCircle className="text-black bg-white rounded-full h-5 w-4" />
                </motion.div>
                <motion.div
                  className={
                    index % 2 === 0 ? "timeline-start mb-10 md:text-end" : "timeline-end mb-10"
                  }
                >
                  <time className="font-mono italic">{new Date(item.year).getFullYear()}</time>
                  <div className="text-lg font-black">{item.title}</div>
                  {item.img && (
                    <motion.div
                      className={
                        index % 2 === 0
                          ? "flex md:justify-end ssm:justify-start"
                          : "flex justify-start"
                      }
                      variants={imageVariants}
                    >
                      <Image src={item.img} width={300} height={200} isZoomed />
                    </motion.div>
                  )}
                  <div className="max-w-prose">{item.description}</div>
                </motion.div>
                <hr />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </>
  );
};
TimelineSection.propTypes = {
  timelineData: PropTypes.array.isRequired,
};

export default TimelineSection;
