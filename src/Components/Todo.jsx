import React from 'react'
import { deleteBusiness, competeBusiness } from '../redux/actions'
import { connect } from 'react-redux'

const Todo = (props) => {
  const leshracs = []

  if (props.bums.done === true) {
    leshracs.push('easy')
  }
  
  return (
    <ul className="Todos">
      <span className={leshracs.join(' ')}>
        <input
          type="checkbox"
          onChange={() => props.competeBusiness(props.bums.id)}
        />
        <strong> {props.bums.id} </strong>
        {props.bums.tittle}
      </span>
      <button
        className="delete"
        onClick={() => props.deleteBusiness(props.bums.id)}
      >
        &times;
      </button>
    </ul>
  )
}

const mapDispatchToProps = {
  deleteBusiness,
  competeBusiness,
}

export default connect(null, mapDispatchToProps)(Todo)
