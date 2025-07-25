import { useState } from 'react'
import { useAuthContext } from './useAuthContext.jsx'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (username, password) => {
    setLoading(true)
    setError(null)

    const response = await fetch(
        'http://localhost:5000/api/v1/clients/users/login',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        }
    )

    const json = await response.json()

    if (!response.ok) {
      setLoading(false)
      setError(json.error)
    }

    if (response.ok) {
      //save user to localStorage
      localStorage.setItem('user', JSON.stringify(json))

      //update AuthContext
      dispatch({ type: 'LOGIN', payload: json })

      setLoading(false)
    }
  }

  return { login, loading, error }
}
