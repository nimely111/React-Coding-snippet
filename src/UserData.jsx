import React from 'react'

export default function UserData() {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    }

  return (
    <div>
      <h1>{ user.name }</h1>
      <img
        className='avatar' 
        src={user.imageUrl} 
        alt={`Photo of ${user.name}`} 
        style={{
          width: `${user.imageSize}px`,
          height: `${user.imageSize}px`,
          borderRadius: '50%',
      }}/>
    </div>
  )
}
