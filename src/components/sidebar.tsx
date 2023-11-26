"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "@/assets/logo.png"
import { meta } from "@/meta"
import { Home, Key, Settings, TrendingUp } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { UserButton } from "@/components/user-button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("h-screen max-h-screen", className)}>
      <div className="flex h-screen max-h-screen flex-col justify-between pt-4">
        <div className="px-3 py-2">
          <div className="mb-8 flex select-none items-center gap-2">
            <Image src={logo} alt={meta.APP_NAME} width={20} height={20} />

            <h2 className="text-lg font-semibold tracking-tight">
              {meta.APP_NAME}
            </h2>
          </div>
          <div className="space-y-2">
            <Button
              asChild
              draggable={false}
              variant={pathname === "/dashboard" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href="/dashboard">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button
              asChild
              draggable={false}
              variant={pathname === "/positions" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href="/positions">
                <TrendingUp className="mr-2 h-4 w-4" />
                Positions
              </Link>
            </Button>
            <Button
              asChild
              draggable={false}
              variant={pathname === "/wallets" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href="/wallets">
                <Key className="mr-2 h-4 w-4" />
                Wallets
              </Link>
            </Button>
            <Button
              asChild
              draggable={false}
              variant={pathname.includes("/settings") ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href="/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </Button>
          </div>
        </div>

        <UserButton />
      </div>
    </div>
  )
}
