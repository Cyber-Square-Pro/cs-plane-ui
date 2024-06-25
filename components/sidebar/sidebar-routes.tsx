"use client"
import React, { FC } from 'react'
import { LucideIcon } from 'lucide-react'
import SidebarItem from './sidebar-item'

interface Route{
  label: string,
  href: string,
  icon?: LucideIcon,
 
};

type Props = {
  itemLink?: string,
  isDisabled: boolean
}
const SidebarRoutes:FC<Props> = (props) => {
   
  const {itemLink, isDisabled} = props


     
  
    
  return (
    <div className={`flex flex-col w-full ${isDisabled ? 'pointer-events-none opacity-50' : ''}`}>
        {
            routes.map((route) => (
                <SidebarItem
                key = { route.href }
                icon = { route.icon }
                label = { route.label }
                href={`/workspaces/${itemLink}/${route.href}`}
                />
            ))
        }
    </div>
  )
}

export default SidebarRoutes