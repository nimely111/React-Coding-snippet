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
            <button 
            type="submit" 
            onClick={addTodos}>
                Add Todos
            </button> 
            </form> 
          {todos.map((todo, key) => (
            <p key={key}>{todo}</p>
          ))}
    </div>
  )
}

export default Form
