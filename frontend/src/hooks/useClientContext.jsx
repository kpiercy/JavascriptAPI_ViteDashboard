import { ClientContext } from '../contexts/ClientContext.jsx'
import { useContext } from 'react'

export const useClientContext = () => {
  const context = useContext(ClientContext)

  if (!context) {
    throw Error('useClientContext must be used inside an ClientContextProvider')
  }

  return context
}
