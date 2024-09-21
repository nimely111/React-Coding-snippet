import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../RouterApp'

const ChangeProfile = () => {
    const { setUserName } = useContext(AppContext)
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
