import React, { useState } from 'react'

const StateQuizForm = () => {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing')

    if(status === 'success'){
        return <h1>You answered correctly!</h1>
    }

     async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting')
        
        try{
            await submitForm(answer);
            setStatus('success');
        }catch(err){
            setStatus('typing');
            setError(err);
        }
    }

    const handleTextareaChange = (e) => {
        setAnswer(e.target.value);
    }

    return (
        <div>
            <h2>City Quiz</h2>
            <p>In which city is there a billboard that turns air into drinkable water?</p>
            <form
                onSubmit={handleSubmit}
                >
                <textarea
                onChange={handleTextareaChange}
                value={answer}
                disabled={status === 'submittig'}>
                </textarea>
                <br />
                <button
                    disabled={answer.length === 0 || status === 'submitting'}>
                   Submit 
                </button>
                {error !== null && <p className='error'>{error.message}</p>}
            </form>
        </div>
    )
}

export default StateQuizForm;