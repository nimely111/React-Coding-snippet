import React from 'react'

 function Login() {
    const handleSubmit = (e) =>{
        e.preventDeffault()
        console.log(12345);
    }

  return (
    <div>
      <form onClick={handleSubmit}>
        <input type="email" placeholder='Enter Your Email'/>
        <input type="password" placeholder='Enter Your password'/>
        <input type="submit" value='Submit'/>
      </form>
    </div>
  )
}

export default Login;
