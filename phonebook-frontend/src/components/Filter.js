const Filter = ({filter, setFilter}) => {
  /* Event Handlers */
  const changeFilter = e => setFilter(e.target.value)
  /* Return */
  return <p>filter shown with <input value={filter} onChange={changeFilter}/></p>
}

export default Filter