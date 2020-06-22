import React from "react";

const List = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((item, index) => {
        return <li key={index}> {item}</li>;
      })}
    </ul>
  );
};

export default List;
