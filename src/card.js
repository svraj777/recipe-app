import React from "react";

class cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: false
    };
  }
  cards_ = () => {
    console.log("data");
  };
  chamgeState = e => {
    e.preventDefault();
    console.log(this.state.show);
    this.setState({ show: !this.state.show });
  };
  render() {
    const cards_design = () => {
      return (
        <div>
          <img
            src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcwMzM4fQ"
            alt=""
            className="img_data"
          />
          <a href="" className="db" onClick={this.chamgeState}>
            More
          </a>
          {this.state.show && (
            <p>two person using MacBook and holding pencil</p>
          )}
        </div>
      );
    };
    return (
      <div>
        {cards_design()}
        <h3>cards calling</h3>
        <a href="javascript:0" onClick={this.cards_}>
          click
        </a>
      </div>
    );
  }
}

export default cards;
