import React from "react";

const SmurfCard = props => {
  return (
    <div className="smurf__card">
      <h2 className="smurf__name">{props.smurf.name}</h2>
      <p className="smurf_age">{props.smurf.age}</p>
      <p className="smurf_height">{props.smurf.height}</p>
    </div>
  );
};

export default SmurfCard;
