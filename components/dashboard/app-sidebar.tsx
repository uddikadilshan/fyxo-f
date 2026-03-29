"use client"

import * as React from "react"
import {
  IconCategoryFilled,
  IconDashboard,
  IconGardenCart,
  IconHelp,
  IconInnerShadowTop,
  IconListSearch,
  IconRulerMeasure,
  IconSettings,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/dashboard/nav-documents"
import { NavMain } from "@/components/dashboard/nav-main"
import { NavSecondary } from "@/components/dashboard/nav-secondary"
import { NavUser } from "@/components/dashboard/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "FyXo",
    email: "m@example.com",
    avatar: "/avatars/shadcn.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
  ],
  navSecondary: [
    {
      title: "Configurations",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
  ],
  documents: [
    {
      name: "Product",
      url: "/main/product/register",
      icon: IconGardenCart,
    },
    {
      name: "Product List",
      url: "/main/product",
      icon: IconListSearch,
    },
    {
      name: "Product Category 1",
      url: "/main/product/cat-1",
      icon: IconCategoryFilled,
    },
    {
      name: "Product Category 2",
      url: "/main/product/cat-2",
      icon: IconCategoryFilled,
    }, {
      name: "Product Category 3",
      url: "/main/product/cat-3",
      icon: IconCategoryFilled,
    }, {
      name: "Product Measurement Units",
      url: "/main/product/measurement-units",
      icon: IconRulerMeasure,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <IconInnerShadowTop className="size-5!" />
                <span className="text-base font-semibold">FyXo App</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
