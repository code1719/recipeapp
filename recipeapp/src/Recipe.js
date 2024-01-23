import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <h3>Ingredients</h3>
      <div className={style.scroll}>
      <ol className={style.ol}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      </div>
      <p>Calories: {Math.round(calories)}</p>
    </div>
  );
};

export default Recipe;
