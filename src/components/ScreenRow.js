import React from "react";

import Display from "./Display";

const ScreenRow = props => {
  return (
    <div className="Screen">
      <Display value={props.question} />
      <Display value={props.answer} />
    </div>
  );
};

export default ScreenRow;
