import StateComponent from "./StateComponent";
import ClassStateComponent from "./ClassStateComponent";
import Product from "./props/Product";
import styles from './App.module.css'
import { useState } from "react";

function App_101(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodos = (e) => {
        setTodos([...todos, input]);
        setInput('');
    }

    return(
        <>
            <form>
            <input
            value={input} 
            onChange={e => setInput(e.target.value)}
            type="text" />  
          <button type="submit" onClick={addTodos}>Add Todos</button> 
            </form> 
          {todos.map(todo => (
            <p>{todo}</p>
          ))}

          {/* <StateComponent />
          <ClassStateComponent /> */}
      <h2 className={styles.error}>An error occured</h2>
          <Product 
          name='Google Home' 
          description='Your AI assistant' 
          price={59.99}/>

          <Product 
          name='iPhone 12 pro max' 
          description='The best iphone' 
          price={1200}/>

          <Product 
          name='Macbook Pro' 
          description='Your Favorite Computer' 
          price={2500}/>  
        </>
    )
}

export default App_101;