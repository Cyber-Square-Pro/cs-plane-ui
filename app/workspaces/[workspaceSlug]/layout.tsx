import "react-toastify/dist/ReactToastify.css";
import { SquarePen } from "lucide-react";
import { SearchIcon } from "lucide-react";
import SideBar from "@/components/sidebar/sidebar";
import ProjectList from "../_components/drop-downs/project-list";

/*
 * Author: Sreethu on 20th May 2024
 * Purpose: Renders a layout for the workspace, including a sidebar for project navigation and main content area.
 * Input parameters:
    - children: React.ReactNode - The content to be displayed in the main area of the layout.
    - dashboardLink: string (optional) - A link to the dashboard to be used in the sidebar.
 * Return: A JSX element containing the structured layout of the workspace with a sidebar and main content area.
 * Updated by: Muhammed Adnan on 22th May 2024
 */

const WorkspaceLayout = ({
    children,
    dashboardLink
}:{
    children: React.ReactNode;
    dashboardLink?: string 
}) => {

    return (
        
    <div className="min-h-screen flex">
      <aside className="w-64 border-2 p-4">
      <nav>
        <div className="flex justify-between">
          <button className="px-2 py-1 rounded flex items-center space-x-2 hover:bg-red">
                            <span className="bg-blue-900 text-white px-2 py-1 rounded w-7 h-7 flex items-center justify-center">W</span>
                            <span className="text-black">First project</span>
          </button>
          <button className="bg-blue-900 text-white px-2 py-1 rounded w-7 h-7 flex items-center justify-center">
                            <span>P</span>
          </button>
        </div>
        <div className="flex justify-between mt-4 mb-4">
    
          <button className="border-2 px-2 py-1 rounded w-64 h-8 flex items-center">
                            <SquarePen size={17}/>
                            <span className="text-sm font-medium ml-3">New Issue</span>
          </button>
                
          <button className="ml-2 border-2 px-2 py-1 rounded w-8 h-8 flex items-center justify-center">
                            <SearchIcon size={32} />
          </button>
        </div>
        
          {/* sidebar component starts here  */}
            <div className="w-full cursor-pointer">
                <SideBar dashboardLink={dashboardLink} />
            </div>
         {/* sidebar component ends here  */}

        <div className="mt-4 h-full">
            <ProjectList />
        </div>
          
        </nav>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="border-2 p-4">
            <h1>Header</h1>
          </header>
            <main className="pt-16 sm:pt-0 pb-20 h-full">
                {children}
            </main>
            </div>
        </div>  
    )

}

export default WorkspaceLayout;
