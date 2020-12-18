import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import css from './.module.scss'
import { Navbar, FooterCourse, Button } from '../../components'
import { login } from '../../store/Login/actions'

const Login = () => {
  // States
  const [data, setData] = useState({ email: '', password: '' })
  const [isSuccess, setIsSuccess] = useState(false)

  // Global variable
  const dispatch = useDispatch()
  const history = useHistory()

  // Hooks
  useEffect(() => {
    if (isSuccess) {
      history.push('/courses/list')
    }
  }, [isSuccess])

  // Handlers
  const handleChange = e =>
    setData(state => ({ ...state, [e.target.name]: e.target.value }))

  const handleLogin = () => {
    const { email, password } = data
    if (email && password && email === 'test@test.com' && password === '123') {
      dispatch(login({ email, password }))
      setIsSuccess(true)
    }
  }

  return (
    <div className={css.wrapper}>
      <Navbar />

      <div className={css.card}>
        <h1>Log In to Refactory</h1>
        <div>
          <label>Email Address</label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <Button
          label="Log In"
          onClick={handleLogin}
          styles={{ padding: '15px 30px', borderRadius: '50px' }}
        />
      </div>

      <FooterCourse
      // styles={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
      />
    </div>
  )
}

export default Login
