import { LucideIcon } from "lucide-react";
import React from "react";

/*
  Author: Sreethu on May 23rd, 2024
  Purpose: Renders headers for workspace pages
  Props:
    icon - header icon (lucide react)
    title - display title
    optionList - optional list of items to display on the header.
                 for eg: dropdown, button, icon etc

*/

interface Props {
  icon: LucideIcon;
  title: string;
  optionList?: any[];
}


const DashboardHeader: React.FC<Props> = (props) => {
  const { icon: HeaderIcon, title, optionList } = props;

  return (
    <div className="w-full text-sm flex  justify-between items-center p-2">
      <div className="flex text-sm gap-1 items-center">
        <HeaderIcon height={20} />
        <span>{title}</span>
      </div>

      <div className="flex justify-end items-center p-2">
        {optionList && optionList.length > 0 && (
          <ul className="flex gap-2   justify-center items-center">
            {optionList.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
