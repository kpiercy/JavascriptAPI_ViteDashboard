import { FacilityContext } from '../contexts/FacilityContext.jsx'
import { useContext } from 'react'

export const useFacilityContext = () => {
    const context = useContext(FacilityContext)

    if (!context) {
        throw Error(
            'useFacilityContext must be used inside an FacilityContextProvider'
        )
    }

    return context
}
