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
                  <p className="hero-pre-title">Simple. Reliable. Built for teams</p>
                  <h1 id="hero-title" className="hero-title">
                    Streamline your <span>support with TicketFlow</span>
                  </h1>
                  <p className="hero-description">
                    A clean and easy-to-use ticket management system that helps teams create, track, update, and resolve support requests efficiently all in one place
                  </p>
                  <div className="hero-actions">
                    <Link to="/auth/signup" className="btn btn-outline">
                      {" "}
                      Get Started Free{" "}
                    </Link>
                    <a href="#features" className="btn btn-primary">
                      Learn more
                    </a>
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
              Handle support requests in a clear, structured workflow, ensuring no confusion, no missed tickets
            </p>

            <div className="steps-grid">
              <div className="step-card card">
                <div className="step-number">Step 1</div>
                <div className="step-icon" aria-hidden="true">
                  <CircleCheck />
                </div>
                <h3 className="step-title">Create Tickets</h3>
                <p className="step-description">
                  Submit tickets with clear details so issues are properly logged, tracked, and addressed by the right team members.
                </p>
              </div>

              <div className="step-card card">
                <div className="step-number">Step 2</div>
                <div className="step-icon" aria-hidden="true">
                  <Clock />
                </div>
                <h3 className="step-title">View & Track Tickets</h3>
                <p className="step-description">
                  View all tickets in a centralized dashboard with their current status, priority, and progress at a glance.
                </p>
              </div>

              <div className="step-card card">
                <div className="step-number">Step 3</div>
                <div className="step-icon" aria-hidden="true">
                  <CircleCheck />
                </div>
                <h3 className="step-title">Update & Manage Tickets</h3>
                <p className="step-description">
                  Update ticket details, fix mistakes, add new information, or make changes as issues evolve.
                </p>
              </div>

              <div className="step-card card">
                <div className="step-number">Step 4</div>
                <div className="step-icon" aria-hidden="true">
                  <ChartNoAxesCombined />
                </div>
                <h3 className="step-title">Resolve & Close Tickets</h3>
                <p className="step-description">
                  Move tickets between Open, In Progress, and Closed states to keep work flowing and nothing forgotten.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="features"
          id="features"
          aria-labelledby="features-title"
        >
          <div className="wrapper">
            <h2 id="features-title" className="section-title">
              Why Choose TicketFlow?
            </h2>
            <p className="section-description">
              Core features designed to keep your support process simple, clear, and efficient.
            </p>

            <div className="features-grid">
              <div className="feature-card card">
                <div className="feature-icon" aria-hidden="true">
                  <Zap />
                </div>
                <h3 className="feature-title">Fast & Simple Workflow</h3>
                <p className="feature-description">
                  TicketFlow focuses on the essentials, making it easy to create, track, and resolve tickets quickly without unnecessary complexity.
                </p>
              </div>

              <div className="feature-card card">
                <div className="feature-icon" aria-hidden="true">
                  <Sparkles />
                </div>
                <h3 className="feature-title">Clean & Intuitive Interface</h3>
                <p className="feature-description">
                  A modern, clutter-free interface that makes managing tickets straightforward for both small teams and growing organizations.
                </p>
              </div>

              <div className="feature-card card">
                <div className="feature-icon" aria-hidden="true">
                  <MonitorSmartphone />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Status-Based Ticket Management</h3>
                  <p className="feature-description">
                    Easily change ticket statuses to track progress, identify pending issues, and ensure nothing slips through the cracks.
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
                <h2 className="cta-title">Ready to organize your support workflow?</h2>
                <p className="cta-description">
                  Start managing tickets with clarity and confidence. No complicated setup just a simple system that works.
                </p>
                <div className="cta-features">
                  <ul>
                    <li>
                      {" "}
                      <span>
                        <CircleCheck />
                      </span>{" "}
                      Create, edit, and delete tickets easily
                    </li>
                    <li>
                      {" "}
                      <span>
                        <CircleCheck />
                      </span>{" "}
                      Track ticket status in real time
                    </li>
                    <li>
                      {" "}
                      <span>
                        <CircleCheck />
                      </span>{" "}
                      Keep all support requests organized
                    </li>
                    <li>
                      {" "}
                      <span>
                        <CircleCheck />
                      </span>{" "}
                      Simple and intuitive dashboard
                    </li>
                    <li>
                      {" "}
                      <span>
                        <CircleCheck />
                      </span>{" "}
                      Works seamlessly across devices
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
