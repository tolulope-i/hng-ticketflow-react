import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useToast } from '../contexts/ToastContext'
import Header from '../components/Header'

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  
  const { signup } = useAuth()
  const { addToast } = useToast()
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
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
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
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
      await signup(formData.name, formData.email, formData.password)
      addToast('Account created successfully!', 'success')
      navigate('/dashboard')
    } catch (error) {
      addToast(error.message || 'Signup failed. Please try again.', 'error')
      setErrors({ submit: error.message })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      
      <div className="container" style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div className="card">
            <h1 className="section-title text-center mb-3">Create Account</h1>
            <p className="text-center mb-4" style={{ color: 'var(--gray-600)' }}>
              Join TicketFlow and streamline your workflow
            </p>
            
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  required
                />
                {errors.name && (
                  <div id="name-error" className="form-error" role="alert">
                    ⚠️ {errors.name}
                  </div>
                )}
              </div>
              
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
              
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                  aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
                  required
                />
                {errors.confirmPassword && (
                  <div id="confirm-password-error" className="form-error" role="alert">
                    ⚠️ {errors.confirmPassword}
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
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
            
            <p className="text-center mt-3">
              Already have an account?{' '}
              <Link to="/auth/login" className="nav-link" style={{ display: 'inline' }}>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup