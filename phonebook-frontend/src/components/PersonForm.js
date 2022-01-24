import { useState } from "react";
import phoneServices from "../services/phoneServices";

const PersonForm = ({persons, setPersons, addMessage}) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  /* Event Handlers */
  const addPerson = e => {
    e.preventDefault()
    /*  Validate inputs 
        if already exists the name, update the number
        else add the new person
    */
    let person = (persons.find(p => p.name === newName)) // check for existing person with same name
    if (person) { // if there is such a person, update her
      phoneServices
        .updatePerson(person.id, {name: newName, number: newNumber})
        .then(newPerson => {  // after updating database, update state
          addMessage("SUCCESS", `O contato ${newName} foi editado.`)
          setPersons(persons.map(p => p.id !== person.id ? p : newPerson))
        }) 
        .catch(error => addMessage("ERROR",`Alguma coisa deu errado ao editar o contato.`))
    }
    else phoneServices // if there is not a person with same name, add she to the database 
      .addPerson(newName, newNumber)
      .then(newPerson => {
        addMessage("SUCCESS", `O contato ${newName} foi adicionado.`)
        setPersons([...persons, newPerson]) // after adding to database, add to state
      })
      .catch(error => addMessage("ERROR", `Algo deu errado ao adicionar o contato.`))
    setNewName("")
    setNewNumber("")
  }

  /* Return */
  return (
    <form>
      <h2>Add a new person</h2>
      <div>name: <input value={newName} onChange={e => setNewName(e.target.value)}/></div>
      <div>number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)}/></div>
      <div>
        <button type="submit" onClick={addPerson}>add</button>
      </div>
    </form>
  )
}

export default PersonForm