import React from "react";

const Display = props => {
  return (
    <div className="ui input">
      <input type="text" readOnly value={props.value} />
    </div>
  );
};

export default Display;
