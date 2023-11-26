import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { taskSchema } from "./data/schema"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}
2
// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/(core)/(routes)/wallets/data/tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function WalletsPage() {
  const tasks = await getTasks()

  return (
    <>
      <div className="h-full max-h-full flex-1 flex-col overflow-hidden p-8 md:flex">
        <div className="mb-2 flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Wallets</h2>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
