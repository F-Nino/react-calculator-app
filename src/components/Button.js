import React from "react";

const Button = props => {
  return (
    <input
      type="button"
      className={props.type === "action" ? "ui blue button" : "ui grey button"}
      onClick={props.handleClick}
      value={props.label}
    />
  );
};

export default Button;
