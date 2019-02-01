import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions/index";

const SmurfCard = props => {
  console.log(props.smurf);
  const deleteSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(props.smurf.id);
  };
  return (
    <div className="smurf__card">
      <h2 className="smurf__name">{props.smurf.name}</h2>
      <p className="smurf_age">{props.smurf.age}</p>
      <p className="smurf_height">{props.smurf.height}</p>
      <div className="buttons__container">
        <button className="btn" type="button" onClick={deleteSmurf}>
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
