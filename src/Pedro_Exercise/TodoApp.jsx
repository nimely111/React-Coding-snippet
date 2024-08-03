import React from 'react';
import { useState } from 'react';
import './todo.css';
function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handlechange = (event) => {
    setNewTask(event.target.value)
  }

  return (
    <div className='App'>
      <div className="addTask">
        <input type="text" onChange={handlechange}/>
        <button>Add Task</button>
      </div>
      <div className="list">
        {newTask}
      </div>
    </div>
  )
}

export default TodoApp
