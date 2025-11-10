import { useState } from 'react'

export default function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    if (values.name) {
      const nameRegex = /^[a-zA-Z\s]{3,30}$/
      if (!nameRegex.test(values.name)) throw new Error('Name must be 3-30 letters only')
    }
    if (values.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(values.email)) throw new Error('Invalid email format')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError(null)
      setLoading(true)
      validate()
      await onSubmit(values)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { values, handleChange, handleSubmit, loading, error }
}