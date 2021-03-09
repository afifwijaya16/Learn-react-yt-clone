import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/video.action";
import "./_categoriesBar.scss";

const keyword = [
  "All",
  "React Js",
  "React Native",
  "Use of API",
  "Redux",
  "Music",
  "Football",
  "Next Js",
  "DragonBall Z",
  "Naruto",
  "One Piece",
  "Kimetsu No Yaiba",
  "Solo leveling",
];
const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };
  return (
    <div className="categoriesBar">
      {keyword.map((value, i) => (
        <span
          key={i}
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active " : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
