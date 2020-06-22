import React, { useState } from "react";

import { Recipes, InputSearch } from "./components";

import "./App.css";

const APP = () => {
  const [query, setQuery] = useState("pollo");

  const getQuery = (UserInput) => {
    setQuery(UserInput);
  };

  return (
    <>
      <h1 className="title">
        Ricette
        <span role="img" aria-label="emoji">
          🍲
        </span>
      </h1>
      <InputSearch getQuery={getQuery} />
      <Recipes query={query} />
    </>
  );
};

export default APP;
