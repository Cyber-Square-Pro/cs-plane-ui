"use client"
import React, { useState } from "react";
import SettingsHeader from "./_components/settings-header";
import { SettingsRouteList } from "@/constants/sidebar";
import Sidebar from "@/components/sidebar/sidebar";


const SettingsPage = () => {
  const [selectedItem, setSelectedItem] = useState({ label: "Settings" });

  const handleItemClick = (label: string) => {
    setSelectedItem({ label });
  };

  return (
    <>
      <SettingsHeader title={selectedItem.label} />
      <span className="text-xs font-semibold mt-5 ml-5 text-slate-350">SETTINGS</span>
      <div className="flex">
        <div className="w-1/4 p-4">
          <Sidebar
             // Pass the SettingsRouteList to the Sidebar
            // onItemClick={handleItemClick}
          />
        </div>
        {/* <div className="w-4/5">
          {selectedItem.label === "General" && <GeneralPage />}
          {selectedItem.label === "Members" && <MembersPage />}
        </div> */}
      </div>
    </>
  );
};

export default SettingsPage;