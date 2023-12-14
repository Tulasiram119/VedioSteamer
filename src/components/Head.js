import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../utils/themeSlice";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const theme = useSelector((store) => store.theme);
  const color = theme.color === "white" ? "black" : "white";
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeTheme());
  };

  return (
    <div
      className={`grid grid-flow-col m-2 md:p-5 p-1 shadow-lg text-${color} bg-${color}`}
    >
      <div className="flex col-span-1">
        <img
          className="h-8 md:h-10"
          src="https://cdn1.iconfinder.com/data/icons/black-round-web-icons/100/round-web-icons-black-47-512.png"
          alt="menu-logo"
          onClick={() => dispatch(toggleMenu())}
        />
        <img
          className="md:h-10 h-5 m-1 mx-2 md:mx-4 md:m-0"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="youtube logo"
        />
      </div>
      <div className="col-span-10 flex">
        <input
          type="text"
          className="md:w-1/2 w-36 my-0 md:my-2 border px-2 py-0 border-gray-400 rounded-l-full"
        />

        <img
          className="h-8 rounded-r-full bg-gray-400 my-0 md:my-2 md:px-2 px-1"
          src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
          alt="search-logo"
        />
      </div>
      <div className="col-span-1">
        <img
          className="h-8 md:h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqaY00yaY-5hXVS6NhLuzMjBTJNrEax8lJzTBXMqIew&s"
          alt="user"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Head;
