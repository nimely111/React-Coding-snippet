import React from 'react'
import { useState } from 'react'

const [name, setName] = useState("")
const [age, setAge] = useState(100)
const [isMale, setIsMale] = useState(true)



function CompareFunctionToClass() {
  return (
    <div>
      <h1>Hello World from function</h1>
    </div>
  )
}

export default CompareFunctionToClass
