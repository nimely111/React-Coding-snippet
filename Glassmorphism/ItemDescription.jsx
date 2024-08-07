import React from 'react'

function ItemDescription({title, description}) {
  return (
    <div>
         <p>
          <i>
          Title: {title}
          </i>
        </p>
        <p>
          <i>
          Description: {description}
          </i>
        </p>
    </div>
  )
}

export default ItemDescription
