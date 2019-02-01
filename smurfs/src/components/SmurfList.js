import React from "react";
import SmurfCard from "./SmurfCard";

const SmurfList = props => {
  return (
    <div className="smurf__list">
      {props.smurfs.map((smurf, index) => {
        return <SmurfCard smurf={smurf} key={`smurf${index}`} />;
      })}
    </div>
  );
};

export default SmurfList;
