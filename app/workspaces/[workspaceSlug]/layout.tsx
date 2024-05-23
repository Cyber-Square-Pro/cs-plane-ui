import { Button } from "@/components/ui/button";
import "react-toastify/dist/ReactToastify.css";
import { Logo } from "@/components/logo";
import { SquarePen } from "lucide-react";
import { SearchIcon } from "lucide-react";

/*
  Author: Reshma on April 21st, 2024
  Purpose: Renders layout for Workspace pages 
  updated by: - Sreethu on May 22nd, 2024 - Removed extra div, replaced svg
              icon with lucide icon for search
              - Mohammed Rifad on May 23rd - Removed header component to  
                corresponding pages.
              
*/

const WorkspaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-2 p-4">
        <nav>
          <div className="flex justify-between mt-4">
            <button className="px-2 py-1 rounded flex items-center space-x-2">
              <span className="bg-blue-900 text-white px-2 py-1 rounded w-7 h-7 flex items-center justify-center">
                W
              </span>
              <span className="text-black">First project</span>
            </button>
            <button className="bg-blue-900 text-white px-2 py-1 rounded w-7 h-7 flex items-center justify-center">
              <span>P</span>
            </button>
          </div>
          <div className="flex justify-between mt-4">
            <button className="border-2 px-2 py-1 rounded w-64 h-8 flex items-center">
              <SquarePen />
              <span className="text-sm font-medium ml-3">New Issue</span>
            </button>

            <button className="ml-2 border-2 px-2 py-1 rounded w-8 h-8 flex items-center justify-center">
              <SearchIcon style={{ width: "32px", height: "32px" }} />
            </button>
          </div>

          {/* sidebar component starts here  */}
          <div className="mt-5 h-full overflow-y-auto">
            <div className="max-h-full">SIDEBAR LINKS</div>
          </div>
          {/* sidebar component ends here  */}

          <div className="mt-4 h-full overflow-y-auto">
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
  );
};

export default WorkspaceLayout;
