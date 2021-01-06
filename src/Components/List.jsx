import Todo from './Todo'
import React from 'react'
import { useSelector } from 'react-redux'


const List = () => {
const bus = useSelector((state) => state.todo.affairs)
return(
  <ul>
    {bus.length ? (
      bus.map((bums) => <Todo bums={bums} key={bums.id} />)
    ) : (
      <h1> Дел пока нет </h1>
    )}
  </ul>)
}

export default List
