import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import IconFa from "components/Icons/IconFa";
import PropType from "prop-types";

const TeamSection = ({ teamMembers }) => {
  return (
    <>
      <section className="py-12">
        <SectionTitle title="Nossa Equipe" subtitle="Conheça nossa Equipe" />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              className="overflow-hidden"
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="avatar flex items-center justify-center relative">
                <div className="w-40 border-4 border-base-100 shadow-lg rounded-full relative">
                  <img src={member.img} className="rounded-full" alt={member.name} />
                  <div className="w-40 h-40 absolute -inset-1 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-full flex items-center justify-center gap-2">
                    {member.social_networks.map((network) => (
                      <a
                        key={network.url}
                        href={network.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base-100 text-xl"
                      >
                        <IconFa iconName={network.social_network.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="member-info p-6 text-center">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <span className="text-gray-500">{member.position}</span>
                <p className="mt-4 text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
TeamSection.propTypes = {
  teamMembers: PropType.array.isRequired,
};

export default TeamSection;
