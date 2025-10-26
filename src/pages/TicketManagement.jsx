import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useToast } from '../contexts/ToastContext'
import Header from '../components/Header'

function TicketManagement() {
    const { user } = useAuth()
    const { addToast } = useToast()

    const [tickets, setTickets] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [editingTicket, setEditingTicket] = useState(null)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'open',
        priority: 'medium'
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        loadTickets()
    }, [])

    const loadTickets = () => {
        const savedTickets = JSON.parse(localStorage.getItem('ticketapp_tickets') || '[]')
        setTickets(savedTickets)
    }

    const saveTickets = (updatedTickets) => {
        localStorage.setItem('ticketapp_tickets', JSON.stringify(updatedTickets))
        setTickets(updatedTickets)
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.title.trim()) {
            newErrors.title = 'Title is required'
        }

        if (!formData.status) {
            newErrors.status = 'Status is required'
        } else if (!['open', 'in_progress', 'closed'].includes(formData.status)) {
            newErrors.status = 'Status must be open, in_progress, or closed'
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

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            status: 'open',
            priority: 'medium'
        })
        setErrors({})
        setEditingTicket(null)
        setShowForm(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validateForm()) {
            addToast('Please fix the errors in the form', 'error')
            return
        }

        const updatedTickets = [...tickets]

        if (editingTicket) {
            // Update existing ticket
            const index = updatedTickets.findIndex(t => t.id === editingTicket.id)
            if (index !== -1) {
                updatedTickets[index] = {
                    ...updatedTickets[index],
                    ...formData,
                    updatedAt: new Date().toISOString()
                }
            }
            addToast('Ticket updated successfully!', 'success')
        } else {
            // Create new ticket
            const newTicket = {
                id: Date.now(),
                ...formData,
                createdBy: user?.email,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
            updatedTickets.push(newTicket)
            addToast('Ticket created successfully!', 'success')
        }

        saveTickets(updatedTickets)
        resetForm()
    }

    const handleEdit = (ticket) => {
        setFormData({
            title: ticket.title,
            description: ticket.description || '',
            status: ticket.status,
            priority: ticket.priority || 'medium'
        })
        setEditingTicket(ticket)
        setShowForm(true)
    }

    const handleDelete = (ticketId) => {
        if (window.confirm('Are you sure you want to delete this ticket?')) {
            const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId)
            saveTickets(updatedTickets)
            addToast('Ticket deleted successfully!', 'success')
        }
    }

    const getStatusBadge = (status) => {
        const statusConfig = {
            open: { class: 'status-open', label: 'Open' },
            in_progress: { class: 'status-in_progress', label: 'In Progress' },
            closed: { class: 'status-closed', label: 'Closed' }
        }

        const config = statusConfig[status] || statusConfig.open
        return (
            <span className={`status-badge ${config.class}`}>
                {config.label}
            </span>
        )
    }

    return (
        <>
            <Header />

            <div className="container" style={{ padding: '2rem 1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }} className='ticket-hero'>
                    <div>
                        <h1 className="section-title">Ticket Management</h1>
                        <p className="section-description" style={{ marginBottom: 0 }}>
                            Create, view, edit, and manage your support tickets
                        </p>
                    </div>

                    <button
                        onClick={() => setShowForm(true)}
                        className="btn btn-primary"
                    >
                        Create New Ticket
                    </button>
                </div>

                {showForm && (
                    <div className="card mb-4">
                        <h2 className="mb-3">
                            {editingTicket ? 'Edit Ticket' : 'Create New Ticket'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title" className="form-label">Title *</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className={`form-input ${errors.title ? 'error' : ''}`}
                                    aria-describedby={errors.title ? 'title-error' : undefined}
                                    required
                                />
                                {errors.title && (
                                    <div id="title-error" className="form-error" role="alert">
                                        ⚠️ {errors.title}
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="form-textarea"
                                    rows="4"
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div className="form-group">
                                    <label htmlFor="status" className="form-label">Status *</label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        className={`form-select ${errors.status ? 'error' : ''}`}
                                        aria-describedby={errors.status ? 'status-error' : undefined}
                                        required
                                    >
                                        <option value="open">Open</option>
                                        <option value="in_progress">In Progress</option>
                                        <option value="closed">Closed</option>
                                    </select>
                                    {errors.status && (
                                        <div id="status-error" className="form-error" role="alert">
                                            ⚠️ {errors.status}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="priority" className="form-label">Priority</label>
                                    <select
                                        id="priority"
                                        name="priority"
                                        value={formData.priority}
                                        onChange={handleChange}
                                        className="form-select"
                                    >
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="btn btn-outline"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    {editingTicket ? 'Update Ticket' : 'Create Ticket'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="ticket-grid">
                    {tickets.length === 0 ? (
                        <div className="card text-center" style={{ gridColumn: '1 / -1', padding: '4rem 2rem' }}>
                            <h3 className="mb-2">No tickets yet</h3>
                            <p className="mb-3" style={{ color: 'var(--gray-600)' }}>
                                Create your first ticket to get started with TicketFlow
                            </p>
                            <button
                                onClick={() => setShowForm(true)}
                                className="btn btn-primary"
                            >
                                Create Your First Ticket
                            </button>
                        </div>
                    ) : (
                        tickets.map(ticket => (
                            <div key={ticket.id} className="ticket-card card">
                                <div className="ticket-header">
                                    <h3 className="ticket-title">{ticket.title}</h3>
                                    <div className="ticket-actions">
                                        <button
                                            onClick={() => handleEdit(ticket)}
                                            className="btn btn-outline btn-sm"
                                            aria-label={`Edit ticket: ${ticket.title}`}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(ticket.id)}
                                            className="btn btn-danger btn-sm"
                                            aria-label={`Delete ticket: ${ticket.title}`}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>

                                {ticket.description && (
                                    <p className="ticket-description">{ticket.description}</p>
                                )}

                                <div className="ticket-meta">
                                    <div>
                                        {getStatusBadge(ticket.status)}
                                    </div>
                                    <div className="ticket-priority">
                                        Priority: {ticket.priority}
                                    </div>
                                </div>

                                <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginTop: '0.5rem' }}>
                                    Created: {new Date(ticket.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default TicketManagement