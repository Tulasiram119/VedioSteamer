import React from "react";
import useAddPopularVedios from "../utils/useAddPopularVedios";
import { useSelector } from "react-redux";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";

const VedioContainer = () => {
  useAddPopularVedios();
  const vedios = useSelector((store) => store?.vedioReducer);
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 overflow-y-scroll no-scrollbar">
      {vedios.popular?.map((vedio) => (
        <Link key={vedio.id} to={"/watch?v="+vedio.id}>
          <VedioCard info={vedio} />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
