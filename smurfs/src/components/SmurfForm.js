import React, { Component } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/index";

class SmurfForm extends Component {
  state = {
    inputName: "",
    inputAge: "",
    inputHeight: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postSmurf = e => {
    e.preventDefault();
    this.props.postSmurf({
      name: this.state.inputName,
      age: this.state.inputAge,
      height: this.state.inputHeight,
      id: this.props.smurfs.length + 1
    });
  };

  render() {
    return (
      <form className="smurf__form" onSubmit={this.postSmurf}>
        <input
          required
          type="text"
          name="inputName"
          value={this.state.inputName}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          required
          type="text"
          name="inputAge"
          value={this.state.inputAge}
          onChange={this.handleChange}
          placeholder="Age"
        />
        <input
          required
          type="text"
          name="inputHeight"
          value={this.state.inputHeight}
          onChange={this.handleChange}
          placeholder="Height"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

const mapActionsToProps = {
  postSmurf
};

export default connect(
  null,
  mapActionsToProps
)(SmurfForm);
