import React, { Component } from "react";
import "./App.sass";
import { Graph, Navbar } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Graph />
      </div>
    );
  }
}

export default App;
