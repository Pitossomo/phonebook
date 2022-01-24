import axios from "axios"
const personsDBurl = "/api/persons"

/*  getPersons method 
    return all elements from Persons database
*/
const getPersons = () => (
  axios
    .get(personsDBurl)
    .then(response => response.data)
)

/*  Add Person method
    create an element inside the Persons database 
*/
const addPerson = (name, number) => (
  axios
    .post(personsDBurl, {name: name, number: number})
    .then(response => response.data)
)

/*  Remove Person method
    delete an elemnet inside the Persons database by its id
*/
const removePerson = id => (
  axios
    .delete(`${personsDBurl}/${id}`)
    .then(response => response.data)
)

/*  Edit Person method 
    change the properties of a existing element
*/
const updatePerson = (id, person) => (
  axios
    .put(`${personsDBurl}/${id}`, person)
    .then(response => response.data)
)

/* Export settings */
const phoneServices = { getPersons, addPerson, removePerson, updatePerson }
export default phoneServices