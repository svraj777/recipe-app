import React from "react";

class Serch_data extends React.Component {
  state = {
    name: ""
  };
  submit_data = event => {
    event.preventDefault();
    console.log(this.state.name);
    this.props.onSubmit(this.state.name);
  };
  data_input = () => {
    return (
      <form action="" onSubmit={this.submit_data}>
        <span>Enter the name:-</span>
        <input
          type="text"
          name="name"
          onChange={e => {
            this.setState({ name: e.target.value });
          }}
        />
        <button name="submit" type="submit" value="submit">
          Submit
        </button>
      </form>
    );
  };
  render() {
    return (
      <div>
        <div className="serach">{this.data_input()}</div>
      </div>
    );
  }
}

export default Serch_data;
