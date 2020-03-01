import React from 'react'

import avatar from './avatar.png'
import './Avatar.scss'

const Avatar = ({ name }) => {
  return (
    <>
      <div className="avatar-wrapper">
        <img src={avatar} alt="avatar" className="avatar-wrapper__image" />
        <p>{name}</p>
      </div>
    </>
  )
}

export default Avatar
