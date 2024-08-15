import React from 'react'

function ItemDescription({title, description}) {
  return (
    <div>
         <p>Title: {title}</p>
        <p>
          <i>
          Description: {description}
          </i>
        </p>
    </div>
  )
}

export default ItemDescription
