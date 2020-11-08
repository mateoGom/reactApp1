import React from "react";
import Styled from 'styled-components';
//import "./Person.css";

const StyledDiv = Styled.div`

  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;


@media (min-width: 500px):{
  width: 450px;
}

`;
const person = (props) => {

const style = {
  '@media (min-width: 500px)':{
    width: '450px'
  }
}

  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and i am {props.age} yo
      </p>

      <input type="text" onChange={props.changed} value={props.name} />
      </StyledDiv>
  );
};

export default person;
