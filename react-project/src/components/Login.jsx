import React from 'react'

const Login = () => {
  return (
      <div>
          <input type="text" name="username" id="username"></input>
          <br></br>
          <input type="text" name="password" id="password"></input>
          <br></br>
          <button type="button" class="btn btn-primary">Login</button>
      </div>
  )
}

export default Login