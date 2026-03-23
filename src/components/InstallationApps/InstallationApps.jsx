import React, { useState } from "react";
import {
  getStoredApps,
  removeFromStoreDB,
} from "../../utility/addToLocalStortage";
import { useLoaderData } from "react-router";
import InstalledApp from "../InstalledApp/InstalledApp";

const InstallationApps = () => {
  const appData = useLoaderData();
  const [installedCurrentApps, setInstalledCurrentApps] =
    useState(getStoredApps());
  const installedApps = getStoredApps();
  const installedAppData = appData.filter((app) =>
    installedApps.includes(app.id),
  );
  const handleRemove = (id) => {
    removeFromStoreDB(id);

    const updated = installedCurrentApps.filter((appId) => appId !== id);
    setInstalledCurrentApps(updated);
  };

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-3">Your Installed Apps</h1>
        <p className="text-xl text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between items-center my-4">
          <h1 className="text-xl lg:text-xl font-semibold">
            <span>{installedAppData.length} </span>App Found
          </h1>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Size ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {installedAppData.map((app) => (
          <InstalledApp
            key={app.id}
            app={app}
            onRemove={handleRemove}
          ></InstalledApp>
        ))}
      </div>
    </div>
  );
};

export default InstallationApps;
