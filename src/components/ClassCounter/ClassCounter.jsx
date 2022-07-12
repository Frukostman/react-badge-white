import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <p>{this.state.counter} </p>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </div>
    );
  }
}

export default ClassCounter;
