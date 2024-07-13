import React from "react";
import Navbar from "../components/menubar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
