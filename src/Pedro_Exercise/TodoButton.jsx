import React from 'react'

const button = ({label, addTask, taskCompleted, deleteTask, isCompleted}) => {
  return (
    <div>
      <button onClick={addTask}>{label}</button>
      <button onClick={taskCompleted}>Complete</button>
      <button onClick={deleteTask}>X</button>

      <div className='task' 
       style={{backgroundColor: isCompleted ? 'green' : 'white', color: isCompleted && 'white'}}
       >
            <li>
                {taskName}
                {/* <button onClick={() => taskCompleted(id)}>Complete</button>
                <button onClick={() => deleteTask(id)}>X</button> */}
                <TodoButton
                    taskCompleted={taskCompleted(id)}
                    deleteTask={deleteTask(id)}
                 />
            </li>
        </div>
    </div>
  )
}

export default button
