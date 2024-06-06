"use client"
import React, { FC } from "react";
import SidebarRoutes from "./sidebar-routes";
import { SettingsRouteList ,RouteList} from "@/constants/sidebar";


interface Props {
  dashboardLink?: string;
type Props = {
  workspaceSlug?: string;
  isDisabled?: boolean

  };
const SideBar: FC<Props> = (props) => {
  const combinedRoutes = [...SettingsRouteList,...RouteList]
  const { dashboardLink, isDisabled } = props;
  const { workspaceSlug, isDisabled } = props;
  return (
    <>
      <SidebarRoutes dashboardLink={dashboardLink} isDisabled = {isDisabled} routes = {combinedRoutes} />
    
      <SidebarRoutes dashboardLink={workspaceSlug} isDisabled = {isDisabled}  />
    </>
  );
};

export default SideBar;
