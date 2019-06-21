import React from "react";

//Components
import ScreenRow from "./ScreenRow";
import Button from "./Button";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="calculator">
        <div className="title">CalcApp</div>
        <ScreenRow question={this.state.question} answer={this.state.answer} />
        <div className="button-row">
          <Button label={"7"} handleClick={this.handleClick} type="input" />
          <Button label={"8"} handleClick={this.handleClick} type="input" />
          <Button label={"9"} handleClick={this.handleClick} type="input" />
          <Button label={"*"} handleClick={this.handleClick} type="action" />
        </div>
        <div className="button-row">
          <Button label={"4"} handleClick={this.handleClick} type="input" />
          <Button label={"5"} handleClick={this.handleClick} type="input" />
          <Button label={"6"} handleClick={this.handleClick} type="input" />
          <Button label={"/"} handleClick={this.handleClick} type="action" />
        </div>
        <div className="button-row">
          <Button label={"1"} handleClick={this.handleClick} type="input" />
          <Button label={"2"} handleClick={this.handleClick} type="input" />
          <Button label={"3"} handleClick={this.handleClick} type="input" />
          <Button label={"+"} handleClick={this.handleClick} type="action" />
        </div>
        <div className="button-row">
          <Button label={"0"} handleClick={this.handleClick} type="input" />
          <Button label={"."} handleClick={this.handleClick} type="input" />
          <Button label={"="} handleClick={this.handleClick} type="action" />
          <Button label={"C"} handleClick={this.handleClick} type="action" />
        </div>
      </div>
    );
  }
  handleClick = event => {
    const value = event.target.value; //get value from button

    switch (value) {
      case "=": {
        const answer = eval(this.state.question).toString(); //uses eval to get answer for the questions and uses toString to convert it to a string
        this.setState({ answer: answer });
        break;
      }
      case "C": {
        //clear state
        this.setState({ question: "", answer: "" });
        break;
      }
      default: {
        this.setState({ question: (this.state.question += value) });
      }
    }
  };
}

export default Calculator;
