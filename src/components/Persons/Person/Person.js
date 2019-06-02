import React from 'react';
// @ts-ignore
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends React.Component {

    render() {
        console.log('[Person.js] render');
        return (
            <React.Fragment>
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} year old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </React.Fragment>
        )
    }
}

export default Person;