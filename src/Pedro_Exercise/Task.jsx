import React from 'react'

function Task({taskName, id, deleteTask, taskCompleted}) {
  return (
       <div className='task' 
       style={{backgroundColor: taskCompleted ? 'green' : 'white'}}
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
