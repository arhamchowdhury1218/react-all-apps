import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <div>
        {" "}
        <Navbar></Navbar>
        <ScrollRestoration />
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
