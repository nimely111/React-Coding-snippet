import React, {useState} from 'react'

function StateComponent(){
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1)
    }
    return(
        <>
            <h1>Welcome to my Counter App</h1>
            <button>-</button>
            <p>The count is { count }</p>
            <button onClick={increaseCount}>+</button>
        </>
    )
}

export default StateComponent;