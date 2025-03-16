"use client"
import * as React from "react"
import type { Table } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Trash, Download } from "lucide-react"
import { DeleteConfirmationDialog } from "./delete-confirmation-dialog"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const selectedRows = table.getFilteredSelectedRowModel().rows
  const [showBulkDeleteDialog, setShowBulkDeleteDialog] = React.useState(false)

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search by name, email..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
          className="h-9 w-full sm:max-w-[300px]"
        />
        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-9 px-2 lg:px-3">
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      {selectedRows.length > 0 && (
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-9" onClick={() => setShowBulkDeleteDialog(true)}>
            <Trash className="mr-2 h-4 w-4" />
            Delete ({selectedRows.length})
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-9"
            onClick={() => {
              // Handle bulk export
              console.log("Export selected rows", selectedRows)
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>

          <DeleteConfirmationDialog
            isOpen={showBulkDeleteDialog}
            onClose={() => setShowBulkDeleteDialog(false)}
            onConfirm={() => {
              console.log("Bulk deleting rows:", selectedRows)
              // Here you would call your delete API
              table.resetRowSelection()
              setShowBulkDeleteDialog(false)
            }}
            title="Delete Selected Users"
            description={`Are you sure you want to delete ${selectedRows.length} selected users? This action cannot be undone.`}
          />
        </div>
      )}
    </div>
  )
}

