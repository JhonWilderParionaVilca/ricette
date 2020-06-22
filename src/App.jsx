import React, { useState } from "react";

import { Recipes, InputSearch } from "./components";

const APP = () => {
  const [query, setQuery] = useState("pollo");

  const getQuery = (UserInput) => {
    setQuery(UserInput);
  };

  return (
    <>
      <InputSearch getQuery={getQuery} />
      <Recipes query={query} />
    </>
  );
};

export default APP;
