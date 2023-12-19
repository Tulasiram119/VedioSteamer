import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttons = [
    "All",
    "Trending",
    "Java",
    "javaScript",
    "React",
    "Spring",
    "Html",
    "Css"
  ];
  return (
    <div className="flex w-screen overflow-x-scroll no-scrollbar">
      {buttons.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
