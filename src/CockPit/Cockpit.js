import React from 'react';
import './Cockpit.css'
const cockpit =(props)=>{
    let style= {
        backgroundColor : 'green',
        color :'white',
        font: 'inherit',
        border : '1 px solid blue',
        padding: '8 px',
        cursor : 'pointer',
      }

      if(props.showPersons)
        style.backgroundColor ='red';
    const classes=[];
    if(props.persons.length <=2){
      classes.push('red');
    }
    if(props.persons.length <=1 ){
      classes.push('bold');
    }
return     (  
    <div>
  <h1>Hi , This is a React app</h1>
<p className={classes.join(' ')}>This is really working!</p>
<button 
style={style}
onClick={()=>props.clicked(props.showPersons)}>Toggle Name</button>
</div>
)

}
export default cockpit;