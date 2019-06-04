import React from "react";
import Loader from "./loader";

class show_imgs extends React.Component {
  state = {
    getImages: this.props.img,
    loaded: true
  };
  render() {
    console.log(this.state.getImages);
    return (
      <div className="wrapper">
        {console.log(this.props.img.length > 0, this.state.loaded)}
        {this.props.img.length > 0 ? (
          this.props.img.map(checkImages => (
            <img
              className="img"
              src={checkImages.urls.regular}
              key={checkImages.id}
              alt={checkImages.description}
            />
          ))
        ) : (
          <h2>no img found</h2>
        )}
      </div>
    );
  }
}
export default show_imgs;
