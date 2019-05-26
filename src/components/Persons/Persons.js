import React from 'react';

import Person from './Person/Person';

const persons = (props) => { 
    return props.persons.map((person, index) => 
                <Person
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    click={() => props.click(index)}
                    changed={(event) => props.changed(event, person.id)} />);
}

export default persons;