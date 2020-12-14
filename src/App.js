import React, { useState } from 'react'
import './App.css'
import List from './Components/List'
import Addbusiness from './Components/Addbusiness'

function App() {
  let [stylesColor, setStylesColor] = useState(['main'])

  const styles = () => {
    if (stylesColor == 'main') {
      setStylesColor(stylesColor.splice(1, 1).concat('main2'))
    } else if (stylesColor == 'main2') {
      setStylesColor(stylesColor.splice(1, 1).concat('main'))
    }
  }

  return (
    <div className={stylesColor.join(' ')}>
      <h1> Leshrac List</h1>
      <button className="addstyle" onClick={() => styles()}>
        Style
      </button>
      <Addbusiness />
      <List/>
    </div>
  )
}
export default App
