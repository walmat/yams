"use client"

import { WindowTitlebar } from "tauri-controls"

export function Titlebar() {
  return (
    <WindowTitlebar
      controlsOrder="right"
      className="absolute top-0 z-50 w-full rounded-t-lg bg-transparent"
      windowControlsProps={{ platform: "windows" }}
    />
  )
}
