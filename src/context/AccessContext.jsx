import { createContext, useState, useCallback } from 'react'

export const AccessContext = createContext()

export function AccessProvider({ children }) {
  const [requestAccessOpen, setRequestAccessOpen] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState(null)

  const openRequestAccess = useCallback(() => {
    setRequestAccessOpen(true)
    setSubmittedEmail(null)
  }, [])

  const closeRequestAccess = useCallback(() => {
    setRequestAccessOpen(false)
  }, [])

  const markEmailSubmitted = useCallback((email) => {
    setSubmittedEmail(email)
    // In production, this would call an API to send email to boss
    // For now, we just show success message
  }, [])

  const value = {
    requestAccessOpen,
    setRequestAccessOpen,
    openRequestAccess,
    closeRequestAccess,
    submittedEmail,
    markEmailSubmitted,
  }

  return <AccessContext.Provider value={value}>{children}</AccessContext.Provider>
}
