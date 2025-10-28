import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Loading session and users from localStorage
    const session = localStorage.getItem('ticketapp_session')
    const users = JSON.parse(localStorage.getItem('ticketapp_users') || '[]')
    
    if (session) {
      try {
        const userData = JSON.parse(session)
        // Verifying if user still exists in users list
        const userExists = users.find(u => u.email === userData.email)
        if (userExists) {
          setUser(userData)
        } else {
          localStorage.removeItem('ticketapp_session')
        }
      } catch (error) {
        localStorage.removeItem('ticketapp_session')
        console.log(error)
      }
    }
    setLoading(false)
  }, [])

  // Initializing demo users if no user exist
  const initializeDemoUsers = () => {
    const users = JSON.parse(localStorage.getItem('ticketapp_users') || '[]')
    if (users.length === 0) {
      const demoUsers = [
        {
          id: 1,
          name: 'Demo User',
          email: 'demo@ticketflow.com',
          password: 'demo123'
        },
        {
           id: 2,
          name: 'Dev Tolu',
          email: 'tolu@gmail.com',
          password: 'tolu123'
        }
      ]
      localStorage.setItem('ticketapp_users', JSON.stringify(demoUsers))
    }
  }

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        initializeDemoUsers()
        const users = JSON.parse(localStorage.getItem('ticketapp_users') || '[]')
        const user = users.find(u => u.email === email && u.password === password)
        
        if (user) {
          const userData = {
            id: user.id,
            email: user.email,
            name: user.name
          }
          setUser(userData)
          localStorage.setItem('ticketapp_session', JSON.stringify(userData))
          resolve(userData)
        } else {
          reject(new Error('Invalid email or password'))
        }
      }, 1000)
    })
  }

  const signup = (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        initializeDemoUsers()
        const users = JSON.parse(localStorage.getItem('ticketapp_users') || '[]')
        
        // Checking if user already exists
        const existingUser = users.find(u => u.email === email)
        if (existingUser) {
          reject(new Error('User with this email already exists'))
          return
        }

        // Validating input
        if (!name || !email || !password) {
          reject(new Error('Please fill all fields'))
          return
        }

        if (password.length < 6) {
          reject(new Error('Password must be at least 6 characters'))
          return
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
          reject(new Error('Please enter a valid email address'))
          return
        }

        // Creating new user
        const newUser = {
          id: Date.now(),
          name,
          email,
          password,
          createdAt: new Date().toISOString()
        }

        const updatedUsers = [...users, newUser]
        localStorage.setItem('ticketapp_users', JSON.stringify(updatedUsers))

        const userData = {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name
        }
        setUser(userData)
        localStorage.setItem('ticketapp_session', JSON.stringify(userData))
        resolve(userData)
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('ticketapp_session')
  }

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
