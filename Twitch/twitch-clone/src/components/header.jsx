import React from 'react'
import leshrac from '../images/leshrac.png'
import Notifications from './svg_notifications'
import Direct from './svg_direct'
import Crown from './svg_crown'
import Bits from './svg_bits'
import Prompt from './prompt'

export default function header() {
  return (
    <div className="Header">
      <div className="header_left">
        {' '}
        <div>
          <img src={leshrac} width="auto" height="80px" alt="leshrac" />{' '}
        </div>
        <h4>Отслеживаемое</h4>
        <h4>Просмотр</h4>
        <h4>...</h4>
      </div>
      <div className="header_center">
        <input className="Input" placeholder="Поиск...." />
      </div>
      <div className="header_right">
        <Crown onmouseover={<Prompt/>} />
        <Notifications />
        <Direct />
        <Bits />
      </div>
    </div>
  )
}
