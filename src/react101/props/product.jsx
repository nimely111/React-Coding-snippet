import React from 'react'
import ItemDescription from './ItemDescription'

function product({name, description, price}) {
  return (
    <div>
      <ItemDescription name={name} description={description}/>
      <h3>Price: ${price}</h3>
    </div>
  )
}

export default product
