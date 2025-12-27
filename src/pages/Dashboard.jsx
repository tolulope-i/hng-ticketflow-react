import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";
import { CircleCheck, Clock, ChartNoAxesCombined, Zap } from "lucide-react";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";

import { DashboardSidebar } from "@/components/DashboardSidebar";

function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    closed: 0,
  });

  useEffect(() => {
    // Loading tickets from localStorage and calculating stats
    const tickets = JSON.parse(
      localStorage.getItem("ticketapp_tickets") || "[]"
    );

    const total = tickets.length;
    const open = tickets.filter((ticket) => ticket.status === "open").length;
    const inProgress = tickets.filter(
      (ticket) => ticket.status === "in_progress"
    ).length;
    const closed = tickets.filter(
      (ticket) => ticket.status === "closed"
    ).length;

    setStats({ total, open, inProgress, closed });
  }, []);

  return (
    <>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <div className="container" style={{ padding: "2rem 1rem" }}>
            <SidebarTrigger />

            <div>
              <div className="mb-4">
                <h1 className="section-title">Dashboard</h1>
                <p className="section-description" style={{ marginBottom: 0 }}>
                  Welcome back, {user?.name}! Here's your ticket overview.
                </p>
              </div>

              <div className="stats-grid">
                <div className="stat-card card">
                  <div className="stat-icon" aria-hidden="true">
                    <CircleCheck />
                  </div>
                  <div className="stat-number">{stats.total}</div>
                  <div className="stat-label">Total Tickets</div>
                </div>

                <div className="stat-card card">
                  <div className="stat-icon" aria-hidden="true">
                    <Clock />
                  </div>
                  <div
                    className="stat-number"
                    style={{ color: "var(--success-color)" }}
                  >
                    {stats.open}
                  </div>
                  <div className="stat-label">Open Tickets</div>
                </div>

                <div className="stat-card card">
                  <div className="stat-icon" aria-hidden="true">
                    <ChartNoAxesCombined />
                  </div>
                  <div
                    className="stat-number"
                    style={{ color: "var(--warning-color)" }}
                  >
                    {stats.inProgress}
                  </div>
                  <div className="stat-label">In Progress</div>
                </div>

                <div className="stat-card card">
                  <div className="stat-icon" aria-hidden="true">
                    <Zap />
                  </div>
                  <div
                    className="stat-number"
                    style={{ color: "var(--gray-500)" }}
                  >
                    {stats.closed}
                  </div>
                  <div className="stat-label">Closed Tickets</div>
                </div>
              </div>
            </div>

            <div className="quick-actions">
              <div className="card card1">
                <h2 className="mb-3">Quick Actions</h2>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link to="/tickets" className="btn btn-primary">
                    Manage Tickets
                  </Link>
                  <Link to="/tickets?create=true" className="btn btn-secondary">
                    Create New Ticket
                  </Link>
                </div>
              </div>

              <div className="card mt-4">
                <h2 className="mb-3">Recent Activity</h2>
                <p style={{ color: "var(--gray-500)" }}>
                  Your recent tickets and updates will appear here.
                  <Link
                    to="/tickets"
                    className="nav-link"
                    style={{ display: "inline", marginLeft: "0.5rem" }}
                  >
                    View all tickets
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default Dashboard;
