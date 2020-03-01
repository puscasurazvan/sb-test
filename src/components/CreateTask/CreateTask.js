import React, { useState } from 'react'

import './CreateTask.scss'

const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState('')
  const [showInput, setShowInput] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    if (!value) return

    addTask(value)
    setValue('')
  }

  const handleChange = event => {
    setValue(event.target.value)
  }

  const displayInput = () => {
    setShowInput(!showInput)
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      {showInput && (
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add a new task"
          onChange={handleChange}
        />
      )}
      <button className="add-todo" onClick={displayInput}>
        Add a to-do
      </button>
    </form>
  )
}

export default CreateTask
