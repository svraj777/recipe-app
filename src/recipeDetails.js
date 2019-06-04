import React, { Component } from "react";
import "./App.css";
import TempDataStorageOfRecipe from "./TempDataStorageOfRecipe";
import { isTemplateElement } from "../node_modules/@babel/types";

export default class recipeDetails extends Component {
  state = {
    racipeDetails: []
  };

  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=508b04cc0b0a5b7f1044982e7ba85210&rId=${id}`;
    try {
      const data = await fetch(url);
      const jsondata = await data.json();
      console.log(jsondata.recipe);
      this.setState({
        racipeDetails: jsondata.recipe
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      social_rank,
      source_url,
      title,
      recipe_id
    } = this.state.racipeDetails;
    console.log(this.state.racipeDetails);
    console.log(this.props.id);

    const { handleIndex } = this.props;
    return (
      <div>
        <div className="wrapper">
          {
            <div className="Detail_card">
              <div className="card_left_side">
                <button
                  type="button"
                  className="btn_back"
                  onClick={() => handleIndex(1)}
                >
                  back to recipe list
                </button>
                <img src={image_url} alt="" className="img_details" />
              </div>
              <div className="card_right_side">
                <h4>{title}</h4>
                <p>{ingredients}</p>
                <div>
                  <span>publisher:-</span>
                  <p>{publisher}</p>
                </div>
                <div>
                  <span>publisher_url:-</span>
                  <p>{publisher_url}</p>
                </div>
                <div>
                  <span>social_rank:-</span>
                  <span className="green btn">{social_rank}</span>
                </div>
                <a href={source_url} className="btn red">
                  source url
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}
