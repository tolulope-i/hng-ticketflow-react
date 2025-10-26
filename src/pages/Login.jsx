import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useToast } from '../contexts/ToastContext'
import Header from '../components/Header'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  
  const { login } = useAuth()
  const { addToast } = useToast()
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      addToast('Please fix the form errors', 'error')
      return
    }
    
    setIsLoading(true)
    
    try {
      await login(formData.email, formData.password)
      addToast('Login successful!', 'success')
      navigate('/dashboard')
    } catch (error) {
      addToast(error.message || 'Login failed. Please try again.', 'error')
      setErrors({ submit: error.message })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDemoLogin = () => {
    setFormData({
      email: 'demo@ticketflow.com',
      password: 'demo123'
    })
  }

  return (
    <>
      <Header />
      
      <div className="container" style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div className="card">
            <h1 className="section-title text-center mb-3">Welcome Back</h1>
            <p className="text-center mb-4" style={{ color: 'var(--gray-600)' }}>
              Sign in to your TicketFlow account
            </p>
            
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  required
                />
                {errors.email && (
                  <div id="email-error" className="form-error" role="alert">
                    ⚠️ {errors.email}
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-input ${errors.password ? 'error' : ''}`}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                  required
                />
                {errors.password && (
                  <div id="password-error" className="form-error" role="alert">
                    ⚠️ {errors.password}
                  </div>
                )}
              </div>

              {errors.submit && (
                <div className="form-error mb-3 text-center" role="alert">
                  ⚠️ {errors.submit}
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            <div className="text-center mt-3">
              <button
                onClick={handleDemoLogin}
                className="btn btn-outline btn-sm"
                style={{ width: '100%' }}
                type="button"
              >
                Use Demo Account
              </button>
            </div>
            
            <p className="text-center mt-3">
              Don't have an account?{' '}
              <Link to="/auth/signup" className="nav-link" style={{ display: 'inline' }}>
                Sign up
              </Link>
            </p>
          </div>
          
          <div className="card mt-4">
            <h3 className="text-center mb-2">Demo Accounts</h3>
            <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
              <p><strong>Account 1:</strong><br />demo@ticketflow.com / demo123</p>
              <p><strong>Account 2:</strong><br />tolu@gmail.com / tolu123</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login