import React, { FC } from "react";
import SidebarRoutes from "./sidebar-routes";
import { RouteList, SettingsRouteList } from "@/constants/sidebar";

interface Props  {
  workspaceSlug?: string;
  isDisabled?: boolean;
  routes: Array<{ icon?: any, label: string, href: string }>;
  onItemClick: (label: string) => void;

};
const SideBar: FC<Props> = (props) => {

  const { workspaceSlug, isDisabled ,routes,onItemClick} = props;
 
  return (
    <>
      <SidebarRoutes dashboardLink={workspaceSlug} isDisabled = {isDisabled} routes = {routes} onItemClick={onItemClick}/>
    </>
  );
};

export default SideBar;
