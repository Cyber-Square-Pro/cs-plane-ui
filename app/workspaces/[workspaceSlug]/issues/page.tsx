"use client"
import AllIssuesHeader from '@/app/workspaces/_components/all-issues-header'
import AllIssuesTabs from '@/app/workspaces/_components/all-issues-tabs'
import { LucideLayers } from 'lucide-react'
import React from 'react'

const AllIssues = () => {
  return (
    <div>
        <AllIssuesHeader icon = {LucideLayers} title="All Issues" buttonName="New View"/>
        <AllIssuesTabs/>
    </div>
  )
}

export default AllIssues