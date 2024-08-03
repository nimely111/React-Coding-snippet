import React from 'react'

function ItemDescription({name, description}) {
  return (
    <div>
      <p>
        <i>Name: {name}</i>
      </p>
      <p>
      <i>Description: {description}</i>
      </p>
    </div>
  )
}

export default ItemDescription
