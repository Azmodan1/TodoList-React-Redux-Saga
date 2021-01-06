import React, { Fragment, useEffect, useState } from 'react'
import { InvertButtonTheme } from '../StyledComponents'
const ThemeSwitch = ({ storeKey = 'ThemeSwitch' }) => {
  const cssString = `
        html { filter: invert(100%); background: #fefefe; }
        * { background-color: inherit }
      `

  const [active, setActive] = useState(
    localStorage.getItem(storeKey) === 'true'
  )

  useEffect(() => {
    localStorage.setItem(storeKey, active)
  }, [active, storeKey])

  const toggle = () => {
    setActive((active) => !active)
  }
  return (
    <Fragment>
      <InvertButtonTheme aria-pressed={active} onClick={toggle}>
        Inverted theme:{''}
        <span aria-hidden="true">{active ? 'On' : 'Off'}</span>
      </InvertButtonTheme>
      <style media={active ? 'screen' : 'none'}>
        {active ? cssString : 'ThemeChanger dont used'}
      </style>
    </Fragment>
  )
}

export default ThemeSwitch
