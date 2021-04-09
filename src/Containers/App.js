import React, { Component } from 'react';
import '../App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../CockPit/Cockpit'

/*Commiiting chnagr for github

**/
class App extends Component {
  state ={
    persons:[
      {id :'asdasfd',name: 'Max', age :28},
      {id :'asdasfd1' ,name: 'Manu', age :28},
      {id :'asdasfd2', name: 'Stephanie', age :28}     
    ],
    otherState: 'some other value',
    showPersons : false,
  }

  switchNameHandler = (newName) =>{
   // console.log('Was Clicked');

   this.setState ({persons: [
    {name: newName, age :28},
    {name: 'Manu', age :27},
    {name: 'Stephanie', age :26}
           
   ]})
  }

  nameChangeHandler= (event , id)=>{
     const personIndex = this.state.persons.findIndex( (p) => {
       return  p.id === id;
     });

     const person = [...this.state.persons[personIndex]];
     person.name = event.target.value;

     const persons = [...this.state.persons];
     persons[personIndex] = person;



    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = (showPerson) =>{

    const doesShow = showPerson;
    this.setState({
      showPersons : !doesShow
    });
  }

  deletePersonHandler =(personIndex) =>{

    const personsList = [...this.state.persons];
    personsList.splice(personIndex,1);
    this.setState({
      persons :personsList
    })
  }
  render() {

  

    let persons= null;

    if(this.state.showPersons){       
        persons =( <div>
        <Persons
            clicked={this.deletePersonHandler}
            persons={this.state.persons}
            changed = {this.nameChangeHandler}
            />
            </div>)
  }
  
    return (
      <div className="App">
        <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
