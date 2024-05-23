"use client";
import React from "react";
import { DashboardIssueCard } from "./cards/dashboard-issue-card";
import { IssueStatusCard } from "./cards/issue-status-card";
import { UserGreeting } from "./user-greeting";
import {
  BarChart2,
  HomeIcon,
} from "lucide-react";
import DashboardHeader from "./headers/dashboard-header";
 
/*
  Author: Fidha Noushad on May 20th, 2024
  Purpose: Renders Dashboard
  Props: None
  updated by: Mohammed Rifad on 23nd May 2024 - added reusable dashboard header

*/

export const DashboardOverView: React.FC = () => {
  const userName = "Test User";

  return (
    <div className="h-full w-full overflow-hidden">
      <header className="border-2 p-4">
        <h1>
          <DashboardHeader icon={HomeIcon} title="Home" />
        </h1>
      </header>
      <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll scrollbar-md">
        <div className="space-y-7 p-7 bg-zinc-100 h-full w-full flex flex-col overflow-y-auto vertical-scrollbar scrollbar-md mb-6">
          <UserGreeting name={userName} />
          <div className="grid lg:grid-cols-2 gap-7">
            <div className="lg:col-span-2">
              <div className="bg-[#ffffff] rounded-xl border-[0.5px] w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 p-0.5 hover:shadow-md duration-300 [&>div>a>div]:border-r [&>div:last-child>a>div]:border-0 [&>div>a>div]:border-2[&>div:nth-child(2)>a>div]:border-0 [&>div:nth-child(2)>a>div]:lg:border-r">
                <IssueStatusCard count={0} description="Issues Assigned" />
                <IssueStatusCard count={0} description="Issues Created" />
                <IssueStatusCard count={0} description="Issues Overdue" />
                <IssueStatusCard count={0} description="Issues Completed" />
              </div>
            </div>

            <DashboardIssueCard
              title="Assigned to you"
              description="Issues assigned to you that are pending will show up here."
              icon={<BarChart2 />}
            />
            <DashboardIssueCard
              title="Created by you"
              description="Issues created by you that are pending will show up here."
            />
            <DashboardIssueCard
              title="Assigned by state"
              description="Issue assigned to you, broken down by state, will show up here."
            />
            <DashboardIssueCard
              title="Assigned by priority"
              description="Issues assigned to you, broken down by priority will show up here."
            />
            <DashboardIssueCard
              title="Your issue activities"
              description="All your issue activities across projects will show up here."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
