import React from 'react'
import { useAuth } from '../context/AuthContext'
import '../styles/dashboard.css'

export default function Dashboard() {
  const { state } = useAuth()
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Welcome, {state.user?.name}!</h2>
        <p>Email: {state.user?.email}</p>
      </div>
    </div>
  )
}