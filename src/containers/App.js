import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import classes from './App.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {

    state = {
        persons: [
            { id: 'P1', name: 'Alex', age: 30 },
            { id: 'P2', name: 'Orifjon', age: 32 },
            { id: 'P3', name: 'Nancy', age: 18 }
        ],
        showPerson: false
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

    togglePersonsHandler = () => this.setState({ showPerson: !this.state.showPerson });

    render() {
        let persons = null;
        let btnClass = '';

        if (this.state.showPerson) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <ErrorBoundary key={person.id}>
                                    <Person
                                        name={person.name}
                                        age={person.age}
                                        click={() => this.deletePersonHandler(index)}
                                        changed={(event) => this.nameChangedHandler(event, person.id)} />
                                </ErrorBoundary>
                        })
                    }
                </div>
            );

            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }


        return (
                <div className={classes.App}>
                    <h1> Hi, I 'm a React app!</h1>
                    <p className={assignedClasses.join(' ')}>This is really working</p>
                    <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                </div>
        );
    }
}

export default App;