import React, { useEffect, useState } from "react";

import List from "../List/List";

// const URI = `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

import style from "./Recipes.module.css";

const Recipe = ({ query }) => {
  const URI = `https://test-es.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  const [recipes, setRecipes] = useState([]);

  const fetchRecipies = async (URI) => {
    try {
      const response = await fetch(URI);
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error("🔥: fetchRecipies -> error de red", error);
    }
  };

  const paintRecipes = ({ recipe }, index) => {
    return (
      <article key={index} className={style.card}>
        <div className={style["card-wrapper"]}>
          <div className={style["card-image"]}>
            <img
              src={recipe.image}
              alt={recipe.label}
              className={style["card-avatar"]}
            />
          </div>
          <h2 className={style["card-title"]}>{recipe.label}</h2>
          <List ingredients={recipe.ingredientLines} />
          <a href={recipe.url} target="_blank" rel="noopener noreferrer">
            <button>Instrucciones</button>
          </a>
        </div>
      </article>
    );
  };

  useEffect(() => {
    fetchRecipies(URI);
  }, [URI]);

  return (
    <section className={style["container-center"]}>
      {typeof recipes != "undefined" &&
      recipes != null &&
      recipes.length != null &&
      recipes.length > 0 ? (
        recipes.map((recipe, index) => {
          return paintRecipes(recipe, index);
        })
      ) : (
        <div>"No se encontraron recetas"</div>
      )}
    </section>
  );
};

export default Recipe;
