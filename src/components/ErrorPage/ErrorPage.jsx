import React from "react";
import error404 from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="p-20 flex flex-col justify-center items-center gap-10">
      <div className="">
        <img className="h-100 w-100" src={error404} alt="404-Scarecrow" />
      </div>
      <div className="space-y-5 max-w-full mx-auto text-center">
        <h2 className="text-3xl font-bold">Oops, page not found!</h2>
        <p className="text-2xl text-gray-500">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <div className="text-center">
          <Link to="/">
            <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-medium">
              Back to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
