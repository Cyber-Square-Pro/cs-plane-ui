"use client";
import React, { useState } from 'react';
import { Layers3, Contrast, Dice4, FileVideo, FileText, Settings, ChevronDown, ChevronRight, Plus, MoreHorizontal } from 'lucide-react';

/*
 * Author: Muhammed Adnan on 21th May 2024
 * Purpose: Renders a list of user projects with dropdown options for each project.
 * Input parameters: None
 * Return: A JSX element containing the list of projects and their respective dropdown options.
 */

const ProjectList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectProject = (project: string) => {
    setSelectedProject(selectedProject === project ? null : project);
  };

  const projects = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
    "Project 6",
    "Project 7"
  ];

  const dropdownItems = [
    { icon: <Layers3 size={14} />, title: "Issues" },
    { icon: <Contrast size={14} />, title: "Sprints" },
    { icon: <Dice4 size={14} />, title: "Modules" },
    { icon: <FileVideo size={14} />, title: "Views" },
    { icon: <FileText size={14} />, title: "Pages" },
    { icon: <Settings size={14} />, title: "Settings" }
  ];

  return (
    <div className="relative">
      <button 
        className="group flex items-center w-full px-3 py-1 text-sm font-medium text-left text-gray-900 hover:bg-gray-100 hover:rounded-md"
        onClick={toggleDropdown}
      >
        <span className='font-bold text-slate-500 text-[13px]'>Your Projects</span>
        {isOpen ? (
          <ChevronDown size={15} className='text-slate-400'/>
        ) : (
          <ChevronRight size={15} className='text-slate-400'/>
        )}
        <div className="relative ml-auto">
          <Plus size={12} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 overflow-y-auto max-h-[400px] w-56 mt-1 origin-top-right right-0 scrollbar-md">
          {projects.map((project, index) => (
            <div key={index}>
              <button 
                onClick={() => selectProject(project)} 
                className="group flex items-center w-full px-4 py-2 mb-1 text-[13px] hover:bg-gray-100 relative"
              >
                <span>{project}</span>
                <div className="ml-auto flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {selectedProject === project ? (
                    <ChevronDown size={15} className='text-slate-400 transition-transform duration-200 transform rotate-180'/>
                  ) : (
                    <ChevronDown size={15} className='text-slate-400 transition-transform duration-200'/>
                  )}
                  <MoreHorizontal size={15} className="ml-2 text-slate-400" />
                </div>
              </button>
              {selectedProject === project && (
                <div className="pl-8">
                  {dropdownItems.map((item, index) => (
                    <button key={index} className="flex items-center w-full px-4 py-1 mb-1 text-[13px] text-gray-700 hover:bg-gray-100">
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
