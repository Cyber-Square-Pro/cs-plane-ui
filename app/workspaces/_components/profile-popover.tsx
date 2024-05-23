import React from 'react';
import Link from 'next/link';
import { PopoverContent } from '@nextui-org/react';
import { CircleUserRound, Settings, LogOut } from 'lucide-react';

const ProfilePopover: React.FC = () => {
  return (
    <PopoverContent>
      <div className="px-4 py-5 border-2 border-grey-500 bg-white">
        <div className="flex items-center text-sm text-slate-600">sreeuser@gmail.com</div>
        <br />

        <div className="flex items-center">
          <CircleUserRound />
          <span className="ml-2 text-sm max-w-prose text-slate-600">My activity</span>
        </div>
        <br />

      <div className="flex items-center">
        <Link href="/profile" passHref>
          <div className="flex items-center">
            <Settings />
            <span className="ml-2 text-sm max-w-prose text-slate-600">Settings</span>
          </div>
        </Link>
      </div>
       
        <br />
        <hr />
        <div className="flex items-center">
          <LogOut />
          <span className="ml-2 text-sm max-w-prose text-slate-600">Sign Out</span>
        </div>
      </div>
    </PopoverContent>
  );
};

export default ProfilePopover;
