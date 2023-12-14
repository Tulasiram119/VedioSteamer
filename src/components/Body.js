import React from "react";
import SideBar from "./SideBar";
import MainConatiner from "./MainConatiner";
import { useSelector } from "react-redux";

const Body = () => {
  const isToggleOpen = useSelector((store) => store.appSlice);

  return (
    <div className="flex overflow-x-hidden">
      {isToggleOpen.isMenuOpen && <SideBar />}
      <MainConatiner />
    </div>
  );
};

export default Body;
