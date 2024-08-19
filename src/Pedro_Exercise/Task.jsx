import React from 'react'
import './todo.css'

const Task = ({taskName, id, deleteTask, taskCompleted, isCompleted}) =>  {
  return (
       <div className='task' 
       style={{backgroundColor: isCompleted ? 'green' : 'white', color: isCompleted && 'white'}}
       >
            <li>
                {taskName}
                <button onClick={() => taskCompleted(id)}>Complete</button>
                <button onClick={() => deleteTask(id)}>X</button>
            </li>
        </div>
  )
}

export default Task
