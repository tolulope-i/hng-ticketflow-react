import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaMobileAlt } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import {
  CircleCheck,
  Clock,
  ChartNoAxesCombined,
  Zap,
  Sparkles,
  MonitorSmartphone,
} from "lucide-react";

function LandingPage() {
  return (
    <div>
      <Header />
      <div>
        <section
          className="hero-section background-wrapper"
          aria-labelledby="hero-title"
        >
          <div className="wrapper">
            <div className="hero">
              <div
                className="decorative-circle circle-1"
                aria-hidden="true"
              ></div>
              <div
                className="decorative-circle circle-2"
                aria-hidden="true"
              ></div>
              <div
                className="decorative-circle circle-3"
                aria-hidden="true"
              ></div>

              <div className="gradient-bg"></div>
              <div className="blur-circle circle-top-right"></div>
              <div className="blur-circle circle-bottom-left"></div>

              <div className="layout-container">
                <div className="hero-content">
                  <p className="hero-pre-title">Now with AI-powered insights</p>
                  <h1 id="hero-title" className="hero-title">
                    Streamline your <span>support with TicketFlow</span>
                  </h1>
                  <p className="hero-description">
                    A modern, intuitive ticket management system that helps
                    teams track, prioritize, and resolve issues efficiently.
                    Beautiful design meets powerful functionality.
                  </p>
                  <div className="hero-actions">
                    <Link to="/auth/login" className="btn btn-primary">
                      Login to Dashboard
                    </Link>
                    <Link to="/auth/signup" className="btn btn-outline">
                      {" "}
                      Get Started Free{" "}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="hero-image">
                <img
                  src="/ticket3.png"
                  alt="Illustration showing ticket management"
                  className="hero-illustration"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works" aria-labelledby="how-it-works">
          <div className="wrapper">
            <h2 id="how-it-works" className="section-title">
              How TicketFlow Works
            </h2>
            <p className="section-description">
              Simplify your support process in three easy steps
            </p>

            <div className="steps-grid">
              <div className="step-card card">
                <div className="step-number">Step 1</div>
                <div className="step-icon" aria-hidden="true">
                  <CircleCheck />
                </div>
                <h3 className="step-title">Create Tickets</h3>
                <p className="step-description">
                  Easily create and submit support tickets through our
                  user-friendly interface.
                </p>
              </div>

              <div className="step-card card">
                <div className="step-number">Step 2</div>
                <div className="step-icon" aria-hidden="true">
                  <Clock />
                </div>
                <h3 className="step-title">Track Progress</h3>
                <p className="step-description">
                  Monitor the status of your tickets in real-time with our
                  intuitive dashboard.
                </p>
              </div>

              <div className="step-card card">
                <div className="step-number">Step 3</div>
                <div className="step-icon" aria-hidden="true">
                  <CircleCheck />
                </div>
                <h3 className="step-title">Resolve Issues</h3>
                <p className="step-description">
                  Collaborate with your team to efficiently resolve tickets and
                  improve customer satisfaction.
                </p>
              </div>

              <div className="step-card card">
                <div className="step-number">Step 4</div>
                <div className="step-icon" aria-hidden="true">
                  <ChartNoAxesCombined />
                </div>
                <h3 className="step-title">Analyze Data</h3>
                <p className="step-description">
                  Leverage AI-powered insights to identify trends and optimize
                  your support process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="features" aria-labelledby="features-title">
          <div className="wrapper">
            <h2 id="features-title" className="section-title">
              Why Choose TicketFlow?
            </h2>
            <p className="section-description">
              Built with modern web technologies for the best user experience
            </p>

            <div className="features-grid">
              <div className="feature-card card">
                <div className="feature-icon" aria-hidden="true">
                  <Zap />
                </div>
                <h3 className="feature-title">Lightning Fast</h3>
                <p className="feature-description">
                  Built with performance in mind. Experience blazing fast ticket
                  management with instant updates and real-time notifications.
                </p>
              </div>

              <div className="feature-card card">
                <div className="feature-icon" aria-hidden="true">
                  <Sparkles />
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
                  <MonitorSmartphone />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Fully Responsive</h3>
                  <p className="feature-description">
                    Works perfectly on all devices - from desktop to mobile.
                    Manage your tickets anywhere, anytime with our responsive
                    design. Our bento grid layout adapts beautifully to every
                    screen size.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section" aria-labelledby="cta-title">
          <div className="wrapper">
            <div className="cta">
              <div className="cta-content">
                <h2 className="cta-title">Ready to Get Started?</h2>
                <p className="cta-description">
                  Join thousands of teams using TicketFlow to streamline their
                  support process.
                </p>
                <div className="cta-features">
                  <ul>
                    <li>
                      {" "}
                      <span>
                        <CircleCheck />
                      </span>{" "}
                      Easy Ticket Creation
                    </li>
                    <li>
                      {" "}
                      <span>
                        <CircleCheck />
                      </span>{" "}
                      Real-Time Tracking
                    </li>
                    <li>
                      {" "}
                      <span>
                        <CircleCheck />
                      </span>{" "}
                      AI-Powered Insights
                    </li>
                    <li>
                      {" "}
                      <span>
                        <CircleCheck />
                      </span>{" "}
                      Collaborative Resolution
                    </li>
                    <li>
                      {" "}
                      <span>
                        <CircleCheck />
                      </span>{" "}
                      Responsive Design
                    </li>
                    <li>
                      {" "}
                      <span>
                        <CircleCheck />
                      </span>{" "}
                      Beautiful Interface
                    </li>
                  </ul>
                </div>
                <Link to="/auth/signup" className="btn btn-primary btn-lg">
                  Sign Up for Free
                </Link>
              </div>
              <div className="cta-image">
                <img
                  src="/team-collaboration.jfif"
                  alt="Illustration showing team collaboration"
                  className="cta-illustration"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
