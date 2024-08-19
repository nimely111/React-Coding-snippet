import React from 'react'
import './todo.css'
import TodoButton from '../Pedro_Exercise/TodoButton'

const Task = ({taskName, id, deleteTask, taskCompleted, isCompleted}) =>  {
  return (
                <TodoButton
                    taskCompleted={taskCompleted(id)}
                    deleteTask={deleteTask(id)}
                 />
  )
}

export default Task
