import React from 'react';
import PropTypes from 'prop-types';

// @ts-ignore
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        //this.inputElement.focus()
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] render');
        return (
            <Aux>
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} year old.</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    //ref={(input) => this.inputElement = input}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);