import "@/styles/globals.css"

import { Metadata } from "next"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { StyleSwitcher } from "@/components/style-switcher"
import { ThemeProvider } from "@/components/theme-provider"
import { Titlebar } from "@/components/titlebar"

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: ExamplesLayoutProps) {
  return (
    <html
      suppressHydrationWarning
      className="h-full max-h-full overflow-hidden rounded-lg bg-black"
    >
      <head />
      <body className="h-full max-h-full overflow-hidden rounded-lg bg-transparent font-sans antialiased scrollbar-none">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-full max-h-full flex-col overflow-hidden">
            <Titlebar />
            <div
              className={cn(
                "h-full overflow-hidden bg-background scrollbar-none"
              )}
            >
              {children}
            </div>
          </div>
        </ThemeProvider>
        <StyleSwitcher />
        <Toaster />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  icons: {
    shortcut: ["#"],
  },
}
