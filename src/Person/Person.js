import React from "react";
import Radium from 'radium';

import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and i am {props.age} yo
      </p>

      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
