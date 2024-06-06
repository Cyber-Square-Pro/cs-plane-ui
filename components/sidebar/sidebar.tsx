import React, { FC } from "react";
import SidebarRoutes from "./sidebar-routes";
import { RouteList, SettingsRouteList } from "@/constants/sidebar";

interface Props  {
  workspaceSlug?: string;
  isDisabled?: boolean
  routes: Array<{ icon?: any, label: string, href: string }>
};
const SideBar: FC<Props> = (props) => {

  const { workspaceSlug, isDisabled ,routes} = props;
 
  return (
    <>
      <SidebarRoutes dashboardLink={workspaceSlug} isDisabled = {isDisabled} routes = {routes} />
    </>
  );
};

export default SideBar;
