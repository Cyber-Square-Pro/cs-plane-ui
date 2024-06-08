"use client";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import React, { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  buttonName: string;
};

const AllIssuesHeader: FC<Props> = (props) => {
  const { icon: HeaderIcon, title, buttonName } = props;
  return (
    <div className="relative z-[15] flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 border-b p-4 ">
      {/* display of current sidebar text and icons starts on left-side */}
      <div className="flex items-center gap-2 overflow-ellipsis whitespace-nowrap">
        {/* for icon  */}
        <div className=" flex flex-wrap items-center gap-2.5">
          <div className="flex cursor-default items-center gap-2 text-sm font-medium ">
            <div className="items-center justify-center overflow-hidden">
              <HeaderIcon className="h-4 w-4 text-slate-700" />
            </div>

            <div className="relative line-clamp-1 block max-w-[150px] overflow-hidden truncate text-slate-700">
              {title}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className={cn("border rounded-md ")}>
              <NavigationMenuTrigger className="group inline-flex h-[30px] ">
                Filter
              </NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="border rounded-md ">
              <NavigationMenuTrigger className="group inline-flex h-[30px] ">
                Display
              </NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button className="gap-2 h-[30px] text-[12px]">
          <Plus className="h-3 w-3" />
          {buttonName}
        </Button>
      </div>
    </div>
  );
};

export default AllIssuesHeader;
