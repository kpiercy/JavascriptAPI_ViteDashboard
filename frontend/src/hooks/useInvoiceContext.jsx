import { InvoiceContext } from '../contexts/InvoiceContext.jsx'
import { useContext } from 'react'

export const useInvoiceContext = () => {
  const context = useContext(InvoiceContext)

  if (!context) {
    throw Error('useInvoiceContext must be used inside an InvoiceContextProvider')
  }

  return context
}