import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// @ts-ignore
import classes from './App.css';
import withClass from "../hoc/withClass";
import Aux from '../hoc/Auxiliary';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: 'P1', name: 'Alex', age: 30 },
            { id: 'P2', name: 'Orifjon', age: 32 },
            { id: 'P3', name: 'Nancy', age: 18 }
        ],
        showPersons: false,
        showCockpit: true,
        changeCounter: 0
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // legacy
    // can removed in the future
    // componentWillMount(){
    //     console.log('[App.js] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => p.id === id);

        const newPerson = { ...this.state.persons[personIndex] }
        newPerson.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = newPerson;

        // Bad practice because State does not guaranteed latest version of changeCounter
        // this.setState({ 
        //     persons: persons,
        //     changeCounter : this.state.changeCounter + 1 
        // });

        // Correct approache 
        // use this way if new value dependant of previous
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            }
        });
    };

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({ persons: persons });
    };

    togglePersonsHandler = () => this.setState({ showPersons: !this.state.showPersons });

    render() {
        console.log('[App.js] render');

        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons persons={this.state.persons}
                click={this.deletePersonHandler}
                changed={this.nameChangedHandler} />;
        }

        return (
            <Aux>
                <button onClick={() => {
                    this.setState({ showCockpit: false })
                }}>Remove Cockpit</button>
                {this.state.showCockpit ? <Cockpit
                    title={this.props.appTitle}
                    personsLength={this.state.persons.length}
                    showPersons={this.state.showPersons}
                    click={this.togglePersonsHandler} /> : null}
                {persons}
            </Aux>
        );
    }
}

export default withClass(App, classes.App);