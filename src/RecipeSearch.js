import React, { Component } from "react";

class RecipeSearch extends Component {
  state = {
    testData: ""
  };
  // submit_data = event => {
  //   event.preventDefault();
  //   console.log(this.state.searchData);
  //   this.props.handleSubmit(this.state.searchData);
  // };

  render() {
    const { value, handleSubmit, handleChange } = this.props;
    return (
      <div>
        <div className="wrapper">
          <h4>Type Recipe Sapreted by Comma</h4>
          <div className="SearchBar">
            <form className="" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="chicken,onions,carrort"
                onChange={handleChange}
                value={value}
              />

              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeSearch;
