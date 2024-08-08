import StateComponent from "./StateComponent";
import ClassStateComponent from "./ClassStateComponent";
import Login from "./Login";
import Product from "./props/Product";
import styles from './App.module.css'

function App_101(){
    return(
        <>
          {/* <StateComponent />
          <ClassStateComponent />
          <Login /> */}
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