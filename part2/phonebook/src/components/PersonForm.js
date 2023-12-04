import React from 'react';
import Service from '../services/notes';

const PersonForm = (props) => {
    
    let newName = props.newName;
    let setNewName = props.setNewName;
    let newNumber = props.newNumber;
    let setNewNumber = props.setNewNumber;
    let persons = props.persons;
    let setPersons = props.setPersons;
    let setMessage = props.setMessage;
    const addPerson = (event) => {
        event.preventDefault();
        let found = persons.find(object => object.name === newName);
        let newUser = {
          name: newName,
          number: newNumber
        }
        if(!found){
            Service.create(newUser)
            setPersons([...persons, newUser])
            setMessage({
              text: `Added ${newUser.name}'s number`,
              type: "success",
            })
            setTimeout(() => setMessage(null), 5000);
        }
        else{
          if(window.confirm(newName + ' is already added to phonebook, replace the number with a new one?'))
            {
              Service.update(found.id, newUser)
              .then((returnedValue) => {
              setPersons(
                persons
                  .filter((user) => user.name !== newUser.name)
                  .concat(returnedValue)
              )
              setMessage({
                text: `Updated ${returnedValue.name}'s number`,
                type: "success",
              });
              setTimeout(() => setMessage(null), 5000);
                }
              )
             .catch((e)=>{
                if(e.response.status===404){
                  setPersons(
                    persons
                    .filter((user) => user.name !== newUser.name)
                  )
                  setMessage({
                    text: `${newUser.name} deleted`,
                    type: "error",
                  });
                setTimeout(() => setMessage(null), 5000);
                }
              })
            }
        }
      }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input onChange={(inp)=> { setNewName(inp.target.value);}}/>
            </div>
            <div>
                number: <input onChange={(inp)=>{ setNewNumber(inp.target.value);}}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm