import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttons = [
    "All",
    "Trending",
    "Cricket",
    "Comedy",
    "All",
    "Trending",
    "Cricket",
    "Comedy",
    "All",
    "Trending",
    "All",
    "Trending",
    "Cricket",
    "Comedy",
    "All",
    "Trending",
    "Cricket",
    "Comedy",
    "All",
    "Trending",
  ];
  return (
    <div className="flex w-screen overflow-x-scroll no-scrollbar">
      {buttons.map((name) => (
        <Button name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
