import React from 'react'

function Task({taskName, id}) {
  return (
       <div className='task'>
            <li>{taskName}</li>
            <button onClick={() => deleteTask(id)}>X</button>
        </div>
  )
}

export default Task
