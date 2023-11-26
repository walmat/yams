"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserButton() {
  const handleLogout = async () => {}

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="mt-4 border-t">
          <Button
            variant="ghost"
            className="flex h-full w-full justify-start rounded-none"
          >
            <div className="flex w-full items-center justify-start space-x-4">
              <div className="flex w-full items-center space-x-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="flex w-full flex-1 items-center justify-between">
                  <div className="flex flex-col items-start">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-sm text-muted-foreground">
                      me@gmail.com
                    </p>
                  </div>

                  <ChevronRight className="ml-auto h-4 w-4 text-slate-600" />
                </div>
              </div>
            </div>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end" forceMount>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/settings">
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
