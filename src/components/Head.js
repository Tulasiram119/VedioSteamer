import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../utils/themeSlice";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const theme = useSelector((store) => store.theme);
  const color = theme.color === "white" ? "black" : "white";
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log("Api calling");
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
        return;
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);
  const handleClick = () => {
    dispatch(changeTheme());
  };

  return (
    <div
      className={`grid grid-flow-col md:p-5 p-1 shadow-lg text-${color} bg-${color} fixed top-0 left-0 w-[100%] z-10 bg-white`}
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
      <div>
        <div className="col-span-10 flex">
          <input
            type="text"
            className="md:w-1/2 w-36 my-0 md:my-2 border px-2 py-0 border-gray-400 rounded-l-full text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <img
            className="h-8 rounded-r-full bg-gray-400 my-0 md:my-2 md:px-2 px-1"
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
            alt="search-logo"
          />
        </div>
        {showSuggestions && (
          <div className="fixed  md:py-2 md:mt-0 mt-2 px-5 md:w-80 w-44  rounded-lg shadow-lg  text-black bg-white ">
            <ul>
              {suggestions?.map((suggestion) => (
                <li key={suggestion}>🔍{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
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
