import React from 'react';
import { useState } from 'react';
import './todo.css';
function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    setTodoList([...todoList, newTask])
  }

  const deleteTask = (taskName) =>{

  }

  return (
    <div className='App'>
      <div className="addTask">
        <input type="text" onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task, key) =>{
          return <div>
                  <li key={key}>{task}</li>
                  <button onClick={() => deleteTask(task)}>X</button>
                </div>
        })}
      </div>
    </div>
  )
}

export default TodoApp
