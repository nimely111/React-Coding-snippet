import React, { useState } from 'react'

const ChangeProfile = ({setUserName}) => {
    const [newUserName, setNewUserName] = useState('')
  return (
    <div>
      <input 
      onChange={(e) => setNewUserName(e.target.value)} />

      <button 
      onClick={() => setUserName(newUserName)}>
        Change Username
      </button>
    </div>
  )
}

export default ChangeProfile
