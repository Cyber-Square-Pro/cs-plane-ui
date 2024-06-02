"use client";
import React from "react";
import { DashboardOverView } from "../_components/dashboard-overview";


/*
  Author: Fidha on May 21st, 2024
  Purpose: Displays the DashboardOverView components.
  Props: None
  Updated by: - Muhammed Adnan on May 25th, 2024 - Enhanced page layout
 */ 

const WorkspacePage = () => {
  return (
    <div className="flex h-full justify-center items-center text-[32px]">
      <DashboardOverView />
    </div>
  );
};

export default WorkspacePage;
