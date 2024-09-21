import React from 'react'
import ChangeProfile from '../Components/ChangeProfile'

const Profile = ({username}) => {
  return (
    <div>
      <h1>Profile, user is {username}</h1>
      <ChangeProfile />
    </div>
  )
}

export default Profile
