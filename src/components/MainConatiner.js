import React from "react";
import ButtonList from "./ButtonList";
import VedioContainer from "./VedioContainer";

const MainConatiner = () => {
  return (
    <div className="overflow-y-hidden">
      <ButtonList />
      <VedioContainer />
    </div>
  );
};

export default MainConatiner;
