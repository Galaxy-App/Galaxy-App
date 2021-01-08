import React, { Component } from "react";

export default class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: props.score,
      max: props.max,
    };
  }
  render() {
    return (
      <div
        style={{
          color: "white",
        }}
      >
        "You scored {this.state.score} out of {this.state.max}"
      </div>
    );
  }
}
