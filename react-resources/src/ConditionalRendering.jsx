import React from 'react'

export default function ConditionalRendering() {
    let content, isLoggedIn = true;
    if(isLoggedIn){
        content = <h1>Welcome User</h1>
    }else{
        content = <h1>Please Log In</h1>
    }
    // If you prefer more compact code, you can use the conditional ? operator. Unlike if, it works inside JSX:


  return (
    <>
      {/* {isLoggedIn ? 'Welcome User' : "Please Log In"} */}

      {/* When you don’t need the else branch, you can also use a shorter logical && syntax: */}

      {isLoggedIn && 'Welcome Admin'}
      {/* {content} */}
    </>
  )
}
