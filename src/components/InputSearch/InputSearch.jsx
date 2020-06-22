import React, { useState } from "react";

// import style from "./InputSearch.module.css";

const Form = ({ getQuery }) => {
  const [inputUser, setInputUser] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputUser(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getQuery(inputUser);
    setInputUser("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        value={inputUser}
        onChange={handleChange}
      />
      <button>Buscar</button>
    </form>
  );
};

export default Form;
