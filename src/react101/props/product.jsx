import React from 'react'
import ItemDescription from './ItemDescription'

function product({name, description, price}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>${price}</h3>

      <ItemDescription />
    </div>
  )
}

export default product
