import React, {useState} from 'react'

function StateComponent(){
    const [count, setCount] = useState(0);
    
    // increase Count
    const increaseCount = () => {
        setCount(count + 1)
    }
    
    // decrease Count
    const decreaseCount = () => {
        setCount(count - 1)
    }
    
    const setToZero = () => {
        setCount(0)
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
            }} 
                onClick={
                decreaseCount
                }>-</button>

            <button style={{
                marginRight: '5px',
                padding: '7px 20px',
                background: 'blue',
                color: '#fff',
                fontSize: '20px'
            }}
                onClick={
                increaseCount
                }>+</button>

<button style={{
                marginRight: '5px',
                padding: '7px 20px',
                background: 'blue',
                color: '#fff',
                fontSize: '20px'
            }} 
                onClick={
                setToZero
                }>Reset</button>
             
            {count >= 0 ? <h2 
            style={{
                color: 'green'
                }}>
                The count is: { count }
                    </h2> :  
                    <h2 
            style={{
                color: 'red'
                }}>
                The count is: { count }
                </h2>}
        </>
    )
}

export default StateComponent;