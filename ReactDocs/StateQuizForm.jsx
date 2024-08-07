import React, { useState } from 'react'

const StateQuizForm = () => {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing')

    if(status === 'success'){
        return <h1>You answered correctly!</h1>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        
    }

    return (
        <div>
            <h2>City Quiz</h2>
            <p>In which city is there a billboard that turns air into drinkable water?</p>
            <form
                onSubmit={handleSubmit}>
                <textarea>
                </textarea>
                <br />
                <button>
                   Submit 
                </button>
            </form>
        </div>
    )
}

export default StateQuizForm;