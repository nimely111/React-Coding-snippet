import React, { useState } from 'react'

const StateQuizForm = () => {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing')

    if(status === 'success'){
        return <h1>You answered correctly!</h1>
    }

    return (
        <div>
            <h2>City Quiz</h2>
            <p>In which city is there a billboard that turns air into drinkable water?</p>
        </div>
    )
}

export default StateQuizForm;