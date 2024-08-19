import React from 'react'

const button = ({label, addTask, taskCompleted, deleteTask}) => {
  return (
    <div>
      <button onClick={addTask}>{label}</button>
    </div>
  )
}

export default button
