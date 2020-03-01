import React from 'react'

import './Task.scss'

const Task = ({ task, index, completeTask, removeTask }) => {
  const remove = () => {
    removeTask(index)
  }

  const complete = () => {
    completeTask(index)
  }

  return (
    <div className="task">
      <button className="complete-button" onClick={complete}>
        <span role="img" aria-label="complete task">
          &#10003;
        </span>
      </button>
      <p style={{ textDecoration: task.completed ? 'line-through' : '' }}>
        {task.title}
      </p>
      <button className="remove-button" onClick={remove}>
        <span role="img" aria-label="delete task">
          &#10006;
        </span>
      </button>
    </div>
  )
}

export default Task
