import React from 'react';
import classes from './Person.css';

const person = (props) => {
    const random = Math.random();
    /*if(random > 0.7){
        throw new Error('Something went wrong!');
    }*/

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>My name is {props.name} and I am {props.age} year old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;