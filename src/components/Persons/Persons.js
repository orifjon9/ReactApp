import React from 'react';

import Person from './Person/Person';

class Persons extends React.PureComponent {

    static getDerivedStateFormProps(props, state) {
        console.log('[Person] getDerivedStateFormProps', props);
        return state;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate', nextProps);
    //     // true if continue
    //     if(nextProps.persons !== this.props.persons){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps);
        return { message : 'Sanpshot!'}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering....');
        return this.props.persons.map((person, index) =>
            <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.props.click(index)}
                changed={(event) => this.props.changed(event, person.id)} />);
    }
}

export default Persons;