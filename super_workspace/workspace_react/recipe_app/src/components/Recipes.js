import React, { Component } from "react";
import { Link } from "react-router-dom";

class Recipes extends Component {
  state = {
    recipes: []
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    if (json) {
      const parsedRecipes = JSON.parse(json);
      this.setState({
        recipes: parsedRecipes
      });
    }
  };

  render() {
    const { recipes } = this.state;
    return (
      <div className="container">
        {recipes.length !== 0 && (
          <div className="row">
            {recipes.map(recipe => (
              <div
                style={{ marginBottom: "2rem" }}
                className="col-md-4"
                key={recipe.recipe_id}
              >
                <div className="recipes__box">
                  <img
                    className="recipe__box-img"
                    src={recipe.image_url}
                    alt={recipe.title}
                  />
                  <div className="recipe__text">
                    <h5 className="recipes__title">
                      {recipe.title.length < 25
                        ? recipe.title
                        : `${recipe.title.substring(0, 25)}...`}
                    </h5>
                    <p className="recipes__subtitle">
                      Publisher: <span>{recipe.publisher}</span>
                    </p>
                  </div>
                  <button className="recipe_buttons">
                    <Link
                      to={{
                        pathname: `/recipe/${recipe.recipe_id}`,
                        state: {
                          recipe
                        }
                      }}
                    >
                      View Recipe
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Recipes;
