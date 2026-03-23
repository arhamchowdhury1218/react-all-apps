import React from "react";
import downloadLogo from "../../assets/icon-downloads.png";
import ratingLogo from "../../assets/icon-ratings.png";
import { removeFromStoreDB } from "../../utility/addToLocalStortage";

const InstalledApp = ({ app, onRemove }) => {
  const {
    companyName,
    description,
    downloads,
    id,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
    title,
  } = app;
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
      <div className="flex gap-10">
        <img className="w-20 h-20 rounded-2xl" src={image} alt="" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-xl mb-2">{companyName}</h1>
          <div className="flex">
            <div className="flex items-center gap-2 mr-10">
              <img className="h-5 w-5" src={downloadLogo} alt="" />
              <h1 className="text-green-600 font-semibold">{downloads}</h1>
            </div>
            <div className="flex items-center gap-2 mr-10">
              <img className="h-5 w-5" src={ratingLogo} alt="" />
              <h1 className="text-yellow-800 font-semibold">{ratingAvg}</h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-500 font-semibold">{size}MB</h1>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="btn btn-active bg-red-500 font-bold"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApp;
