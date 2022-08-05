const Button = (props) => {
    return (
      <button 
        onClick={props.handler}>
        {props.text}
      </button>
    )
  }

export default Button