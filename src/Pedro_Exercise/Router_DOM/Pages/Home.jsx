import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../RouterApp'

const Home = () => {
  const { userName } = useContext(AppContext)
  return (
    <div>
      <h1>This is the home page and user is { userName }</h1>
    </div>
  )
}

export default Home
