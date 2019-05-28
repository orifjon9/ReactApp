import React, { useEffect } from 'react';
// @ts-ignore
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request...

        setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000);
    }, [props.persons]);

    // useEffect();

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={btnClass}
            onClick={props.click}>Toggle Persons</button>
    </div>
};

export default cockpit;