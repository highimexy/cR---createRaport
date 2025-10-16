"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toogle"
import { CreateRaport } from "./ui/logo/CreateRaport"


// This is sample data.
const data = {
  navMain: [
    {
      title: "Create Raport",
      url: "./create",
      icon: SquareTerminal,
      isActive: true,
    },
  ],
  projects: [
    {
      name: "Raport - Name",
      url: "#",
      icon: Frame,
    },
    {
      name: "Raport - Name 1",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Raport - Name 2",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <CreateRaport />
         <ModeToggle />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
      
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
