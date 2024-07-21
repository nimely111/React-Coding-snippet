import React from 'react'

export default function RespondingToEvents() {
    function handleClick(){
        alert('You click me')
    }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}
