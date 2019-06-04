import React from "react";
import "./App.css";
import axios from "axios";
import Serch_data from "./serch_data";
import View from "./view";
import Loader from "./loader";
import Cards from "./card";
import Slider from "./slider";
import RecipeLists from "./recipeList";
import RecipeDetails from "./recipeDetails";
import TempDataStore from "./tempDataStore";

class App extends React.Component {
  state = {
    images: [],
    dataFetched: false,
    recipe: TempDataStore,
    set_state: false,
    details_id: 35384,
    pageIndex: 1,
    searchData: "",
    query: "&q=",
    base_url:
      "https://www.food2fork.com/api/search?key=508b04cc0b0a5b7f1044982e7ba85210",
    url:
      "https://www.food2fork.com/api/search?key=508b04cc0b0a5b7f1044982e7ba85210",
    error: false
  };

  /*
  v_c d29bcca49b9546b00d997442daa790c7
  C_c 522994ad4146832b969bf8292223d9fb

  */
  Submit_data = async turms => {
    const img_data = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: turms },
      headers: {
        Authorization:
          "Client-ID b6e6931a4d460d65653495c3b819ad8d8d26a8ce97015376c54a7a1d8ae6d76e"
      }
    });

    //console.log(responce.data.results, this, turms);
    console.log(img_data.data.results, turms);
    this.setState({
      images: img_data.data.results,
      loader: true,
      dataFetched: true
    });
  };

  async getRecipeData() {
    try {
      const data = await fetch(this.state.url);
      const jsondata = await data.json();
      console.log(jsondata.recipes.length);
      if (jsondata.recipes.length < 1) {
        this.setState({
          error: true
        });
      }
      this.setState({
        recipe: jsondata.recipes,
        set_state: true
      });
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getRecipeData();
  }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          /* Item List */
          <RecipeLists
            recipe={this.state.recipe}
            handleDetails={this.handleDetails}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.searchData}
            error={this.state.error}
          />
        );
      case 0:
        return (
          /*POP-UP Box*/
          <RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };
  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };
  handleChange = e => {
    this.setState(
      {
        searchData: e.target.value
      },
      () => {
        console.log(this.state.searchData);
      }
    );
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit");
    const { base_url, query, searchData } = this.state;
    this.setState(
      () => {
        return { url: `${base_url}${query}${searchData}`, searchData: "" };
      },
      () => {
        this.getRecipeData();
      }
    );
  };

  render() {
    console.log(this.state.recipe);
    return (
      <div className="App">
        {/* <Serch_data name="vraj" city="modasa" onSubmit={this.Submit_data} />
        {this.state.dataFetched ? <View img={this.state.images} /> : <Loader />} */}

        {/* <RecipeLists recipe={this.state.recipe} /> */}
        {/* <RecipeDetails id={this.state.details_id} /> */}

        {this.displayPage(this.state.pageIndex)}
      </div>
    );
  }
}
export default App;
