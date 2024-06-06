"use client"
import "react-toastify/dist/ReactToastify.css";
import { SquarePen } from "lucide-react";
import { SearchIcon } from "lucide-react";
import SideBar from "@/components/sidebar/sidebar";
import ProjectList from "../_components/project-list";
import WorkspacePopover from "../_components/workspace-popover";
import ProfilePopover from "../_components/profile-popover";
import { UserWrapper } from "./wrapper/user-wrapper";
import { RouteList } from "@/constants/sidebar";

/*
  Author: Reshma on April 21st, 2024
  Purpose: Renders layout for Workspace pages 
  Updated by: - Muhammed Adnan on May 21st, 2024 - Add Dashboard Sidebar and 'Your Projects' dropdown
              - Sreethu EA on May 22nd, 2024 - Removed extra div, replaced svg
                                               icon with lucide icon for search
              - Mohammed Rifad on May 23rd, 2024 - Removed header component to  
                                                   corresponding pages.
              - Sreethu EA on May 23rd, 2024 - Added popover component for workspace and profile 
              - Mohammed Rifad on June 2nd, 2024 - Moved workspace popover and profile popover UI
                to components folder. Also wrapped layout with UserWrapper.
*/

const WorkspaceLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { workspaceSlug: string };
}) => {
  const { workspaceSlug } = params;

  return (
    <UserWrapper>
    <div className="min-h-screen flex">
      <aside className="w-80 border-2 p-2">
        <nav>
          <div className="flex justify-between mt-1 mr-2">
            <WorkspacePopover slug={params.workspaceSlug}/>
              <ProfilePopover />
          </div>
          <div className="flex justify-between mt-4 p-1">
            <button className="border-2 px-2 py-2 rounded w-64 h-9 flex items-center">
              <SquarePen size={18} />
              <span className="text-sm font-medium ml-3">New Issue</span>
            </button>

            <button className="ml-2 border-2 px-2 py-1 rounded w-9 h-9 flex items-center justify-center">
              <SearchIcon size={18} />
            </button>
          </div>
          <div className="w-full cursor-pointer">
            <SideBar workspaceSlug={workspaceSlug} routes={RouteList} />
          </div>

          <div className="mt-4 h-full">
            <ProjectList />
          </div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <main className="pt-16 sm:pt-0 pb-20 h-full">{children}</main>
      </div>
    </div>
    </UserWrapper>
  );
};

export default WorkspaceLayout;
