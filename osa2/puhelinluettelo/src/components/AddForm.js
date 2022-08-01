const AddForm = (props) => {
    return (
      <form>
          <div>
            name: <input 
              value={props.newName}
              onChange={props.handleNameFieldChange}
            />
          </div>
          <div>
            number: <input 
            value={props.newNumber}
            onChange={props.handleNumberFieldChange}
            />
          </div>
          <div>
            <button onClick={props.addName} type="submit">add</button>
          </div>
        </form>
    )
  }

export default AddForm