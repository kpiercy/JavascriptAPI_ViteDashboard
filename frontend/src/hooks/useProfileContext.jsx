import { ProfileContext } from '../contexts/ProfileContext.jsx'
import { useContext } from 'react'

export const useProfileContext = () => {
  const context = useContext(ProfileContext)

  if (!context) {
    throw Error('useProfileContext must be used inside an ProfileContextProvider')
  }

  return context
}
