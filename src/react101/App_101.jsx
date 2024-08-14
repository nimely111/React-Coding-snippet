import StateComponent from "./StateComponent";
import ClassStateComponent from "./ClassStateComponent";
import Product from "./props/Product";
import styles from './App.module.css'
import { useState } from "react";
import Form from "./props/Form";

function App_101(){
    // const [todos, setTodos] = useState([]);
    // const [input, setInput] = useState('');

    // const addTodos = (e) => {
    //     e.preventDefault(); // stop form from refreshing
    //     setTodos([...todos, input]);
    //     setInput('');
    // }

    return(
        <>
        <Form />

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