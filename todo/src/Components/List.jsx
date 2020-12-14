import Todo from './Todo'
import React from 'react'
import { connect } from 'react-redux'
import { deleteBusiness, competeBusiness } from '../redux/actions'

const List = (props) => (
  console.log(props.bus),
  (
    <ul>
      {props.bus.map((bums) => (
        <Todo bums={bums} key={bums.id} />
      ))}
    </ul>
  )
)

const mapDispatchToProps = {
  deleteBusiness,
  competeBusiness,
}
const mapStateToProps = (store) => {
  return { bus: store.affairs }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
