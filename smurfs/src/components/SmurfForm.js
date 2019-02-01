import React, { Component } from "react";
import { connect } from "react-redux";
import {
  postSmurf,
  handleChange,
  updateSmurf,
  clearForm
} from "../actions/index";

class SmurfForm extends Component {
  handleChange = e => {
    this.props.handleChange(e);
  };

  postSmurf = e => {
    e.preventDefault();
    if (this.props.updatingID !== null) {
      this.props.updateSmurf({
        name: this.props.inputName,
        age: this.props.inputAge,
        height: this.props.inputHeight,
        id: this.props.updatingID
      });
    } else {
      this.props.postSmurf({
        name: this.props.inputName,
        age: this.props.inputAge,
        height: this.props.inputHeight
      });
    }
  };

  clearForm = e => {
    e.preventDefault();
    this.props.clearForm();
  };

  render() {
    return (
      <form className="smurf__form" onSubmit={this.postSmurf}>
        <input
          required
          type="text"
          name="inputName"
          value={this.props.inputName}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          required
          type="text"
          name="inputAge"
          value={this.props.inputAge}
          onChange={this.handleChange}
          placeholder="Age"
        />
        <input
          required
          type="text"
          name="inputHeight"
          value={this.props.inputHeight}
          onChange={this.handleChange}
          placeholder="Height"
        />
        <button type="submit">
          {this.props.formUpdating ? "Update" : "Submit"}
        </button>
        <button type="button" onClick={this.clearForm}>
          Clear
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    formUpdating: state.formUpdating,
    inputName: state.inputName,
    inputAge: state.inputAge,
    inputHeight: state.inputHeight,
    updatingID: state.updatingID
  };
};

const mapActionsToProps = {
  postSmurf,
  handleChange,
  updateSmurf,
  clearForm
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SmurfForm);
