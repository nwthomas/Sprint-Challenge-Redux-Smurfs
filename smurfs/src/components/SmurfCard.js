import React from "react";
import { connect } from "react-redux";
import { deleteSmurf, startUpdateSmurf } from "../actions/index";

const SmurfCard = props => {
  console.log(props.smurf);
  const deleteSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(props.smurf.id);
  };
  const startUpdateSmurf = e => {
    e.preventDefault();
    props.startUpdateSmurf(props.smurf.id);
  };
  return (
    <div className="smurf__card">
      <h2 className="smurf__name">Name: {props.smurf.name}</h2>
      <p className="smurf_age">Age: {props.smurf.age}</p>
      <p className="smurf_height">Height: {props.smurf.height}</p>
      <div className="buttons__container">
        <button className="btn" type="button" onClick={startUpdateSmurf}>
          Update
        </button>
        <button className="btn" type="button" onClick={deleteSmurf}>
          Delete
        </button>
      </div>
    </div>
  );
};

const mapActionsToProps = {
  deleteSmurf,
  startUpdateSmurf
};

export default connect(
  null,
  mapActionsToProps
)(SmurfCard);
