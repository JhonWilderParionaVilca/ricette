import React, { useEffect, useState } from "react";

import List from "../List/List";
import Loader from "../Loader/Loader";

import style from "./Recipes.module.css";

const Recipe = ({ query }) => {
  // const URI = `https://test-es.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;
  const URI = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const fetchRecipies = async (URI) => {
    try {
      const response = await fetch(URI);
      console.log("🔥: fetchRecipies -> response", response);
      const data = await response.json();
      setRecipes(data.hits);
      setError(false);
      setLoaded(true);
    } catch (error) {
      console.error("🔥: fetchRecipies -> error de red", error);
      setError(true);
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
    setLoaded(false);
    fetchRecipies(URI);
  }, [URI]);
  // TODO: Extraer en componentes error y no encontrado recetas
  return (
    <div>
      {error ? (
        <div className={style.error}>
          <p className={style["error-title"]}>
            Opss!{" "}
            <span role="img" aria-label="emoji">
              😢
            </span>{" "}
            Ocurrio un error en el servidor
          </p>
          <p className={style["error-description"]}>
            Contacte con el desarrollador por favor.
          </p>
        </div>
      ) : loaded ? (
        typeof recipes != "undefined" &&
        recipes != null &&
        recipes.length != null &&
        recipes.length > 0 ? (
          <section className={style["container-center"]}>
            {recipes.map((recipe, index) => {
              return paintRecipes(recipe, index);
            })}
          </section>
        ) : (
          <div className={style.error}>
            <p className={style["error-title"]}>
              Opss!{" "}
              <span role="img" aria-label="emoji">
                🥺
              </span>{" "}
              NO se encontraron recetas
            </p>
            <p className={style["error-description"]}>
              Intente buscando otras recetas
            </p>
            <span role="img" aria-label="emoji">
              🙂
            </span>{" "}
          </div>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Recipe;
