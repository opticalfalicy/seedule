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
      <div
        className="goal-container"
        style={{
          borderColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)})`,
          borderStyle: "solid",
          borderWidth: "2px"
        }}
      >
        <Subtask className={`${this.props.subtask}`} />
        <Task className={`${this.props.task}`}>A</Task>
        <SteppedLineTo
          from={`${this.props.task}`}
          to={`${this.props.subtask}`}
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
