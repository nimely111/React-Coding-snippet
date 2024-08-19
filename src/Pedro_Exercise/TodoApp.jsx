import React from 'react';
import { useState } from 'react';
import './todo.css';
import Task from './Task';
import StateQuizForm from '../../ReactDocs/StateQuizForm';
import Cards from '../../Glassmorphism/Cards';
import StateStructure from '../../ReactDocs/StateStructure';
import Text from './Text';
import TodoButton from '../Pedro_Exercise/TodoButton'

const  TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {

    if(newTask.trim() === "") return alert("Please Enter Your todo"); // Prevent adding empty tasks
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isCompleted: false
    }
    setTodoList([...todoList, task])
    setNewTask(" ")  // Clear the input field after adding the task
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
        <input 
        placeholder='Enter your todo'
        value={newTask} 
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        />
        <TodoButton 
        label='Add Task'
        onClick={addTask}
        />
      </div>
      <div className="list">
        {todoList.map(({taskName, id, isCompleted}) =>{
          return <Task
          key={id} //add a unique key prop for all task
          taskName={taskName} 
          id={id} 
          deleteTask={deleteTask} 
          taskCompleted={taskCompleted} 
          isCompleted={isCompleted}/>
        })}
      </div>
      <LearnUseEffect />
      {/* <StateStructure /> */}
      {/* <StateQuizForm /> */}
      {/* <Cards
        title='Samsong Freezer' 
        description='Freezes in less than an hour' 
        price={220.39}/>
      <Cards 
        title='Oven & Inbuilt Stove' 
        description='Dual. with Electricity and Gas.' 
        price={500.99}/>
      <Cards
        title='Dell Laptop' 
        description='500 GB & 16 GB RAM Core i5.' 
        price={350.45}/>

      <Cards 
          title='Google Home' 
          description='Your AI assistant' 
          price={59.99}/>
      <Cards 
          title='iPhone 12 pro max' 
          description='The best iphone' 
          price={1200}/>
      <Cards 
          title='Macbook Pro' 
          description='Your Favorite Computer' 
          price={2500}/>       */}  
    </div>
  )
}


 const LearnUseEffect = () => {
  const [showText, setShowText] = useState(false);
  

return (
  <div className='App'>
    <button
    onClick={() => setShowText(!showText)}
    >
      Show/Hide
    </button>
    {showText && <Text />}
  </div>
)
}
export default TodoApp

