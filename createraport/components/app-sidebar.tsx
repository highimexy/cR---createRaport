"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Bug, // Ikona dla listy bugów
  Frame,
  Map,
  PieChart,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toogle";
import { CreateRaport } from "./ui/logo/CreateRaport";

// Przykładowe dane
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "./dashboard",
      icon: PieChart,
      isActive: false, // Ustawiane dynamicznie
    },
    {
      title: "Create Raport",
      url: "./create",
      icon: SquareTerminal,
      isActive: false, // Ustawiane dynamicznie
    },
  ],
  projects: [
    { name: "Raport - Name", url: "#", icon: Frame },
    { name: "Raport - Name 1", url: "#", icon: PieChart },
    { name: "Raport - Name 2", url: "#", icon: Map },
  ],
  // Nowa lista z przykładowymi bugami
  bugs: [
    { id: "PROJ-112", title: "Button is not visible on mobile" },
    { id: "PROJ-108", title: "API returns 500 error on checkout" },
    { id: "PROJ-105", title: "Images load indefinitely in gallery" },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Pobranie aktualnej ścieżki URL
  const pathname = usePathname();

  // Dynamiczne ustawianie, który link jest aktywny
  const navItems = data.navMain.map((item) => ({
    ...item,
    isActive: pathname.includes(item.url.replace("./", "/")),
  }));

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <CreateRaport />
        <ModeToggle />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />

        {/* --- LOGIKA WARUNKOWA DLA ZAWARTOŚCI --- */}

        {/* 1. Jeśli jesteśmy na "/dashboard", pokaż listę projektów/raportów */}
        {pathname.includes("/dashboard") && (
          <NavProjects projects={data.projects} />
        )}

        {/* 2. Jeśli jesteśmy na "/create", pokaż listę ostatnich bugów */}
        {pathname.includes("/create") && (
          <div>
            <NavProjects
              projects={data.bugs.map((bug) => ({
                name: `${bug.id} - ${bug.title}`,
                url: "#",
                icon: Bug,
              }))}
            />
          </div>
        )}
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
