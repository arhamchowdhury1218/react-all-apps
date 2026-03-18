import React from "react";
import error404 from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="p-20 flex flex-col lg:flex-row justify-center items-center gap-10">
      <div className="">
        <img className="h-100 w-100" src={error404} alt="404-Scarecrow" />
      </div>
      <div className="space-y-5 max-w-full mx-auto">
        <h2 className="text-3xl font-bold">Opps!!</h2>
        <p className="text-3xl font-bold">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <Link
          to="/"
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] flex items-center text-white font-medium w-40"
        >
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
