import React from 'react'
import { PopoverContent } from '@nextui-org/react';
import  Link from 'next/link'
import { Check,MessageSquarePlus , Mails ,CircleUserRound , Settings , LogOut } from 'lucide-react';

const WorkspacePopover = () => {
 
  return (
    <PopoverContent>
      <div className="px-1 py-2 border-2 border-grey-500 bg-white">
        <div className="flex items-center text-sm text-slate-600 pl-2">user@gmail.com</div>
        <br />
        <div className="flex items-centre">
        <button className=" grid place-items-center overflow-hidden rounded bg-blue-500 text-white outline-none"
                        style={{ height: "24px", width: "24px"}}>F</button>
                        <span className="truncate text-base text-sm  font-medium text-slate-600 pl-2" >First_Project</span>
                        <div style={{ marginLeft: "70px" }}></div>
                        <Check />
        </div>
        <br/>
        

        <div className="flex items-center">
        <MessageSquarePlus />
          <span className="ml-2 text-sm max-w-prose text-slate-600">Create Workspace</span>
        </div>
        <br />
        <div className="flex items-center">
        <Mails />
          <span className="ml-2 text-sm max-w-prose text-slate-600">Workspace Invites</span>
        </div>
        <br />
        <div className="flex items-center">
          <CircleUserRound />
          <span className="ml-2 text-sm max-w-prose text-slate-600">View profile</span>
        </div>
        <br />
        <div className="flex items-center">
           <Settings />
            <span className="ml-2 text-sm max-w-prose text-slate-600">Settings</span>
        </div>
        <br />
        <hr />
        <div className="flex items-center">
          <LogOut color="red" />
          <span className="ml-2 text-sm max-w-prose text-red-500">Sign Out</span>
        </div>
      </div>
    </PopoverContent>
  );
};


export default WorkspacePopover;