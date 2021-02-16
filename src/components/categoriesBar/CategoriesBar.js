import React, { useState } from "react";
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

  const handleClick = (value) => {
    setActiveElement(value);
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
