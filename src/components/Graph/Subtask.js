import React, { Component } from "react";
import "./Subtask.sass";

export default class Subtask extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`subtask-container ${this.props.className}`}>
        <div className={`subtask-content ${this.props.className}`}>Subtask</div>
      </div>
    );
  }
}
