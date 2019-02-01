import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions/index";

const SmurfCard = props => {
  return (
    <div className="smurf__card">
      <h2 className="smurf__name">{props.smurf.name}</h2>
      <p className="smurf_age">{props.smurf.age}</p>
      <p className="smurf_height">{props.smurf.height}</p>
      <div className="buttons__container">
        <button
          className="btn"
          type="button"
          onClick={() => props.deleteSmurf(props.smurf)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const mapActionsToProps = {
  deleteSmurf
};

export default connect(
  null,
  mapActionsToProps
)(SmurfCard);
