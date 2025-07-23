import { ProcessContext } from '../contexts/ProcessContext.jsx'
import { useContext } from 'react'

export const useProcessContext = () => {
    const context = useContext(ProcessContext)

    if (!context) {
        throw Error(
            'useProcessContext must be used inside an ProcessContextProvider'
        )
    }

    return context
}
