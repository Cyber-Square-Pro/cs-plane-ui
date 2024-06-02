import React, { FC } from "react";
import SidebarRoutes from "./sidebar-routes";

type Props = {
  workspaceSlug?: string;
  isDisabled?: boolean
};
const SideBar: FC<Props> = (props) => {
   
  const { workspaceSlug, isDisabled } = props;
 
  return (
    <>
      <SidebarRoutes dashboardLink = {workspaceSlug} isDisabled = {isDisabled}  />
    </>
  );
};

export default SideBar;
