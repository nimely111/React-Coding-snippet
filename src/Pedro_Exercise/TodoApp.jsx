import React from 'react'
import './todo.css'
function TodoApp() {
  return (
    <div className='App'>
      <div className="addTask">
        <input type="text" />
        <button>Add Task</button>
      </div>
      <div className="list"></div>
    </div>
  )
}

export default TodoApp
