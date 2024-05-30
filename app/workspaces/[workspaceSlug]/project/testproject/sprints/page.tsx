"use client"
import React from "react";
import ProjectItemsHeader from "@/app/workspaces/_components/headers/project-items-header";
import { Contrast } from "lucide-react";
import { Button } from "@/components/ui/button";

/*
    Author: Muhammed Adnan on May 31st, 2024
    Purpose: Renders the ProjectSprints page. 
*/


const ProjectSprints = () => {
  return (
   <div className="h-full w-full">
    <div>
   <ProjectItemsHeader icon = { Contrast } title="Sprints" btntext="Add Sprint">
    <Button className="p-3 bg-white hover:bg-white border text-slate-600 h-[29px] text-[12px] rounded-sm">Filter</Button>
   </ProjectItemsHeader>
   </div>

     <div className="h-full w-full flex items-center justify-center">
         <h3 className="items-center">sprint components</h3> 
      </div>
    </div>
  );
}
export default ProjectSprints


