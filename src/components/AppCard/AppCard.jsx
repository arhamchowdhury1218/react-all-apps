import React from "react";
import downloadLogo from "../../assets/icon-downloads.png";
import ratingLogo from "../../assets/icon-ratings.png";

const AppCard = ({ app }) => {
  console.log(app);
  const { downloads, ratingAvg, image, companyName } = app;
  return (
    <div className="mt-5 w-full p-10">
      <img className="rounded-xl h-79 w-79" src={image} alt="" />
      <h1 className="my-4">{companyName}</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="h-5 w-5" src={downloadLogo} alt="" />
          <h1 className="text-green-600 font-semibold">{downloads}</h1>
        </div>
        <div className="flex items-center gap-3 mr-6">
          <img className="h-5 w-5" src={ratingLogo} alt="" />
          <h1 className="text-yellow-800 font-semibold">{ratingAvg}</h1>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
