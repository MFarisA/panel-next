'use client'
import { ConfigDataTable } from "@/components/config-table";
import React from "react";

export default function configPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-blue-100" />
                <div className="aspect-video rounded-xl bg-blue-100" />
                <div className="aspect-video rounded-xl bg-blue-100" />
            </div>
            <ConfigDataTable />
        </div>
    )
}