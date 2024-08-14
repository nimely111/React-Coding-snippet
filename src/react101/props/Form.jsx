import React, { useState } from 'react'

const Form = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (e) => {
      e.preventDefault()
      setTodos([[...todos, input]])
      setInput('')
    }

  return (
    <div>
      <form>
      <input
        value={input}
        onChange={e => setInput(e.target.value)} 
        type="text" />
        <button type='submit' onClick={addTodo}>Add Todo</button>
        {todos.map(todo => (
           <p>{todo}</p>
        ))}
      </form>
    </div>
  )
}

export default Form
