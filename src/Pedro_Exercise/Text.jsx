import React, { useState } from 'react'

const Text = () =>{
    const [text, setText] = useState('');

    const handleClick = (e) => {
        setText(e.target.value)
    }


  return (
    <div>
      <input
      onChange={handleClick}
       />
      <h1>{text}</h1>
    </div>
  )
}

export default Text
