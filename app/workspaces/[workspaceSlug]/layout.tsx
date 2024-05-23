import "react-toastify/dist/ReactToastify.css";
import { SquarePen } from "lucide-react";
import { SearchIcon } from "lucide-react";
import {Popover, PopoverTrigger} from "@nextui-org/react";  
import WorkspacePopover from "../_components/workspace-popover";
import ProfilePopover from "../_components/profile-popover";

/*
  Author: Reshma on April 21st, 2024
  Purpose: Renders layout for Workspace pages 
  updated by: - Sreethu EA on May 22nd, 2024 - Removed extra div, replaced svg
              icon with lucide icon for search
              - Mohammed Rifad on May 23rd - Removed header component to  
                corresponding pages.
              -Sreethu EA on May 23rd, 2024 - Added popover component for workspace and profile 
              
*/

const WorkspaceLayout = ({
  children
}:{
  children: React.ReactNode
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
            <WorkspacePopover/>
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
                          <SquarePen style={{ width: "18px", height: "18px" }}  />
                          <span className="text-sm font-medium ml-3">New Issue</span>
        </button>
              
        <button className="ml-2 border-2 px-2 py-1 rounded w-9 h-9 flex items-center justify-center">
                          <SearchIcon style={{ width: "32px", height: "32px" }} />
        </button>
      </div>
      
        {/* sidebar component starts here  */}
      <div className="mt-5 h-full overflow-y-auto p-2"> 
          <div className="max-h-full">
            SIDEBAR LINKS
          </div>
      </div>
       {/* sidebar component ends here  */}

      <div className="mt-4 h-full overflow-y-auto p-2">
          <span>Your Projects</span>
      </div>
        
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