import React from 'react';
import { useState } from 'react';
import './todo.css';
import Task from './Task';
function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    }
    setTodoList([...todoList, task])
  }

  const deleteTask = (id) =>{
    setTodoList(todoList.filter(task => task.id !== id))
  }

  return (
    <div className='App'>
      <div className="addTask">
        <input type="text" onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map(task =>{
          return (
           <Task task="tasks" />
          )
        })}
      </div>
    </div>
  )
}

export default TodoApp
