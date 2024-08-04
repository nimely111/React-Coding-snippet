import React from 'react'

function Task({taskName, id, deleteTask}) {
  return (
       <div className='task'>
            <li>
                {taskName}
                <button>Complete</button>
                <button onClick={() => deleteTask(id)}>X</button>
            </li>
        </div>
  )
}

export default Task
