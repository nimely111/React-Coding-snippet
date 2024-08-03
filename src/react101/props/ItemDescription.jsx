import React from 'react'

function ItemDescription({name, description}) {
  return (
    <div>
      <p>
        <i>{name}</i>
        <i>{description}</i>
      </p>
    </div>
  )
}

export default ItemDescription
