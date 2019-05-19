import React, { Component } from 'react';
import Person from './Person/Person';
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
            cursor: 'pointer'
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
        }

        return (
            <div className="App">
                <h1> Hi, I 'm a React app!</h1>
                <p>I am a P element!</p>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
        //return React.createElement('div', { className:'App'}, React.createElement('h1', null, 'Does it work?'));
    }
}

export default App;