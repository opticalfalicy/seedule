import React, { Component } from "react";
import "./Task.sass";

export default class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`task-container ${this.props.className}`}>
        <div className={`task-content ${this.props.className}`}>Task</div>
      </div>
    );
  }
}
