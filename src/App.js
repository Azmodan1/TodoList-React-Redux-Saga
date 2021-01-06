import React from 'react'
import './App.css'
import List from './Components/List'
import Addbusiness from './Components/Addbusiness'
import ThemeSwitch from './Components/ThemeChanger'
import { MainApp } from './StyledComponents'

function App() {
  return (
    <MainApp>
      <h1> Leshrac List</h1>
      <ThemeSwitch />
      <Addbusiness />
      <List />
    </MainApp>
  )
}
export default App
