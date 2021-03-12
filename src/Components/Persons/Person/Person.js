import React from 'react';
import './Person.css';
import styled from 'styled-components';

// const StyledDiv = styled.div`
//     width : 60%;
//     margin : auto;
//     border: 2 px solid black;
//     box-shadow: 0 px 2 px 3 px #cccc;
//     text-align: center;
//     padding: 16px;
    
    
//     @media (min-width : 500px){
//             width :'450px'
//     }        
// `
const person = (props) =>{
    return(
       <div>
        <p onClick={props.click}>{props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        )
}

export default person;