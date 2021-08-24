import React, { useState } from 'react';
import { deleteBusiness, completeBusiness } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { Todos, DeleteButton } from '../StyledComponents';

const Todo = (props) => {
  const dispatch = useDispatch();

  const handleChange = async () => {
    dispatch(completeBusiness(props.bums.id));
  };

  const handleDelete = () => {
    dispatch(deleteBusiness(props.bums.id));
  };

  const leshracs = [];
  if (props.bums.done === true) {
    leshracs.push('easy');
  }

  return (
    <Todos>
      <span className={leshracs.join(' ')}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={props.bums.id === props.bums.done ? true : props.bums.done}
        />
        <strong> {props.bums.id} </strong>
        {props.bums.title}
      </span>
      <DeleteButton onClick={handleDelete}>&times;</DeleteButton>
    </Todos>
  );
};

export default Todo;
