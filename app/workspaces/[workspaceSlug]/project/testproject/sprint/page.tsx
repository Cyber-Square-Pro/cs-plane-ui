"use client"
import React, { useState } from "react";
import { CheckCircle2, ChevronDown, CircleDotDashed, Contrast } from "lucide-react";
import { Button } from "@/components/ui/button";
import {FilterModal} from "@/components/modal/filter-modal";
import {TabComponent} from "@/app/workspaces/_components/headers/sprint-tab";
import ProjectSubHeader from "@/app/workspaces/_components/headers/project-item-header";
import {Board} from "@/app/workspaces/_components/cards/sprint-status-filter";

/*
    Author: Ramshija.k.k on June 1st, 2024
    Purpose: Renders the ProjectSprints page. 
    children:
    -TabComponent:for displaying sprint details,status,members,duration etc
    -Filter modal :for filtering the sprints
    -Project subheader:for displaying page header with corresponding project
    -Board :for filtering issues based on status like in progress,completed,qa passed etc
*/

const ProjectSprints = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [startDate] = useState(new Date(2024, 5, 4)); // June 4, 2024
  const [endDate] = useState(new Date(2024, 5, 11)); // June 11, 2024
  const [isUpTabVisible, setIsUpTabVisible] = useState(true);
  const [isCompTabVisible, setIsCompTabVisible] = useState(true); // State to control TabComponent visibility
  const [isBoardVisible, setIsBoardVisible] = useState(false); // State to control Board component visibility

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const toggleUpTabVisibility = () => {
    setIsUpTabVisible(!isUpTabVisible);
  }; // Visibility toggling for upcoming sprints tab

  const toggleCompTabVisibility = () => {
    setIsCompTabVisible(!isCompTabVisible);
  };

  const toggleBoardVisibility = () => {
    setIsBoardVisible(!isBoardVisible);
  };

  return (
    <div>
      <div className="h-full w-full">
        <div>
          <ProjectSubHeader icon={Contrast} title="Sprints" btntext="Add Sprints">
            <Button onClick={handleOpenModal} className="p-3 bg-white hover:bg-white border text-slate-600 h-[29px] text-[12px] rounded-sm">
              Filter
            </Button>
            <FilterModal isOpen={isModalOpen} onClose={handleCloseModal} />
            <Button onClick={toggleBoardVisibility} className="p-3 bg-white hover:bg-white border text-slate-600 h-[29px] text-[12px] rounded-sm">
              Status Quick filter
            </Button>
          </ProjectSubHeader>
        </div>
      </div>

      {isBoardVisible && (
        <div className="p-4 bg-white shadow-md rounded-md mt-4">
          <Board />
        </div>
      )}

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
            <Button onClick={toggleUpTabVisibility} className=" bg-grey flex items-center gap-1 text-gray-700">
              <ChevronDown size={18} />
            </Button>
          </div>
        </div>
        {isUpTabVisible && (
          <TabComponent
            title="On adding filter in issue details "
            startDate={startDate}
            endDate={endDate}
            state="In Progress"
            isFavorite={isFavorite}
            onFavoriteToggle={handleFavoriteToggle}
          />
        )}

        <div className="flex h-[2.5rem] w-full items-center bg-gray-200 p-4">
          <div className="flex items-center gap-2 text-lg text-gray-700">
            <CheckCircle2 size={18} className="text-green-500" />
            <span>Completed Sprints</span><span>3</span>
          </div>
          <div className="ml-auto">
            <Button onClick={toggleCompTabVisibility} className=" bg-grey flex items-center gap-1 text-gray-700">
              <ChevronDown size={18} />
            </Button>
          </div>
        </div>
        {isCompTabVisible && (
          <TabComponent
            title="On adding links in issue details error message"
            startDate={startDate}
            endDate={endDate}
            state="Completed"
            isFavorite={isFavorite}
            onFavoriteToggle={handleFavoriteToggle}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectSprints;
