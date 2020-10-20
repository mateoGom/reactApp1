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
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "42" },
        { name: "mario", age: "78" },
        { name: "cristian", age: "95" },
      ],
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "gio", age: "42" },
        { name: event.target.value, age: "78" },
        { name: "cristian", age: "95" },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let person = null;
    if (this.state.showPersons) {
      person=(
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          >
            My hobbies are
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler("Max!!")}
            changed={this.changeNameHandler}
          ></Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          ></Person>
        </div>
      );
    }

    return (
      <div className="App">
        <p>Welcome</p>
        {/* <button style={style} onClick={() => this.switchNameHandler("Maximilian!!")}> */}
        <button style={style} onClick={this.togglePersonsHandler}>
          toggle person
        </button>
        {person}
      </div>
    );
  }
}

export default App;
