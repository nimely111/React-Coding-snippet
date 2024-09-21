import React from 'react'
import ChangeProfile from '../Components/ChangeProfile'
import { useContext } from 'react'
import { AppContext } from '../RouterApp'

const Profile = () => {
    const { userName, setUserName } = useContext(AppContext)
  return (
    <div>
      <h1>Profile, user is {userName}</h1>
      <ChangeProfile setUserName={setUserName}/>
    </div>
  )
}

export default Profile
