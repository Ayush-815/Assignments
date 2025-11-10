import React, { createContext, useContext, useReducer, useEffect } from 'react'

const AuthContext = createContext()

const initialState = {
  isAuthenticated: false,
  user: null
}

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { isAuthenticated: true, user: action.payload }
    case 'LOGOUT':
      return { isAuthenticated: false, user: null }
    default:
      return state
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const savedUser = localStorage.getItem('loggedInUser')
    if (savedUser) {
      dispatch({ type: 'LOGIN', payload: JSON.parse(savedUser) })
    }
  }, [])

  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    const found = users.find(u => u.email === email && u.password === password)
    if (!found) throw new Error('Invalid credentials')
    localStorage.setItem('loggedInUser', JSON.stringify(found))
    dispatch({ type: 'LOGIN', payload: found })
  }

  const register = ({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    if (users.find(u => u.email === email)) throw new Error('Email already exists')
    const newUser = { name, email, password }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('loggedInUser', JSON.stringify(newUser))
    dispatch({ type: 'LOGIN', payload: newUser })
  }

  const logout = () => {
    localStorage.removeItem('loggedInUser')
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <AuthContext.Provider value={{ state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}