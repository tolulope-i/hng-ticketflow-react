import { Calendar, Home, Inbox, Search, Settings, LogOut } from "lucide-react"

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
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Overview",
    url: "#",
    icon: Home,
  },
  {
    title: "Tickets",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Create Tickets",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOut,
  },
  
]

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>TicketFlow</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
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
        <div className="sidebar-footer">
          <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <a href="#">
                        <LogOut />
                        <span>Logout</span>
                    </a>
                </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}