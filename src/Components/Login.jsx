import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function LoginPage(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate()

  const onChangeEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const onChangePassWord = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    let isValid = true
    e.preventDefault()
    // Email validation
    if (!email) {
      setEmailError('Email is required')
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format')
      isValid = false
    } else {
      setEmailError('')
    }

    // Password validation
    if (!password) {
      setPasswordError('Password is required')
      isValid = false
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}/.test(password)
    ) {
      setPasswordError(
        'Password must contain at least eight characters, at least one number, both lower and uppercase letters, and special characters',
      )
      isValid = false
    } else {
      setPasswordError('')
    }
    if (isValid) {
      navigate(`/form-details`)
    }
  }

  return (
    <div className="custom-div-main">
      
      <Typography variant="h4" mb={4} className="custom-typography">
        Login
      </Typography>
      <div className="row">
        <div className="col-12">
          <TextField
            label="Email"
            type="email"
            required
            value={email}
            onChange={onChangeEmail}
            error={!!emailError}
            helperText={emailError}
            style={{ width: '500px', margin: 30, marginTop: 0 }}
          />
        </div>
        <div className="col-12">
          <TextField
            label="Password"
            type="password"
            required
            value={password}
            onChange={onChangePassWord}
            error={!!passwordError}
            helperText={passwordError}
            style={{ width: '500px', margin: 30, marginTop: 0 }}
          />
        </div>
        <div className="custom-div-button">
          <Button
            variant="contained"
            onClick={handleLogin}
            className="box-shadow"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
