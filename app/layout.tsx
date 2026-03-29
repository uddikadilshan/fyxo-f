import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cookies } from "next/headers"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SiteHeader } from "@/components/dashboard/site-header"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
    <body>

    <ThemeProvider>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </ThemeProvider>
    </body>
    </html>
  )
}
// export default async function RootLayout({
//                                            children,
//                                          }: {
//   children: React.ReactNode
// }) {
//   const cookieStore = await cookies()
//   const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
//
//   return (
//     <html
//       lang="en"
//       suppressHydrationWarning
//       className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
//     >
//     <body>
//     <TooltipProvider>
//       <SidebarProvider
//         defaultOpen={defaultOpen}
//         style={
//           {
//             "--sidebar-width": "calc(var(--spacing) * 72)",
//             "--header-height": "calc(var(--spacing) * 12)",
//           } as React.CSSProperties
//         }
//       >
//         <AppSidebar variant="inset" />
//         <SidebarInset>
//           <SiteHeader />
//           <div className="flex flex-1 flex-col">{children}</div>
//         </SidebarInset>
//       </SidebarProvider>
//     </TooltipProvider>
//     </body>
//     </html>
//   )
// }
//
