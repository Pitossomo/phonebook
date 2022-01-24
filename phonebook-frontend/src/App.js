import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Messages from './components/Messages'
import phoneServices from './services/phoneServices'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ filter, setFilter ] = useState('')
  const [ errorMessages, setErrorMessages ] = useState([])
  const [ successMessages, setSuccessMessages ] = useState([])

  const addMessage = (type, content) => {
    if (type === "ERROR") setErrorMessages([...errorMessages, content])
    else if (type === "SUCCESS") setSuccessMessages([...successMessages, content])
    setTimeout(() => { 
      setErrorMessages([])
      setSuccessMessages([])
    }, 5000)
  }

  useEffect(() => {
    phoneServices
      .getPersons()
      .then(allPersons => setPersons(allPersons))
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Messages
        errorMessages={errorMessages} setErrorMessages={setErrorMessages} 
        successMessages={successMessages} setSuccessMessages={setSuccessMessages}
      />
      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm persons={persons} setPersons={setPersons} addMessage={addMessage}/>
      <Persons persons={persons} filter={filter} setPersons={setPersons} addMessage={addMessage} />
    </div>
  )
}

export default App