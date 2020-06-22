import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import style from "./InputSearch.module.css";

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
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        value={inputUser}
        onChange={handleChange}
        className={style.search}
        placeholder="Buscar receta"
      />
      <FaSearch className={style.fa} onClick={handleSubmit} />
    </form>
  );
};

export default Form;
