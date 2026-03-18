import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../AppCard/AppCard";

const Apps = () => {
  const apps = useLoaderData();

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-3">Our All Applications</h1>
        <p className="text-xl text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-bold">
            <span>({apps.length}) </span>App Found
          </h1>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <h1 className="text-4xl font-bold text-center"></h1>
      </div>
      {
        <Suspense fallback="Loadingggg...">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {apps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        </Suspense>
      }
    </div>
  );
};

export default Apps;
