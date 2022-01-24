import phoneServices from '../services/phoneServices'

const Persons = ({persons, filter, setPersons, addMessage}) => {
  /*  deletePerson method - handler for delete button
      when delete button is clicked, sendo DELETE request to Persons database
      on response, update the Persons state 
  */
  const deletePerson = (event, id, name) => {
    event.preventDefault()
    if (window.confirm(`Delete ${name}?`)) {
      phoneServices
        .removePerson(id)
        .then(response => {
          addMessage("SUCCESS", `O contato ${name} foi apagado`)
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => { addMessage("ERROR", `Ocorreu um erro ao apagar o contato ${name}. Por favor, atualize a página.`)})
    }
  } 

  return (
    <div>
      <h2>Numbers</h2>
      {persons.map(p => p.name.includes(filter) 
        ? <p key={p.id}>
            {p.name} {p.number}
            <button onClick={e => deletePerson(e, p.id, p.name)}>delete</button>
          </p>
        : null  
      )}
    </div>
  )
}

export default Persons