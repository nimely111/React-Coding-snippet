import StateComponent from "./StateComponent";
import ClassStateComponent from "./ClassStateComponent";
import Product from "./props/Product";
import styles from './App.module.css'
import { useState } from "react";

function App_101(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('')

    return(
        <>
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

          <input
            value={input} 
            onChange={e => setInput(e.target.value)}
          type="text" />  
          <button>Add Todos</button>  
          {todos.map(todo => (
            <p>{todo}</p>
          ))}
        </>
    )
}

export default App_101;