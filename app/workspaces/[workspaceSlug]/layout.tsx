import "react-toastify/dist/ReactToastify.css";
import { SquarePen } from "lucide-react";
import { SearchIcon } from "lucide-react";
import SideBar from "@/components/sidebar/sidebar";
import ProjectList from "../_components/project-list";
import {Popover, PopoverTrigger} from "@nextui-org/react";  
import WorkspacePopover from "../_components/workspace-popover";
import ProfilePopover from "../_components/profile-popover";

/*
  Author: Reshma on April 21st, 2024
  Purpose: Renders layout for Workspace pages 
  updated by: - Muhammed Adnan on May 21st, 2024 - Add Dashboard Sidebar and 'Your Projects' dropdown
              - Sreethu EA on May 22nd, 2024 - Removed extra div, replaced svg
                                               icon with lucide icon for search
              - Mohammed Rifad on May 23rd, 2024 - Removed header component to  
                                                   corresponding pages.
              - Sreethu EA on May 23rd, 2024 - Added popover component for workspace and profile 
              - Muhammed Adnan on May 25th, 2024 - Fixed Sidebar, 
                                                   Adjusted padding, margin, icon-size as needed, 
                                                   Added hover-bg for 'First_Project' popover.
                                                   
*/

const WorkspaceLayout = ({
  children
}:{
  children: React.ReactNode
}) => {

  return (
      
 <div className="min-h-screen flex overflow-hidden">
    <aside className="w-[280px] border-2 p-2 flex-shrink-0 fixed inset-y-0 pt-2">
    <nav>
        <div className="flex justify-between mt-1 mr-2 items-center">
        <Popover>
            <PopoverTrigger>
              <button className="px-2 rounded flex w-[210px] p-1 items-center bg-white space-x-2 hover:bg-zinc-200 outline-none" >
                <span className="bg-blue-900 text-white px-2 py-1 rounded w-6 h-6 flex items-center justify-center" >F</span>
                <span className="text-black truncate text-sm font-medium">First_Project</span>
              </button>
            </PopoverTrigger>
                {/* Using   the imported component here */}
            <WorkspacePopover/>
        </Popover> 
        
        <Popover>
            <PopoverTrigger>
              <button className="bg-blue-900 text-white px-2 py-2 outline-none rounded w-6 h-6 flex items-center justify-center">S</button>
            </PopoverTrigger>
                {/* Using the imported component here */}
            <ProfilePopover/>
        </Popover>  
      </div>
      <div className="flex justify-between mt-4 p-1">
  
        <button className="border-2 px-2 py-2 rounded w-64 h-8 flex items-center">
                          <SquarePen size={16}  className="text-slate-700"/>
                          <span className="text-sm font-medium ml-2">New Issue</span>
        </button>
              
        <button className="ml-2 border-2 px-1.5 py-1 rounded w-8 h-8 flex items-center justify-center">
                          <SearchIcon size={17} className="text-slate-700"/>
        </button>
      </div>
      
         {/* sidebar component starts here  */}
            <div className="w-full cursor-pointer mt-3">
                <SideBar  />
            </div>

            <div className="mt-4 h-full">
                <ProjectList />
            </div>
          {/* sidebar component ends here  */}
        
      </nav>
      </aside>

      <div className="ml-[280px] flex h-full w-full flex-col overflow-hidden">
          <main>
              {children}
          </main>
          </div>
          
      </div>  
  )

}

export default WorkspaceLayout;
