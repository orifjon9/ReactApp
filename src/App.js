import React, { Component } from 'react';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';
import './App.css';

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
        //const persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({ persons: persons });
    };

    togglePersonsHandler = () => this.setState({ showPerson: !this.state.showPerson });

    render() {
        const style = {
            backgroundColor: 'green',
            'color': 'white',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;
        if (this.state.showPerson) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                click={() => this.deletePersonHandler(index)}
                                changed={(event) => this.nameChangedHandler(event, person.id)} />
                        })
                    }
                </div>
            );

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'pink',
                color: 'black'
            }
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }


        return (
            <StyleRoot>
                <div className="App">
                    <h1> Hi, I 'm a React app!</h1>
                    <p className={classes.join(' ')}>This is really working</p>
                    <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);