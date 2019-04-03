import React, { Component } from "react";
import Task from "./Task";
import Subtask from "./Subtask";
import Goal from "./Goal";
import LineTo, { SteppedLineTo, Line } from "react-lineto";

import "./Graph.sass";

export default class Graph extends Component {
  render() {
    const style = {
      delay: true,
      borderColor: "#ddd",
      borderStyle: "solid",
      borderWidth: 3
    };
    return (
      <div className="graph-container">
        <div className="graph-main">
          <Goal task="task-1" subtask="subtask-1" />
        </div>
      </div>
    );
  }
}
