import React from "react";

import style from "./List.module.css";

const List = ({ ingredients }) => {
  return (
    <ul className={style.list}>
      {ingredients.map((item, index) => {
        return (
          <li key={index} className={style["list-item"]}>
            {" "}
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
