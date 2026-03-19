import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../AppCard/AppCard";
import { CiSearch } from "react-icons/ci";
import AppNotFound from "../AppNotFound/AppNotFound";
import Loader from "../Loader/Loader";

const Apps = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const apps = useLoaderData();
  const filteredApps = apps.filter((app) =>
    app.companyName.toLowerCase().includes(search.toLowerCase()),
  );
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          {filteredApps.length > 0 ? (
            <div className="max-w-11/12 mx-auto my-10">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-3">
                  Our All Applications
                </h1>
                <p className="text-xl text-gray-500">
                  Explore All Apps on the Market developed by us. We code for
                  Millions
                </p>
                <div className="flex justify-between items-center mt-4">
                  <h1 className="text-xl lg:text-2xl font-bold">
                    <span>({apps.length}) </span>App Found
                  </h1>
                  <div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Search Apps"
                        className="input w-full pl-10"
                        value={search}
                        onChange={handleSearch}
                      />

                      <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900 text-xl" />
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-center"></h1>
              </div>
              {
                <Suspense
                  fallback={
                    <span className="loading loading-spinner loading-xl"></span>
                  }
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredApps.map((app) => (
                      <AppCard key={app.id} app={app}></AppCard>
                    ))}
                  </div>
                </Suspense>
              }
            </div>
          ) : (
            <AppNotFound></AppNotFound>
          )}
        </div>
      )}
    </div>
  );
};

export default Apps;
