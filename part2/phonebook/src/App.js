import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Service from './services/notes';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Notification from './components/Notification';
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName,setSearchName]=useState('');
  const [Message, setMessage] = useState(null);
  const hook = () => {
    Service.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
      })
  } 
  useEffect(hook, [])
  return (
    
    <div>
      <h2>Phonebook</h2>
      <Notification message={Message} />
      <Filter setField = {setSearchName}/>
      <h2>add A New</h2>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setMessage={setMessage}/>
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName} setPersons={setPersons} setMessage={setMessage}/>
    </div>
  )
}
export default App