import React, {useState} from 'react'

function StateComponent(){
    const [count, setCount] = useState(0);
    const isPositive = false

    // increase Count
    const increaseCount = () => {
        setCount(count + 1)
    }
    
    // decrease Count
    const decreaseCount = () => {
        setCount(count - 1)
    }

    return(
        <>
            <h1>Welcome to my Counter App</h1>
            <button style={{
                marginRight: '5px',
                padding: '7px 20px',
                background: 'blue',
                color: '#fff',
                fontSize: '20px'
            }} onClick={decreaseCount}>-</button>

            <button style={{
                marginRight: '5px',
                padding: '7px 20px',
                background: 'blue',
                color: '#fff',
                fontSize: '20px'
            }}
             onClick={increaseCount}>+</button>
             
            <h2>The count is { count }</h2>
        </>
    )
}

export default StateComponent;