import React from "react";
import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  const appData = useLoaderData();
  const singleAppDetail = appData.find((app) => app.id === intId);
  console.log(singleAppDetail);
  const {
    companyName,
    description,
    downloads,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
    title,
  } = singleAppDetail;
  return (
    <div className="max-w-11/12 mx-auto my-10">
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-x-44">
        <img className="w-87.5 h-87.5 rounded-2xl" src={image} alt="" />
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-500 ">
            Developed by{" "}
            <span className="text-purple-600 font-bold">{companyName}</span>
          </p>
          <div className="flex w-full flex-col">
            <div className="divider"></div>
          </div>
          <div className="flex gap-10 mt-8">
            <div className="space-y-2">
              <img className="w-10 h-10" src={downloadIcon} alt="" />
              <p>Downloads</p>
              <h1 className="font-extrabold text-3xl">{downloads}</h1>
            </div>
            <div className="space-y-2">
              <img className="w-10 h-10" src={ratingIcon} alt="" />
              <p>Average Ratings</p>
              <h1 className="font-extrabold text-3xl">{ratingAvg}</h1>
            </div>
            <div className="space-y-2">
              <img className="w-10 h-10" src={reviewIcon} alt="" />
              <p>Total Reviews</p>
              <h1 className="font-extrabold text-3xl">{reviews}</h1>
            </div>
          </div>
          <div className="mt-10">
            <button className="btn btn-success px-20 text-white font-bold">
              Install Now ({size})
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>

      <div>
        <h1 className="text-2xl font-bold">Ratings</h1>
        <BarChart
          layout="vertical"
          style={{
            width: "100%",
            maxWidth: "800px",
            maxHeight: "600px",
            aspectRatio: 1.618,
          }}
          responsive
          data={ratings}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
      </div>
      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
