import { useState, useEffect } from 'react'

const useRandomJokes = (firstName, lastName) => {

    const [joke, setJoke] = useState('')


    useEffect(() => {
        const fetchJokes = async () => (
            await fetch(`http://api.icndb/jokes/random?firstName=${firstName}&lastName=${lastName}`)  
        ).then(res => res.json())
        .then(data => setJoke(data.value.joke))
          
        fetchJokes()  
    }, [firstName, lastName])

    return joke;
}

export default useRandomJokes
