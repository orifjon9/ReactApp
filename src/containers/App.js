import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

class App extends Component {

    state = {
        persons: [
            { id: 'P1', name: 'Alex', age: 30 },
            { id: 'P2', name: 'Orifjon', age: 32 },
            { id: 'P3', name: 'Nancy', age: 18 }
        ],
        showPersons: false
    };

    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => p.id === id);

        const newPerson = { ...this.state.persons[personIndex] }
        newPerson.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = newPerson;

        this.setState({ persons: persons });
    };

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({ persons: persons });
    };

    togglePersonsHandler = () => this.setState({ showPersons: !this.state.showPersons });

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons persons={this.state.persons} 
                            click={this.deletePersonHandler}
                            changed={this.nameChangedHandler} />;
        }

        return (
                <div className={classes.App}>
                    <Cockpit 
                        persons={this.state.persons}
                        showPersons = {this.state.showPersons}
                        click = {this.togglePersonsHandler} />
                    {persons}
                </div>
        );
    }
}

export default App;