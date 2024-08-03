import StateComponent from "./StateComponent";
import ClassStateComponent from "./ClassStateComponent";
import Login from "./Login";
import product from "./props/product";

function App_101(){
    return(
        <>
          <StateComponent />
          <ClassStateComponent />
          <Login />

          <Product 
          name='Amazon Echo' 
          description='Your AI assistant' 
          price={59.99}/>

          {/* product: name, description, price */}
          {/* product: name, description, price */}
          {/* product: name, description, price */}
          {/* product: name, description, price */}
        </>
    )
}

export default App_101;