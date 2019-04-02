import React, { Component } from "react";
import "./Navbar.sass";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-main">
          <button className="navbar-add">Add Task</button>
          <button className="navbar-search">Search</button>
          <button className="navbar-options">Options/Logout</button>
        </div>
      </div>
    );
  }
}
