import React, { Component } from "react";
import styled from 'styled-components';
import "./App.css";
import Person from "./Person/Person";


const StyledButton=styled.button`
background-color: green;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover {
  background-color: lightgreen;
  color: black;
}
`;

class App extends Component {
  state = {
    persons: [
      { id: "er4", name: "uribe", age: "2" },
      { id: "h7", name: "fabio", age: "34" },
      { id: "efef5", name: "daniel", age: "45" },
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

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  deletePersonHandler = (indexPerson) => {
    // const persons=this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(indexPerson, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[':hover']={
        backgroundColor: "salmon",
        color: "black"
      }
    }

    const clases = [];
    if (this.state.persons.length <= 2) {
      clases.push("red");
    }
    if (this.state.persons.length <= 1) {
      clases.push("bold");
    }



    return (
     
        <div className="App">
        <p>Welcome</p>
        {/* <button style={style} onClick={() => this.switchNameHandler("Maximilian!!")}> */}
        <p className={clases.join(" ")}>this really works!</p>
        <StyledButton  onClick={this.togglePersonsHandler}>
          toggle person
        </StyledButton>
        {person}
      </div>

      
    );
  }
}

export default App;
