import React, {
  createContext, useCallback, useContext, useEffect,
  useMemo, useRef, useState
} from 'react'
import { createPortal } from 'react-dom'
import { CheckIcon, CloseIcon } from '../Icons'
import '../styles/Toast.css'

const ToastContext = createContext(null)

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>')
  return ctx
}

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])
  const idRef = useRef(0)

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback((message, options = {}) => {
    const id = ++idRef.current
    const next = {
      id,
      message,
      variant: options.variant || 'success',  // success | error | info
      duration: options.duration ?? 2400,
    }
    setToasts((prev) => [...prev, next])
    if (next.duration > 0) {
      setTimeout(() => dismiss(id), next.duration)
    }
    return id
  }, [dismiss])

  const value = useMemo(() => ({ toast, dismiss }), [toast, dismiss])

  return (
    <ToastContext.Provider value={value}>
      {children}
      {createPortal(
        <div
          className="toast-stack"
          role="region"
          aria-live="polite"
          aria-label="Notifications"
        >
          {toasts.map((t) => (
            <div
              key={t.id}
              className={`toast toast--${t.variant}`}
              role="status"
            >
              <span className="toast-icon" aria-hidden="true">
                <CheckIcon size={14} />
              </span>
              <span className="toast-msg">{t.message}</span>
              <button
                type="button"
                className="toast-close"
                onClick={() => dismiss(t.id)}
                aria-label="Dismiss"
              >
                <CloseIcon size={14} />
              </button>
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  )
}

/**
 * Convenience hook to copy text to clipboard with toast feedback.
 *   const copy = useCopy()
 *   copy('hello@example.com', 'Email copied')
 */
export const useCopy = () => {
  const { toast } = useToast()
  return useCallback(async (text, message = 'Copied') => {
    try {
      await navigator.clipboard.writeText(text)
      toast(message, { variant: 'success' })
    } catch {
      toast('Could not copy', { variant: 'error' })
    }
  }, [toast])
}
