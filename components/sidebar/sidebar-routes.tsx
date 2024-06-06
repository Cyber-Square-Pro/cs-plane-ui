"use client"
import React, { FC } from 'react'
import { LucideIcon } from 'lucide-react'
import SidebarItem from './sidebar-item'

interface Route{
  label: string,
  href: string,
  icon?: LucideIcon,
};

interface Props {
  dashboardLink?: string,
  isDisabled?: boolean,
  routes: Route[]
};

const SidebarRoutes:FC<Props> = (props) => {
   
  const {dashboardLink, isDisabled,routes} = props

    // const routes = RouteList

    if (dashboardLink) {
      const dashboardItem = routes.find((route) => route.label === 'Dashboard');
      if (dashboardItem) {
        dashboardItem.href = `/workspaces/${dashboardLink}`;
      }
    }
    
  return (
    <div className='flex flex-col w-full'>
        {
            routes.map((route) => (
                <SidebarItem
                key = { route.href }
                icon = { route.icon }
                label = { route.label }
                href = { route.href }
                />
            ))
        }
    </div>
  )
}

export default SidebarRoutes