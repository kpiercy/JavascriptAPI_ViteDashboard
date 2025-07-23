import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
//
import { ClientContextProvider } from './contexts/ClientContext.jsx'
import { ProfileContextProvider } from './contexts/ProfileContext.jsx'
import { UserContextProvider } from './contexts/UserContext.jsx'
import { JobContextProvider } from './contexts/JobContext.jsx'
import { InvoiceContextProvider } from './contexts/InvoiceContext.jsx'
import { ContactContextProvider } from './contexts/ContactContext.jsx'
import { DownloadContextProvider } from './contexts/DownloadContext.jsx'
import { ProcessContextProvider } from './contexts/ProcessContext.jsx'
import { WorkflowContextProvider } from './contexts/WorkflowContext.jsx'
import { FacilityContextProvider } from './contexts/FacilityContext.jsx'
import { ReturnContextProvider } from './contexts/ReturnContext.jsx'
import { ReturnLogContextProvider } from './contexts/ReturnLogContext.jsx'

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        <AuthContextProvider>
            <BrowserRouter>
                <ClientContextProvider>
                    <ProfileContextProvider>
                        <UserContextProvider>
                            <JobContextProvider>
                                <InvoiceContextProvider>
                                    <ContactContextProvider>
                                        <DownloadContextProvider>
                                            <ProcessContextProvider>
                                                <WorkflowContextProvider>
                                                    <FacilityContextProvider>
                                                        <ReturnLogContextProvider>
                                                            <ReturnContextProvider>
                                                                <App />
                                                            </ReturnContextProvider>
                                                        </ReturnLogContextProvider>
                                                    </FacilityContextProvider>
                                                </WorkflowContextProvider>
                                            </ProcessContextProvider>
                                        </DownloadContextProvider>
                                    </ContactContextProvider>
                                </InvoiceContextProvider>
                            </JobContextProvider>
                        </UserContextProvider>
                    </ProfileContextProvider>
                </ClientContextProvider>
            </BrowserRouter>
        </AuthContextProvider>
    </React.StrictMode>
)
