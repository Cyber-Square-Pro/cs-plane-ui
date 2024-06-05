"use client"
import React, { FC } from "react";
import SidebarRoutes from "./sidebar-routes";
import { SettingsRouteList ,RouteList} from "@/constants/sidebar";


type Props = {
  dashboardLink?: string;
  isDisabled?: boolean

  };
const SideBar: FC<Props> = (props) => {
  const combinedRoutes = [...SettingsRouteList,...RouteList]
  const { dashboardLink, isDisabled } = props;
  return (
    <>
      <SidebarRoutes dashboardLink={dashboardLink} isDisabled = {isDisabled} routes = {combinedRoutes} />
    
    </>
  );
};

export default SideBar;
