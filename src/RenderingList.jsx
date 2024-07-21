import React  from 'react';

export default function RenderingList(){
  const products = [
    {title: 'Garlic', isFruit: false, id: 1 },
    {title: 'Apple', isFruit: true, id: 2 },
    {title: 'Cabbage', isFruit: false, id: 3 },
  ]

  // maping over the list using the normal JS way

  // const listItems = products.map(product => {
  //   return <li 
  //   key={product.id}
  //   style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
  //     {product.title}
  //   </li>
  // })


  // using the map method & if else within the JSX 
  return(
    <>
    {/* {products.map(product => {
      return <li 
                key={product.id}
                style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
              }}
              >
                {product.title}
            </li>
    })} */}

      {/* <h1>{listItems}</h1> */}

      {/* not using the else block */}
      {products.map(product => {
      return <li 
                key={product.id}
                style={{
                color: product.isFruit && 'magenta' 
              }}
              >
                {product.title}
            </li>
    })}
    </>
  )
}
