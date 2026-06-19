import { createContext, useState, useEffect, useCallback } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [signInOpen, setSignInOpen] = useState(false)
  const [signUpOpen, setSignUpOpen] = useState(false)

  // Initialize from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('resolvo_user')
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse stored user:', e)
      }
    }
    setLoading(false)
  }, [])

  const signin = useCallback((email, password) => {
    // Simulate API call with validation
    if (!email || !password) {
      throw new Error('Email and password are required')
    }

    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0],
      createdAt: new Date().toISOString(),
      plan: 'free',
      trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    }

    setUser(userData)
    localStorage.setItem('resolvo_user', JSON.stringify(userData))
    setSignInOpen(false)
    return userData
  }, [])

  const signup = useCallback((email, password, name) => {
    // Simulate API call with validation
    if (!email || !password || !name) {
      throw new Error('All fields are required')
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters')
    }

    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      createdAt: new Date().toISOString(),
      plan: 'free',
      trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    }

    setUser(userData)
    localStorage.setItem('resolvo_user', JSON.stringify(userData))
    setSignUpOpen(false)
    return userData
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('resolvo_user')
  }, [])

  const value = {
    user,
    loading,
    signin,
    signup,
    logout,
    signInOpen,
    setSignInOpen,
    signUpOpen,
    setSignUpOpen,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
