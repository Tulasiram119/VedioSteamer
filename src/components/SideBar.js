import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const theme = useSelector((store) => store.theme);
  const color = theme.color === "white" ? "black" : "white";
  return (
    <div
      className={` p-4 shadow-lg md:w-48 w-32 text-${theme.color} bg-${color}`}
    >
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Enterainment</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Enterainment</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Enterainment</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
