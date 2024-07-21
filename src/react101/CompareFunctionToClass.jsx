import React from 'react'
import { useState } from 'react'




function CompareFunctionToClass() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(100)
  const [isMale, setIsMale] = useState(true)
  
  return (
    <div>
      <h1>Hello World from function</h1>
    </div>
  )
}

export default CompareFunctionToClass
