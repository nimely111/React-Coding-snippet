import React from 'react'

function Task() {
  return (
       <div className='task'>
            <li>{task.taskName}</li>
            <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
  )
}

export default Task
