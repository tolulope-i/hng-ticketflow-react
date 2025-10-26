import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/auth/login')
        setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    

    return (
        <header className="header">
            <div className="container">
                <nav className="nav" role="navigation">
                    <Link to="/" className="logo" aria-label="TicketFlow Home">
                        TicketFlow
                    </Link>

                    <button
                        className="nav-toggle"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {
                            isMenuOpen ? (
                                <span>&#10005; {/* Close icon */}</span>
                            ) : (
                                <span>&#9776; {/* Hamburger icon */}</span>
                            )
                        }
                    </button>

                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        {user ? (
                            <>
                                <li>
                                    <Link
                                        to="/dashboard"
                                        className="nav-link"
                                        onClick={closeMenu}
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/tickets"
                                        className="nav-link"
                                        onClick={closeMenu}
                                    >
                                        Tickets
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-outline btn-sm"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        to="/auth/login"
                                        className="nav-link"
                                        onClick={closeMenu}
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/auth/signup"
                                        className="btn btn-primary btn-sm"
                                        onClick={closeMenu}
                                    >
                                        Get Started
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header