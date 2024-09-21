import React, { useState } from 'react'

const ChangeProfile = ({setUserName}) => {
    const [newUserName, setNewUserName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
     <form 
        onSubmit={handleSubmit}
        >
        <input onChange={(e) => {
            setNewUserName(e.target.value)
        }}  
            />
        <button
            type='submit' 
            onClick={() => setUserName(newUserName)}>
            Change Username
        </button>
     </form>
    </div>
  )
}

export default ChangeProfile
