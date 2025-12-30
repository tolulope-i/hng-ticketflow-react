import { Calendar, Home, Inbox, Search, Settings, LogOut } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Tickets",
    url: "/tickets",
    icon: Inbox,
  },
  {
    title: "Create Tickets",
    url: "/tickets",
    icon: Calendar,
  },
  // {
  //   title: "Logout",
  //   url: "#",
  //   icon: LogOut,
  // },
];

export function DashboardSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <Sidebar style={{ 'padding': '20px 30px' }}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h2>
              <span style={{ margin: "30px 0px", fontSize: "30px", fontWeight: "600", color: "#4F46E5" }}>
                <a href="/">
                  TicketFlow
                </a>
              </span>
            </h2>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} style={{ margin: "10px 0px", fontSize: "18px" }}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <button
          onClick={handleLogout}
          className="btn btn-outline"
          style={{ margin: "20px " }}
        >
          Logout
          <LogOut />
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
