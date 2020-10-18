import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "uribe", age: "2" },
      { name: "fabio", age: "34" },
      { name: "daniel", age: "45" },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "andres", age: "42" },
        { name: "mario", age: "78" },
        { name: "cristian", age: "95" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <p>Welcome</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobbies are
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        ></Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
      </div>
    );
  }
}

export default App;
