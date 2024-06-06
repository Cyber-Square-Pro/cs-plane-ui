
"use client"
import React, { useState } from "react";
import SettingsHeader from "./_components/settings-header";
import Sidebar from "@/components/sidebar/sidebar";
import { SettingsRouteList } from "@/constants/sidebar";
import MembersPage from "./_components/member";


const SettingsPage = () => {
  const [selectedItem, setSelectedItem] = useState({ label: "Settings" });

  const handleItemClick = (label: string) => {
    setSelectedItem({ label });
  };

  return (
    <>
      <SettingsHeader title={selectedItem.label} />
      <div className="mt-5">
      <span className="text-xs font-semibold mt-10 ml-5 text-slate-350 ">SETTINGS</span>
      <div className="flex">
        <div className="w-1/4 p-4">
          <Sidebar routes={SettingsRouteList}
                   
            />
          
        </div>
        </div>
     <div className="w-4/5">
       
        {selectedItem.label === "Members" && <MembersPage />}
        </div> 
      </div>
    </>
  );
};

export default SettingsPage;
