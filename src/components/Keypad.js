import React from "react";

import Button from "./Button";

const Keypad = props => {
  return (
    <div className="ui grid">
      <div className="row">
        <Button label={"7"} handleClick={props.handleClick} type="input" />
        <Button label={"8"} handleClick={props.handleClick} type="input" />
        <Button label={"9"} handleClick={props.handleClick} type="input" />
        <Button label={"*"} handleClick={props.handleClick} type="action" />
      </div>
      <div className="ui row">
        <Button label={"4"} handleClick={props.handleClick} type="input" />
        <Button label={"5"} handleClick={props.handleClick} type="input" />
        <Button label={"6"} handleClick={props.handleClick} type="input" />
        <Button label={"/"} handleClick={props.handleClick} type="action" />
      </div>
      <div className="ui row">
        <Button label={"1"} handleClick={props.handleClick} type="input" />
        <Button label={"2"} handleClick={props.handleClick} type="input" />
        <Button label={"3"} handleClick={props.handleClick} type="input" />
        <Button label={"+"} handleClick={props.handleClick} type="action" />
      </div>
      <div className="ui row">
        <Button label={"0"} handleClick={props.handleClick} type="input" />
        <Button label={"."} handleClick={props.handleClick} type="input" />
        <Button label={"="} handleClick={props.handleClick} type="action" />
        <Button label={"C"} handleClick={props.handleClick} type="action" />
      </div>
    </div>
  );
};

export default Keypad;
