import React, { Component } from "react";
import Recipe from "./recipe";
import RecipeSearch from "./RecipeSearch";
import "./App.css";

export default class recipeDetails extends Component {
  state = {
    recipe: []
    // set_state: false
  };

  // async getRecipeData() {
  //   try {
  //     const data = await fetch(
  //       "https://www.food2fork.com/api/search?key=d29bcca49b9546b00d997442daa790c7&q=chicken%20breast&page=1"
  //     );
  //     const jsondata = await data.json();
  //     // console.log(jsondata.recipes);
  //     this.setState({
  //       recipe: jsondata.recipes,
  //       set_state: true
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  componentDidMount() {
    // this.getRecipeData();
  }
  render() {
    // console.log(this.props.recipe);
    const {
      recipe,
      handleDetails,
      value,
      handleSubmit,
      handleChange,
      error
    } = this.props;
    console.log(recipe, "recipe call");
    return (
      <div>
        <h2>Recipelist Calling</h2>
        <RecipeSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {/* {title of racipe} */}
        <div className="wrapper recipe">
          <h2>Racipe List</h2>
          {console.log(error)}
          {!error ? (
            recipe.map(recipe => {
              return (
                <Recipe
                  key={recipe.recipe_id}
                  data={recipe}
                  handleDetails={() => handleDetails(0, recipe.recipe_id)}
                />
              );
            })
          ) : (
            <h2>no images found</h2>
          )}
        </div>
      </div>
    );
  }
}
