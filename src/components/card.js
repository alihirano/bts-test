import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        width: 400,
        height: 200,
        overflow: "scroll",
        border: "1px solid red",
      }}
    >
      <h5>{props.name}</h5>
      <h6>{props.company.name}</h6>
      <p>{props.company.catchPharase}</p>
    </div>
  );
};

export default Card;
