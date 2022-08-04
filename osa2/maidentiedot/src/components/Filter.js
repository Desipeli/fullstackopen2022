const Filter = ({ filterText, filterHandler}) => {
    return (
    <div>
      find countries <input 
      value={filterText}
      onChange={filterHandler}
      />
    </div>
    )
  }

export default Filter