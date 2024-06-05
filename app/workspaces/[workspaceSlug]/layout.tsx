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
              - Mohammed Rifad on May 23rd - Removed header component to  
                corresponding pages.
              - Sreethu EA on May 23rd, 2024 - Added popover component for workspace and profile 
*/

const WorkspaceLayout = ({
  children,
  params

}:{
  children: React.ReactNode;
  params:any;
}) => {

  return (
      
 <div className="min-h-screen flex">
    <aside className="w-80 border-2 p-2">
    <nav>
        <div className="flex justify-between mt-1 mr-2">
        <Popover>
            <PopoverTrigger>
              <button className="px-2 py-1 rounded flex items-center space-x-2" >
                <span className="bg-blue-900 text-white px-2 py-1 rounded w-7 h-7 flex items-center justify-center" >F</span>
                <span className="text-black truncate text-base font-medium">First_Project</span>
              </button>
            </PopoverTrigger>
                {/* Using the imported component here */}
            <WorkspacePopover slug={params.workspaceSlug} />
        </Popover> 
        
        <Popover>
            <PopoverTrigger>
              <button className="bg-blue-900 text-white px-2 py-1 rounded w-7 h-7 flex items-center justify-center">S</button>
            </PopoverTrigger>
                {/* Using the imported component here */}
            <ProfilePopover/>
        </Popover>  
      </div>
      <div className="flex justify-between mt-4 p-1">
  
        <button className="border-2 px-2 py-2 rounded w-64 h-9 flex items-center">
                          <SquarePen size={(18)}  />
                          <span className="text-sm font-medium ml-3">New Issue</span>
        </button>
              
        <button className="ml-2 border-2 px-2 py-1 rounded w-9 h-9 flex items-center justify-center">
                          <SearchIcon size={18}/>
        </button>
      </div>
      
         {/* sidebar component starts here  */}
            <div className="w-full cursor-pointer">
                <SideBar  />
            </div>

            <div className="mt-4 h-full">
                <ProjectList />
            </div>
          {/* sidebar component ends here  */}
        
      </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        
          <main className="pt-16 sm:pt-0 pb-20 h-full">
              {children}
          </main>
          </div>
      </div>  
  )

}

export default WorkspaceLayout;
