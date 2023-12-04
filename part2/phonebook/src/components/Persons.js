import React from 'react';
import Service from '../services/notes';

const FilteredData = (props) =>{
  
    let persons = props.persons;
    let searchName = props.searchName;
    let setPersons = props.setPersons;
    let setMessage = props.setMessage;

    const deletePerson = (id, name) => {
      if (window.confirm(`Delete ${name}?`)) {
        Service.remove(id)
        setPersons(persons.filter((person) => person.id !== id));
        setMessage({
          text: `Deleted ${name}'s number`,
          type: "success",
        });
        setTimeout(() => setMessage(null), 5000);
      }
    };

    const filterData = persons.filter((person) => {
      if (searchName === '') {
          return person;
      }
      else {
          return (person.name.toLowerCase().includes(searchName.toLowerCase()))
      }
    })
    return (
      <div>
          {filterData.map((person) => (
              <div key={person.name}>
              {person.name} {person.number} 
                <button onClick={()=> deletePerson(person.id, person.name)}>Delete</button> 
            </div>
          ))}
      </div>
    )
  }

  export default FilteredData;