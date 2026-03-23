import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, ScrollRestoration, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const Root = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <ScrollRestoration />
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
