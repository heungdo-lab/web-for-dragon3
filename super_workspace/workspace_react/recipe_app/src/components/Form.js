import React from "react";
import { Link } from "react-router-dom";

const Form = ({ getRecipe }) => (
  <form style={{ marginBottom: "2rem" }} onSubmit={getRecipe}>
    <input className="form__input" type="text" name="recipeName" />
    <button className="form__button">
      <Link to="/recipes">Search</Link>
    </button>
  </form>
);

export default Form;
