import React from "react";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaUserCog,
  FaSyncAlt,
  FaUsers,
  FaShareAlt,
} from "react-icons/fa";
import caixasDeSom from "assets/img/igreja.jpg";
import pacotes from "assets/img/igreja.jpg";

const Features = () => {
  return (
    <section className="py-5 -mt-36 relative z-50">
      <div className="container mx-auto shadow-slate-600 shadow-md bg-base-100 rounded-lg">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold">Some of Our Awesome Projects</h3>
          <p className="text-lg">
            This is the paragraph where you can write more details about your projects. Keep your
            user engaged by providing meaningful information.
          </p>
        </div>
        <div className="flex flex-wrap mt-5">
          <div className="w-full md:w-1/2 p-4">
            <div
              className="card bg-cover text-center shadow-lg"
              style={{ backgroundImage: `url(${caixasDeSom})` }}
            >
              <div className="card-body relative z-10 py-9 text-white">
                <h2 className="text-4xl">Social Analytics</h2>
                <p>
                  Insight to help you create, connect, and convert. Understand Your Audiences
                  Interests, Influence, Interactions, and Intent. Discover emerging topics and
                  influencers to reach new audiences.
                </p>
                <label className="badge badge-light text-dark">Analytics</label>
              </div>
              <div className="mask bg-gradient-to-t from-blue-500 to-blue-900 opacity-50 rounded-lg"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center space-y-6">
            <div className="flex items-start">
              <FaPhoneAlt className="text-blue-500 text-3xl" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">Listen to Social Conversations</h4>
                <p>
                  Gain access to the demographics, psychographics, and location of unique people who
                  talk about your brand.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaCheckCircle className="text-blue-500 text-3xl" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">Performance Analyze</h4>
                <p>
                  Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich
                  insights from easy-to-use reports.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaUserCog className="text-blue-500 text-3xl" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">Social Conversions</h4>
                <p>
                  Track actions taken on your website that originated from social, and understand
                  the impact on your bottom line.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-wrap mt-5">
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center space-y-6">
            <div className="flex items-start">
              <FaSyncAlt className="text-blue-500 text-3xl" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">Always In Sync</h4>
                <p>No matter where you are, Trello stays in sync across all of your devices.</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaUsers className="text-blue-500 text-3xl" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">Work With Any Team</h4>
                <p>
                  Whether it’s for work or even the next family vacation, Trello helps your team.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaShareAlt className="text-blue-500 text-3xl" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">A Productivity Platform</h4>
                <p>Integrate the apps your team already uses directly into your workflow.</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4">
            <div
              className="card bg-cover text-center shadow-lg"
              style={{ backgroundImage: `url(${pacotes})` }}
            >
              <div className="card-body relative z-10 py-9 text-white">
                <h2 className="text-4xl">Trello lets you work.</h2>
                <p>
                  Trello’s boards, lists, and cards enable you to organize and prioritize your
                  projects in a fun, flexible, and rewarding way.
                </p>
                <label className="badge badge-light text-dark">Trello</label>
              </div>
              <div className="mask bg-gradient-to-t from-blue-500 to-blue-900 opacity-50 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
