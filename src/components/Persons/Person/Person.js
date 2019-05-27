import React from 'react';
// @ts-ignore
import classes from './Person.css';

class Person extends React.Component {

    render() {
        console.log('[Person.js] render');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} year old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;