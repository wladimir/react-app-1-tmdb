import React, { Component } from "react";
import Search from "./Search";
import Card from "./Card";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Search />
        </div>
        <Card />
      </div>
    );
  }
}

export default App;
