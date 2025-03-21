'use client'
import { UserDataTable } from "@/components/user-table";
import React from "react";
import { columns } from "@/components/data-table/columns"
import { users } from "@/data/users"
import { DataTable } from "@/components/data-table/data-table"


export default function UsersPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-blue-100" />
                <div className="aspect-video rounded-xl bg-blue-100" />
                <div className="aspect-video rounded-xl bg-blue-100" />
            </div>
            {/* <UserDataTable /> */}
            <DataTable columns={columns} data={users} />
        </div>
    )
}