import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Welcome</p>
        <Person name="Mateo" age="23">My hobbies are</Person>
      </div>
    );
  }
}

export default App;
