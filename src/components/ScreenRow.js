import React from "react";

import Display from "./Display";

const ScreenRow = props => {
  return (
    <div className="ui grid">
      <div className="ui row">
        <Display value={props.question} />
      </div>
      <div className="ui row">
        <Display value={props.answer} />
      </div>
    </div>
  );
};

export default ScreenRow;
