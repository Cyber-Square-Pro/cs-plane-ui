import React, { FC } from "react";
import SidebarRoutes from "./sidebar-routes";
import { RouteList, SettingsRouteList } from "@/constants/sidebar";

type Props = {
  workspaceSlug?: string;
  isDisabled?: boolean
};
const SideBar: FC<Props> = (props) => {
  const combinedRoutes = [...SettingsRouteList,...RouteList]
  const { workspaceSlug, isDisabled } = props;
 
  return (
    <>
      <SidebarRoutes dashboardLink={workspaceSlug} isDisabled = {isDisabled} routes = {combinedRoutes} />
    </>
  );
};

export default SideBar;
