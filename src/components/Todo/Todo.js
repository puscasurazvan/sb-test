import React, { useState } from 'react'

import Task from '../Task'
import CreateTask from '../CreateTask'
import Header from '../Header'

import './Todo.scss'

const Todo = () => {
  const [tasks, setTasks] = useState([
    {
      title: 'Hello',
      completed: false,
    },
    {
      title: 'Simply Business',
      completed: true,
    },
  ])

  const addTodo = title => {
    const newTasks = [...tasks, { title, completed: false }]
    setTasks(newTasks)
  }

  const completeTodo = index => {
    const newTasks = [...tasks]
    newTasks[index].completed = true
    setTasks(newTasks)
  }

  const removeTodo = index => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div className="todo">
      <Header />
      {tasks.map((task, index) => (
        <Task
          task={task}
          index={index}
          completeTask={completeTodo}
          removeTask={removeTodo}
          key={index}
        />
      ))}
      <CreateTask addTask={addTodo} />
    </div>
  )
}

export default Todo
