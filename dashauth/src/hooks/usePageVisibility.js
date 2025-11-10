import { useState, useEffect, useCallback } from 'react'

export default function usePageVisibility() {
  const [isVisible, setIsVisible] = useState(!document.hidden)
  const [callback, setCallback] = useState(null)

  const handleVisibilityChange = useCallback(() => {
    const visible = !document.hidden
    setIsVisible(visible)
    if (callback) callback(visible)
  }, [callback])

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [handleVisibilityChange])

  const onChange = (cb) => setCallback(() => cb)

  return { isVisible, onChange }
}