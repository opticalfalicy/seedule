import React, { Component } from "react";
import Task from "./Task";
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
          <Task className="line-A">A</Task>
          <Task className="line-B">B</Task>
          <SteppedLineTo
            from="line-A"
            to="line-B"
            {...style}
            // orientation="h"
            // from="stepped-A"
            // to="stepped-B"
            fromAnchor="left"
            toAnchor="right"
          />
        </div>
      </div>
    );
  }
}
