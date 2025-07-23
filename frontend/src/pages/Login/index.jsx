import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin.jsx'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import Header from '../../components/ui/global/Header.jsx'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, loading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(username, password)
  }

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Login" />
      </Box>
      <form className="login" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="username"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          Sign in
        </button>
        {error && <div className="error">{error}</div>}
      </form>

      {/* <form className="login" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="username" onChange={(e) => setUsername(e.target.value)} value={username} />

        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

        <button disabled={loading}>Log in</button>
        {error && <div className="error">{error}</div>}
      </form> */}
    </Box>
  )
}

export default Login
