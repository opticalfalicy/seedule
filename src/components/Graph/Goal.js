import React, { Component } from "react";
import "./Goal.sass";
import LineTo, { SteppedLineTo, Line } from "react-lineto";
import Task from "./Task";
import Subtask from "./Subtask";

export default class Goal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      delay: true,
      borderColor: "#ddd",
      borderStyle: "solid",
      borderWidth: 3
    };
    return (
      <div className="goal-container">
        <Subtask className={`${this.props.subtask}`} />
        <Task className={`${this.props.task}`}>A</Task>
        <SteppedLineTo
          from="task-1"
          to="subtask-1"
          {...style}
          // orientation="h"
          // from="stepped-A"
          // to="stepped-B"
          // fromAnchor="left"
          // toAnchor="right"
        />
      </div>
    );
  }
}
