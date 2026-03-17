import React from "react";

const StateSection = () => {
  return (
    <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-center p-10 text-white">
      <h1 className="font-semibold text-4xl mb-6">
        Trusted by Millions, Built for You
      </h1>
      <div className="stats stats-vertical lg:stats-horizontal shadow text-white space-x-20">
        <div className="stat">
          <div className="stat-title text-white">Total Downloads</div>
          <div className="stat-value text-white">29.6M</div>
          <div className="stat-desc text-white">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-title text-white">Total Reviews</div>
          <div className="stat-value text-white">906K</div>
          <div className="stat-desc text-white">46% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-title text-white">Active Apps</div>
          <div className="stat-value text-white">132+</div>
          <div className="stat-desc text-white">31 more will Launch</div>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
