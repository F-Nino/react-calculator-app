import React from "react";

const Display = props => {
  return (
    <div className="display">
      <input type="text" readOnly value={props.value} />
    </div>
  );
};

export default Display;
