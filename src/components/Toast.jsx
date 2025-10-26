import React from 'react'
import { useToast } from '../contexts/ToastContext'

function Toast() {
    const { toasts, removeToast } = useToast()

    if (toasts.length === 0) return null

    return (
        <div className="toast-container">
            {toasts.map(toast => (
                <div
                    key={toast.id}
                    className={`toast toast-${toast.type}`}
                    role="alert"
                    aria-live="polite"
                >
                    <span>{toast.message}</span>
                    <button
                        onClick={() => removeToast(toast.id)}
                        className="btn btn-sm"
                        style={{ background: 'transparent', border: 'none', fontSize: '1.25rem', padding: 0 }}
                        aria-label="Close notification"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Toast