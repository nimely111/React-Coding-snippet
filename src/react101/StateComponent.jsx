import React, {useState} from 'react'

function StateComponent(){
    const [count, setCount] = useState(0);
    increaseCount = () => {
        setCount(count + 1)
    }
    return(
        <>
            <h1>Welcome to my Counter App</h1>
            <p>The count is { count }</p>
        </>
    )
}

export default StateComponent;