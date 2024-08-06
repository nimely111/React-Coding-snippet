import React from 'react';
import { useState } from 'react';
import './todo.css';
import Task from './Task';

const  TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {

    if(newTask.trim() === "") return; // Prevent adding empty tasks
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isCompleted: false
    }
    setTodoList([...todoList, task])
    setNewTask("")  // Clear the input field after adding the task
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      addTask()  // Add task when Enter key is pressed
    }
  }

  const deleteTask = (id) =>{
    setTodoList(todoList.filter(task => task.id !== id))
  }

  const taskCompleted = (id) => {
    setTodoList(todoList.map(task => {
      if(task.id === id){
        return {...task, isCompleted: true};
      }else{
        return task
      }
    }))
  }

  return (
    <div className='App'>
      <div className="addTask">
        <input type="text" placeholder='Enter your todo' onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map(({taskName, id, isCompleted}) =>{
          return <Task 
          taskName={taskName} 
          id={id} 
          deleteTask={deleteTask} 
          taskCompleted={taskCompleted} 
          isCompleted={isCompleted}/>
        })}
      </div>
    </div>
  )
}

export default TodoApp
