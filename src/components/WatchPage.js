import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  console.log(params.get("v"));
  return (
    <div className="w-full">
    <div className="wrapper">
      <iframe        
        src={"https://www.youtube.com/embed/" + params.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className=""
        
      ></iframe>
    </div>
    <div>
      <CommentsContainer />
    </div>
    </div>
  );
};

export default WatchPage;
