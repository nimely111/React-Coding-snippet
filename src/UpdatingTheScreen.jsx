import React from 'react'
import { useState } from 'react'

export default function UpdatingTheScreen({count, onClick}) {
// const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   }

  return (
    <div>
      <button onClick={onClick}>Clicked {count} tiems</button>
    </div>
  )
}
