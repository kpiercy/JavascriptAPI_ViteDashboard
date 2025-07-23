import { JobContext } from '../contexts/JobContext.jsx'
import { useContext } from 'react'

export const useJobContext = () => {
  const context = useContext(JobContext)

  if (!context) {
    throw Error('useJobContext must be used inside an JobContextProvider')
  }

  return context
}