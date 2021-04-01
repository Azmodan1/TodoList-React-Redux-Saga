import styled from 'styled-components'

export const Container = styled.div``

export const MainApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  zoom: 150%;
  height: 100vh;
  background-color: silver;
  
`
export const Todos = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 3px;
  border-radius: 10px;
  border: 3px groove;
  color: black;
`

export const InvertButtonTheme = styled.button`
  width: 70px;
  height: 50px;
  background-color: aqua;
  margin-left: 143px;
  margin-top: 5px;
  border-radius: 15px;
`

export const DeleteButton = styled.button`
  color: black;
  background-color: Aqua;
`
