"use client"
import "react-toastify/dist/ReactToastify.css";

import SideBar from "@/components/sidebar/sidebar";

import { UserWrapper } from "../wrapper/user-wrapper";
import { RouteList, SettingsRouteList } from "@/constants/sidebar";
import { useState } from "react";
import SettingsHeader from "../../_components/headers/settings-header";
import Sidebar from "@/components/sidebar/sidebar";

/*
  Author: Sreethu on June 2nd, 2024
  Purpose: Renders layout for Settings pages 
*/

const SettingsLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { workspaceSlug: string };
}) => {
  const { workspaceSlug } = params;
  
  const [selectedItem, setSelectedItem] = useState({ label: "Settings" });

  const handleItemClick = (label: string) => {
    setSelectedItem({label:label});
  };

  return (
    <UserWrapper>

     <SettingsHeader title={selectedItem.label} />  
    <div className="min-h-screen flex">
    
    
    
      <aside className="w-60 border-2 p-2">
      
        <nav>
        
        

         
          <Sidebar workspaceSlug={workspaceSlug} routes={SettingsRouteList} onItemClick={handleItemClick} />

         
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <main className="pt-16 sm:pt-0 pb-20 h-full mt-10">{children}</main>
      </div>
    </div>
    </UserWrapper>
  );
};

export default SettingsLayout;
