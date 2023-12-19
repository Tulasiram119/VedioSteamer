import React from "react";
import SideBar from "./SideBar";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isToggleOpen = useSelector((store) => store.appSlice);
  
  return (
    <div className="flex overflow-x-hidden md:pt-24 pt-12">
      {isToggleOpen.isMenuOpen && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Body;
