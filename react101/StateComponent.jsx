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
    
    // reset Count
    const setToZero = () => {
        setCount(0)
    }

    const content = 'The count is:'
    return(
        <>
            <h1>Welcome to my Counter App</h1>
            <h2>Using Function Based Component</h2>
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
             
            {count >= 0 ? 
                <h2 
                style={{
                color: 'green'
                }}>
                 {content} { count }
                </h2> :  
                <h2 
                style={{
                color: 'red'
                }}>
                 {content} { count }
                </h2>}
        </>
    )
}

export default StateComponent;