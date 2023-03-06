import React from 'react'

const login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username'/>
        <input required type="password" placeholder='password'/>
        <button>Login</button>
        <p className='error'>This is an Error!</p>
      </form>
    </div>
  )
}

export default login