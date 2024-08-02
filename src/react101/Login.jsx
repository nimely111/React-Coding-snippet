import React from 'react'

 function Login() {
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(`Logging in ${e.target.value}`);
    }

  return (
    <div>
      <form onClick={handleSubmit}>
        <input type="email" placeholder='Enter Your Email'/>
        <input type="password" placeholder='Enter Your password'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login;
