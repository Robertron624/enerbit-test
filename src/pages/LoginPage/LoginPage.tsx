import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const LoginPage = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    if(!username || !password) {
      alert('Please enter username and password')
      return
    };

    if(username !== 'admin' || password !== 'admin'){
      alert('incorrect username or password');
      return
    }

    sessionStorage.setItem('user', username)
    sessionStorage.setItem('password', password)

    navigate("/dashboard")
  }

  const handleUsername = (e:any) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e:any) => {
    setPassword(e.target.value)
  }

  return (
    <div className='form__container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="usename">Username</label><input onChange={handleUsername} name='username' type="text" />
            <label htmlFor="password">Password</label> <input onChange={handlePassword} type="password" name="password" id="password" />
            <button className='submit__button' type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginPage