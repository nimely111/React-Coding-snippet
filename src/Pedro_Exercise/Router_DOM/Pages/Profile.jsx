import React from 'react'
import ChangeProfile from '../Components/ChangeProfile'

const Profile = ({username, setUserName}) => {
  return (
    <div>
      <h1>Profile, user is {username}</h1>
      <ChangeProfile setUserName={setUserName}/>
    </div>
  )
}

export default Profile
