import { UserContext } from '../contexts/UserContext.jsx'
import { useContext } from 'react'

export const useUserContext = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw Error('useUserContext must be used inside an UserContextProvider')
  }

  return context
}
