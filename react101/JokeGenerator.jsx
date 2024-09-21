import { useRef, useState } from 'react'
import useRandomJokes from './useRandomJokes'

const JokeGenerator = () => {
    const [firstName, setFirstName] = useState("Samuel")
    const [lastName, setLastName] = useState("Nimely")

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    const joke = useRandomJokes(firstName, lastName)

    const generateJoke = e => {
        e.preventDefault();
        setFirstName(firstNameRef.current.value)
        setLastName(lastNameRef.current.value)
    }



  return (
    <div>
        <h1>Joke Generator</h1>
      <center>
      <form>
            <input 
            placeholder='first name' 
            ref={firstNameRef} />
            <br />
            <br />
            <input 
            placeholder='lastname name' 
            ref={lastNameRef} />
            <br />
            <br />
            <button onClick={generateJoke}>Generate Jokes</button>
        </form>
      </center>

      <h2>{joke}</h2>
    </div>
  )
}

export default JokeGenerator
