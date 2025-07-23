import { ReturnLogContext } from '../contexts/ReturnLogContext.jsx'
import { useContext } from 'react'

export const useReturnLogContext = () => {
    const context = useContext(ReturnLogContext)

    if (!context) {
        throw Error(
            'useReturnLogContext must be used inside an ReturnLogContextProvider'
        )
    }

    return context
}
