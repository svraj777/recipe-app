import React, { Component } from "react";
import "./App.css";

export default class recipe extends Component {
  render() {
    // console.log(this.props.data);
    const {
      recipe_id,
      image_url,
      publisher,
      publisher_url,
      source_url,
      title
    } = this.props.data;
    const { handleDetails } = this.props;
    return (
      <div className="card">
        <img src={image_url} alt="" className="recipe_img" />
        <h4>{title}</h4>
        <span>id:-{recipe_id}</span>
        <p>publisher:-{publisher}</p>
        <div className="btn_parent">
          <a
            //  href={publisher_url}
            className="btn green"
            onClick={handleDetails}
          >
            Details
          </a>
          <a href={source_url} className="btn red">
            source
          </a>
        </div>
      </div>
    );
  }
}
