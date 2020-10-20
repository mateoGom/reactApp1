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

  deletePersonHandler=(indexPerson)=>{
    const persons=this.state.persons;
    persons.splice(indexPerson,1);
    this.setState({persons:persons});
  }

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
         {
           this.state.persons.map((person,index)=>{
             return <Person
             click={()=>this.deletePersonHandler(index)}
             name={person.name}
             age={person.age} 
             />
           }
            )
         }
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
