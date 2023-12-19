import { useEffect } from "react";
import { YOUTUBE_API } from "./constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "./vedioSlice";

const useAddPopularVedios = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getVedios();
  }, []);
  const getVedios = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    dispatch(addPopularMovies(json?.items));
  };
};

export default useAddPopularVedios;
