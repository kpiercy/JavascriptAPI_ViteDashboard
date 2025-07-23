import React, { Component, useState } from 'react'
import './index.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme.jsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useAuthContext } from './hooks/useAuthContext.jsx'
import Topbar from './components/ui/global/Topbar.jsx'
import Dashboard from './components/ui/dashboard/index.jsx'
import Sidebar from './components/ui/global/Sidebar.jsx'
import AddUserForm from './components/forms/AddUser.jsx'
import AddClientForm from './components/forms/AddClient.jsx'
import UpdateClientForm from './components/forms/UpdateClient.jsx'
import Login from './pages/Login/index.jsx'
import Profile from './pages/Profile/index.jsx'
import Clients from './pages/Clients/index.jsx'
import Users from './pages/Users/index.jsx'
import Jobs from './pages/Jobs/index.jsx'
import Reports from './pages/Reports/index.jsx'
import Kbase from './pages/KBase/index.jsx'
import Settings from './pages/Settings/index.jsx'
import Contacts from './pages/Contacts/index.jsx'
import Downloads from './pages/Downloads/index.jsx'
import Processes from './pages/Processes/index.jsx'
import Workflows from './pages/Workflows/index.jsx'
import Facilities from './pages/Facilities/index.jsx'
import ReturnLogs from './pages/ReturnLogs/index.jsx'
import Returns from './pages/Returns/index.jsx'
import Invoices from './pages/Invoices/index.jsx'

function App() {
  const { user } = useAuthContext()
  const [theme, colorMode] = useMode()
  //const [isSidebar, setIsSidebar] = useState(true)

  return (
      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                  <Sidebar />
                  <main className="content">
                      <Topbar />
                      <Routes>
                          <Route
                              path="/login"
                              element={!user ? <Login /> : <Navigate to="/" />}
                          />
                          <Route
                              path="/"
                              element={
                                  user ? (
                                      <Dashboard />
                                  ) : (
                                      <Navigate to="/login" />
                                  )
                              }
                          />
                          <Route
                              path="/profile"
                              element={
                                  user ? <Profile /> : <Navigate to="/login" />
                              }
                          />
                          <Route
                              path="/clients"
                              element={
                                  user ? <Clients /> : <Navigate to="/login" />
                              }
                          />
                          <Route
                              path="/users"
                              element={
                                  user ? <Users /> : <Navigate to="/login" />
                              }
                          />
                          <Route
                              path="/users/create"
                              element={
                                  user ? (
                                      <AddUserForm />
                                  ) : (
                                      <Navigate to="/login" />
                                  )
                              }
                          />
                          <Route
                              path="/clients/create"
                              element={
                                  user ? (
                                      <AddClientForm />
                                  ) : (
                                      <Navigate to="/login" />
                                  )
                              }
                          />
                          <Route
                              path="/clients/:clientid/update"
                              element={
                                  user ? (
                                      <UpdateClientForm />
                                  ) : (
                                      <Navigate to="/login" />
                                  )
                              }
                          />
                          {/* <Route
                                path="/clients/:clientid"
                                element={user ? <ClientDetail /> : <Navigate to="/login" />

                                } 
                            /> */}
                          <Route
                              path="/clients/:clientid/jobs"
                              element={
                                  user ? <Jobs /> : <Navigate to="/login" />
                              }
                          />
                          <Route
                              path="/clients/:clientid/jobs/:jobid/contacts"
                              element={
                                  user ? <Contacts /> : <Navigate to="/login" />
                              }
                          />
                          <Route
                              path="/clients/:clientid/jobs/:jobid/downloads"
                              element={
                                  user ? (
                                      <Downloads />
                                  ) : (
                                      <Navigate to="/login" />
                                  )
                              }
                          />
                          <Route
                              path="/clients/:clientid/jobs/:jobid/processes"
                              element={
                                  user ? (
                                      <Processes />
                                  ) : (
                                      <Navigate to="/login" />
                                  )
                              }
                          />
                          <Route
                              path="/clients/:clientid/jobs/:jobid/workflows"
                              element={
                                  user ? (
                                      <Workflows />
                                  ) : (
                                      <Navigate to="/login" />
                                  )
                              }
                          />
                          <Route
                              path="/clients/:clientid/jobs/:jobid/facilities"
                              element={
                                  user ? (
                                      <Facilities />
                                  ) : (
                                      <Navigate to="/login" />
                                  )
                              }
                          />
                          <Route
                              path="/clients/:clientid/jobs/:jobid/returns/logs"
                              element={
                                  user ? (
                                      <ReturnLogs />
                                  ) : (
                                      <Navigate to="/login" />
                                  )
                              }
                          />
                          <Route
                              path="/clients/:clientid/jobs/:jobid/returns"
                              element={
                                  user ? (
                                      <Returns />
                                  ) : (
                                      <Navigate to="/login" />
                                  )
                              }
                          />
                          <Route
                              path="/clients/:clientid/invoices"
                              element={
                                  user ? <Invoices /> : <Navigate to="/login" />
                              }
                          />
                          <Route
                              path="/reports"
                              element={
                                  user ? <Reports /> : <Navigate to="/login" />
                              }
                          />
                          <Route
                              path="/kbase"
                              element={
                                  user ? <Kbase /> : <Navigate to="/login" />
                              }
                          />
                          <Route
                              path="/settings"
                              element={
                                  user ? <Settings /> : <Navigate to="/login" />
                              }
                          />
                      </Routes>
                  </main>
              </div>
          </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App
