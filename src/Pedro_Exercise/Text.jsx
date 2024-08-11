import React, { useState } from 'react'

const Text = () =>{
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    }


  return (
    <div>
      <input
      onChange={handleChange}
       />
      <h1>{text}</h1>
    </div>
  )
}

export default Text
