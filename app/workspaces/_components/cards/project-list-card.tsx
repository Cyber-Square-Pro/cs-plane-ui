import React from "react";
import { Link, LucideIcon, Pencil, Settings, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/*
  Author: Khadeeja Hiba on April 20th, 2024
  Purpose: Renders Project list for the user
  Props: 
    emoji - emoji to display
    projectName - name of the project
    backgroundImg - bg image to display 
    projectDesc - descrption of the project 
    identifier - unique identifier, 
    isStarred - boolean value to check if the project is starred or not
  Updated by: Mohammed Rifad on May 25th, 2024 - Added props
*/

interface Props {
  emoji?: LucideIcon;
  projectName: string;
  backgroundImg?: string;
  projectDesc: string;
  identifier: string;
  isStarred: boolean;
}

export const ProjectListCard: React.FC<Props> = (props) => {
  const {
    emoji: Emoji,
    projectName,
    backgroundImg,
    projectDesc,
    identifier,
    isStarred,
  } = props;

  return (
    <>
      <div className="m-1">
        <div className="border-2 w-96">
          <div
            className="h-36 bg-cover bg-center bg-[url('https://helios-i.mashable.com/imagery/articles/051DcIoBPaiqoZQwg7cetV5/images-1.fill.size_2000x1250.v1680266032.jpg')]">
            <button className="bg-white relative left-3 top-20  w-10 h-10 text-white font-bold  rounded">
              👍
            </button>
            <p className="relative left-20 -ml-4 top-10 text-white font-bold">
              {projectName}
            </p>
            <p className=" relative left-16 top-10 mt-0.5 text-xs text-white font-semibold">
              {identifier}
            </p>
            <div className="float-end mr-4 mt-2">
              <button className="bg-stone-500/25 pl-1 pr-1 mr-2 rounded">
                <Star
                  className={cn("text-[#DAD4D4] w-3.5", {
                    "fill-yellow-400": isStarred,
                  })}
                />
              </button>
              <button className="bg-stone-500/25 pl-1 pr-1 rounded">
                <Link className="text-[#DAD4D4] w-3.5" />
              </button>
            </div>
          </div>
          <div className="py-2 text-gray-700">{projectDesc}</div>

          <div className="flex flex-row h-5">
            <div className="w-3/6">
              <button className="bg-blue-800  text-white font-bold   px-2 rounded-full relative top-20  left-4">
                R
              </button>
            </div>
            <div className="w-3/6 ">
              <Settings className=" w-4 relative top-20 left-36 text-[#3f3a3a]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
