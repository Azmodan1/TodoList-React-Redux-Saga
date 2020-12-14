import React, { useState } from 'react'
import { addBusiness } from '../redux/actions'
import { connect } from 'react-redux'

const Addbusiness = ({ bus, addBusiness }) => {
  const [value, setValue] = useState('')

  const subminitg = (event) => {
    event.preventDefault()

    const newAffair = {
      tittle: value,
      id: bus.length + 1,
      done: false,
    }

    if (value !== '') {
      addBusiness(newAffair)
      setValue('')
    }
  }

  return (
    <form className="add" onSubmit={subminitg}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button className="addb" type="submit">
        Add business
      </button>
    </form>
  )
}

const mapDispatchToProps = {
  addBusiness,
}

const mapStateToProps = (store) => {
  return { bus: store.affairs }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addbusiness)
