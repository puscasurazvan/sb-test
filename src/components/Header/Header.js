import React from 'react'
import dayjs from 'dayjs'

import './Header.scss'

const Header = () => {
  const renderDayAndMonth = value => {
    return dayjs(value).format('ddd D MMMM')
  }

  return (
    <div className="headerWrapper">
      <div className="content">
        <h1 className="header">Team To-Do List</h1>
        <h3 className="date">{renderDayAndMonth(new Date())}</h3>
      </div>
    </div>
  )
}

export default Header
