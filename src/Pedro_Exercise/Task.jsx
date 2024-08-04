import React from 'react'

function Task(props) {
  return (
       <div className='task'>
            <li>{props.taskName}</li>
            <button onClick={() => deleteTask(props.id)}>X</button>
        </div>
  )
}

export default Task
