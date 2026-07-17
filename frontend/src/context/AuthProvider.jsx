import { useMemo, useState } from 'react'
import AuthContext from './AuthContext.js'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
const AUTH_STORAGE_KEY = 'portfolio-auth'

function readStoredAuth() {
  try {
    const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY)
    return storedAuth ? JSON.parse(storedAuth) : null
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    return null
  }
}

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(readStoredAuth)

  async function login(credentials) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    const result = await response.json().catch(() => ({}))

    if (!response.ok) {
      throw new Error(result.message || 'Unable to sign in.')
    }

    const nextAuth = result.data ?? result
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextAuth))
    setAuth(nextAuth)
    return nextAuth
  }

  function logout() {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    setAuth(null)
  }

  const value = useMemo(
    () => ({
      user: auth?.user ?? null,
      token: auth?.token ?? null,
      isAuthenticated: Boolean(auth?.token),
      login,
      logout,
    }),
    [auth],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
