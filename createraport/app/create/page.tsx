import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Metadata } from "next";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenuRadioGroup } from "@/components/ui/dropdown-menu";

//metadata
export const metadata: Metadata = {
  title: "createRaport - Workspace",
  description: "createRaport - Workspace",
};

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="./dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Raport builder</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 max">
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min relative">
            <div className="absolute z-10 inset-0 flex h-full justify-center items-center">
              <img
                src="/lupa.png"
                alt="Abstract 3D shape"
                className="
            opacity-2
            w-48 h-48 
            md:w-64 md:h-64 
            lg:w-[min(600px,80vw)] lg:h-[min(600px,80vh)]"
              />
            </div>
            <div className="relative z-20 flex w-full max-w-7xl mx-auto flex-col items-start justify-center gap-12 px-4 py-10 lg:flex-row lg:gap-16 lg:px-8">
              {/* === LEWA KOLUMNA === */}
              <div className="flex w-full flex-col gap-6 lg:w-1/2">
                <div>
                  <Label htmlFor="bug-id" className="mb-2">
                    Bug id
                  </Label>
                  <Input id="bug-id" type="text" placeholder="Issue id" />
                </div>
                <div>
                  <Label htmlFor="bug-id" className="mb-2">
                    Title
                  </Label>
                  <Input id="bug-id" type="text" placeholder="Title" />
                </div>
                <div>
                  <Label>Priority</Label>
                  {/* <DropdownMenuRadioGroupDemo /> */}
                </div>

                <div>
                  <Label htmlFor="picture" className="mb-2">
                    Screenshoot / Video
                  </Label>
                  <Input id="picture" type="file" />
                </div>

                <div>
                  <Label htmlFor="steps" className="mb-2">
                    Steps to reproduce
                  </Label>
                  <InputGroup>
                    <InputGroupTextarea
                      id="steps"
                      className="h-[300px]"
                      placeholder="Enter steps to reproduce"
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="text-muted-foreground text-xs">
                        120 characters left
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>

              {/* === PRAWA KOLUMNA === */}
              <div className="flex w-full flex-col gap-6 lg:w-1/2">
                <div>
                  <Label htmlFor="actual" className="mb-2">
                    Actual
                  </Label>
                  <InputGroup>
                    <InputGroupTextarea
                      id="actual"
                      className="h-[300px]"
                      placeholder="Enter actual result"
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="text-muted-foreground text-xs">
                        120 characters left
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </div>

                <div>
                  <Label htmlFor="expected" className="mb-2">
                    Expected
                  </Label>
                  <InputGroup>
                    <InputGroupTextarea
                      id="expected"
                      className="h-[300px]"
                      placeholder="Enter expected result"
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="text-muted-foreground text-xs">
                        120 characters left
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
