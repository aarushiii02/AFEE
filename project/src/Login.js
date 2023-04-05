import React from 'react'

const Login = () => {
  return (
    <div>
        <input type='text' placeholder='name'></input>
        <br></br>
        <input type='email' placeholder='enter your email'></input>
        <br></br>
        <input type='password' placeholder='password'></input>
        <br></br>
        <button>submit</button>
        {/* <link to='/Login'>login</link> */}
    </div>
  )
}

export default Login