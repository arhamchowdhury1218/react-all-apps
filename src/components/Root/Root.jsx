import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-11/12 mx-auto">
        {" "}
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
