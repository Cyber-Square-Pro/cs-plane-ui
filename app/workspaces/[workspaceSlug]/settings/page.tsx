
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
      <div className="mt-5 flex">
        <div className="w-1/4 p-4 fixed">
          <span className="text-xs font-semibold mt-10 ml-5 text-slate-350">SETTINGS</span>
          <Sidebar routes={SettingsRouteList} onItemClick={handleItemClick} />
        </div>
        <div className="ml-1/4 w-3/4 p-4">
          {selectedItem.label === "Members" && <MembersPage />}
          {/* Add other pages based on selectedItem */}
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
