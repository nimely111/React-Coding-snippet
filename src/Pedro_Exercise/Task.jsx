import React from 'react'

function Task({taskName, id, deleteTask, taskCompleted}) {
  return (
       <div className='task'>
            <li>
                {taskName}
                <button onClick={() => taskCompleted}>Complete</button>
                <button onClick={() => deleteTask(id)}>X</button>
            </li>
        </div>
  )
}

export default Task
