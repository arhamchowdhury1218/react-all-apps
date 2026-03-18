import React, { Suspense } from "react";
import AppCard from "../AppCard/AppCard";
import { Link } from "react-router";

const TrendingApps = ({ data }) => {
  console.log(data);
  const eightDatas = data.slice(0, 8);
  return (
    <div>
      <div className="max-w-11/12 mx-auto">
        <h1 className="text-4xl font-bold text-center">Trending Apps</h1>
        <p className="text-center text-gray-500 mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
        <Suspense fallback="Loadingggg...">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {eightDatas.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        </Suspense>
        <div className="w-25 mx-auto">
          <Link
            to="https://github.com/arhamchowdhury1218"
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] flex items-center text-white font-medium"
          >
            Show ALL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
