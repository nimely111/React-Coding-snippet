import React from 'react';
import { useState } from 'react';
import './todo.css';
function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

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
