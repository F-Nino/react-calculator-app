import React from "react";
import "../App.css";

//Components
import ScreenRow from "./ScreenRow";
import Button from "./Button";
import Keypad from "./Keypad";

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
      <div className="ui segment">
        <div className="title">Calculator</div>
        <div className="ui segment center">
          <ScreenRow
            question={this.state.question}
            answer={this.state.answer}
          />
        </div>
        <div className="ui segment center">
          <Keypad handleClick={this.handleClick} />
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
