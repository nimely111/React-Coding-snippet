import React from 'react'

function ItemDescription({name, description}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>
      <i>Description: {description}</i>
      </p>
    </div>
  )
}

export default ItemDescription
