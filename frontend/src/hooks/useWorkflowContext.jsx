import { WorkflowContext } from '../contexts/WorkflowContext.jsx'
import { useContext } from 'react'

export const useWorkflowContext = () => {
    const context = useContext(WorkflowContext)

    if (!context) {
        throw Error(
            'useWorkflowContext must be used inside an WorkflowContextProvider'
        )
    }

    return context
}
