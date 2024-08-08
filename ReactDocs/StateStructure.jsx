import React, { useState } from 'react'

function StateStructure() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const fullName = firstName + ' ' + lastName


  return (
      <div>
        <h2>Let's check you in</h2>
      <form>
        <label>
            First Name: {' '}
            <input  
                onChange={handleFirstNameChange}
                value={firstName}/>
        </label>
        <br />
        <label>
            Last Name: {' '}
            <input 
                onChange={handleLastNameChange}
                value={lastName}/>
        </label>
        <p>
            Your ticket will be issue to: <b>{fullName.toUpperCase()}</b>
        </p>
     </form>
    </div>
  )
}

export default StateStructure
