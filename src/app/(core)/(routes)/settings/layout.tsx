import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"
import { SettingsNav } from "@/components/settings-nav"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const navItems = [
  {
    title: "Account",
    href: "/settings",
  },
  {
    title: "Appearance",
    href: "/settings/appearance",
  },
  {
    title: "Notifications",
    href: "/settings/notifications",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="h-screen max-h-screen space-y-6 p-8 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex h-full max-h-full flex-col space-y-8 overflow-hidden lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <SettingsNav items={navItems} />
          </aside>
          <div className="h-full max-h-full flex-1 overflow-auto lg:max-w-2xl">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
