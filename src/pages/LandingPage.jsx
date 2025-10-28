import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaMobileAlt } from 'react-icons/fa';
import { FaMagic } from 'react-icons/fa';
import { FaBolt } from 'react-icons/fa';

function LandingPage() {
  return (
    <>
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <div className="ocean-enhanced" aria-hidden="true">
          <div className="enhanced-wave front"></div>
          <div className="enhanced-wave middle"></div>
          <div className="enhanced-wave back"></div>
        </div>

        <div className="ocean-blue-waves" aria-hidden="true">
          <div className="blue-wave blue-wave-1"></div>
          <div className="blue-wave blue-wave-2"></div>
          <div className="blue-wave blue-wave-3"></div>
        </div>
        
        <div className="decorative-circle circle-1" aria-hidden="true"></div>
        <div className="decorative-circle circle-2" aria-hidden="true"></div>
        <div className="decorative-circle circle-3" aria-hidden="true"></div>

        <div className="container">
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">
              Streamline Your Support with TicketFlow
            </h1>
            <p className="hero-description">
              A modern, intuitive ticket management system that helps teams
              track, prioritize, and resolve issues efficiently. Beautiful
              design meets powerful functionality.
            </p>
            <div className="hero-actions">
              <Link to="/auth/login" className="btn btn-secondary">
                Login to Dashboard
              </Link>
              <Link to="/auth/signup" className="btn btn-outline">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features" aria-labelledby="features-title">
        <div className="container">
          <h2 id="features-title" className="section-title">
            Why Choose TicketFlow?
          </h2>
          <p className="section-description">
            Built with modern web technologies for the best user experience
          </p>

          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon" aria-hidden="true">
                <FaBolt />
              </div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-description">
                Built with performance in mind. Experience blazing fast ticket
                management with instant updates and real-time notifications.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon" aria-hidden="true">
                <FaMagic />
              </div>
              <h3 className="feature-title">Beautiful UI</h3>
              <p className="feature-description">
                Enjoy a clean, modern interface that's both beautiful and
                functional. Designed with accessibility and user experience as
                top priorities.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon" aria-hidden="true">
                <FaMobileAlt />
              </div>
              <h3 className="feature-title">Fully Responsive</h3>
              <p className="feature-description">
                Works perfectly on all devices - from desktop to mobile. Manage
                your tickets anywhere, anytime with our responsive design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;