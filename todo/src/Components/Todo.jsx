import React from 'react'
import { deleteBusiness, completeBusiness } from '../redux/actions'
import {  useDispatch } from 'react-redux'
import { Todos, DeleteButton } from '../StyledComponents'

const Todo = (props) => {
  const dispatch = useDispatch()

  const leshracs = []
  if (props.bums.done === true) {
    leshracs.push('easy')
  }

  return (
    <Todos>
      <span className={leshracs.join(' ')}>
        <input
          type="checkbox"
          onChange={() => dispatch(completeBusiness(props.bums.id))}
        />
        <strong> {props.bums.id} </strong>
        {props.bums.title}
      </span>
      <DeleteButton onClick={() => dispatch(deleteBusiness(props.bums.id))}>
        &times;
      </DeleteButton>
    </Todos>
  )
}

export default Todo
