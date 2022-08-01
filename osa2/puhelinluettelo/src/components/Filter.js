const Filter = ({ filterText, filterHandler}) => {
    return (
    <div>
      filter shown with <input 
      value={filterText}
      onChange={filterHandler}
      />
    </div>
    )
  }

export default Filter