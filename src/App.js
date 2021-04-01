import React from 'react'
import './App.css'
import List from './Components/List'
import Addbusiness from './Components/Addbusiness'
import ThemeSwitch from './Components/ThemeChanger'
import { Container, MainApp } from './StyledComponents'
import Alert from './Components/Alert'
import { useSelector } from 'react-redux'

function App() {
  return (
    <Container>
      <MainApp>
        <h1> Leshrac List</h1>
        <Addbusiness />
        <ThemeSwitch />
        <List />
      </MainApp>
    </Container>
  )
}
export default App
