"use client"
import React, { useState } from "react";
import ProjectItemsHeader from "@/app/workspaces/_components/headers/project-items-header";
import { CheckCircle2, CheckCircle2Icon, CircleDashed, CircleDotDashed, Contrast, ContrastIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import FilterModal from "@/components/modal/filter-modal";
import TabComponent from "@/app/workspaces/_components/headers/sprint-tab";

/*
    Author: Muhammed Adnan on May 31st, 2024
    Purpose: Renders the ProjectSprints page. 
*/


  
const ProjectSprints = () => {
  const [isFavorite, setIsFavorite] = useState(false);
    const [startDate] = useState(new Date(2024, 5, 4)); // June 4, 2024
    const [endDate] = useState(new Date(2024, 5, 11)); // June 11, 2024

    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);
    };
  const [isModalOpen, setModalOpen] = useState(false);

const handleOpenModal = () => setModalOpen(true);
const handleCloseModal = () => setModalOpen(false);


  return (
    <div>
   <div className="h-full w-full">
    <div>
   <ProjectItemsHeader icon = { Contrast } title="Sprints" btntext="Add Sprint">
    <Button onClick={handleOpenModal} className="p-3 bg-white hover:bg-white border text-slate-600 h-[29px] text-[12px] rounded-sm">Filter</Button>
    <FilterModal isOpen={isModalOpen} onClose={handleCloseModal} />
   </ProjectItemsHeader>
   </div>
   </div>
   <div className="p-4 bg-white shadow-md rounded-md">
      <div className="flex h-[2.5rem] w-full items-center bg-gray-200 p-4 border-b border-gray-400">
        <div className="flex items-center gap-2 text-lg text-gray-700">
          <Contrast size={18} className="text-yellow-700" />
          <span className="font-bold">Active Sprints</span>
        </div>
      </div>
      <div className="flex h-[2.5rem] w-full items-center bg-gray-200 p-4 border-b border-gray-400">
        <div className="flex items-center gap-2 text-lg text-gray-700">
          <CircleDotDashed size={18} className="text-blue-500" />
          <span>Upcoming Sprints</span><span>3</span>
        </div>
      </div>
      <TabComponent
      title="On adding links in issue details error message"
      startDate={startDate}
      endDate={endDate}
      isFavorite={isFavorite}
      onFavoriteToggle={handleFavoriteToggle}/>
      <div className="flex h-[2.5rem] w-full items-center bg-gray-200 p-4">
        <div className="flex items-center gap-2 text-lg text-gray-700">
          <CheckCircle2 size={18} className="text-green-500" />
          <span>Completed Sprints</span><span>3</span>
        </div>
      </div>
      </div>
     
   </div>
  );
}
export default ProjectSprints


