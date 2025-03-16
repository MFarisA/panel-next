'use client'
import { TestingChartComponent } from '@/components/testing-db-chart'
import React from 'react'

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {/* <div className="aspect-video rounded-xl bg-blue-100" /> */}   
        {/* <div className="aspect-video rounded-xl bg-blue-100" /> */}
        {/* <div className="aspect-video rounded-xl bg-blue-100" /> */}
        <TestingChartComponent />
        <TestingChartComponent />
        <TestingChartComponent />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min bg-blue-100" />
    </div>
  )
}
