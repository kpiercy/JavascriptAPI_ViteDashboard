import { ReturnContext } from '../contexts/ReturnContext.jsx'
import { useContext } from 'react'

export const useReturnContext = () => {
    const context = useContext(ReturnContext)

    if (!context) {
        throw Error(
            'useReturnContext must be used inside an ReturnContextProvider'
        )
    }

    return context
}
