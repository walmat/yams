import "@/styles/globals.css"

import { Metadata } from "next"

import { Sidebar } from "@/components/sidebar"

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function MyApp({ children }: ExamplesLayoutProps) {
  return (
    <div className="grid h-full grid-cols-5">
      <Sidebar className="block" />
      <div className="col-span-4 h-full border-l pt-6">{children}</div>
    </div>
  )
}

export const metadata: Metadata = {
  icons: {
    shortcut: ["#"],
  },
}
