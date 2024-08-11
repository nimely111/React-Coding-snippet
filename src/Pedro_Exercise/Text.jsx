import React, { useState } from 'react'

const Text = () =>{
    const [text, setText] = useState('');
    
    const handleClick = (e) => {
        setText(e.target.value)
    }


  return (
    <div>
      <input />
    </div>
  )
}

export default Text
