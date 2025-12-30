import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { ToastProvider } from './contexts/ToastContext'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import TicketManagement from './pages/TicketManagement'
import ProtectedRoute from './components/ProtectedRoute'
import Toast from './components/Toast'
import Footer from './components/Footer'

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ToastProvider>
  )
}

function AppContent() {
  const { user } = useAuth()

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/auth/login"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/auth/signup"
          element={user ? <Navigate to="/dashboard" /> : <Signup />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tickets"
          element={
            <ProtectedRoute>
              <TicketManagement />
            </ProtectedRoute>
          }
        />
        
      </Routes>
      <Toast />
    </>
  )
}

export default App