"use client"
import React, { useState } from "react";
import { CheckCircle2, ChevronDown, CircleDotDashed, Contrast } from "lucide-react";
import { Button } from "@/components/ui/button";
import FilterModal from "@/components/modal/filter-modal";
import TabComponent from "@/app/workspaces/_components/headers/sprint-tab";
import ProjectSubHeader from "@/app/workspaces/_components/headers/project-item-header";

/*
    Author: Muhammed Adnan on May 31st, 2024
    Purpose: Renders the ProjectSprints page. 
*/

const ProjectSprints = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [startDate] = useState(new Date(2024, 5, 4)); // June 4, 2024
  const [endDate] = useState(new Date(2024, 5, 11)); // June 11, 2024
  const [isTabVisible, setIsTabVisible] = useState(true); // State to control TabComponent visibility


  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const toggleTabVisibility = () => {
    setIsTabVisible(!isTabVisible);
  };

  return (
    <div>
      <div className="h-full w-full">
        <div>
          <ProjectSubHeader icon={Contrast} title="Sprints" btntext="Add Sprint">
            <Button onClick={handleOpenModal} className="p-3 bg-white hover:bg-white border text-slate-600 h-[29px] text-[12px] rounded-sm">Filter</Button>
            <FilterModal isOpen={isModalOpen} onClose={handleCloseModal} />
          </ProjectSubHeader>
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
          <div className="ml-auto">
            <Button onClick={toggleTabVisibility} className=" bg-grey flex items-center gap-1 text-gray-700">
              <ChevronDown size={18} />
            </Button>
          </div>
        </div>
        {isTabVisible && (
        <TabComponent
          title="On adding filter in issue details "
          startDate={startDate}
          endDate={endDate}
          state="In Progress"
          isFavorite={isFavorite}
          onFavoriteToggle={handleFavoriteToggle}
        />)}
        <div className="flex h-[2.5rem] w-full items-center bg-gray-200 p-4">
          <div className="flex items-center gap-2 text-lg text-gray-700">
            <CheckCircle2 size={18} className="text-green-500" />
            <span>Completed Sprints</span><span>3</span>
          </div>
          <div className="ml-auto">
            <Button className=" bg-grey flex items-center gap-1 text-gray-700">
              <ChevronDown size={18} />
            </Button>
          </div>
        </div>
        <TabComponent
          title="On adding links in issue details error message"
          startDate={startDate}
          endDate={endDate}
          state="Completed"
          isFavorite={isFavorite}
          onFavoriteToggle={handleFavoriteToggle}
        />
      </div>
    </div>
  );
};

export default ProjectSprints;
